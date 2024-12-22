import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center">
      <div className="text-center text-white p-8 backdrop-blur-sm bg-white/10 rounded-2xl">
        <h1 className="text-6xl font-bold mb-6 animate-fade-in">Crossword Puzzle</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Challenge your mind with our interactive crossword puzzles. 
          Perfect for learning new words and improving your vocabulary.
        </p>
        <Link 
          to="/game" 
          className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
        >
          Start Game
        </Link>
      </div>
    </div>
  );
}