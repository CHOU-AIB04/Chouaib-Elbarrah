import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    let style = {
        color : "maroon"
    }
  return (
    <nav className='fixed z-40 bottom-0 phone:top-1/2 phone:-translate-y-1/2  right-0 flex flex-row phone:flex-col color w-[80%] phone:w-12 mr-12 phone:mr-7 items-center h-12 phone:h-72 justify-around rounded-2xl'>
        <NavLink to="" style={({isActive})=> isActive ? style : {color : "white"}}><i className="bi bi-house-door-fill text-[19px]"></i></NavLink>
        <NavLink to="/about" style={({isActive})=> isActive ? style : {color : "white"}}><i className="bi bi-person-fill text-[19px]"></i></NavLink>
        <NavLink to="/Skils" style={({isActive})=> isActive ? style : {color : "white"}}><i className="bi bi-calendar2 text-[19px]"></i></NavLink>
        <NavLink to="/Work" style={({isActive})=> isActive ? style : {color : "white"}}><i className="bi bi-archive-fill text-[19px]"></i></NavLink>
        <NavLink to="/Contact" style={({isActive})=> isActive ? style : {color : "white"}}><i className="bi bi-chat-fill text-[19px]"></i></NavLink>
    </nav>
  )
}

export default Navbar