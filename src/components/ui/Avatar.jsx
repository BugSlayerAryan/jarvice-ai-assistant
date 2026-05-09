import React from 'react';
import clsx from 'clsx';

export default function Avatar({
  src,
  alt = 'User',
  initials = 'AI',
  size = 'md',
  className,
  icon: Icon,
  status,
}) {
  const sizes = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-14 h-14 text-xl',
  };

  return (
    <div className={clsx('relative inline-block', className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={clsx(
            'rounded-full object-cover bg-linear-to-br from-green-600 to-green-400',
            sizes[size]
          )}
        />
      ) : (
        <div
          className={clsx(
            'rounded-full bg-linear-to-br from-green-600 to-green-400 flex items-center justify-center font-semibold text-white',
            sizes[size]
          )}
        >
          {Icon ? (
            <Icon className={clsx(
              'text-white',
              size === 'xs' ? 'w-4 h-4' : size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'
            )} />
          ) : (
            initials
          )}
        </div>
      )}
      {status && (
        <div className={clsx(
          'absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-900',
          status === 'online' ? 'bg-green-500' : 'bg-slate-500'
        )} />
      )}
    </div>
  );
}
