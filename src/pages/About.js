// pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; 

const About = ({ isDarkMode }) => {
  return (
    <div className="about-content-container">
      <div className="left-column">
        <div className="about-name-container">
            <Link to="/" className="home-link" style={{color: isDarkMode ? 'white' : 'black' }}>
                <h1>SANGYU CHEN</h1>
            </Link>
        </div>
        <div className="index-container">
          <Link to="/about" className="link" style={{color: isDarkMode ? 'white' : 'black' }}>About</Link>
          <Link to="/project" className="link" style={{color: isDarkMode ? 'white' : 'black' }}>Projects</Link>
        </div>
        <span className="index-container">
            <footer className="footer">
                <p>© 2025 Sangyu Chen</p>
            </footer>
        </span>
      </div>
      <div className="right-column">
        <h3 className="description">
          Sangyu Chen (b. 2001) is a creative technologist who crafts playful, interactive and narrative experiences through web development and games.
          <br />
          <br />
          She received her B.S. in Computer Science at Tufts University,
          and her M.P.S. from the Interactive Telecommunications Program (ITP) at NYU Tisch School of the Arts.
        </h3>

        <a className="social" style={{color: isDarkMode ? 'white' : 'black' }} href="mailto:sangyuc2001@gmail.com">email &#x2197;</a> 
        <br />
        <a className="social" style={{color: isDarkMode ? 'white' : 'black' }} href="https://www.linkedin.com/in/sangyu-chen/" target="_blank" rel="noopener noreferrer">linkedin &#x2197;</a>
        <br />
        <a className="social" style={{color: isDarkMode ? 'white' : 'black' }} href="https://github.com/sysy2001" target="_blank" rel="noopener noreferrer">github &#x2197;</a>

      </div>
    </div>
  );
};

export default About;
