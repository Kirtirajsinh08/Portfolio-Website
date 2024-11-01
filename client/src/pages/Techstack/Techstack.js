import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
import { TechstackList } from '../../utils/TechstackList';
import './Techstack.css'

const Techstack = () => {
  return (
    <>
        <div className='container techstack'>
            <h1>TECHNOLOGY STACK</h1>
            <p><FaHandPointRight /> It Includes programming languages, frameworks, databases and development tools.</p>
            <div className='row'>
                { TechstackList.map((tech) => (
                    <div key={ tech._id } className='col-md-4'>
                        <div className='card m-2'>
                            <div className='card-content'>
                                <div className='card-body'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='align-self-center'>
                                           <tech.icon className='tech-icon' />
                                        </div>
                                        <div className='media-body'>
                                            <h5 className='overflow-hidden'>{tech.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    </>
  )
}

export default Techstack