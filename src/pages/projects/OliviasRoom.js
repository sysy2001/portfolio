import React from 'react';
import { Link } from 'react-router-dom';
import video from '../videos/olivia-room.mp4';
import './Allproject.css'; 


const OliviasRoom = ({ isDarkMode }) => {
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
            Olivia's Room
        </h3>
        <p className="year"> November - December 2023 </p>
        <p className="collab">Collaborative work with Sonny Yan</p>
            <p className="role">
                <span className="underscore">My Role</span>: 3D Graphics Developer, Interaction Programmer
            </p>


            <div className="video-container">
                <video controls loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
             A video tour of Olivia's Room.
            </p>
            <div className="project-description"> 
            Olivia's Room is a digital isomatric room that explores the intersection of social media personas and real-life connections through a 3D representation. 
            Inspired by the shadow-based game "Shadowmatic," this project visualizes a character named Olivia, 
            who navigates the contrast between her social media presence and her desire for meaningful, real-world interactions. 
            The scene features a chain and ribbon, symbolizing the dual nature of social media, with shadows dynamically cast onto the walls of Olivia’s room. 
            
                <br></br>
                <br></br>
                It is developed with Three.js, which includes a dynamically animated 3D ribbon and a chain, 
                creating intricate shadows on the walls. 
                The project uses advanced lighting to enhance realism and contrasts social media personas,
                while interactive elements reveal narratives related to Olivia’s character when hovering over objects. 



                <br></br>
                <br></br>
            </div>




      </div>


    </div>
  );
};

export default OliviasRoom;
