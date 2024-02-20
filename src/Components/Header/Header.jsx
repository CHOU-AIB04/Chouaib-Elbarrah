import React from 'react'
import { useState } from 'react'
import left_img from "../../picture/top-left-img.png"
const Header = () => {
  let [show,setshow] = useState({
    icon : "bi bi-list",
    dis : "hidden"
  })
  function handleclick(){
    setshow(prev=>{
        return{
          ...prev,
          icon : prev.icon === "bi bi-list" ? "bi bi-x" : "bi bi-list",
          dis : prev.dis === "hidden" ? "flex" : "hidden"
        }
    })
  }
  function click(){
    setshow(prev=>{
      return{
        ...prev,
        icon : "bi bi-list",
        dis : "hidden"
      }
    })
  }
  return (
    <>
    <header className='h-20 z-10 fixed w-full top-0'>
        <h1 className='text-[20px] absolute top-5 left-[15%] -translate-x-[15%] phone:text-[30px] text-white font-bold'><span className='text-red-700'>Chouaib</span> Elbarrah.</h1>
        <div className={`navbar:flex ${show.dis} w-32 navbar:w-auto items-center gap-6 rounded-md bg-red-900 navbar:bg-transparent flex-col navbar:flex-row absolute right-10 navbar:left-[75%] navbar:-translate-x-[75%] translate-x-0 top-14 navbar:top-6 z-50`}>
        <i className="bi bi-facebook text-white text-[20px] cursor-pointer transition-colors duration-500 hover:text-rose-950 hover:scale-105" onClick={click}></i>
        <i className="bi bi-instagram text-white text-[20px] cursor-pointer transition-colors duration-500 hover:text-rose-950 hover:scale-105" onClick={click}></i>
        <i className="bi bi-github text-white text-[20px] cursor-pointer transition-colors duration-500 hover:text-rose-950 hover:scale-105" onClick={click}></i>
        <i className="bi bi-linkedin text-white text-[20px] cursor-pointer transition-colors duration-500 hover:text-rose-950 hover:scale-105" onClick={click}></i>
        </div>
    </header>
    <i className={`${show.icon} text-white font-bold text-[25px] absolute right-8 top-5 visible navbar:hidden cursor-pointer z-50 transition-colors duration-500 hover:text-red-700`} onClick={handleclick}></i>
    <img src={left_img} alt="pic" className='absolute top-0 left-0 w-96 mix-blend-lighten' />
    </>
  )
}

export default Header