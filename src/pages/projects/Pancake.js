import React from 'react';
import { Link } from 'react-router-dom';
import video from '../videos/pancake.mp4';
import './Allproject.css'; 

const Pancake = ({ isDarkMode }) => {
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
            Make your OWN pancake
        </h3>
        <p className="year"> February 2024 </p>
            <p className="role">
            <a style={{color: isDarkMode ? 'white' : 'black' ,
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        textDecorationColor: '#FB88B4',}}  href="https://mixand-match-sangyuc2001.replit.app/" target="_blank" rel="noopener noreferrer">Individual Project &#x2197;</a>
            </p>


            <div className="video-container" style={{ width: '60%', paddingTop: '65%', margin: '0 auto'  }}>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
                Makin' Pancake!
            </p>
            <div className="project-description"> 
            Make Your Own Pancake is a mobile-friendly web application that allows users to craft personalized pancake. 
            Developed using HTML, CSS, and JavaScript, it offers an intuitive interface for selecting ingredients and toppings to create custom pancakes. 
            Art assets were designed in Procreate.


                <br></br>
                <br></br>
            </div>

      </div>


    </div>
  );
};

export default Pancake;