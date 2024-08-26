import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    let style = {
        color : "maroon"
    }
  return (
    <nav className='fixed z-40 bottom-5 phone:top-1/2 phone:-translate-y-1/2  right-0 flex flex-row phone:flex-col color sh w-[80%] phone:w-12 mr-12 phone:mr-7 items-center h-12 phone:h-72 justify-around rounded-2xl'>
        <NavLink to="/Chouaib-Elbarrah/" end style={({isActive})=> isActive ? style : {color : "black"}}><i className="bi bi-house-door-fill text-[19px]"></i></NavLink>
        <NavLink to="/Chouaib-Elbarrah/about" style={({isActive})=> isActive ? style : {color : "black"}}><i className="bi bi-person-fill text-[19px]"></i></NavLink>
        <NavLink to="/Chouaib-Elbarrah/Skils" style={({isActive})=> isActive ? style : {color : "black"}}><i className="bi bi-calendar2 text-[19px]"></i></NavLink>
        <NavLink to="/Chouaib-Elbarrah/Work" style={({isActive})=> isActive ? style : {color : "black"}}><i className="bi bi-archive-fill text-[19px]"></i></NavLink>
        <NavLink to="/Chouaib-Elbarrah/Contact" style={({isActive})=> isActive ? style : {color : "black"}}><i className="bi bi-chat-fill text-[19px]"></i></NavLink>
    </nav>
  )
}

export default Navbar