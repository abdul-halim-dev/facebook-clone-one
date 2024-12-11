import React, { useState } from 'react'
import LeftUser from './component/LeftUser'
import { Users } from '../dummyData'
import { FaChevronDown, FaChevronUp, FaPlay, FaVideo } from 'react-icons/fa6'
 
 

const Leftside = () => {

  const [store, setstore] =useState(Users)
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  const carsToDisplay = showMore ? store : store.slice(0, 10);

  return (
    <div className=' hidden sm:flex flex-col leftSide w-[25%] sticky top-[47px] mr-8  '>
       
    
    <div className='  flex items-center justify-center flex-col gap-1'>
    <div className='w-full flex items-center justify-start gap-2 hover:bg-[#eaeaea] p-2 rounded duration-300 cursor-pointer'>
     <img className='shadow w-[35px] h-[35px] rounded-full' src="https://i.ibb.co.com/zSJCbFd/profile.jpg" alt="" />
     <span> Abdul Halim </span>
      </div>

 <div className='  w-full flex items-center flex-col justify-center gap-1 border-b-[1px] border-[#d0d0d0] '>
 {
    carsToDisplay.map((item)=>(
      <LeftUser key={item.id} user={item} />
    ))
  }

<div className='w-full flex items-start justify-start gap-2 hover:bg-[#eaeaea] p-2 rounded duration-300 cursor-pointer'> 
 <div className=' flex items-center justify-center gap-2 '>
 <span className='p-2 bg-[#d7d9dd] rounded-full text-[18px] '>   {showMore ? <FaChevronUp/> : <FaChevronDown/>}   </span>
 {store.length > 10 && (
        <button onClick={handleShowMoreClick}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
</div>
 </div>

 </div>

    </div>

    <div className='w-full flex items-center justify-center flex-col gap-2 '>
      <div className='w-full flex items-center justify-between pr-2 py-3' >
        <span className='text-[18px] font-semibold text-[#74767a] '>Your Shortcuts</span>
        <button className='text-[#0866ff] text-[14px] font-semibold hover:bg-[#eaeaea] px-4 py-2 rounded'>Edit</button>
      </div>
    </div>

    <div className='w-full flex items-center justify-start gap-1 flex-wrap pr-2 pb-[50px]'>
      <a className='text-[14px] hover:underline underline-offset-2 font-semibold' href="#"> Privacy</a>
      <a  className='text-[14px] hover:underline underline-offset-2 font-semibold' href="#"> Terms</a>
      <a  className='text-[14px] hover:underline underline-offset-2 font-semibold' href="#"> Advertising</a>
      <a  className='text-[14px] hover:underline underline-offset-2 font-semibold' href="#"> Ad Choices</a>
      <a  className='text-[14px] hover:underline underline-offset-2 font-semibold flex items-center justify-center gap-2' href="#"> <FaPlay/>  Cookies</a>
      <a  className='text-[14px] hover:underline underline-offset-2 font-semibold' href="#"> More</a>
      <p>Meta © 2024</p>
    </div>

    </div>
  )
}

export default Leftside