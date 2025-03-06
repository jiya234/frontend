import React from "react";
import { Sun, Moon } from "lucide-react";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button onClick={toggleDarkMode} className="p-2 border rounded">
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}

