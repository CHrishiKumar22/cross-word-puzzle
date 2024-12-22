import React from 'react';
import { useCrossword } from '../../hooks/useCrossword';

export function ClueList() {
  const { clues } = useCrossword();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3">Across</h2>
          <ul className="space-y-2">
            {clues.filter(c => c.direction === 'across').map(clue => (
              <li key={clue.number}>
                <span className="font-medium">{clue.number}.</span> {clue.text}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">Down</h2>
          <ul className="space-y-2">
            {clues.filter(c => c.direction === 'down').map(clue => (
              <li key={clue.number}>
                <span className="font-medium">{clue.number}.</span> {clue.text}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}