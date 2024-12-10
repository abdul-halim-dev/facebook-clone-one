import React, { useEffect, useState } from 'react'
import Header from './Header'
import Leftside from './Leftside'
import Feed from './Feed'
import Rightside from './Rightside'

const Profile = () => {

const [loader, setloader] = useState(true)

useEffect(()=>{
  setTimeout(() => {
    setloader(false)
  }, 2000);
},[])

if(loader)
  return <div className='w-full h-screen flex items-center  flex-col gap-3 justify-center bg-gray-100'> 
   
 
<div className="border border-blue-300 shadow rounded-md  p-4  w-[60%] mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-200 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
         </div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
 </div>
 <h1 className='text-3xl text-indigo-600 font-bold'> Pages are loading..............</h1>
  </div>

  return (
    <div className='  w-full flex items-center justify-center flex-col gap-2 bg-[#f2f4f7] '>
      <Header/>
    <div className=' px-[20px] w-full flex bg-[#f2f4f7] '>
    <Leftside/>
    <Feed/>
    <Rightside/>
    </div >


    </div>
  )
}

export default Profile