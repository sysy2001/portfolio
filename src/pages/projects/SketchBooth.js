import React from 'react';
import { Link } from 'react-router-dom';
import video from '../videos/sketchbooth.mp4';
import photo from '../images/sketch2.jpg';
import './Allproject.css'; 


const SketchBooth = ({ isDarkMode }) => {
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
            Sketch Booth
        </h3>
        <p className="year"> March - May 2024 </p>
        <p className="collab">Collaborative work with Shun Huang and Iris Wu</p>
            <p className="role">
            <a style={{color: isDarkMode ? 'white' : 'black' ,
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        textDecorationColor: '#FB88B4',}}  href="https://github.com/sysy2001/sketch-booth" target="_blank" rel="noopener noreferrer">Project &#x2197;</a> | 
                        My Role: Web Development, Backend Development <br></br>
            </p>

        <div className="media-container">
            <div className="video-container" style={{ paddingTop: '56.25%' }}>
                <video controls loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
             A video tutorial for Sketch Booth 
            </p>

            <div className="project-description"> 
              Sketch Booth is a photo chatroom application that seeks to capture the sense of 'null' associated with Noh, a classical Japanese dance-drama, —a feeling of emptiness that allows room for the audience's imagination. 
              It juxtaposes this abstract concept with facial recognition technology, 
              exploring its role in personal identity, space, and social interaction. 
              Mirroring themes of normalization and anonymity, Sketch Booth also aims to prompt viewers to contemplate identity, space, and social interaction. 
              Through this approach, it encourages reflection on one's place in a rapidly evolving technological landscape and the impact of technology on individuals and society.
                
                <br></br>
                <br></br>
                Sketch Booth combines JavaScript, HTML/CSS, Node.js, and Socket.IO to enable users to take and share photos with real-time wiggle filters. 
                Utilizing MediaPipe Face Landmarker for dynamic filter effects, the application allows users to capture and apply filters to their images, 
                which are then stored and managed using a Nedb database. 
                Socket.IO facilitates live communication, ensuring that photos and chat history are updated and displayed across all connected users. 
                This integration of technologies creates an interactive and engaging photo-sharing experience.

                <br></br>
                <br></br>
            </div>

            <img className="photo" src={photo} alt="sketch booth setup" />

            <p className="caption">
            Sketch Booth at the NYU ITP/IMA Spring Show 2024, featuring sketches printed live using a thermal printer.
            </p>

        </div>
            
      </div>


    </div>
  );
};

export default SketchBooth;
