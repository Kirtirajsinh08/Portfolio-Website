import React from 'react'
import Typewriter from 'typewriter-effect';
import CV from '../../assets/docs/KP-CV.pdf'
import './Home.css'

const Home = () => {
  return (
    <>  
        <div className='container-fluid home-container'>
            <div className='container home-content'>
                <h1>Kirtirajsinh Parmar</h1>
                <h3>Hi 👋 I'm a</h3>
                <h2>
                    <Typewriter options={{ strings:["MERN Stack Developer!", "Python Programmer!", "Data Analyst(Beginner)!"], autoStart:true, loop:true}} />
                </h2>
                <div className='home-buttons'>
                    <button className='btn btn-hire'>Hire Me</button>
                    <a className='btn btn-cv' href={CV} download='Kirtirajsinh_Parmar_CV.pdf'>My Resume</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home