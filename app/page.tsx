import Link from 'next/link';
import { Fragment } from 'react';
import { formatDate } from '@/lib/date';
import { getPosts } from '@/sanity/groq/post';
import Markdown from '@/components/markdown/Markdown';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full grid grid-cols-1 gap-8">
        {posts.length === 0 && <div>아직 글이 없습니다.</div>}
        {posts.map((post: any, index) => (
          <Fragment key={post._id}>
            {index > 0 && <hr className="divide-y" />}
            <article>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post._createdAt} className="text-gray-500">
                  {formatDate(post._createdAt)}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${post.slug.current}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <div className="mt-5 whitespace-pre-wrap line-clamp-3 text-sm leading-6 text-gray-600">
                  <Markdown text={post.description} />
                </div>
              </div>
            </article>
          </Fragment>
        ))}
      </div>
    </main>
  );
}
