import Sidebar from "./sidebar";
import { useState } from "react";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}>
      <div className="flex">
        <Sidebar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <main className="flex-1 p-10">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="p-5 bg-white dark:bg-gray-700 shadow rounded-lg">
              <h3 className="text-lg font-medium">Total Users</h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="p-5 bg-white dark:bg-gray-700 shadow rounded-lg">
              <h3 className="text-lg font-medium">Flagged Content</h3>
              <p className="text-3xl font-bold">567</p>
            </div>
            <div className="p-5 bg-white dark:bg-gray-700 shadow rounded-lg">
              <h3 className="text-lg font-medium">Banned Users</h3>
              <p className="text-3xl font-bold">42</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

