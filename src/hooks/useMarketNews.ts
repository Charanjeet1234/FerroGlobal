import { useEffect, useState } from 'react';

export interface MarketHeadline {
  id: string;
  title: string;
  url: string;
  source: string;
  publishedAt: string;
}

type Status = 'loading' | 'ready' | 'error';

/**
 * Loads live industry headlines from /api/market-news (a Vercel function).
 * Returns status 'error' when the endpoint is missing or fails, e.g. under
 * plain `npm run dev`, so callers can simply hide the block.
 */
export const useMarketNews = () => {
  const [headlines, setHeadlines] = useState<MarketHeadline[]>([]);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/market-news', { signal: controller.signal })
      .then(async (res) => {
        const type = res.headers.get('content-type') ?? '';
        if (!res.ok || !type.includes('application/json')) throw new Error('unavailable');
        const data = await res.json();
        const list = Array.isArray(data?.headlines) ? (data.headlines as MarketHeadline[]) : [];
        setHeadlines(list);
        setStatus(list.length > 0 ? 'ready' : 'error');
      })
      .catch((err) => {
        if (err?.name !== 'AbortError') setStatus('error');
      });
    return () => controller.abort();
  }, []);

  return { headlines, status };
};

export const formatRelativeDate = (iso: string, now: Date = new Date()): string => {
  const time = Date.parse(iso);
  if (Number.isNaN(time)) return '';
  const diffHours = Math.floor((now.getTime() - time) / 3_600_000);
  if (diffHours < 1) return 'Just now';
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return new Date(time).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
