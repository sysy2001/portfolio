import React from 'react';
import { Link } from 'react-router-dom';
import video from '../videos/rice-vid.mp4';
import photo1 from '../images/rice-pic1.jpg';
import photo2 from '../images/rice-pic2.jpg';
import photo3 from '../images/controller.jpg';

const Rice = ({ isDarkMode }) => {
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
            RICE!!
        </h3>
        <p className="year">March - May 2024</p>
        <div className="show-container">
            <p className="show">Accepted for MagFest 2025, GDC alt ctrl 2025</p> 
        </div>


        <p className="collab">Collaborative work with Isabel Wu, Steve Sun and Max Sun</p>
            <p className="role">
            <a style={{color: isDarkMode ? 'white' : 'black' ,
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px',
                        textDecorationColor: '#FB88B4',}}  href="https://sangyu-chen.itch.io/rice" target="_blank" rel="noopener noreferrer">Project &#x2197;</a> | 
                        My Role: Game/Unity Development, C# programming <br></br>
            </p>

            <div className="media-container">
            <div className="video-container" style={{ width: '30%', paddingTop: '58%', margin: '0 auto'}}>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="caption">
             A clip for gameplay 
            </p>

            <div className="project-description"> 
                Rice!! is an alt-control arcade game where players relive a childhood dinner experience, 
                trying to finish their meal quickly to get out and play. 
                The challenge is to feed the veggies to the family dog to speed things up, 
                while avoiding getting caught by your parents. If they get too angry, the game ends.
                    
                <br></br>
                <br></br>
                The game is developed in Unity and integrates physical computing elements to enhance gameplay. 
                The custom controller features a mechanical crank assembled from laser-cut and 3D-printed components, 
                paired with a rotary encoder and a Teensy microcontroller on a proto-board for input processing. 
                The joystick is designed with a plastic bowl mounted on top, 
                allowing players to control it by holding the bowl. 
                The cabinet is constructed from CNC-cut boards, finished with primer and paste wax, 
                and polished with vinyl prints.
                <br></br>
                <br></br>
            </div>

            <img className="photo" style={{ width: '60%',margin: '0 auto'  }} src={photo1} alt="sketch booth setup" />

            <p className="caption">
            RICE!! showcased at alt ctrl GDC 2025, San Francisco
            </p>

            <img className="photo" style={{ width: '60%',margin: '0 auto'  }} src={photo2} alt="sketch booth setup" />

            <p className="caption">
            Rice!! showcased at Wonderville, NYC
            </p>

            <img className="photo" style={{ width: '100%',margin: '0 auto'  }} src={photo3} alt="sketch booth setup" />

            <p className="caption">
            The chopstick and bowl controller
            </p>
        </div>

      </div>


    </div>
  );
};

export default Rice;