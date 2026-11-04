import { getCollection, type CollectionEntry } from 'astro:content';
import {
  getCategoryMeta,
  RETROSPECTIVE_CATEGORY,
  type CategoryName,
} from '@/config';

export type BlogPost = CollectionEntry<'blog'>;

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return posts.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export async function getTechnicalPosts() {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category !== RETROSPECTIVE_CATEGORY);
}

export async function getRetrospectivePosts() {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category === RETROSPECTIVE_CATEGORY);
}

export function getPostUrl(post: BlogPost) {
  const section = post.data.category === RETROSPECTIVE_CATEGORY ? 'retrospectives' : 'posts';
  return `/${section}/${post.data.slug}/`;
}

export function getCategoryUrl(category: CategoryName) {
  if (category === RETROSPECTIVE_CATEGORY) return '/retrospectives/';
  return `/categories/${getCategoryMeta(category).slug}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getReadingMinutes(post: BlogPost) {
  const body = post.body ?? '';
  const plainText = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[#>*_`\-[\]()]/g, ' ');
  const words = plainText.split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 220));
}
