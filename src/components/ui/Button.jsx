import React from 'react';
import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  disabled = false,
  className,
  ...props
}) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white border-slate-600 hover:border-slate-500',
    ghost: 'bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white border-transparent',
    danger: 'bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200',
        'border border-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}