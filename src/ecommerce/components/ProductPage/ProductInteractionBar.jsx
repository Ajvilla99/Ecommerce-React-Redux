//Hooks
import { useState } from 'react';
//Custom Hooks
import { useCounter } from '../../../hooks';

// Icons
import { FaAngleLeft } from 'react-icons/fa6'

//Functions
import { formatNumber } from '../../helpers';
import { GoHeart, GoHeartFill } from 'react-icons/go';


export const ProductInteractionBar = ({ name, price, discount, inventory }) => {

    const { counter, increment, decrement } = useCounter();
    const priceFormat = formatNumber(price);

  return (
    <div className='min-w-[300px] p-4 border rounded-md'>
      <div>
        <span>{name}</span>
        <div className='mt-3'>
          <span className='text-2xl'>$ {priceFormat}</span>
          { discount && <span>{discount}% OFF</span>}
        </div>
      </div>
      <div className='w-full mt-4'>
          <div></div>
          <button className='w-full h-12 first-letter:uppercase active:scale-95 duration-300 text-white rounded-md bg-actions-success'>comprar ahora</button>
          <button className='w-full h-12 first-letter:uppercase active:scale-95 duration-300 text-actions-success rounded-md bg-actions-success/40 mt-4'>agregar al carrito</button>
      </div>
    </div>
  )
}
