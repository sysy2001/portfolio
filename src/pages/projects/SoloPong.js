import React from 'react';
import { Link } from 'react-router-dom';
import video from '../videos/solopong-vid.mp4';
import './Allproject.css'; 

const SoloPong = ({ isDarkMode }) => {
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
            Solo Pong
        </h3>
        <p className="year"> 2023 </p>
            <p className="role">
                <span className="underscore">Project Role</span>: Circuit Design, Interaction Design & Arduino Programming
            </p>


            <div className="video-container">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
             A time lapse video of this installation on a ping pong table, during NYU ITP/IMA winter show 2023.
            </p>
            <div className="project-description"> 
                Solo Pong is a performance-based installation that redefines the traditional
                dynamics of a two-party table tennis event through programming, 
                presenting a fully automated and predictable gameplay experience, which 
                also stands as an exploration of the ironic converenge of technology and recreation. 
                <br></br>
                <br></br>
                It is developed using C++ with Arduino Nano 33 IoT, 
                incorporating stepper motors and time-of-flight (ToF) sensors to automate the table tennis experience. 
                The left paddle is initially positioned at the left end of the rail and moves to intercept the ball 
                when the ToF sensor detects a distance of approximately 440-450 mm. 
                After taking 4 steps, the paddle returns to its initial position. The right paddle starts at the right end of the rail, moves to meet the ball when the sensor detects the set distance, and then returns to its initial position after 4 steps. 
                The ball itself oscillates along the rail, making 14 steps counterclockwise and 14 steps clockwise, creating an engaging and dynamic gameplay experience.

                <br></br>
                <br></br>
            </div>



      </div>


    </div>
  );
};

export default SoloPong;
