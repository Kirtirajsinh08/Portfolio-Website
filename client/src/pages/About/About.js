import React from 'react'
import Image from '../../assets/images/MyPic.jpg'
import './About.css'

const About = () => {
  return (
    <>
        <div className='about'>
            <div className='row'>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                    <img src={Image} alt='Profile Picture' />
                </div>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                    <h1>ABOUT ME</h1>
                    <p>
                    Welcome to my portfolio! I'm a MERN Stack developer, Python programmer, and aspiring data analyst. With a deep passion for technology and problem-solving, I thrive on creating applications that blend functionality, performance, and intuitive design. My expertise lies in the MERN Stack, where I use MongoDB, Express.js, React, and Node.js to develop full-stack applications that are scalable, secure, and responsive.<br />
In addition to web development, I am advancing my skills in Python programming, where I enjoy automating tasks, data wrangling, and exploring machine learning. My interest in data analysis is driven by a desire to extract meaningful insights from raw data. As I delve into data analysis, I'm working on developing a solid foundation in data visualization, statistical analysis, and database management.<br />
I am currently seeking an internship opportunity where I can apply my technical skills, contribute to real-world projects, and gain hands-on experience in a collaborative team environment. I am a quick learner, adaptable, and eager to take on challenges that push me to grow as a developer and data enthusiast. I look forward to the chance to make an impact and contribute to a company's success while furthering my professional journey.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About