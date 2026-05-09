import React from 'react';
import clsx from 'clsx';

export default function Input({
  placeholder = 'Type a message...',
  value,
  onChange,
  onKeyDown,
  disabled = false,
  icon: Icon,
  className,
  ...props
}) {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        className={clsx(
          'w-full bg-slate-700 text-white placeholder-slate-400',
          'border border-slate-600 rounded-lg px-4 py-3',
          'focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30',
          'transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
          Icon && 'pl-10',
          className
        )}
        {...props}
      />
    </div>
  );
}
