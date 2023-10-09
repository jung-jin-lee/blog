import { notFound } from 'next/navigation';
import { getPost } from '@/sanity/groq/post';

async function BlogDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPost(decodeURIComponent(slug));
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white p-6">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-8 whitespace-pre-wrap">
          {post.description}
        </p>
      </div>
    </div>
  );
}

export default BlogDetailPage;
