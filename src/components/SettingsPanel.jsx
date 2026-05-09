import React, { useState } from 'react';
import {
  XMarkIcon,
  BellIcon,
  PaletteIcon,
  LockClosedIcon,
  LanguageIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Button from './ui/Button';

export default function SettingsPanel({ isOpen = false, onClose = () => {} }) {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'dark',
    language: 'en',
    autoScroll: true,
    fontSize: 'md',
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-lg shadow-xl max-w-md w-full mx-4 max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
          <h2 className="text-xl font-semibold text-white">Settings</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Notifications */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BellIcon className="w-5 h-5 text-blue-400" />
                <label className="font-medium text-white">Notifications</label>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={() => handleToggle('notifications')}
                className="w-4 h-4 rounded"
              />
            </div>
            <p className="text-xs text-slate-400">
              Receive alerts for new messages
            </p>
          </div>

          {/* Theme */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <PaletteIcon className="w-5 h-5 text-purple-400" />
              <label className="font-medium text-white">Theme</label>
            </div>
            <select
              value={settings.theme}
              onChange={(e) => handleChange('theme', e.target.value)}
              className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 text-sm"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LanguageIcon className="w-5 h-5 text-green-400" />
              <label className="font-medium text-white">Language</label>
            </div>
            <select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 text-sm"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
            </select>
          </div>

          {/* Font Size */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <SparklesIcon className="w-5 h-5 text-yellow-400" />
              <label className="font-medium text-white">Font Size</label>
            </div>
            <select
              value={settings.fontSize}
              onChange={(e) => handleChange('fontSize', e.target.value)}
              className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 text-sm"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          {/* Auto Scroll */}
          <div>
            <div className="flex items-center justify-between">
              <label className="font-medium text-white">Auto-scroll</label>
              <input
                type="checkbox"
                checked={settings.autoScroll}
                onChange={() => handleToggle('autoScroll')}
                className="w-4 h-4 rounded"
              />
            </div>
            <p className="text-xs text-slate-400">
              Scroll to latest message automatically
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-700 flex gap-3">
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" className="flex-1" onClick={onClose}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
