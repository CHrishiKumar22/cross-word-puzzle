import { Observable } from '@nativescript/core';

export interface Cell {
  letter: string;
  isBlack: boolean;
  number?: number;
  across?: boolean;
  down?: boolean;
}

export interface Clue {
  number: number;
  clue: string;
  answer: string;
  direction: 'across' | 'down';
}

export class PuzzleModel extends Observable {
  private _grid: Cell[][];
  private _clues: Clue[];
  private _currentInput: string[][];
  private _size: number;

  constructor(size: number = 5) {
    super();
    this._size = size;
    this._grid = this.initializeGrid();
    this._clues = [];
    this._currentInput = Array(size).fill([]).map(() => Array(size).fill(''));
    this.createSamplePuzzle();
  }

  private initializeGrid(): Cell[][] {
    return Array(this._size).fill([]).map(() => 
      Array(this._size).fill(null).map(() => ({
        letter: '',
        isBlack: false
      }))
    );
  }

  private createSamplePuzzle() {
    // Sample 5x5 puzzle
    const words = [
      { word: 'HELLO', clue: 'A common greeting', direction: 'across', x: 0, y: 0 },
      { word: 'WORLD', clue: 'Earth and its inhabitants', direction: 'down', x: 2, y: 0 }
    ];

    let clueNumber = 1;
    words.forEach(({ word, clue, direction, x, y }) => {
      for (let i = 0; i < word.length; i++) {
        const cell = this._grid[direction === 'across' ? y : y + i][direction === 'across' ? x + i : x];
        cell.letter = word[i];
        if (i === 0) {
          cell.number = clueNumber;
          cell[direction] = true;
        }
      }

      this._clues.push({
        number: clueNumber,
        clue,
        answer: word,
        direction: direction as 'across' | 'down'
      });

      clueNumber++;
    });
  }

  get grid(): Cell[][] {
    return this._grid;
  }

  get clues(): Clue[] {
    return this._clues;
  }

  get currentInput(): string[][] {
    return this._currentInput;
  }

  setLetter(row: number, col: number, letter: string) {
    this._currentInput[row][col] = letter.toUpperCase();
    this.notifyPropertyChange('currentInput', this._currentInput);
  }

  checkSolution(): boolean {
    for (let i = 0; i < this._size; i++) {
      for (let j = 0; j < this._size; j++) {
        if (this._grid[i][j].letter && 
            this._grid[i][j].letter !== this._currentInput[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
}