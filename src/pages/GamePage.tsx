import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CrosswordGrid } from '../components/game/CrosswordGrid';

export function GamePage() {
  const navigate = useNavigate();

  const handleRetire = () => {
    if (window.confirm('Are you sure you want to retire from this game?')) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-900">Alphabet Quiz</h1>
          <button
            onClick={handleRetire}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Retire Game
          </button>
        </div>
        <p className="mb-6 text-indigo-700">
          Fill in the missing letters in the grid. Each cell should contain a letter from A to Z.
        </p>
        <CrosswordGrid />
      </div>
    </div>
  );
}