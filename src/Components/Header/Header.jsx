import React, { useEffect } from 'react'
import { useState } from 'react'
import left_img from "../../picture/top-left-img.png"
const Header = () => {
  let [showbg,setshowbg] = useState(false)

 
  useEffect(()=>{
    addEventListener('scroll',()=>{
      if (scrollY>0) {
        setshowbg(true)
      }else{
        setshowbg(false)
      }
    })
  },[scrollY])
  return (
    <>
    <header className={`h-20 z-10 fixed w-full flex justify-around items-center top-0 transition-colors duration-500 ${showbg ? "bg" : ""}`}>
        <h1 className='text-[20px]  phone:text-[30px] text-white font-bold'><span className='text-red-700'>Chouaib</span> Elbarrah.</h1>
        <div className={`grid grid-cols-4 gap-4 md:gap-7`}>
          {/* <i className="bi bi-facebook text-white text-[20px] cursor-pointer transition-colors duration-500 hover:text-rose-950 hover:scale-105"></i>
          <i className="bi bi-instagram text-white text-[20px] cursor-pointer transition-colors duration-500 hover:text-rose-950 hover:scale-105"></i> */}
          <a href="https://github.com/CHOU-AIB04" target="_blank">  <i className="bi bi-github text-white text-[20px] cursor-pointer transition-colors duration-500 hover:text-rose-950 hover:scale-105"></i></a>
          <a href="https://www.linkedin.com/in/chouaib-elbarrah-b22436285/" target='_blank'> <i className="bi bi-linkedin text-white text-[20px] cursor-pointer transition-colors duration-500 hover:text-rose-950 hover:scale-105"></i></a>
         
        </div>
    </header>

    </>
  )
}

export default Header