import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../videos/draggable-demo.mp4';
import video2 from '../videos/dots.mp4';
import video3 from '../videos/rain.mp4';
import video4 from '../videos/star-demo.mp4';
import photo1 from '../images/star.png';
import photo2 from '../images/unfolding.png';
import './Allproject.css'; 

const Readme = ({ isDarkMode }) => {
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
            README
        </h3>
        <p className="year"> February 2025 - ongoing </p>
            <p className="role">
            <p style={{color: isDarkMode ? 'white' : 'black' ,
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        textDecorationColor: '#FB88B4',}}   rel="noopener noreferrer">Individual Project</p>
            </p>


            <div className="video-container" style={{ width: '100%', paddingTop: '65%', margin: '0 auto'  }}>
                <video autoPlay loop muted>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
                Web Based Desktop Interface
            </p>
            <div className="project-description"> 
            README is an online interactive desktop that invites visitors into my personal archive, using gentle, text-based interactions to explore memory, sentimentality, and the intimacy of sharing stories in a space often kept private and unseen.


                <br></br>
                <br></br>
            </div>

            <h4 className="section">Unfolding texts as origami stars</h4>

            <img className="photo" style={{ width: '100%',margin: '0 auto'  }} src={photo1} alt="" />
            <p className="caption">
                Photo Album - a glass jar of origami stars
            </p>
            <img className="photo" style={{ width: '100%',margin: '0 auto'  }} src={photo2} alt="" />
            <p className="caption">
                Old photos
            </p>


            <div className="video-container" style={{ width: '100%', paddingTop: '65%', margin: '0 auto'  }}>
                <video autoPlay loop muted>
                    <source src={video4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
                Unfolding
            </p>
            <h4 className="section">Connecting texts as dots</h4>



            <div className="video-container" style={{ width: '100%', paddingTop: '65%', margin: '0 auto'  }}>
                <video autoPlay loop muted>
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <h4 className="section">Falling texts as rain</h4>

            <div className="video-container" style={{ width: '100%', paddingTop: '53%', margin: '0 auto'  }}>
                <video autoPlay loop muted>
                    <source src={video3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <br></br>

      </div>


    </div>
  );
};

export default Readme;