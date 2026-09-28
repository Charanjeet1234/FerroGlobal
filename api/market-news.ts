/**
 * Vercel serverless function: GET /api/market-news
 *
 * Pulls industry headlines from one or more RSS/Atom feeds, keeps the ones
 * relevant to ferro alloys and steel, and returns them newest first.
 * The response is cached on Vercel's CDN for an hour, so the list refreshes
 * itself without a cron job and the upstream feeds are hit at most ~24x a day.
 *
 * Feeds are configured with the MARKET_NEWS_FEEDS environment variable
 * (comma-separated URLs). If it is not set, DEFAULT_FEEDS is used.
 */
import { XMLParser } from 'fast-xml-parser';

export interface MarketHeadline {
  id: string;
  title: string;
  url: string;
  source: string;
  publishedAt: string; // ISO 8601
}

const DEFAULT_FEEDS = [
  'https://news.google.com/rss/search?q=ferroalloy+OR+ferrochrome+OR+ferromanganese+OR+ferrosilicon+OR+%22silico+manganese%22+when:30d&hl=en&gl=US&ceid=US:en',
];

// Only used for feeds that aren't already topic-specific.
const RELEVANCE_KEYWORDS = [
  'ferro', 'manganese', 'chrome', 'chromium', 'silicon', 'alloy', 'steel',
  'stainless', 'molybdenum', 'vanadium', 'scrap', 'iron ore', 'eaf', 'smelter',
];

const MAX_ITEMS = 12;
const MAX_AGE_DAYS = 45;
const FETCH_TIMEOUT_MS = 8000;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
});

const asArray = <T,>(value: T | T[] | undefined): T[] =>
  value === undefined ? [] : Array.isArray(value) ? value : [value];

const textOf = (value: unknown): string => {
  if (value == null) return '';
  if (typeof value === 'string' || typeof value === 'number') return String(value);
  if (typeof value === 'object' && '#text' in (value as Record<string, unknown>)) {
    return String((value as Record<string, unknown>)['#text']);
  }
  return '';
};

const clean = (value: string): string =>
  value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

const hostOf = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

const isSafeUrl = (url: string): boolean => /^https?:\/\//i.test(url);

async function fetchFeed(feedUrl: string): Promise<MarketHeadline[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(feedUrl, {
      signal: controller.signal,
      headers: { 'User-Agent': 'FerroGlobalNewsBot/1.0 (+https://ferroglobal.ae)' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = parser.parse(await res.text());
    const topicSpecific = feedUrl.includes('news.google.com/rss/search');
    const feedTitle = clean(textOf(xml?.rss?.channel?.title ?? xml?.feed?.title));

    // RSS 2.0
    const rssItems = asArray(xml?.rss?.channel?.item).map((item: any) => {
      let title = clean(textOf(item.title));
      const sourceName = clean(textOf(item.source));
      // Google News appends " - Publisher" to titles; the publisher is in <source>.
      if (sourceName && title.endsWith(` - ${sourceName}`)) {
        title = title.slice(0, -(sourceName.length + 3));
      }
      const url = textOf(item.link).trim();
      return {
        title,
        url,
        source: sourceName || feedTitle || hostOf(url),
        date: textOf(item.pubDate ?? item['dc:date']),
      };
    });

    // Atom
    const atomItems = asArray(xml?.feed?.entry).map((entry: any) => {
      const links = asArray(entry.link);
      const link = links.find((l: any) => !l['@_rel'] || l['@_rel'] === 'alternate') ?? links[0];
      const url = typeof link === 'string' ? link : String(link?.['@_href'] ?? '');
      return {
        title: clean(textOf(entry.title)),
        url,
        source: feedTitle || hostOf(url),
        date: textOf(entry.published ?? entry.updated),
      };
    });

    const cutoff = Date.now() - MAX_AGE_DAYS * 86_400_000;

    return [...rssItems, ...atomItems]
      .filter((item) => item.title && isSafeUrl(item.url))
      .filter((item) => {
        if (topicSpecific) return true;
        const haystack = item.title.toLowerCase();
        return RELEVANCE_KEYWORDS.some((k) => haystack.includes(k));
      })
      .map((item) => {
        const time = Date.parse(item.date);
        return { ...item, time: Number.isNaN(time) ? 0 : time };
      })
      .filter((item) => item.time === 0 || item.time >= cutoff)
      .map((item) => ({
        id: item.url,
        title: item.title,
        url: item.url,
        source: item.source,
        publishedAt: item.time ? new Date(item.time).toISOString() : '',
      }));
  } finally {
    clearTimeout(timer);
  }
}

export async function GET(): Promise<Response> {
  const configured = (process.env.MARKET_NEWS_FEEDS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const feeds = configured.length > 0 ? configured : DEFAULT_FEEDS;

  const results = await Promise.allSettled(feeds.map(fetchFeed));
  const failed = results.filter((r) => r.status === 'rejected').length;

  const seenTitles = new Set<string>();
  const headlines = results
    .flatMap((r) => (r.status === 'fulfilled' ? r.value : []))
    .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))
    .filter((h) => {
      const key = h.title.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (seenTitles.has(key)) return false;
      seenTitles.add(key);
      return true;
    })
    .slice(0, MAX_ITEMS);

  const allFailed = failed === feeds.length;

  return new Response(
    JSON.stringify({ updatedAt: new Date().toISOString(), headlines }),
    {
      status: allFailed ? 502 : 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // Success: cache 1h at the edge, serve stale up to a day while refreshing.
        // Failure: cache briefly so a feed outage doesn't hammer upstream.
        'Cache-Control': allFailed
          ? 'public, s-maxage=300'
          : 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
      },
    },
  );
}
