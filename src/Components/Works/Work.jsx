import React from 'react'
import Data from './Data'
import Additional from './Additional'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
     <section className='w-[80%] h-auto relative top-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'>
      <h1 className='text-[30px] text-white font-bold'>MY <span className='text-red-700'>PROJECTS.</span></h1>
      <section className='h-[90%] w-full grid grid-cols-1 gap-4 md:grid-cols-2 tablet:grid-cols-3'>
        {
          Data.map(function(e,index){
            return(
              <a href={e.link} target="_blank" key={index} id={index}>
                <nav className='w-full h-52 relative afterr rounded-lg overflow-hidden' style={{background: `url(${e.pic})`,backgroundPosition : "center",backgroundSize:"cover"}} value={e.value}>
                </nav>
              </a>
            )
          })
        }
      </section>
    </section>
    <section className='w-[90%] md:w-[80%] mb-20  h-96  mt-20  relative top-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'>
      <h1 className='text-[20px] md:text-[30px] text-white font-bold'>Additional <span className='text-red-700'>Full-Stack Projects.</span></h1>
      <section className='h-[90%] w-full grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 tablet:grid-cols-2'>
        {
          Additional.map((el)=>{
            return(
              <>
               <nav className='w-full md:w-[90%] h-72  flex flex-col justify-between'>
                  <Slider {...settings} className='w-full h-[80%]'>
                    <div className=' h-64 overflow-hidden rounded-md sh'>
                      <img src={el.pic1} alt="pic" className='w-full h-full object-cover'/>
                    </div>
                    <div className=' h-64 overflow-hidden rounded-md sh'>
                      <img src={el.pic2} alt="pic" className='w-full h-full object-cover'/>
                    </div>
                    <div className=' h-64 overflow-hidden rounded-md sh'>
                      <img src={el.pic3} alt="pic" className='w-full h-full object-cover'/>
                    </div>
                    <div className=' h-64 overflow-hidden rounded-md sh'>
                      <img src={el.pic4} alt="pic" className='w-full h-full object-cover'/>
                    </div>
                    <div className=' h-64 overflow-hidden rounded-md sh'>
                      <img src={el.pic5} alt="pic" className='w-full h-full object-cover'/>
                    </div>
                  </Slider>
                  <h1 className='text-white uppercase text-center'>{el.project_name}</h1>
               </nav>
              </>
            )
          })
        }
     
      </section>
    </section>
    </>
   
  )
}

export default Work