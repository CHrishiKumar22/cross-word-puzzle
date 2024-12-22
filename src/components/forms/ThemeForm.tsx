import React from 'react';
import { Theme } from '../../types/website';

interface Props {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export function ThemeForm({ theme, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Theme Settings</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Primary Color</label>
          <input
            type="color"
            value={theme.primary}
            onChange={(e) => onChange({ ...theme, primary: e.target.value })}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Secondary Color</label>
          <input
            type="color"
            value={theme.secondary}
            onChange={(e) => onChange({ ...theme, secondary: e.target.value })}
            className="mt-1 block w-full"
          />
        </div>
      </div>
    </div>
  );
}