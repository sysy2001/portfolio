import React from 'react';
import { Link } from 'react-router-dom';
import video from '../videos/journal.mp4';
import './Allproject.css'; 


const Dream = ({ isDarkMode }) => {
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
            <p>© 2024 Sangyu Chen</p>
        </footer>
      </span>
      </div>
      <div className="right-column">
      <h3 className="project-title">
            Dream as they are DREAMS
        </h3>
        <p className="year"> April - May 2024 </p>
            <p className="role">
            <a style={{color: isDarkMode ? 'white' : 'black' ,
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        textDecorationColor: '#FB88B4',}}  href="https://sangyu-chen.itch.io/dreamjournal" target="_blank" rel="noopener noreferrer">Individual Project &#x2197;</a>
            </p>


            <div className="video-container" style={{ paddingTop: '56.25%' }}>
                <video controls loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
             Flipping through the generated journal
            </p>
            <div className="project-description"> 
            Dream as they are DREAMS is a generated journal entry, inspired by vivid and often anxious dreams that leave lingering emotions upon waking. 
            The generated entries blend memories of familiar locations, imagined dialogues with dream characters, and nonsensical statements, 
            reflecting the surreal and fragmented nature of dreams.

            
                <br></br>
                <br></br>
                This project is coded using tracery.js to generate dynamic text based on predefined structures and patterns. 
                To present the content in a book-like format, bindery.js is employed, allowing the journal entries to be displayed in a visually structured format. 



                <br></br>
                <br></br>
            </div>


      </div>


    </div>
  );
};

export default Dream;