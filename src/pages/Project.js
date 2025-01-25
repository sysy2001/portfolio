import React from 'react';
import './Project.css';
import Tag from '../component/Tag';
import { Link } from 'react-router-dom';
import SoloPongPreview from './images/solopong1.png';
import OliviasRoomPreview from './images/oliviasroom1.png';
import UnlockPreview from './images/unlock1.png';
import SketchboothPreview from './images/sketchbooth1.png';
import DreamsPreview from './images/dreams1.png';
import SeeingsoundPreview from './images/seeingsound1.png';
import RicePreview from './images/rice.jpg';
import PancakePreview from './images/pancake1.png';
import ClouckPreview from './images/clouck.jpg'

const Project = ({ isDarkMode }) => {
    
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
                {/* gallery layout reference: https://codepen.io/qq7886/pen/MypEvw */}
                <div className="masonry">

                    <Link to="/solo-pong" className="item_link">
                        <div className="item">
                            <img src={SoloPongPreview} alt="Solo Pong" />
                            <h3 className="item_title">Solo Pong</h3>
                            <div className="tags">
                                <Tag label="installation" />
                                <Tag label="arduino iot 33" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/sketch-booth" className="item_link">
                        <div className="item">
                            <img src={SketchboothPreview} alt="Sketch Booth" />
                            <h3 className="item_title">Sketch Booth</h3>
                            <div className="tags">
                                    <Tag label="web" />
                                    <Tag label="javascript" />
                                    <Tag label="node.js" />
                                    <Tag label="socket.io" />
                                    <Tag label="database" />
                                    
                            </div>
                        </div>

                    </Link>


                    <Link to="/unlock" className="item_link">
                        <div className="item">
                            <img src={UnlockPreview} alt="Unlock" />
                            <h3 className="item_title">Unlock</h3>
                            <div className="tags">
                                    <Tag label="game" />
                                    <Tag label="unity" />
                                    <Tag label="c#" />
                                    <Tag label="teensy" />
                                    <Tag label="2d art" />
                            </div>
                        </div>
                    </Link>

                    


                    <Link to="/olivias-room" className="item_link">
                        <div className="item">
                            <img src={OliviasRoomPreview} alt="Olivia's Room" />
                            <h3 className="item_title">Olivia's Room</h3>
                            <div className="tags">
                                    <Tag label="web" />
                                    <Tag label="three.js" />
                            </div>
                                    
                        </div>
                    
                    </Link>
                    

                    <Link to="/dream" className="item_link">
                        <div className="item">
                            <img src={DreamsPreview} alt="Dreams" />
                            <h3 className="item_title">Dream as they are DREAMS</h3>
                            <div className="tags">
                                    <Tag label="web" />
                                    <Tag label="tracery.js" />
                                    <Tag label="bindery.js" />
                                    <Tag label="generative text" />
                            </div>
                        </div>
                    </Link>

                    
                    <Link to="/rice" className="item_link">
                        <div className="item">
                            <img src={RicePreview} alt="Rice!!" />
                            <h3 className="item_title">RICE!!</h3>
                            <div className="tags">
                                    <Tag label="game" />
                                    <Tag label="unity" />
                                    <Tag label="c#" />
                                    <Tag label="teensy" />
                                    <Tag label="arcade" />
                                    <Tag label="alt ctrl" />
                            </div>
                        </div>

                    </Link>

                    

                    <Link to="/seeing-sound" className="item_link">
                        <div className="item">
                            <img src={SeeingsoundPreview} alt="Seeing Sound" />
                            <h3 className="item_title">Seeing Sound</h3>
                            <div className="tags">
                                    <Tag label="audio visualization" />
                                    <Tag label="web" />
                                    <Tag label="javascript" />
                            </div>
                        </div>
                    </Link>

                    
                    
                    
                    <Link to="/clouck" className="item_link">
                        <div className="item">
                            <img src={ClouckPreview} alt="A cloud clock" />
                            <h3 className="item_title">Clouck</h3>
                            <div className="tags">
                                    <Tag label="clock design" />
                                    <Tag label="Arduino iot 33" />
                                    <Tag label="LED" />
                            </div>
                        </div>
                    </Link>


                    <Link to="/pancake" className="item_link">
                        <div className="item">
                            <img src={PancakePreview} alt="Pancake!" />
                            <h3 className="item_title">Make your own Pancake</h3>
                            <div className="tags">
                                    <Tag label="web" />
                                    <Tag label="javascript" />
                                    <Tag label="2d art" />
                            </div>
                        </div>
                    </Link>


                    



                    
                </div>
            </div>
        </div>
    );
};

export default Project;
