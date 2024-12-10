import React, { useState } from 'react'
import {  FaArrowLeft, FaFacebookF, FaSearch } from "react-icons/fa";
import { PiVideoLight } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";
import { TiGroupOutline } from "react-icons/ti";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Header = () => {

const [show, setshow] = useState(true)
const [active, setactive] = useState({})
const [menuActive, setmenuActive] = useState({})

const showhandle = ()=>{
  setshow(!show)
 
}

const allItem = [
  {
    id:1,
    icon:<GoHome/>,
    title:"Home"
  },
  {
    id:2,
    icon:<PiVideoLight/>,
      title:"Video"
  },
  {
    id:3,
    icon:<TbShoppingBag/>,
      title:"MarketPlace"
  },
  {
    id:4,
    icon:<TiGroupOutline/>,
      title:"Groups"
  },
  {
    id:5,
    icon:<MdOutlineVideogameAsset/>,
      title:"Games"
  },


]


const menuItem  = [

{
  id:1,
  menu:<CgMenuGridR/>,
  title:"Menu"
},
{
  id:2,
  menu:<FaFacebookMessenger/>,
  title:"Messenger"
},
{
  id:3,
  menu:<IoNotifications/>,
  title:"Notification"
},
 
 

]
console.log(active)
  return (
    <header className='w-full sticky top-0 z-50'>
      <div className=' relative  top-0 px-[20px] py-2 w-full h-[50px] flex items-center justify-between bg-white shadow'>
        <div className='w-[25%]'>
        <div className={`${show ? "w-full flex items-center justify-start gap-3":"w-[25%] pt-2 flex items-start bg-white justify-start gap-3 searchbar rounded-lg h-[150px] absolute top-0 left-0 "}`}>
           {
            show ? <span className='cursor-pointer w-[40px] h-[40px] bg-[#0866ff] rounded-full flex items-center justify-center '> <FaFacebookF className='text-white text-[30px] '/> </span>:  <span className='ml-2 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f2f4f7] '> <FaArrowLeft  className='text-[#64686c] text-[20px] '/> </span>
           }

            <div className='bg-[#f0f2f5] flex items-center justify-center  relative w-[240px] h-[38px] rounded-full '>
                <input onClick={showhandle} className={`${show ? " ":"w-full pl-3"} text-[#4f4f50] text-[14px] font-semibold bg-transparent border-0 focus:outline-none `} type="search" name="" id="search" placeholder='Search Facebook' />
             {
              show &&  <label htmlFor='search' className=' w-[15%] absolute top-3 left-3'> <FaSearch className='text-[#6a6d70] text-sm font-medium'/> </label>
             }
            </div>


        </div>
        </div>
        
        <div className=' w-[45%] flex items-center justify-center gap-3 '>


          {
            allItem.map((item)=>{
              return <li onClick={()=>setactive(item.id)} title={item.title} className={`${active === item.id && "border-b-[3px] border-[#0866ff] "} px-8 py-[7px] hover:bg-[#f0f2f5] duration-300 transition-all hover:rounded-md `} key={item.id} > <span className={`${ active === item.id && 'text-[#3037f7]'} text-[30px] text-[#65686c]`} > {item.icon} </span>  </li>
            })
          }

        </div>
        
        <div className='w-[30%] flex items-center justify-end gap-2 '>
        
          <ul className='flex items-center justify-end gap-2'>
          {
            menuItem.map((item)=>(
              <li onClick={()=>setmenuActive(item.id)} title={item.title} className={`${menuActive === item.id && " text-[#334df5] "} cursor-pointer  flex items-end justify-end  `}  key={item.id}> <span className=' p-[10px]  bg-[#afb4bcae] duration-300 transition-all rounded-full text-[22px] '> {item.menu} </span>   </li>
            
            ))
          }
          </ul>
 
<img className='shadow w-[35px] h-[35px] rounded-full cursor-pointer' src="https://i.ibb.co.com/zSJCbFd/profile.jpg" alt="" />
</div>

    </div>
    </header>
  )
}

export default Header