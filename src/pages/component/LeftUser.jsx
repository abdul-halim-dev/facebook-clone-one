import React from 'react'

const LeftUser = ({user}) => {


  return (
    <>
     <div className='w-full flex items-center justify-start gap-3 cursor-pointer hover:bg-[#eaeaea]/70 rounded duration-300 py-2 px-2'>
       <div className=' w-[25px] h-[25px] rounded-full '>
            <img className='w-full   h-full object-contain' src={user?.profilePicture} alt="" />
        </div>
        <span> {user?.username} </span>
        </div>
        
    </>
  )
}

export default LeftUser