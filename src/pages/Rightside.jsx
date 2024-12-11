import React from 'react'
import {   FaSearch } from 'react-icons/fa'
import { LuPlus } from "react-icons/lu";
import { SlOptions } from "react-icons/sl";
import { Contacts, GroupDetail } from '../dummyData';
import ContactCard from './component/ContactCard';
import GroupDetails from './component/GroupDetails';

const Rightside = () => {
  return (
    <div className='hidden sm:flex flex-col w-[30%] pl-16 h-screen overflow-y-auto pr-2 sticky top-[46px] '>
      <div className='w-full py-4 border-b-[1px] border-[#d0d0d0] '>
      <span className='text-[18px] font-semibold text-[#74767a] '>Birthdays</span>
      <div className='w-full flex items-start justify-start gap-4 hover:bg-[#eaeaea] p-2 rounded-md duration-300 cursor-pointer'>
         <img className='w-[30px] h-[30px] ' src="https://i.ibb.co.com/cxppHmk/gift2.png" alt="" />
        <p className='w-[80%] text-[16px] '>  <span className='text-[16px] font-semibold'> Branden King </span> and <span className='text-[16px] font-semibold'> 4 others </span> have birthdays today</p>
      </div>


      </div>

      <div className='w-full flex items-center justify-between py-3'>
      <span className='text-[18px] font-semibold text-[#74767a] '>Contacts</span>

       <div className='flex items-center justify-center gap-4'>
       <span className='cursor-pointer text-[18px] hover:bg-[#eaeaea] p-2 rounded-full duration-300  '><FaSearch/> </span>
       <span className='cursor-pointer text-[18px] hover:bg-[#eaeaea] p-2 rounded-full duration-300   ' ><SlOptions/> </span>
       </div>
      </div>

<div className='w-full flex items-center justify-center flex-col gap-1 pb-2  border-b-[1px] border-[#d0d0d0]'>
    {
      Contacts.map((item)=>(
        <ContactCard key={item.id} card={item} />
      ))
    }
</div>

<div className=' w-full flex items-center justify-center flex-col gap-2 py-2'>
<span className='text-[18px] text-start w-full font-semibold text-[#74767a] '>Community chats</span>

    <div>
      {
        GroupDetail.map((item)=>(
          <GroupDetails  key={item.id} card={item} />
        ))
      }
    </div>

</div>

<div className='pb-[60px] w-full flex items-center justify-start gap-2 pl-2 hover:bg-[#eaeaea] p-2 rounded-md duration-300 cursor-pointer '>

<span className='p-2 bg-[#e2e5e9] text-[20px] rounded-full'><LuPlus/> </span>
<span>Create Group Chat </span>

</div>

    </div>
  )
}

export default Rightside