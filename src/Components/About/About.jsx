import React from 'react'
import { useState } from 'react'
import Avatar from "../../picture/avatar.png"
import html from "../../picture/html.png"
import css from "../../picture/css-3.png"
import js from "../../picture/js-file.png"
import php from "../../picture/php.png"
import react from "../../picture/physics.png"
import git from "../../picture/git.png"
import github from "../../picture/github.png"
const About = () => {
  let language =  <div className='flex justify-center tablet:justify-start gap-8 mt-9 w-full flex-col phone:flex-row items-center phone:items-start'>
                    <h1 className='text-gray-300 text-[12px] phone:text-[14px]'>Web Developement</h1>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-4'>
                          <img src={html} alt="pic" className='w-6 phone:w-8'/>
                          <img src={css} alt="pic" className='w-6 phone:w-8'/>
                          <img src={js} alt="pic" className='w-6 phone:w-8'/>
                          <img src={php} alt="pic" className='w-6 phone:w-8'/>
                          <img src={react} alt="pic" className='w-6 phone:w-8'/>
                          <img src={git} alt="pic" className='w-6 phone:w-8'/>
                        </div>
                        <div className='flex items-center gap-4'>
                          <svg viewBox="0 0 248 31" class="text-slate-900 dark:text-white w-20 h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg>
                          <img src={github} alt="pic" className='w-6 phone:w-8'/>
                        </div>
                    </div>
                  </div>
  let Experience = <ul className='flex flex-row justify-start phone:justify-between items-center tablet:items-start gap-5 mt-9 w-full pl-10 phone:pl-16'>
                        <div className='flex flex-col gap-5'>
                          <li><a href='https://chou-aib04.github.io/Keroumi-fitness/' target="_blank" className='text-white text-[10px] phone:text-sm font-bold transition-colors duration-500 hover:text-red-700 list-disc'>Keroumi-Fitness-Project</a></li>
                          <li><a href='https://chou-aib04.github.io/HOUSE-FITNESS-V.1/' target="_blank" className='text-white text-[10px] phone:text-sm font-bold transition-colors duration-500 hover:text-red-700'>House-Fitness-Project</a></li>
                          <li><a href='https://chou-aib04.github.io/ecomerce/ecomerce_project/home_page/index.html' target="_blank" className='text-white text-[10px] phone:text-sm font-bold transition-colors duration-500 hover:text-red-700'>Ecomerce-Page-Project</a></li>
                        </div>
                        <div className='flex flex-col gap-5'>
                          <li><a href='https://chou-aib04.github.io/projects/Start%20Project%20Complete%20Responsive%20Portfolio%20Website%20-%20Copie/' target="_blank" className='text-white text-[10px] phone:text-sm font-bold transition-colors duration-500 hover:text-red-700'>Porfolio</a></li>
                          <li><a href='https://chou-aib04.github.io/hotel/staybnb_project/' target="_blank" className='text-white text-[10px] phone:text-sm font-bold transition-colors duration-500 hover:text-red-700'>Hotel-Project</a></li>
                          <li><a href='https://chou-aib04.github.io/Sport/sport/index.html' target="_blank" className='text-white text-[10px] phone:text-sm font-bold transition-colors duration-500 hover:text-red-700'>FITCLUB-Project</a></li>
                        </div>
                    </ul>
  let Studie = <div className='flex justify-center tablet:justify-start gap-8 mt-4 w-full h-20'></div>
  let Credentiels = <div className='flex justify-center tablet:justify-start gap-8 mt-4  w-full h-20'></div>
  let [show,setshow] = useState(language)
  let [active,setactive] = useState(1)
  function handleclick(id){
    setactive(id)
    if(id === 1){
      setshow(language)
    }else if(id === 2){
      setshow(Experience)
    }else if(id === 3){
      setshow(Studie)
    }else{
      setshow(Credentiels)
    }
  }
  return (
   <>
     <article className='w-[80%] phone:w-[70%]  h-96 relative top-28 phone:top-52 gap-10 phone:gap-0  left-1/2 -translate-x-1/2 mb-20 grid grid-cols-1 tablet:grid-cols-2' >
      <section className='w-full  space-y-4 pl-4'>
        <h1 className='text-[25px] phone:text-[45px] font-bold text-white'>Captivating <span className='text-red-700'>stories</span> birth magnificient design.</h1>
        <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus tempora doloremque atque iste magnam adipisci omnis alias, mollitia earum nisi ipsum molestiae sapiente quis similique dolor id libero! At!</p>
      </section>
      <section className='flex flex-col items-center '>
        <ul className='flex items-center gap-4'>
          <li className={`font-bold relative aft cursor-pointer transition-colors duration-500 hover:text-red-700 ${active === 1 ? "text-red-700": "text-white"}`} onClick={()=>handleclick(1)}>Skills</li>
          <li className={`font-bold relative aft cursor-pointer transition-colors duration-500 hover:text-red-700 ${active === 2 ? "text-red-700": "text-white"}`} onClick={()=>handleclick(2)}>Experience</li>
          <li className={`font-bold relative aft cursor-pointer transition-colors duration-500 hover:text-red-700 ${active === 3 ? "text-red-700": "text-white"}`} onClick={()=>handleclick(3)}>Awards</li>
          <li className={`font-bold relative aft cursor-pointer transition-colors duration-500 hover:text-red-700 ${active === 4 ? "text-red-700": "text-white"}`} onClick={()=>handleclick(4)}>Credentials</li>
        </ul>
        <nav className='w-full'>
           {show}
        </nav>
      </section>
     </article>
   </>
  )
}

export default About