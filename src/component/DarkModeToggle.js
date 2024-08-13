import React from 'react';
import './DarkModeToggle.css';
import darkModeIcon from '../images/sun.png';
import lightModeIcon from '../images/moon.png';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className='button-container'>
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      <img
        src={isDarkMode ? darkModeIcon : lightModeIcon}
        alt="Toggle dark mode"
      />
    </button>
    </div>
  );
};

export default DarkModeToggle;
