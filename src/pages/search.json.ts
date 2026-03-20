import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const blog = await getCollection('blog');
  const guitar = await getCollection('guitar');

  const entries = [
    ...blog.map((p) => ({
      title: p.data.title,
      slug: p.id,
      excerpt: p.data.excerpt ?? '',
      tags: p.data.tags,
      collection: 'blog' as const,
    })),
    ...guitar.map((p) => ({
      title: p.data.title,
      slug: p.id,
      excerpt: p.data.excerpt ?? '',
      tags: p.data.tags,
      collection: 'guitar' as const,
    })),
  ];

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  });
};
