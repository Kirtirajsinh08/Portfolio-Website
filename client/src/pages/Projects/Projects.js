import React from 'react'
import I1 from '../../assets/images/1.png'
import I2 from '../../assets/images/2.jpeg'
import I3 from '../../assets/images/3.jpg'
import I4 from '../../assets/images/4.jpeg'
import I5 from '../../assets/images/5.jpeg'
import I6 from '../../assets/images/6.jpeg'
import I7 from '../../assets/images/7.jpg'
import I8 from '../../assets/images/8.jpg'
import I9 from '../../assets/images/9.jpg'
import { FcBookmark } from "react-icons/fc";
import './Projects.css'

const Projects = () => {
  return (
    <>
        <div className='container project'>
            <h1>PROJECTS</h1>
            <p>This section features a diverse range of projects built with the MERN Stack (MongoDB, Express.js, React, Node.js) and Django, 
            showcasing expertise in both frontend and backend development. The MERN Stack projects emphasize interactive and responsive web 
            applications, focusing on seamless user experiences and efficient data management. The Django projects demonstrate strong backend 
            capabilities, using Python to build secure, scalable systems with RESTful APIs and database integrations. Each project reflects a 
            commitment to delivering high-quality, user-centric solutions that address real-world needs, highlighting proficiency in full-stack
            development and modern web technologies.<br />
            NOTE:<FcBookmark /> Following projects are not yet deployed.</p>

            <div className='row' id='ads'>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>MERN Stack</span>
                            <img src={ I1 } alt='Project 1'/>
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>MongoDB</span>
                            <span className='card-detail-badge'>Express Js</span>
                            <span className='card-detail-badge'>React Js</span>
                            <span className='card-detail-badge'>Node Js</span>
                            <span className='card-detail-badge'>Bootstrap</span>
                        </div>
                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5>ShopSphere - Shopping Website</h5>
                            </div>
                            <div>
                                <a className='source-code-btn' target='_blank' href='https://github.com/Kirtirajsinh08/E-Commerce-App'>View Source Code</a>
                            </div>
                            <div>
                                <a className='live-project-btn' target='_blank' href='#'>View Live Project</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>MERN Stack</span>
                            <img src={ I2 } alt='Project 1'/>
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>MongoDB</span>
                            <span className='card-detail-badge'>Express Js</span>
                            <span className='card-detail-badge'>React Js</span>
                            <span className='card-detail-badge'>Node Js</span>
                            <span className='card-detail-badge'>Bootstrap</span>
                        </div>
                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5>Portfolio Website</h5>
                            </div>
                            <div>
                                <a className='source-code-btn' target='_blank' href='https://github.com/Kirtirajsinh08/Portfolio-Website'>View Source Code</a>
                            </div>
                            <div>
                                <a className='live-project-btn' target='_blank' href='#'>View Live Project</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>MERN Stack <FcBookmark /></span>
                            <img src={ I3 } alt='Project 1'/>
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>MongoDB</span>
                            <span className='card-detail-badge'>Express Js</span>
                            <span className='card-detail-badge'>React Js</span>
                            <span className='card-detail-badge'>Node Js</span>
                            <span className='card-detail-badge'>Bootstrap</span>
                        </div>
                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5>StarBucks Clone</h5>
                            </div>
                            <div>
                                <a className='source-code-btn' target='_blank' href='https://github.com/Kirtirajsinh08/StarBucks-Clone'>View Source Code</a>
                            </div>
                            <div>
                                <a className='live-project-btn' target='_blank' href='#' title='Project Not Yet Deployed'>View Live Project</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 project-card'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack</span>
                            <img src={ I4 } alt='Project 1'/>
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>Django</span>
                            <span className='card-detail-badge'>React Js</span>
                            <span className='card-detail-badge'>Tailwind</span>
                            <span className='card-detail-badge'>Typescript</span>
                        </div>
                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5>SkillFusion - Learning Platform</h5>
                            </div>
                            <div>
                                <a className='source-code-btn' target='_blank' href='https://github.com/PremModhaOfficial/skill-fusion'>View Source Code</a>
                            </div>
                            <div>
                                <a className='live-project-btn' target='_blank' href='#'>View Live Project</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 project-card'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack <FcBookmark /></span>
                            <img src={ I5 } alt='Project 1'/>
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>Django</span>
                            <span className='card-detail-badge'>React Js</span>
                            <span className='card-detail-badge'>Tailwind</span>
                            <span className='card-detail-badge'>Javascript</span>
                        </div>
                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5>RideWave - Cab Booking Website</h5>
                            </div>
                            <div>
                                <a className='source-code-btn' target='_blank' href='https://github.com/Kirtirajsinh08/Uber'>View Source Code</a>
                            </div>
                            <div>
                                <a className='live-project-btn' target='_blank' href='#' title='Project Not Yet Deployed'>View Live Project</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 project-card'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Frontend</span>
                            <img src={ I7 } alt='Project 1'/>
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>HTML</span>
                            <span className='card-detail-badge'>CSS</span>
                            <span className='card-detail-badge'>Javascript</span>
                        </div>
                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5>Amazon Clone</h5>
                            </div>
                            <div>
                                <a className='source-code-btn' target='_blank' href='https://github.com/jay-badgujar/amazon-clone'>View Source Code</a>
                            </div>
                            <div>
                                <a className='live-project-btn' target='_blank' href='#'>View Live Project</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 project-card'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Frontend <FcBookmark /></span>
                            <img src={ I6 } alt='Project 1'/>
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>HTML</span>
                            <span className='card-detail-badge'>CSS</span>
                            <span className='card-detail-badge'>Javascript</span>
                            <span className='card-detail-badge'>Bootstrap</span>
                        </div>
                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5>LifeCare Hospitals</h5>
                            </div>
                            <div>
                                <a className='source-code-btn' target='_blank' href='https://github.com/Kirtirajsinh08/LifeCare-Hospitals'>View Source Code</a>
                            </div>
                            <div>
                                <a className='live-project-btn' target='_blank' href='#' title='Project Not Yet Deployed'>View Live Project</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 project-card'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Python - Console <FcBookmark /></span>
                            <img src={ I8 } alt='Project 1'/>
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>Python</span>
                            <span className='card-detail-badge'>JDBC Connectivity</span>
                        </div>
                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5>Shop 24/7 - Mobile Shopping App</h5>
                            </div>
                            <div>
                                <a className='source-code-btn' target='_blank' href='https://github.com/jay-badgujar/Mobile-Shopping-App'>View Source Code</a>
                            </div>
                            <div>
                                <a className='live-project-btn' target='_blank' href='#' title='Project Not Yet Deployed'>View Live Project</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 project-card'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Python - Console <FcBookmark /></span>
                            <img src={ I9 } alt='Project 1'/>
                        </div>
                        <div className='card-image-overly'>
                            <span className='card-detail-badge'>Python</span>
                            <span className='card-detail-badge'>JDBC Connectivity</span>
                        </div>
                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5>Railway Ticket Reservation</h5>
                            </div>
                            <div>
                                <a className='source-code-btn' target='_blank' href='#'>View Source Code</a>
                            </div>
                            <div>
                                <a className='live-project-btn' target='_blank' href='#' title='Project Not Yet Deployed'>View Live Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects