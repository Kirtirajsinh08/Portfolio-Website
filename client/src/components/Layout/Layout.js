import React, { useState } from 'react'
import Home from '../../pages/Home/Home'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import './Layout.css'
import Menus from '../Menus/Menus';

const Layout = () => {

    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle( !toggle )
    }

  return (
    <>
        <div className='sidebar-section'>
            <div className={ toggle? 'sidebar-toggle sidebar' : 'sidebar'}>
                <div className='sidebar-toggle-icons'>
                    <p onClick={ handleToggle }>
                        {
                            toggle? (<FaChevronCircleLeft size={ 30 } />) : (<FaChevronCircleRight size={ 30 } />)
                        }
                    </p>
                </div>
                <Menus toggle = { toggle } />
            </div>
            
            <div className='container'>
                <Home />
            </div>
        </div>
    </>
  )
}

export default Layout