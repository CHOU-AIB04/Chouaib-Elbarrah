import React, { useState } from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const [FormData,setFormData] = useState({
    nom : "",
    email : "",
    message : ""
  })
  const form = useRef();
  // this function for handling change on each input 
  const Handlechange = (event)=>{
    let {tagName,name,value}  = event.target
    // handle the input type 
    if (tagName === "INPUT") {
      let {type} = event.target
      if (type !== "file") {
        setFormData({...FormData,[name]:value}) 
      }else{
          let {files} = event.target
          setFormData({...FormData,[name]:files[0]})
      }
    }else{
      setFormData({...FormData,[name]:value})
    }
  }
  // this function for confirming the form 
  const Formconfirmation = (e)=>{
    e.preventDefault();
    let check = 0
      Object.keys(FormData).map((input)=>{
          let current = FormData[input]
          if (current === "") {
              toast.error(`the ${input} field is required`)
          }else{
              check++
          }
      })
    if (check === 3) {
      emailjs
      .sendForm('service_7ptapui', 'template_o1t5y6h', form.current, {
        publicKey: 'cCzW7mvrhqiYRnCjS',
      })
      .then(
        () => {
          toast.success("your message is send succesfully")
          setFormData((prev)=>{
            return({
              ...prev,
              nom : "",
              email : "",
              message : ""
            })
          })
        },
        (error) => {
          toast.error("error,try again")
        },
      );
    }
  }
  
  return (
    <form ref={form} onSubmit={Formconfirmation} className='w-[90%] phone:w-[70%] h-[450px] rounded-lg sh relative top-32 color left-1/2 -translate-x-1/2 flex flex-col justify-around items-center'>
      <input type="text" onChange={Handlechange} value={FormData.nom} name='nom' className='w-[80%]  h-10 rounded-xl bg-transparent border-2 border-red-700 text-white pl-4 focus:outline-none placeholder:text-white' placeholder='Full Name'/>
      <input type="email" onChange={Handlechange} name='email' value={FormData.email} className='w-[80%]  h-10 rounded-xl bg-transparent border-2 border-red-700 text-white pl-4 focus:outline-none placeholder:text-white' placeholder='Email'/>
      <textarea name="message" onChange={Handlechange} id="" value={FormData.message} className='w-[80%]  max-h-28 min-h-20 rounded-xl bg-transparent border-2 border-red-700 text-white pl-4 pt-4 focus:outline-none placeholder:text-white' placeholder='Message'></textarea>
      <button className='w-36 h-8 rounded-xl bg-white text-red-700 font-bold transition-colors duration-500 hover:bg-red-700 hover:text-white sh'>Send</button>
    </form>
  )
}

export default Contact