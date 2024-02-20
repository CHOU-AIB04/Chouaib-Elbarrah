import React from 'react'
import html from "../../picture/html.png"
const Skills = () => {
  return (
    <section className='w-[90%] phone:w-[80%] h-96 relative top-32 phone:top-52 gap-7  left-1/2 -translate-x-1/2 mb-20 grid grid-cols-1 tablet:grid-cols-3'>
      <section className='w-full  space-y-4 pl-4 text-center'>
        <h1 className='text-[25px] phone:text-[45px] font-bold text-white'>MY <span className='text-red-700'>SKILLS</span>.</h1>
        <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus tempora doloremque atque iste magnam adipisci omnis alias, mollitia earum nisi ipsum molestiae sapiente quis similique dolor id libero! At!</p>
      </section>
      <section className='col-span-2 grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center mb-20'>
        <nav className='color2 h-64 rounded-md flex flex-col gap-3 pl-7 pb-3 w-[250px] md:w-full transition-all duration-500 hover:scale-95 sh cursor-pointer'>
          <img src={html} alt="pic" className='w-12'/>
          <h1 className='text-white font-bold'>Branding</h1>
          <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perferendis repudiandae quas sit, aperiam excepturi!</p>
          <i className="bi bi-arrow-up-right text-white font-bold text-[25px]"></i>
        </nav>
        <nav className='color2 h-64 rounded-md flex flex-col gap-3 pl-7 pb-3 w-[250px] md:w-full transition-all duration-500 hover:scale-95 sh cursor-pointer'>
          <img src={html} alt="pic" className='w-12'/>
          <h1 className='text-white font-bold'>Branding</h1>
          <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perferendis repudiandae quas sit, aperiam excepturi!</p>
          <i className="bi bi-arrow-up-right text-white font-bold text-[25px]"></i>
        </nav>
        <nav className='color2 h-64 rounded-md flex flex-col gap-3 pl-7 pb-3 w-[250px] md:w-full transition-all duration-500 hover:scale-95 sh cursor-pointer'>
          <img src={html} alt="pic" className='w-12'/>
          <h1 className='text-white font-bold'>Branding</h1>
          <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perferendis repudiandae quas sit, aperiam excepturi!</p>
          <i className="bi bi-arrow-up-right text-white font-bold text-[25px]"></i>
        </nav>
      </section>
    </section>
  )
}

export default Skills