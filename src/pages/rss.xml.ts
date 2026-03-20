import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { dateFromSlug } from '../lib/utils';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog'))
    .map((post) => ({
      ...post,
      date: post.data.date ?? dateFromSlug(post.id),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return rss({
    title: 'The Post Station',
    description: "Yuchen's personal webpage.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt ?? '',
      pubDate: post.date,
      link: `/posts/${post.id}/`,
    })),
  });
}
