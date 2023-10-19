'use client';

import { CopyToClipboard as ReactCopyToClipboard } from 'react-copy-to-clipboard';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useId, useState } from 'react';
import { Tooltip } from 'react-tooltip';

function CopyToClipboard({ text }: { text: string }) {
  const id = useId();
  const [isCopied, setIsCopied] = useState(false);

  return (
    <>
      <ReactCopyToClipboard
        text={text}
        onCopy={(_, result) => {
          if (result && !isCopied) {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 2000);
          }
        }}
      >
        <button
          data-tooltip-id={id}
          aria-label="복사 버튼"
          className="p-1 border border-md rounded-md border-black bg-white"
        >
          {!isCopied && <ClipboardIcon height={18} />}
          {isCopied && <CheckIcon color="green" height={18} />}
        </button>
      </ReactCopyToClipboard>
      <Tooltip
        id={id}
        content="복사되었습니다!"
        isOpen={isCopied}
        place="left"
      />
    </>
  );
}

export default CopyToClipboard;
