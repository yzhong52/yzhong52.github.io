export function dateFromSlug(slug: string): Date {
  const match = slug.match(/^(\d{4}-\d{2}-\d{2})/);
  if (match) {
    return new Date(match[1]);
  }
  return new Date();
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
