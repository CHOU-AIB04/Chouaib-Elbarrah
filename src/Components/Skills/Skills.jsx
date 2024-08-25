import React from 'react'
import html from "../../picture/html.png"
import { MdOutlineGroups2 } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { IoCodeSlash } from "react-icons/io5";

const Skills = () => {
  return (
    <section className='w-[90%] phone:w-[80%] h-96 relative top-32 phone:top-52 gap-7  left-1/2 -translate-x-1/2 mb-20 grid grid-cols-1 tablet:grid-cols-3'>
      <section className='w-full  space-y-4 pl-4 text-center'>
        <h1 className='text-[25px] phone:text-[45px] font-bold text-white'>MY <span className='text-red-700'>SKILLS</span>.</h1>
        <p className='text-white text-sm'>As a junior web developer, I have developed a solid foundation in key technologies, enabling me to contribute effectively to diverse web development projects.</p>
      </section>
      <section className='col-span-2 grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center mb-20'>
        <nav className='color2 h-64 rounded-md flex flex-col gap-3 pl-7 pb-3 w-[250px] md:w-full transition-all duration-500 hover:scale-95 sh cursor-pointer'>
          <MdOutlineGroups2 size={40} color='white' />
          <h1 className='text-white font-bold'>Team work</h1>
          <p className='text-white text-sm'>I am skilled at working collaboratively within a team to achieve project goals efficiently.</p>
        </nav>
        <nav className='color2 h-64 rounded-md flex flex-col gap-3 pl-7 pb-3 w-[250px] md:w-full transition-all duration-500 hover:scale-95 sh cursor-pointer'>
        <IoCodeSlash size={40} color='white' />
        <h1 className='text-white font-bold'>Coding</h1>
          <p className='text-white text-sm'>I am committed to delivering high-quality code, ensuring that each project is both reliable and scalable</p>
        </nav>
        <nav className='color2 h-64 rounded-md flex flex-col gap-3 pl-7 pb-3 w-[250px] md:w-full transition-all duration-500 hover:scale-95 sh cursor-pointer'>
        <PiStudentBold size={40} color='white' />
          <h1 className='text-white font-bold'>Fast learning</h1>
          <p className='text-white text-sm'>I am adaptable and quick to learn new technologies, which helps me stay current in the ever-evolving tech landscape.</p>
        </nav>
      </section>
    </section>
  )
}

export default Skills