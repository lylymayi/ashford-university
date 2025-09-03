import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ changed to HashRouter
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : ''}>
      <Router>
        <Navbar />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
