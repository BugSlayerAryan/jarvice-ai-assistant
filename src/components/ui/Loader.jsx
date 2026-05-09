import React from 'react';
import clsx from 'clsx';

export default function Loader({ size = 'md', className }) {
  const sizes = {
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3.5 w-3.5',
  };

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.18)]',
        className
      )}
    >
      <span className="text-[12px] font-medium text-white/55">Thinking</span>
      <span className="flex items-center gap-1">
        <span
          className={clsx('animate-bounce rounded-full bg-blue-400', sizes[size])}
          style={{ animationDelay: '0ms' }}
        />
        <span
          className={clsx('animate-bounce rounded-full bg-blue-300', sizes[size])}
          style={{ animationDelay: '120ms' }}
        />
        <span
          className={clsx('animate-bounce rounded-full bg-cyan-300', sizes[size])}
          style={{ animationDelay: '240ms' }}
        />
      </span>
    </div>
  );
}
