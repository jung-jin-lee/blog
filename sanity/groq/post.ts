import { client } from '../lib/client';

export async function getPosts() {
  return await client.fetch<Post[]>(
    `*[_type == "post" && defined(slug.current) && isPublic] | order(_createdAt desc)`,
    undefined,
    {
      cache: 'no-cache',
    }
  );
}

export async function getPost(slug: string) {
  return await client.fetch<Post>(
    `*[_type == "post" && isPublic && slug.current == $slug][0]`,
    {
      slug,
    },
    {
      cache: 'no-cache',
    }
  );
}

interface Post {
  _rev: string;
  _type: string;
  description: string;
  _id: string;
  title: string;
  _updatedAt: string;
  slug: Slug;
  _createdAt: string;
}

interface Slug {
  current: string;
  _type: string;
}
