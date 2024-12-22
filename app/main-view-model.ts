import { Observable } from '@nativescript/core';
import { PuzzleModel, Clue } from './models/puzzle';

export class CrosswordViewModel extends Observable {
  private _puzzle: PuzzleModel;
  private _message: string;

  constructor() {
    super();
    this._puzzle = new PuzzleModel(5);
    this._message = '';
  }

  get grid() {
    return this._puzzle.grid;
  }

  get acrossClues() {
    return this._puzzle.clues.filter(clue => clue.direction === 'across');
  }

  get downClues() {
    return this._puzzle.clues.filter(clue => clue.direction === 'down');
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange('message', value);
    }
  }

  onCellTap(args: any) {
    const cell = args.object;
    cell.focus();
  }

  onTextChange(args: any) {
    const textField = args.object;
    const row = parseInt(textField.row);
    const col = parseInt(textField.col);
    this._puzzle.setLetter(row, col, textField.text);
  }

  checkSolution() {
    const isCorrect = this._puzzle.checkSolution();
    this.message = isCorrect ? 
      'Congratulations! You solved the puzzle!' : 
      'Keep trying! Some answers are incorrect.';
  }
}