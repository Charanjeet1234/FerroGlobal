import { BlogPost } from '../types';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/**
 * Parses the date formats used in this project without relying on
 * browser-specific Date parsing: "September 7, 2026", "Sep 7, 2026"
 * and ISO "2026-09-07". Returns null for anything unrecognised.
 */
export const parsePostDate = (value: string): Date | null => {
  if (!value) return null;
  const trimmed = value.trim();

  const iso = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));

  const named = trimmed.match(/^([A-Za-z]+)\.?\s+(\d{1,2}),?\s+(\d{4})$/);
  if (named) {
    const month = MONTHS.indexOf(named[1].slice(0, 3).toLowerCase());
    if (month >= 0) return new Date(Number(named[3]), month, Number(named[2]));
  }
  return null;
};

/** Newest first. Posts with an unreadable date go to the end. */
export const sortPostsByDate = (posts: BlogPost[]): BlogPost[] =>
  [...posts].sort((a, b) => {
    const da = parsePostDate(a.publishedDate)?.getTime() ?? -Infinity;
    const db = parsePostDate(b.publishedDate)?.getTime() ?? -Infinity;
    return db - da;
  });

export const NEW_POST_WINDOW_DAYS = 14;

export const isRecentPost = (post: BlogPost, now: Date = new Date()): boolean => {
  const date = parsePostDate(post.publishedDate);
  if (!date) return false;
  const ageDays = (now.getTime() - date.getTime()) / 86_400_000;
  return ageDays >= 0 && ageDays <= NEW_POST_WINDOW_DAYS;
};

/** Converts a stored display date to the yyyy-mm-dd value an <input type="date"> needs. */
export const toDateInputValue = (value: string): string => {
  const date = parsePostDate(value);
  if (!date) return '';
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${mm}-${dd}`;
};

/** Converts yyyy-mm-dd from a date input to the site's display format, e.g. "September 7, 2026". */
export const fromDateInputValue = (value: string): string => {
  const date = parsePostDate(value);
  if (!date) return value;
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};
