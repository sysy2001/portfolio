// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import SoloPong from './pages/projects/SoloPong';
import SeeingSound from './pages/projects/SeeingSound';
import SketchBooth from './pages/projects/SketchBooth';
import OliviasRoom from './pages/projects/OliviasRoom';
import Unlock from './pages/projects/Unlock';
import Dream from './pages/projects/Dream';
import Rice from './pages/projects/Rice';
import Pancake from './pages/projects/Pancake';
import Synth from './pages/projects/Synth';


import DarkModeToggle from './component/DarkModeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Router>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route path="/project" element={<Project isDarkMode={isDarkMode} />} />
          <Route path="/project/solo-pong" element={<SoloPong isDarkMode={isDarkMode} />} />
          <Route path="/project/seeing-sound" element={<SeeingSound isDarkMode={isDarkMode} />} />
          <Route path="/project/sketch-booth" element={<SketchBooth isDarkMode={isDarkMode} />} />
          <Route path="/project/olivias-room" element={<OliviasRoom isDarkMode={isDarkMode} />} />
          <Route path="/project/unlock" element={<Unlock isDarkMode={isDarkMode} />} />
          <Route path="/project/dream" element={<Dream isDarkMode={isDarkMode} />} />
          <Route path="/project/rice" element={<Rice isDarkMode={isDarkMode} />} />
          <Route path="/project/pancake" element={<Pancake isDarkMode={isDarkMode} />} />
          <Route path="/project/finger-synthesizer" element={<Synth isDarkMode={isDarkMode} />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
