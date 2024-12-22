import React, { useState } from 'react';
import { WebsiteConfig } from '../types/website';
import { ConfigForm } from './forms/ConfigForm';
import { Preview } from './preview/Preview';

export function Generator() {
  const [config, setConfig] = useState<WebsiteConfig>({
    title: '',
    description: '',
    pages: [],
    theme: {
      primary: '#3b82f6',
      secondary: '#10b981',
      background: '#ffffff',
      text: '#1f2937'
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Website Generator</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ConfigForm config={config} onChange={setConfig} />
          <Preview config={config} />
        </div>
      </div>
    </div>
  );
}