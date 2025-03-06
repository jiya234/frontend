import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ toggleDarkMode, darkMode }) {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <nav>
        <NavLink to="/" className="block py-2">Dashboard</NavLink>
        <NavLink to="/users" className="block py-2">Users</NavLink>
        <NavLink to="/flagged" className="block py-2">Flagged Content</NavLink>
        <NavLink to="/analytics" className="block py-2">Analytics</NavLink>
        <NavLink to="/settings" className="block py-2">Settings</NavLink>
      </nav>
      <button onClick={toggleDarkMode} className="mt-5 bg-gray-700 p-2 rounded">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Sidebar;
