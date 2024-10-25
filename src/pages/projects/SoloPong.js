import React from 'react';
import { Link } from 'react-router-dom';
import video from '../videos/solopong-vid.mp4';
import prototype_video from '../videos/prototype.mp4';
import pong_vid from '../videos/pong-prototype.mp4';
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
        <p className="year"> October - December 2023 </p>
        <p className="collab">Collaborative work with Pien Shyu</p>
            <p className="role">

                <span className="underscore">My Role</span>: Circuit Design, Interaction Design & Arduino Programming
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
                <p>
                    Solo Pong is a performance-based installation that redefines the traditional
                    dynamics of a two-party table tennis event through programming, 
                    presenting a fully automated and predictable gameplay experience, which 
                    also stands as an exploration of the ironic converenge of technology and recreation. 
                </p>

                    <h4 className="section">Technical Breakdown</h4>
                    {/* It is developed using C++ with Arduino Nano 33 IoT, 
                    incorporating stepper motors and time-of-flight (ToF) sensors to automate the table tennis experience. 
                    The left paddle is initially positioned at the left end of the rail and moves to intercept the ball 
                    when the ToF sensor detects a distance of approximately 440-450 mm. 
                    After taking 4 steps, the paddle returns to its initial position. The right paddle starts at the right end of the rail, moves to meet the ball when the sensor detects the set distance, and then returns to its initial position after 4 steps. 
                    The ball itself oscillates along the rail, making 14 steps counterclockwise and 14 steps clockwise, creating an engaging and dynamic gameplay experience. */}

                    <div className="video-container" style={{ width: '85%', paddingTop: '30.25%', margin: '0 auto'}}>
                    <video autoPlay loop muted >
                        <source src={pong_vid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    </div>
                    <p className="caption">
                        Prototyping movements on a small scale
                    </p>

                    <p>Solo Pong is powered by three Arduino Nano 33 IoT boards, integrating three stepper motors, three motor drivers, and two Time-of-Flight (ToF) sensors to automate the table tennis experience. </p>

                    <p>Three Arduino Nano 33 IoT Boards each control a specific part of the system: one for the left paddle, one for the right paddle, and one for the ball. Each Arduino processes input from the ToF sensors and controls the movement of the corresponding stepper motors.</p>

                    <p>Three Stepper Motors and Motor Drivers manage the motion of the left paddle, right paddle, and ball. The left paddle starts at the left end of its rail and moves toward the ball when the ToF sensor detects a distance of 440-450 mm, completing 4 steps to intercept the ball and then returning to its initial position. The right paddle follows a similar process. The ball itself oscillates between the paddles, making 14 steps counterclockwise and 14 steps clockwise.</p>

                    <p>Two ToF Sensors detect the ball’s position and trigger paddle movement. Positioned to monitor the proximity of the ball to each paddle, they signal the Arduino when the ball enters the 440-450 mm range, initiating the paddle's movement.</p>

                    <h4 className="section">Interaction Design</h4>

                    <div className="video-container" style={{ width: '75%', paddingTop: '22.25%', margin: '0 auto'}}>
                    <video autoPlay loop muted >
                        <source src={prototype_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    
                </div>

                <p className="caption">
                A video demonstration of the interaction between the ping pong ball and two paddles, coded in p5.js
                </p>
                <p>
                Solo Pong reimagines table tennis as an automated performance, where the dynamics of play are dictated entirely by technology. 
                
                <p>In this installation, the ping pong ball moves along its predefined path without awareness of the paddles, while the paddles are acutely responsive to the ball’s position. This creates a unique interaction where the paddles anticipate the ball’s movements, leading to a seamless and engaging experience for spectators.</p>

                The p5.js prototype demo illustrates this relationship, showcasing the synchronized movements of the paddles as they react to the ball's trajectory. This installation invites viewers to reflect on the nature of interaction, emphasizing the contrast between the automation of gameplay and the unpredictability inherent in human participation. 
                    
                </p>

            </div>

            


      </div>


    </div>
  );
};

export default SoloPong;
