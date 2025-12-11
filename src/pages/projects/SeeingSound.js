import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../videos/sound1.mp4';
import video2 from '../videos/sound2.mp4';
import './Allproject.css'; 


const SeeingSound = ({ isDarkMode }) => {
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
            Seeing Sound
        </h3>
        <p className="year"> October - November 2023 </p>
            <p className="role">
            <a style={{color: isDarkMode ? 'white' : 'black' ,
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        textDecorationColor: '#FB88B4',}}  href="https://sysy2001.github.io/AudioVisual/" target="_blank" rel="noopener noreferrer">Individual Project &#x2197;</a> <br></br>
            </p>




            <div className="project-description"> 
                Seeing Sound is a web application designed to visualize sound through graphic notation, 
                inspired by John Cage's "Aria" and the aim of creating unique visual experiences for each piece of music, 
                departing from traditional western notation.
                
                <br></br>
                <br></br>

                <div className="video-container">
                <video autoPlay loop muted>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
             A clip from Étude Op. 10, No. 1 in C major by Chopin 
            </p>

            <div className="video-container">
                <video autoPlay loop muted>
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
             A clip from Fanfare for the Common Man by Aaron Copland and John Ryan
            </p>

                The audio visual implementation uses Fast Fourier Transform (FFT) and amplitude analysis to generate real-time visual feedback based on sound, coded in javascript.
                It initializes the canvas, sets up a dropzone for audio file uploads, 
                and creates particles that react to the volume of the audio, 
                with their size and movement dynamically adjusted. 
                The FFT data is used to draw animated curves representing the frequency spectrum, 
                with varying colors to enhance visual appeal. 
                The project includes starting and pausing for the audio, integrating audio data seamlessly into interactive visual displays.
                

                <br></br>
                <br></br>
            </div>
      </div>


    </div>
  );
};

export default SeeingSound;
