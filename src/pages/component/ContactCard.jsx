import React from 'react'

const ContactCard = ({card}) => {
  return (
    <div className='w-full flex items-center justify-start gap-3 hover:bg-[#eaeaea] p-2 rounded-md duration-300 cursor-pointer'>
<div className='w-[30px] h-[30px] relative '>
<img className=' w-full h-full object-cover rounded-full' src={card.image} alt="" />
<span className='w-[8px] h-[8px] rounded-full bg-[#24832c] absolute bottom-0 right-0'></span>
    </div>        
    
    <span className='text-[16px] '>{card.naming} </span>


    </div>
  )
}

export default ContactCard