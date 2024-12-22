import React from 'react';
import { WebsiteConfig } from '../../types/website';

interface Props {
  config: WebsiteConfig;
}

export function Preview({ config }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Preview</h2>
      <div className="border rounded-lg p-4" style={{ background: config.theme.background }}>
        <h1 style={{ color: config.theme.text }}>{config.title}</h1>
        <p style={{ color: config.theme.text }}>{config.description}</p>
        {config.pages.map((page, index) => (
          <div key={index} className="mt-4 p-2 border rounded">
            <h2 style={{ color: config.theme.text }}>{page.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}