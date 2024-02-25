//Hooks
import { useState } from 'react';
//Custom Hooks
import { useCounter } from '../../../hooks';

// Icons
import { FaAngleLeft } from 'react-icons/fa6'

//Functions
import { formatNumber } from '../../helpers';
import { GoHeart, GoHeartFill } from 'react-icons/go';


export const ProductInteractionBar = ({ price, discount, inventory }) => {

  const [ viewState, setViewState ] = useState({ heart: false, })
    const { counter } = useCounter(1);
    const priceFormat = formatNumber(price);

  return (
    <div>
      <div className='px-4 lg:p-0 flex justify-between items-center gap-1
                      lg:flex-col-reverse'>
        <div className='flex gap-1 lg:w-full lg:pl-1'>
          <span className='text-xl'>$ {priceFormat}</span>
          <span className='text-actions-discount text-sm'>{discount}% OFF</span>
        </div>
        <div className='w-fit lg:w-full lg:flex lg:justify-end'>
          <button 
            onClick={() => setViewState(prevState => ({ ...prevState, heart: !viewState.heart }))}
            className={`w-12 h-12 lg:w-8 lg:h-8 flex items-center justify-center text-3xl duration-200 ${viewState.heart ? 'text-actions-success' : 'text-actions-success/70'}`}>
            { viewState.heart ? <GoHeartFill/> : <GoHeart/>}
          </button>
        </div>
      </div>
      <div className='button flex flex-col px-4 mt-4 mb-5 lg:px-0'>
        <button className='w-full h-12 lg:h-8 bg-black/10 lg:bg-transparent flex justify-between items-center px-2 text-black/80 text-sm rounded-md first-letter:uppercase'>
            <div className='ml-2 lg:ml-0'>
            <span className='capitalize'>cantidad:</span>
            <span className='ml-2'>{counter}</span>
            <span className='ml-2 text-black/50 text-xs'>{`(${inventory} disponibles)`}</span>
            </div>
            <span className='rotate-180 text-sm text-actions-success'><FaAngleLeft /></span>
        </button>
        <button 
          className='w-full h-12 lg:h-10 lg:text-sm mt-5 font-medium bg-actions-success rounded-md text-white first-letter:uppercase
                      duration-300 hover:bg-actions-success/80'>comprar ahora</button>
        <button 
          className='w-full h-12 lg:h-10 lg:text-sm mt-2 font-medium bg-actions-success/30 rounded-md text-actions-success first-letter:uppercase
                      duration-300 hover:bg-actions-success/50'>agregar al carrito</button>
    </div>
    </div>
  )
}
