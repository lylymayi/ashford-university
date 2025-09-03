import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="fixed bottom-5 right-5 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow hover:scale-105 transition"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
}

export default DarkModeToggle;