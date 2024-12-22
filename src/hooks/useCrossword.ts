import { useState } from 'react';
import { CrosswordCell } from '../types/game';

const alphabetGrid = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
  ['U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D'],
  ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
  ['O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X'],
  ['Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
  ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B'],
  ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
  ['M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']
];

const createInitialGrid = () => {
  const grid: CrosswordCell[][] = [];
  const hiddenCells = new Set();
  
  while (hiddenCells.size < 40) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    hiddenCells.add(`${row}-${col}`);
  }

  for (let i = 0; i < 10; i++) {
    grid[i] = [];
    for (let j = 0; j < 10; j++) {
      const isHidden = hiddenCells.has(`${i}-${j}`);
      grid[i][j] = {
        letter: isHidden ? '' : alphabetGrid[i][j],
        answer: alphabetGrid[i][j],
        isHidden,
        isBlack: false
      };
    }
  }
  
  return grid;
};

const initialGrid = createInitialGrid();

export function useCrossword() {
  const [grid, setGrid] = useState(initialGrid);
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null);

  const onCellChange = (row: number, col: number, value: string) => {
    const newGrid = [...grid];
    const cell = newGrid[row][col];
    if (cell.isHidden) {
      const upperValue = value.toUpperCase();
      cell.letter = upperValue;
      
      // Turn cell black if correct
      if (upperValue === cell.answer) {
        cell.isBlack = true;
      } else {
        cell.isBlack = false;
      }
      
      setGrid(newGrid);
    }
  };

  const checkAnswers = () => {
    let correct = 0;
    let total = 0;
    
    grid.forEach(row => {
      row.forEach(cell => {
        if (cell.isHidden) {
          total++;
          if (cell.letter === cell.answer) {
            correct++;
          }
        }
      });
    });
    
    return { correct, total };
  };

  const onCellFocus = (row: number, col: number) => {
    setSelectedCell([row, col]);
  };

  return {
    grid,
    selectedCell,
    onCellChange,
    onCellFocus,
    checkAnswers
  };
}