import React from 'react'
import { Posts, StoryCard } from '../dummyData'
import PostCard from './component/PostCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Feed = () => {
 
  return (
    <div className=' w-full sm:w-[45%] flex items-center px-2 sm:px-0 justify-start pt-5 flex-col gap-3 pb-4'>


      <div className='w-full px-1 sm:px-5'>
      <Carousel
      opts={{
        align: "start",
        loop:"true"
      }}
      className="w-full z-20 "
    >
      <CarouselContent>
        {StoryCard.map((item) => (
          <CarouselItem key={item.id} className=" basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="  overlay   bg-slate-800 h-[220px] rounded-lg shadow cursor-pointer  relative">
             <div className=' w-[35px] h-[35px] absolute z-50 top-2 left-2'>
              <img className=' w-full h-full object-cover rounded-full ring-4' src={item.photo} alt="" />
              
              {item.active === "active" && <span className=' absolute bottom-0 right-0 w-[10px]  h-[10px] bg-green-500 rounded-full'>  </span>}
             </div>
              <img className=' rounded-lg w-full h-full object-cover' src={item.photo} alt="" />
           <div className='absolute bottom-2 left-2'>
           <span className='text-white font-semibold text-[18px] z-50' >{item.name}   </span>
           </div>



            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

       
      </div>
      
      <div className="w-full bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center border-b border-gray-300 pb-4 mb-2">
        <img
          src="https://i.ibb.co.com/zSJCbFd/profile.jpg" // Replace with user's profile picture URL
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <button
          type="button"
           className=" hover:bg-[#eaeaea] duration-200 w-full text-start px-4 py-2 text-[16px] font-medium text-[#565758] bg-gray-100 rounded-full outline-none"
        > What's on your mind, Abdul? </button>
      </div>
      <div className="flex justify-around">
        <div className="flex items-center space-x-1 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2">
        <img className='w-[30px] h-[30px] ' src="https://i.ibb.co.com/WkJK9Yn/live.png" alt="" />
          <span className="text-[16px] font-semibold">Live video</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2">
        <img className='w-[30px] h-[30px] ' src="https://i.ibb.co.com/R45285H/photo.png" alt="" />
           <span className="text-[16px] font-semibold">Photo/video</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2">
           <img className='w-[30px] h-[30px] ' src="https://i.ibb.co.com/DKqMMKn/reel.png" alt="" />
          <span className="text-[16px] font-semibold ">Reel</span>
        </div>
      </div>
    </div>



    {
        Posts.map((item)=>(

<PostCard key={item.id} card={item} />
          
        ))
      }

    
      
      
      </div>
  )
}

export default Feed