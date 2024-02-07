import { useState } from 'react';

// Icons
import { IoIosArrowUp } from 'react-icons/io';
import { IoMdClose } from "react-icons/io";
import { RxStarFilled, RxStar } from 'react-icons/rx';


export const FilterSideBarDesktop = () => {

  const [view, setView] = useState({ star: false })

  return (
    <div className='w-full h-screen rounded-md px-4 flex flex-col gap-3'>
      <ul className='filterSearchActive w-full flex flex-wrap gap-2'>
        {
          ['Carta', 'Hasta $90.000', 'Desde $25.000', 'Agua'].map((_, i) => (
            <li 
              key={i}
              className='text-gray-500 bg-white/70 text-sm rounded-[4px] flex items-center justify-between px-2 py-1 shadow-sm
                          hover:bg-black/5 hover:text-black cursor-pointer'>
              <p className='text-sm '>{_}</p>
              <button

                className='ml-2 h-full flex items-center text-sm'>
                <IoMdClose/>
              </button>
            </li>
          ))
        }
      </ul>
        <div className='w-full flex flex-col'>

          <div className={`w-full flex flex-col overflow-hidden scroll-smooth duration-500
                          ${ view.star ? 'h-[260px]' : 'h-10'}`}>
            <button
              onClick={() => setView(prevView => ({ ...prevView, star: !view.star }))}
              className={`w-full min-h-10 flex justify-between items-center px-1 hover:text-actions-success
                          ${ view.star ? 'border-b-2 border-actions-success text-actions-success' : ''}`}>
              <p className='text-sm first-letter:uppercase'>
                Calificación
              </p>
              <span className={`text-xl duration-500  ${view.star ? '' : 'rotate-180'}`}>
                <IoIosArrowUp/>
              </span>
            </button>
            <ul className='w-full flex flex-col gap-1 pt-0.5'>
              {
                [...Array(5).keys()].map((_, i) => (
                  <li key={i} className='w-full h-10 hover:bg-black/5'>
                    <button className='w-full h-full flex items-center gap-2 text-actions-success px-1'>
                    { Array(5 - i).fill(<RxStarFilled />).concat(Array(i).fill(<RxStar />)).map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
      <span className='separator w-full h-[2px] bg-black/10'></span>
        </div>
    </div>
  )
}
