import React, { useRef } from 'react'
import { RxStarFilled } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { applyDiscount, formatNumber } from '../../helpers';

export const ProductCardSearch = ({ name, price, image, discount, id }) => {

    const productClick =  useRef( null );
    const clickHandle = () => { productClick.current.click() };

  return (
    <li 
        onClick={clickHandle}
        className='w-full h-44 rounded-md bg-white group
                    lg:h-48 lg:rounded lg:cursor-pointer'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-1/2 h-full p-2 relative flex items-center justify-center
                            lg:w-[200px]'>
                <img 
                    src={image}
                    alt={`foto del producto: ${name}`} 
                    className='w-[90%] h-[90%] object-contain'/>
            </div>
            <div 
              className='w-1/2 h-full py-2.5 px-1  
                lg:w-[calc(100%-192px)] lg:py-5'>
                <Link
                  to={`/product/${id}`}
                  ref={productClick}
                  className='text-sm line-clamp-2 group-hover:text-actions-success duration-300 lg:text-base'
                >
                    {name}
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
                    { discount ? <s className='text-xs text-black/35'>$ {formatNumber(price)}</s> : ''}
                    <div className='flex gap-1'>
                        <p className='text-lg'>$ 501.000</p>
                        { discount ? <span className='text-actions-discount lg:text-sm'>{discount}% OFF</span> : ''}
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}
