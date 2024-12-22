import React from 'react';
import { WebsiteConfig } from '../../types/website';
import { ThemeForm } from './ThemeForm';
import { PagesForm } from './PagesForm';

interface Props {
  config: WebsiteConfig;
  onChange: (config: WebsiteConfig) => void;
}

export function ConfigForm({ config, onChange }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Website Title</label>
          <input
            type="text"
            value={config.title}
            onChange={(e) => onChange({ ...config, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={config.description}
            onChange={(e) => onChange({ ...config, description: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <ThemeForm theme={config.theme} onChange={(theme) => onChange({ ...config, theme })} />
        <PagesForm pages={config.pages} onChange={(pages) => onChange({ ...config, pages })} />
      </div>
    </div>
  );
}