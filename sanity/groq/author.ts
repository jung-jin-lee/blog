import { client } from '../lib/client';

export async function getMainAuthor() {
  return await client.fetch<Author>(`*[_type == "author" && isMain][0]`);
}

export async function getAuthors() {
  return await client.fetch<Author[]>(`*[_type == "author"]`, undefined, {
    cache: 'no-cache',
  });
}

interface Author {
  name: string;
  description: string;
  github: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  _updatedAt: string;
}
