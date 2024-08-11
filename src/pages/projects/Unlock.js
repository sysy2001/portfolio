import React from 'react';
import { Link } from 'react-router-dom';
import video from '../videos/unlock.mp4';
import photo1 from '../images/unlock-end.png';
import photo2 from '../images/unlock-search.png';
import './Allproject.css'; 



const Unlock = ({ isDarkMode }) => {
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
            Sketch Booth
        </h3>
        <p className="year"> 2024 </p>
            <p className="role">
            <a style={{color: isDarkMode ? 'white' : 'black' ,
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        textDecorationColor: '#FB88B4',}}  href="https://sangyu-chen.itch.io/unlock" target="_blank" rel="noopener noreferrer">Individual Project &#x2197;</a> <br></br>
            </p>

        <div className="media-container">
            <div className="video-container" style={{ paddingTop: '56.25%' }}>
                <video controls loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
             A clip for game play
            </p>

            <div className="project-description"> 
            Unlock is a point-and-click puzzle game where you play as a rookie detective. 
            Your task is to unlock a client's locker. 
            
                
                <br></br>
                <br></br>
                This game is built in Unity with a dialogue system in C#. 
                The pixel art for each objects are created in Piskel, integrated into the game. 
                Players interact using a mouse, a button, and a potentiometer on a Teensy4.0 board, controlling the locker’s combination.

                <br></br>
                <br></br>
            </div>
            
            <img className="photo" src={photo2} alt="sketch booth setup" />

            <p className="caption">
            Game play - investigating
            </p>

            <img className="photo" src={photo1} alt="sketch booth setup" />

            <p className="caption">
            Game play - ending
            </p>

        </div>
   
      </div>


    </div>
  );
};

export default Unlock;
