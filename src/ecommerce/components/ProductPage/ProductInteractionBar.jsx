import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { useCounter } from '../../../hooks';
import { formatNumber } from '../../helpers';


export const ProductInteractionBar = ({ price, discount, inventory }) => {

    const { counter } = useCounter(1);
    const priceFormat = formatNumber(price);

  return (
    <div>

    <div className='px-4 flex'>
        <span className='text-2xl'>$ {priceFormat}</span>
        <span className='text-actions-discount text-sm'>{discount}% OFF</span>
    </div>
    <div className='button flex flex-col px-4 mt-4 lg:px-0'>
        <button className='w-full h-12 lg:h-8 bg-black/10 flex justify-between items-center px-4 text-black/80 text-sm rounded-md first-letter:uppercase'>
            <div className='ml-2 lg:ml-0'>
            <span className='capitalize'>cantidad:</span>
            <span className='ml-2'>{counter}</span>
            <span className='ml-2 text-black/50 text-xs'>{`(${inventory} disponibles)`}</span>
            </div>
            <span className='rotate-180 text-sm text-actions-success'><FaAngleLeft /></span>
        </button>
        <button className='w-full h-12 lg:h-10 mt-5 font-medium bg-actions-success rounded-md text-white first-letter:uppercase'>comprar ahora</button>
        <button className='w-full h-12 lg:h-10 mt-2 font-medium bg-actions-success/30 rounded-md text-actions-success first-letter:uppercase'>agregar al carrito</button>
    </div>
    </div>
  )
}
