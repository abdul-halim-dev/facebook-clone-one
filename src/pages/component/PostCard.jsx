import React, { useState } from 'react'

const PostCard = ({card}) => {



    const [like,setLike] = useState(card.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

 



console.log(like)
  return (
<div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      {/* Header: Profile Section */}
      <div className="flex items-center p-4">
        <img
          src={card.photo}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold text-[16px] text-gray-800"> {card.name}</h3>
          <p className="text-sm text-gray-500 font-semibold ">{card.date} </p>
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 pb-2">
        <p className="text-gray-700 text-[16px] font-medium">
        {card.desc}
        </p>
      </div>

      {/* Post Image */}
      <img
        src={card.photo}
        alt="Post"
        className="w-full h-[420px] object-cover"
      />

      {/* Actions */}
      <div className="px-4 py-3 border-t border-gray-200">
        <div className="flex justify-between text-gray-600 text-sm border-b-[1px] border-[#d0d0d0] pb-3">
          <div className="flex items-center space-x-1">
            
          <img onClick={likeHandler} className='w-[32px] h-[32px] object-cover cursor-pointer ' src="https://i.ibb.co.com/4sJBDb5/like3.png" alt="" />
          <img onClick={likeHandler} className='w-[25px] h-[25px] object-cover cursor-pointer' src="https://i.ibb.co.com/dMtZWjJ/love4.png" alt="" />
 
            <span> {like} People like it </span>
          </div>
          <span className='cursor-pointer text-[14px] font-semibold hover:underline underline-offset-2'> {card.comment} comments</span>
        </div>
        <div className="flex justify-around mt-4 ">
          <div className=" cursor-pointer hover:bg-[#eaeaea] py-1 px-8 rounded-md flex items-center space-x-2 justify-center text-gray-600  ">
          <img onClick={likeHandler} className='w-[25px] h-[25px] object-contain' src="https://i.ibb.co.com/PmRkfqL/like1.png" alt="" />
            <span  className='text-[16px] font-semibold'> Like</span>
          </div>
          <button className=" hover:bg-[#eaeaea] py-1 px-8 rounded-md flex items-center space-x-2 justify-center text-gray-600 ">
           <img className='w-[25px] h-[25px] object-contain' src="https://i.ibb.co.com/Jr8GNS9/comment.png" alt="" />
            <span  className='text-[16px] font-semibold'>Comment</span>
          </button>
          <button className=" hover:bg-[#eaeaea] py-1 px-8 rounded-md flex items-center space-x-2 justify-center text-gray-600 ">
          <img className='w-[25px] h-[25px] object-contain' src="https://i.ibb.co.com/5Rb3zjR/share.png" alt="" />

            <span className='text-[16px] font-semibold'>Share</span>
          </button>
        </div>
      </div>
    </div>

  )
}

export default PostCard