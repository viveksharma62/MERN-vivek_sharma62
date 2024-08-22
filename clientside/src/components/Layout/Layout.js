import React from 'react'
import Home from '../../pages/Home/Home';
import { IoMdArrowDropleft ,IoMdArrowDropright } from "react-icons/io";





import './Layout.css';
import { useState } from 'react';
import Menus from '../Menus/Menus';

const Layout = () => {

    const [toggle , setToggle] = useState(true)

    //change toggle
    const handleToggle = () =>{
        setToggle(!toggle);
    }

  return (
    <>
      <div className='sidebar-section'>
        <div className={toggle ?'sidebar-toggle sidebar' : 'sidebar'}>
            <div className='sidebar-toggle-icon'>


                <p onClick={handleToggle}>
                    {
                        toggle ? (
                        <IoMdArrowDropleft size={30}/>
                    ) :(
                    <IoMdArrowDropright size={30}/>
                ) }    
                </p>
            </div>
            <Menus toggle={toggle}/>
        </div>
        <div className='container'>
            <Home/>
        </div>
      </div>
    </>
  )
}

export default Layout;
