import React from 'react'
import { HiArrowUpLeft } from "react-icons/hi2";
import { MdOutlineWatchLater } from "react-icons/md";

export const ItemSearch = () => {
  return (
    <div className='w-full h-14 bg-gray-200 flex justify-between items-center px-4'>
        <div className='w-10 flex items-center justify-center'>
            <MdOutlineWatchLater size={20} color='gray'/>
        </div>
        <div className='w-[calc(100%-80px)]'>
                <p className='line-clamp-1 px-3 text-gray-600 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className='w-10 flex items-center justify-center'>
            <HiArrowUpLeft size={18} color='gray'/>
        </div>
    </div>
  )
}
