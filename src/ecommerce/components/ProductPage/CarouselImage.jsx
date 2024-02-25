import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { SlArrowLeft } from 'react-icons/sl'
import { useCounter, useDisplaySize } from '../../../hooks';

export const CarouselImage = ({ data = [] }) => {

    const { counter, increment, decrement } = useCounter(1);
    const { width } = useDisplaySize();

    const prueba = useRef(null);

    data = [
        { id: 'img1', image: 'https://http2.mlstatic.com/D_Q_NP_2X_724288-MLU73557327279_122023-AB.webp' },
        { id: 'img2', image: 'https://http2.mlstatic.com/D_Q_NP_2X_868154-MCO73494261492_122023-AB.webp' },
        { id: 'img3', image: 'https://http2.mlstatic.com/D_Q_NP_2X_766582-MLA73075460021_112023-AB.webp' },
        { id: 'img4', image: 'https://http2.mlstatic.com/D_Q_NP_2X_992802-MLU72746216408_112023-AB.webp' },
    ]

    const btnPrev = () => {
        if (counter  === 1) return;
        decrement()
        prueba.current.scrollBy(-width, 0);
    }
    const btnNext = () => {
        if (!(counter < data.length)) return;
        increment()
        prueba.current.scrollBy(width, 0);
    }

  return (
    <div className='w-full min-h-[500px] relative flex items-center'>
        <button
            onClick={btnPrev}
            className='w-20 h-32 flex items-center justify-center text-6xl text-actions-success absolute left-0 z-30'>
            <span className='rotate-'>
                <SlArrowLeft />
            </span>
        </button>
        <button 
            onClick={btnNext}
            className='w-20 h-32 flex items-center justify-center text-6xl text-actions-success absolute right-0 z-30'>
            <span className='rotate-180'>
                <SlArrowLeft />
            </span>
        </button>
        <div 
            ref={prueba}
            className='w-full h-full flex items-center flex-nowrap overflow-hidden scroll-smooth relative'>
            {
                data.map(({id, image}, i)=>(
                    <div key={`prueba ${i}`} className='min-w-full min-h-full'>
                        <img src={image} alt='image' 
                            className='w-full object-contain p-6'/>
                    </div>
                ))
            }
            <div className='bg-primary flex px-2 rounded-r py-0.5 gap-0.5 absolute left-0 top-3 text-white'>
                <span>{counter}</span>
                <span>/</span>
                <span>{ data.length }</span> 
            </div>
        </div>
    </div>
  )
}
