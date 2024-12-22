import React from 'react';
import { Page } from '../../types/website';

interface Props {
  pages: Page[];
  onChange: (pages: Page[]) => void;
}

export function PagesForm({ pages, onChange }: Props) {
  const addPage = () => {
    onChange([
      ...pages,
      {
        title: '',
        path: '',
        sections: []
      }
    ]);
  };

  const updatePage = (index: number, updatedPage: Page) => {
    const newPages = [...pages];
    newPages[index] = updatedPage;
    onChange(newPages);
  };

  const removePage = (index: number) => {
    onChange(pages.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Pages</h3>
        <button
          type="button"
          onClick={addPage}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Add Page
        </button>
      </div>
      {pages.map((page, index) => (
        <div key={index} className="space-y-3 p-4 border rounded-md">
          <div>
            <label className="block text-sm font-medium text-gray-700">Page Title</label>
            <input
              type="text"
              value={page.title}
              onChange={(e) => updatePage(index, { ...page, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Path</label>
            <input
              type="text"
              value={page.path}
              onChange={(e) => updatePage(index, { ...page, path: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={() => removePage(index)}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}