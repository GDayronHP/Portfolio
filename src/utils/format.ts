/** Formats a Date or ISO string to a locale-aware month/year label. */
export function formatMonthYear(date: Date | string, locale = 'es'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
}

/** Formats a Date or ISO string to a short year string. */
export function formatYear(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.getFullYear().toString();
}

/** Truncates a string to `maxLength` characters and appends an ellipsis. */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}
