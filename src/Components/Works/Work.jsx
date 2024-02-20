import React from 'react'
import Data from './Data'
const Work = () => {
  return (
    <section className='w-[80%] h-auto relative top-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'>
      <h1 className='text-[30px] text-white font-bold'>MY <span className='text-red-700'>WORKS.</span></h1>
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
  )
}

export default Work