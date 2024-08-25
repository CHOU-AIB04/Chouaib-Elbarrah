import React from 'react'
import Avatar from "../../picture/avatar.png"
import rounded_text from "../../picture/rounded-text.png"
import explosion from "../../picture/bg-explosion.png"
const Home = () => {
  return (
    <>
        <section className='w-[80%] h-96 relative  top-20 phone:top-52 left-1/2 phone:left-0 -translate-x-1/2 phone:translate-x-0 flex justify-center'>
            <div className='flex flex-col gap-9 items-center phone:items-start p-0 phone:pl-7'>
                <div>
                    <h1 className='text-white font-bold text-[25px] phone:text-[40px]'>Transforming Ideas</h1>
                    <h1 className='text-white font-bold text-[25px] phone:text-[40px]'>Into <span className='text-red-700'>Digital Reality</span></h1>
                </div>
                <p className='font-bold w-[90%] phone:w-[650px] text-[14px] text-white'>I specialize in turning creative concepts into tangible results by applying my expertise in web development to build innovative and effective solutions..</p>
                <div className='relative w-44 h-44 rounded-full'>
                    <svg className='absolute anime left-3 -top-2' width="155" height="150" viewBox="0 0 148 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77.9349 2.33998L83.6865 4.95736C85.304 5.69345 87.0819 6.00695 88.8537 5.86848L95.1536 5.37611C97.8919 5.16211 100.589 6.14368 102.549 8.06773L107.058 12.4944C108.327 13.7394 109.89 14.642 111.602 15.1179L117.691 16.8099C120.337 17.5453 122.535 19.3901 123.719 21.8685L126.443 27.5706C127.209 29.1742 128.369 30.5572 129.815 31.59L134.958 35.2623C137.193 36.8585 138.628 39.3439 138.893 42.0777L139.502 48.3674C139.673 50.1363 140.291 51.8328 141.296 53.2979L144.873 58.5076C146.427 60.772 146.926 63.5983 146.239 66.2578L144.661 72.3765C144.217 74.0973 144.217 75.9027 144.661 77.6235L146.239 83.7422C146.926 86.4017 146.427 89.228 144.873 91.4924L141.296 96.7021C140.291 98.1672 139.673 99.8637 139.502 101.633L138.893 107.922C138.628 110.656 137.193 113.142 134.958 114.738L129.815 118.41C128.369 119.443 127.209 120.826 126.443 122.429L123.719 128.132C122.535 130.61 120.337 132.455 117.691 133.19L111.602 134.882C109.89 135.358 108.327 136.261 107.058 137.506L102.549 141.932C100.589 143.856 97.8919 144.838 95.1536 144.624L88.8537 144.132C87.0819 143.993 85.304 144.307 83.6865 145.043L77.9349 147.66C75.435 148.798 72.565 148.798 70.0651 147.66L64.3135 145.043C62.696 144.307 60.9181 143.993 59.1463 144.132L52.8464 144.624C50.1081 144.838 47.4113 143.856 45.4512 141.932L40.9417 137.506C39.6735 136.261 38.11 135.358 36.3977 134.882L30.3093 133.19C27.663 132.455 25.4645 130.61 24.2807 128.132L21.5572 122.429C20.7912 120.826 19.6308 119.443 18.1845 118.41L13.042 114.738C10.8068 113.142 9.37188 110.656 9.10714 107.922L8.49806 101.633C8.32676 99.8637 7.7093 98.1672 6.7035 96.7021L3.12714 91.4924C1.57268 89.228 1.07432 86.4017 1.76057 83.7422L3.33943 77.6235C3.78345 75.9027 3.78345 74.0973 3.33943 72.3765L1.76057 66.2578C1.07432 63.5983 1.57268 60.772 3.12714 58.5076L6.7035 53.2979C7.7093 51.8328 8.32676 50.1363 8.49806 48.3674L9.10714 42.0777C9.37188 39.3439 10.8068 36.8585 13.042 35.2623L18.1845 31.59C19.6308 30.5572 20.7912 29.1742 21.5572 27.5706L24.2807 21.8685C25.4645 19.3901 27.663 17.5453 30.3093 16.8099L36.3977 15.1179C38.11 14.642 39.6735 13.7394 40.9417 12.4944L45.4512 8.06773C47.4113 6.14368 50.1081 5.16211 52.8464 5.37611L59.1463 5.86848C60.9181 6.00695 62.696 5.69345 64.3135 4.95736L70.0651 2.33999C72.565 1.20235 75.435 1.20235 77.9349 2.33998Z" stroke="white" stroke-opacity="0.3"/>
                    </svg>
                    <img src={rounded_text} alt="text" className='absolute left-8 top-2 w-28 anime' />
                    <i className="bi bi-arrow-right absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25px] font-bold text-white transition-all duration-500 cursor-pointer mt-4 phone:mt-0"></i>
                </div>
            </div>
        </section>
        <img src={explosion} alt="pic" className='mix-blend-lighten absolute w-[90%] phone:w-[1000px] bottom-0'/>
        <img src={Avatar} alt="avatar" className='absolute  left-[50%]  -translate-x-1/2 w-72 phone:w-96 bottom-0'/>
    
    </>
  )
}

export default Home