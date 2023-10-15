'use client';

import {
  Prism,
  SyntaxHighlighterProps as PrismProps,
} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type SyntaxHighlighterProps = Omit<PrismProps, 'style'>;

function SyntaxHighlighter({ children, ...props }: SyntaxHighlighterProps) {
  return (
    <Prism {...props} style={vscDarkPlus}>
      {children}
    </Prism>
  );
}

export default SyntaxHighlighter;
