import React, { useRef } from 'react'
import { RxStarFilled } from 'react-icons/rx'
import { Link } from 'react-router-dom'

export const ProductCardSearch = () => {

    const productClick =  useRef(null);

    const clickHandle = () => {
        productClick.current.click()
    }

  return (
    <li 
        onClick={clickHandle}
        className='w-full h-48 rounded-md bg-white group
                    lg:rounded lg:cursor-pointer'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-1/2 h-full p-2 relative flex items-center justify-center
                            before:absolute before:w-[calc(100%-16px)] before:h-[calc(100%-16px)] before:rounded-md before:bg-black/5 before:top-2 before:left-2
                            lg:before:bg-transparent lg:w-[192px]'>
                <img src={"https://i.imgur.com/8KkhBqA.png"} alt={`foto del producto: name`} className='w-full h-full object-contain' />
            </div>
            <div 
                className='w-1/2 h-full py-2.5 px-1
                            lg:w-[calc(100%-192px)] lg:py-5'>
                <Link
                    to={'id'}
                    ref={productClick}
                    className='text-sm line-clamp-2 group-hover:text-actions-success duration-300
                                lg:text-base'
                >
                    Monitor Led De 24 Con Panel Ips Y Diseño Sin Bordes Color Black 100V/240V
                </Link>
                <div className='flex items-center text-actions-success/80 text-xs
                                lg:mt-2'>
                <span className='mr-2'>4.5</span>
                    <RxStarFilled />
                    <RxStarFilled />
                    <RxStarFilled />
                    <RxStarFilled />
                    <RxStarFilled />
                <span className='ml-2 text-black/50'> (33) </span>
                </div>
                <div className='mt-2'>
                    <s className='text-xs text-black/35'>$ 1.000.000</s>
                    <div className='flex gap-1'>
                        <p className='text-lg'>$ 501.000</p>
                        <span className='text-actions-discount lg:text-sm'>10% OFF</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}
