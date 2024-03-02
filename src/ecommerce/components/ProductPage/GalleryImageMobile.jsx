import React, { useEffect, useRef, useState } from 'react'
import { useCounter } from '../../../hooks';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export const GalleryImageMobile = ({ images}) => {

    const { counter, increment, decrement } = useCounter(1);
    const [ width, setWidth ] = useState({width: 0})
    const slider = useRef(null);
  
    useEffect(() => {
      const sliderScroll = slider.current;
      if (sliderScroll) {
        const rect = sliderScroll.getBoundingClientRect();
        setWidth(rect.width);
      }
    }, [width]);

    const btnPrev = () => {
        if (counter  === 1) return;
        decrement()
        console.log(width);
        slider.current.scrollBy(-width, 0);
    }
    const btnNext = () => {
        if (!( counter < images.length)) return;
        increment()
        console.log(width);
        slider.current.scrollBy(width, 0);
    }

  return (
        <div className='w-full h-[400px] min-h-[400px] max-h-[400px] relative flex items-center bg-white'>
            <button
                disabled={counter===1}
                onClick={btnPrev}
                className={`absolute left-0 w-16 flex items-center justify-center text-actions-success text-4xl
                            ${ counter === 1 && 'text-actions-success/40' }`}>
                <SlArrowLeft />
            </button>
            <button
                disabled={counter===images.length}
                onClick={btnNext}
                className={`absolute right-0 w-16 flex items-center justify-center text-actions-success text-4xl
                            ${ counter === images.length && 'text-actions-success/40' }`}>
                <SlArrowRight />
            </button>
            <div className='absolute bg-primary-light px-3 py-0.5 top-0 right-0 flex'>
                <span>{counter}</span>
                <span>/</span>
                <span>{ images.length }</span>
            </div>
            <div
                ref={slider}
                className='w-full h-full inline-flex overflow-hidden scroll-smooth'>
                {
                    images.map((img, index) => (
                        <div  
                            key={img}
                            className='min-w-full h-full'>
                            <figure className='w-full h-full'>
                                <img
                                    src={img} alt={img + index} 
                                    className='min-w-full max-w-full min-h-full max-h-full p-10 object-contain'/>
                            </figure>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

