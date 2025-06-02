import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../videos/flow.mp4';
import photo1 from '../images/star.png';
import photo2 from '../images/unfolding.png';
import './Allproject.css'; 

const Flow = ({ isDarkMode }) => {
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
      <h3 className="project-title">
            Flow
        </h3>
        <p className="year"> May 2025 </p>
            <p className="role">
            <a style={{color: isDarkMode ? 'white' : 'black' ,
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        textDecorationColor: '#FB88B4',}}   href="https://www.notion.so/sangyu-chen/Final-Project-Documentation-Sangyu-1e98a61f6bb7805b8514ca5b9762fea0" target="_blank" rel="noopener noreferrer">Individual Project &#x2197;</a>
            </p>


            <div className="video-container" style={{ width: '40%', paddingTop: '65%', margin: '0 auto'  }}>
                <video autoPlay loop muted>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
                A compilation of led patterns
            </p>
            <div className="project-description"> 
            Flow is a responsive light installation made from a string of LEDs mapped using MadMapper. It blends programmed visuals, real-time audio input, and live weather data to drive the movement and intensity of the light patterns. By combining the structured, electrical nature of LED circuitry with the dynamic, organic forces of wind and sound, the piece explores the tension and harmony between the natural and the synthetic.


                <br></br>
                <br></br>
            </div>


      </div>


    </div>
  );
};

export default Flow;