export interface CrosswordCell {
  letter: string;
  answer: string;
  isHidden: boolean;
  isBlack: boolean;
}

export interface Score {
  correct: number;
  total: number;
}