'use client';

import React, { useState } from 'react';
import { TbClipboard, TbClipboardCheck } from 'react-icons/tb';

type Props = {
  content: string;
};

const CopyButton = ({ content }: Props) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => setCopied(false), 1_500);
  };
  return (
    <button
      className="bg-white rounded-lg p-2 text-2xl text-gray-600"
      onClick={onCopy}
    >
      {copied ? <TbClipboardCheck /> : <TbClipboard />}
    </button>
  );
};

export default CopyButton;
