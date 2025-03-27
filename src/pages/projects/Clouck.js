import React from 'react';
import { Link } from 'react-router-dom';
import video from '../videos/clouck.mp4';
import video2 from '../videos/clouck-video-new.mp4';

import photo1 from '../images/clouck-pic1.jpg';
import photo2 from '../images/clouck-pic2.jpg';
import './Allproject.css'; 


const Clouck = ({ isDarkMode }) => {
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
            Clouck
        </h3>
        <p className="year"> Oct - Dec 2024 </p>
            <p className="role">
            <div className="show-container">
                <p className="show">Project exhibited at HSNY, Dec 2024 - Jan 2025</p> 
            </div>
            <p style={{color: isDarkMode ? 'white' : 'black' ,
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        textDecorationColor: '#FB88B4',}}  >Individual Project</p>
            </p>


            <div className="video-container" style={{ paddingTop: '75.25%' }}>
                <video controls loop muted>
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
            Motion of the clock.
            </p>

            

            

            <div className="project-description"> 
            Inspired by the serene motion of clouds and the joyful essence of a merry-go-round, Clouck reimagines timekeeping as a playful and poetic experience. It features a rotating puffy cloud with rain beads and an LED-based display for the hour and minute, replacing traditional clock hands.

            
                <h4 className="section">Technical Breakdown</h4>
                This project uses:<br></br>
                A stepper motor to drive the rotation of the cloud, completing one full rotation per minute.<br></br>
                A NeoPixel 60 ring for dynamic time visualization, where 5 LEDs represent the hour and 1 LED represents the minute.             <br></br>
                A Real-Time Clock (RTC) module and Arduino Nano 33 IoT for precise synchronization of movement and lighting.<br></br>
                A 3D-printed enclosure, modeled using Fusion 360.



                <br></br>
                <br></br>
            </div>

            <img className="photo1" style={{ width: '100%',margin: '0 auto'  }} src={photo1} alt="clock detail" />

            <p className="caption">
            One led mark the minute
            </p>
            <img className="photo2" style={{ width: '100%',margin: '0 auto'  }} src={photo2} alt="clock detail" />

            <p className="caption">
            Five leds mark the hour
            </p>

            <div className="video-container" style={{ paddingTop: '75.25%' }}>
                <video controls loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
            The clock changes from 11:05 to 11:06.
            </p>

      </div>


    </div>
  );
};

export default Clouck;