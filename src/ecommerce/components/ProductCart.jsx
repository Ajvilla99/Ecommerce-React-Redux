import React, { useState } from 'react'
import { FiMoreVertical } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const ProductCart = ({image, name, discount, price, inventory}) => {

    const [counter, setCounter] = useState(10);
  
    function formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

  return (
    <li className='w-full group'>
        <div 
            className='w-full flex flex-col gap-2 p-3 relative
            lg:before:bg-transparent lg:flex-row
            before:bg-black/5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:pointer-events-none before:z-10
            '>
            <div className='w-full flex
                            lg:w-4/5'>
                <div className='w-1/5 flex items-start justify-center pt-4'>
                        <img src={image} alt='' className='object-cover object-center' />
                </div>
                <div className='w-4/5 min-h-[105px] flex flex-col justify-between py-4 pr-4 pl-2 gap-1 relative'>
                    <button className='absolute right-0 lg:hidden'>
                        <FiMoreVertical />
                    </button>
                    <Link className='text-sm line-clamp-2'>{ name }</Link>
                    <span className={`bg-actions-discount rounded-md font-semibold text-xs text-white p-2 max-w-fit shadow-md
                                       ${ discount === 0 ? 'hidden' : '' } `}>
                        {`${discount}% OFF`}
                    </span>
                </div>
            </div>
            <div className='w-full px-3 flex items-center justify-between
                            lg:w-1/3 lg:flex-col lg:justify-center lg:gap-5'>
                <div className='flex flex-col gap-1 items-center lg:gap-2'>
                    <div className='cantidad cursor-pointer flex text-xs text-[#191919] rounded-md z-20 max-w-fit shadow-md'>
                        <button
                            onClick={() => setCounter(counter-1)}
                            className='w-10 h-10 text-lg z-20 bg-white rounded-l-md flex items-center justify-center active:scale-75 duration-300 active:shadow-md'>-</button>
                        <span className='w-5 bg-white flex items-center justify-center'>{counter}</span>
                        <button
                            onClick={() => setCounter(counter+1)}
                            className='w-10 h-10 text-lg z-20 bg-white rounded-r-md flex items-center justify-center active:scale-75 duration-300 active:shadow-md'>+</button>
                    </div>
                    <span className='text-xs text-gray-600'>{inventory} Disponibles</span>
                </div>
                <p className='text-xl'>$ {formatNumber(price)}</p>
            </div>
        </div>
    </li>
  )
}
