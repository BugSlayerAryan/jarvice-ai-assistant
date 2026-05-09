import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

export default function ChatHeader({ title = 'Chat' }) {
  return (
    <div className="px-4 lg:px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-semibold">
            AI
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 text-sm">{title}</h2>
            <p className="text-xs text-gray-500">Always happy to help</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
          <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
