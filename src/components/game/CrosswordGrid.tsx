import React, { useState } from 'react';
import { useCrossword } from '../../hooks/useCrossword';

export function CrosswordGrid() {
  const { grid, onCellChange, onCellFocus, checkAnswers } = useCrossword();
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);

  const handleCheck = () => {
    setScore(checkAnswers());
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl overflow-x-auto backdrop-blur-sm bg-white/90">
        <div className="grid grid-cols-10 gap-1.5">
          {grid.map((row, i) => 
            row.map((cell, j) => (
              <div 
                key={`${i}-${j}`} 
                className={`relative aspect-square border-2 ${
                  cell.isHidden 
                    ? cell.isBlack
                      ? 'border-gray-800 bg-gray-800'
                      : 'border-indigo-300 bg-indigo-50'
                    : 'border-gray-200 bg-white'
                } rounded-md transition-all duration-300`}
              >
                <input
                  type="text"
                  maxLength={1}
                  className={`w-full h-full text-center text-lg font-medium uppercase 
                    bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500
                    ${cell.isBlack ? 'text-white' : 'text-gray-800'}`}
                  value={cell.letter}
                  onChange={(e) => onCellChange(i, j, e.target.value)}
                  onFocus={() => onCellFocus(i, j)}
                  disabled={!cell.isHidden}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-lg">
        <button
          onClick={handleCheck}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
        >
          Check Answers
        </button>
        
        {score && (
          <div className="text-xl font-semibold text-indigo-900">
            Score: <span className="text-indigo-600">{score.correct}</span> / {score.total} correct
          </div>
        )}
      </div>
    </div>
  );
}