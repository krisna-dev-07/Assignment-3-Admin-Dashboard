import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <div className="bg-indigo-500 dark:bg-gray-800 p-4 shadow flex justify-between items-center">
      <h1 className="text-xl">Admin Dashboard</h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;
