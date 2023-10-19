import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from '@/components/markdown/SyntaxHighlighter';
import CopyToClipboard from '@/components/common/CopyToClipboard';

function Markdown({ text }: { text: string | null | undefined }) {
  return (
    <ReactMarkdown
      className="mt-6 text-xl"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ref, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');

          return match ? (
            <div className="relative">
              <div className="absolute top-2 right-2">
                <CopyToClipboard text={String(children).replace(/\n$/, '')} />
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
      {text}
    </ReactMarkdown>
  );
}

export default Markdown;
