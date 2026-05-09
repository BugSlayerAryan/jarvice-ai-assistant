import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Avatar from '../ui/Avatar';
import Loader from '../ui/Loader';
import MessageBubble from '../MessageBubble';
import ChatHeader from '../chat/ChatHeader';
import ChatInput from '../chat/ChatInput';
import {
  SparklesIcon,
  PlusIcon,
  TrashIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

export default function ComponentShowcase() {
  const [selectedComponent, setSelectedComponent] = useState('buttons');

  const components = {
    buttons: {
      name: 'Buttons',
      component: () => (
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Primary Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button icon={PlusIcon}>Create</Button>
              <Button variant="ghost" icon={TrashIcon}>Delete</Button>
              <Button icon={SparklesIcon} icon={ArrowRightIcon}>Next</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Enabled</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      ),
    },

    inputs: {
      name: 'Inputs',
      component: () => (
        <div className="space-y-6 max-w-md">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Basic Input
            </label>
            <Input placeholder="Enter text..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Input with Icon
            </label>
            <Input
              placeholder="Search..."
              icon={MagnifyingGlassIcon}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Disabled Input
            </label>
            <Input placeholder="Disabled..." disabled />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Focused Input
            </label>
            <Input placeholder="Type to focus..." autoFocus />
          </div>
        </div>
      ),
    },

    avatars: {
      name: 'Avatars',
      component: () => (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sizes</h3>
            <div className="flex gap-4 items-center">
              <Avatar size="xs" initials="XS" />
              <Avatar size="sm" initials="SM" />
              <Avatar size="md" initials="MD" />
              <Avatar size="lg" initials="LG" />
              <Avatar size="xl" initials="XL" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">With Status</h3>
            <div className="flex gap-4">
              <Avatar initials="ON" status="online" />
              <Avatar initials="OFF" status="offline" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">With Icon</h3>
            <div className="flex gap-4">
              <Avatar icon={SparklesIcon} />
              <Avatar icon={PlusIcon} />
            </div>
          </div>
        </div>
      ),
    },

    loaders: {
      name: 'Loaders',
      component: () => (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white mb-4">Sizes</h3>
          <div className="flex gap-8 items-center">
            <Loader size="sm" />
            <Loader size="md" />
            <Loader size="lg" />
          </div>
        </div>
      ),
    },

    messages: {
      name: 'Messages',
      component: () => (
        <div className="space-y-4 max-w-2xl">
          <MessageBubble message="Hello! How can I help you today?" isUser={false} />
          <MessageBubble message="Can you explain React hooks?" isUser={true} />
          <MessageBubble
            message="React Hooks are functions that let you use state and other React features in functional components. The most common hooks are useState, useEffect, and useContext."
            isUser={false}
          />
        </div>
      ),
    },

    headers: {
      name: 'Chat Header',
      component: () => <ChatHeader title="AI Assistant" status="online" />,
    },
  };

  const current = components[selectedComponent];

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Component Showcase</h1>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 space-y-2">
            {Object.entries(components).map(([key, comp]) => (
              <button
                key={key}
                onClick={() => setSelectedComponent(key)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedComponent === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {comp.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-9">
            <div className="bg-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                {current.name}
              </h2>
              <current.component />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
