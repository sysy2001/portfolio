import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sketch from '../component/Sketch'; 
import Typewriter from '../component/TypeWriter'; 
import './Home.css';

const Home = ({ isDarkMode }) => {
  const [isSketchLoaded, setIsSketchLoaded] = useState(false);

  const handleSketchLoad = () => {
    setIsSketchLoaded(true);
  };

  return (
    <div className="content-container">
      <div className="name-container">
        <Link to="/" className="home-link" style={{color: isDarkMode ? 'white' : 'black' }}>
          <h1>SANGYU CHEN</h1>
        </Link>
      </div>
      <div className="index-container">
        <Link to="/about" className="link" style={{color: isDarkMode ? 'white' : 'black' }}>About</Link>
        <Link to="/project" className="link" style={{color: isDarkMode ? 'white' : 'black' }}>Projects</Link>
      </div>
      <Sketch onLoad={handleSketchLoad} />
      {isSketchLoaded && <Typewriter isDarkMode={isDarkMode} />}
      <span className="index-container">
        <footer className="footer" style={{color: isDarkMode ? 'white' : 'black' }}>
          <p>© 2024 Sangyu Chen</p>
        </footer>
      </span>
    </div>
  );
};

export default Home;
