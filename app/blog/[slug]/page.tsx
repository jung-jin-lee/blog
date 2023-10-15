import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPost } from '@/sanity/groq/post';
import SyntaxHighlighter from '@/components/markdown/SyntaxHighlighter';
import CopyToClipboard from '@/components/common/CopyToClipboard';

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
        <div>
          <Markdown
            className="mt-6 text-xl leading-8 whitespace-pre-wrap"
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children, className, node, ref, ...rest } = props;
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <div className="relative">
                    <div className="absolute top-2 right-2">
                      <CopyToClipboard
                        text={String(children).replace(/\n$/, '')}
                      />
                    </div>

                    <SyntaxHighlighter
                      {...rest}
                      customStyle={{
                        display: 'absolute',
                        left: 0,
                        top: 0,
                      }}
                      language={match[1]}
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.description}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
