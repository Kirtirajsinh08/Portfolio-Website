import React from 'react'
import image from '../../assets/images/MyPic.jpg'
import { FcAbout, FcContacts, FcEngineering, FcHome, FcOrgUnit, FcReadingEbook, FcVoicePresentation } from "react-icons/fc";
import './Menus.css'

const Menus = ({ toggle }) => {
  return (
    <>
    { toggle?
    (<>
        <div className='navbar-profile-pic'>
            <img src={ image } alt='Profile Pic' />
        </div>
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <FcHome />Home
                </div>

                <div className='nav-link'>
                    <FcAbout />About Me
                </div>

                <div className='nav-link'>
                    <FcEngineering />TechStack
                </div>

                <div className='nav-link'>
                    <FcReadingEbook />Education
                </div>

                <div className='nav-link'>
                    <FcOrgUnit />Projects
                </div>

                <div className='nav-link'>
                    <FcVoicePresentation />Testimonials
                </div>

                <div className='nav-link'>
                    <FcContacts />Contact
                </div>
            </div>
        </div>
    </>) : 
    (<>
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <FcHome title='Home' size={ 30 } /> 
                </div>

                <div className='nav-link'>
                    <FcAbout title='About Me' size={ 30 } /> 
                </div>

                <div className='nav-link'>
                    <FcEngineering title='TechStack' size={ 30 } />
                </div>

                <div className='nav-link'>
                    <FcReadingEbook title='Education' size={ 30 } />
                </div>

                <div className='nav-link'>
                    <FcOrgUnit title='Projects' size={ 30 } />
                </div>

                <div className='nav-link'>
                    <FcVoicePresentation title='Testimonials' size={ 30 } />
                </div>

                <div className='nav-link'>
                    <FcContacts title='Contact' size={ 30 } />
                </div>
            </div>
        </div>
    </>)}
        
    </>
  )
}

export default Menus