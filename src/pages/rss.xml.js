import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'c0redumpsec',
    description: 'Security research, tooling, writeups, and technical notes.',
    site: context.site,
    items: posts.map((post) => {
      const slug = post.id.replace(/\.(md|mdx)$/, '');

      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${slug}/`,
      };
    }),
  });
}
