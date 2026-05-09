import React from 'react';
import { CheckCircleIcon, ExclamationIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function Toast({ type = 'info', title, message, onClose, autoClose = 5000 }) {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  if (!isVisible) return null;

  const icons = {
    success: CheckCircleIcon,
    error: XCircleIcon,
    warning: ExclamationIcon,
    info: InformationCircleIcon,
  };

  const colors = {
    success: 'bg-green-500/10 border-green-500/30 text-green-400',
    error: 'bg-red-500/10 border-red-500/30 text-red-400',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  };

  const Icon = icons[type];

  return (
    <div
      className={clsx(
        'fixed bottom-4 right-4 p-4 rounded-lg border backdrop-blur-sm flex items-start gap-3 shadow-lg',
        'animate-in slide-in-from-bottom-2 fade-in duration-300',
        colors[type],
        'max-w-sm'
      )}
    >
      <Icon className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm">{title}</p>}
        {message && <p className="text-sm opacity-90">{message}</p>}
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        className="shrink-0 text-current hover:opacity-70 transition-opacity"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
