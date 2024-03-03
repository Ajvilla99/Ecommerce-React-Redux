//Hooks
import { useState } from 'react';
//Custom Hooks
import { useCounter } from '../../../hooks';

// Icons
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa6'

//Functions
import { formatNumber } from '../../helpers';
import { GoHeart, GoHeartFill } from 'react-icons/go';


export const ProductInteractionBar = ({ name, price, discount, inventory, counterProduct, increment, decrement }) => {

    const priceFormat = formatNumber(price);

  return (
    <div className='min-w-[300px] p-4 border rounded-md'>
      <div>
        <span>{name}</span>
        <div className='mt-3 flex'>
          <span className='text-2xl'>$ {priceFormat}</span>
          { discount && <span className='text-actions-discount font-semibold ml-1'>{discount}% OFF</span>}
        </div>
      </div>
      <div className='w-full mt-4'>
          <div>
            <div></div>
            <div className='flex items-center'>
              <button
                onClick={()=>decrement(1)}
                 className='h-10 w-10 flex items-center justify-center'>-</button>
              <span>{counterProduct}</span>
              <button
                onClick={()=>increment(1)}
                className='h-10 w-10 flex items-center justify-center'>+</button>
            </div>
          </div>
          <button 
            className='w-full h-10 first-letter:uppercase active:scale-95 duration-300 text-white rounded-md bg-actions-success hover:bg-actions-success/60'>comprar ahora</button>
          <button 
            className='w-full h-10 first-letter:uppercase active:scale-95 duration-300 text-actions-success rounded-md bg-actions-success/40 hover:bg-actions-success/60 mt-4'>agregar al carrito</button>
      </div>
    </div>
  )
}
