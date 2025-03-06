import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import FlaggedContent from "./pages/FlaggedContent";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}>
        <div className="flex">
          {/* ✅ Sidebar is included in the layout */}
          <Sidebar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />

          {/* ✅ Content Area */}
          <main className="flex-1 p-10">
            <Routes>
              <Route path="/" element={<h1 className="text-3xl font-bold">Dashboard</h1>} />
              <Route path="/users" element={<Users />} />
              <Route path="/flagged" element={<FlaggedContent />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
