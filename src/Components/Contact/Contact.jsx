import React from 'react'

const Contact = () => {
  return (
    <div className='w-[90%] phone:w-[70%] h-[450px] rounded-lg sh relative top-32 color left-1/2 -translate-x-1/2 flex flex-col justify-around items-center'>
      <input type="text" className='w-[80%]  h-10 rounded-xl bg-transparent border-2 border-red-700 text-white pl-4 focus:outline-none placeholder:text-white' placeholder='Full Name'/>
      <input type="email" className='w-[80%]  h-10 rounded-xl bg-transparent border-2 border-red-700 text-white pl-4 focus:outline-none placeholder:text-white' placeholder='Email'/>
      <textarea name="" id="" className='w-[80%]  max-h-28 min-h-20 rounded-xl bg-transparent border-2 border-red-700 text-white pl-4 pt-4 focus:outline-none placeholder:text-white' placeholder='Message'></textarea>
      <button className='w-36 h-8 rounded-xl bg-white text-red-700 font-bold transition-colors duration-500 hover:bg-red-700 hover:text-white sh'>Send</button>
    </div>
  )
}

export default Contact