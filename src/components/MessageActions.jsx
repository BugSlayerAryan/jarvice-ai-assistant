import React, { useState } from 'react';
import { CheckIcon, TrashIcon, ShareIcon, CopyIcon } from '@heroicons/react/24/outline';
import Button from './ui/Button';

export default function MessageActions({ messageId, onCopy, onDelete, onShare }) {
  const [, setShowMenu] = useState(false);

  const handleCopy = () => {
    onCopy?.(messageId);
    setShowMenu(false);
  };

  return (
    <div className="relative group">
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
        <Button
          variant="ghost"
          size="sm"
          icon={CopyIcon}
          onClick={handleCopy}
          title="Copy"
          className="px-2 py-1"
        />
        <Button
          variant="ghost"
          size="sm"
          icon={ShareIcon}
          onClick={() => onShare?.(messageId)}
          title="Share"
          className="px-2 py-1"
        />
        <Button
          variant="ghost"
          size="sm"
          icon={TrashIcon}
          onClick={() => onDelete?.(messageId)}
          title="Delete"
          className="px-2 py-1 hover:text-red-400"
        />
      </div>
    </div>
  );
}
