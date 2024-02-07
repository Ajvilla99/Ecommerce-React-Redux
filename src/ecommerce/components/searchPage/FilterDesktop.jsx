import { useState } from 'react';

// Icons
import { IoIosArrowUp } from 'react-icons/io';
import { IoMdClose } from "react-icons/io";
import { RxStarFilled, RxStar } from 'react-icons/rx';


export const FilterSideBarDesktop = ({ categories }) => {

  const [view, setView] = useState({ star: false, categories: false})

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
              className={`w-full min-h-10 flex justify-between items-center px-2 hover:text-actions-success
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
                    <button className='w-full h-full flex items-center gap-2 text-actions-success px-2'>
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
          
          <div 
            style={{ scrollbarColor: 'red'}}
            className={`w-full flex flex-col overflow-hidden scroll-smooth duration-500
                          ${ view.categories ? 'h-[260px]' : 'h-10'}`}>
            <button
              onClick={() => setView( prevView => ({ ...prevView, categories: !view.categories }))}
              className={`w-full min-h-10 flex justify-between items-center px-2 hover:text-actions-success
                          ${ view.categories ? 'border-b-2 border-actions-success text-actions-success sticky top-0 bg-inherit' : ''}`}>
              <p className='text-sm first-letter:uppercase'>
                Categoria
              </p>
              <span className={`text-xl duration-500  ${view.categories ? '' : 'rotate-180'}`}>
                <IoIosArrowUp/>
              </span>
            </button>
            <ul className='w-full flex flex-col gap-1 pt-0.5 overflow-y-scroll'>
              {
                  categories.map(category => (
                    <li key={category.id} className='w-full min-h-10 max-h-10 rounded-md hover:bg-black/5 hover:text-actions-success'>
                      <button className='w-full h-full text-sm flex items-center gap-2 px-2'>
                        { category.name }
                      </button>
                    </li>
                  ))
              }
            </ul>
          </div>
          <span className='separator w-full h-[2px] bg-black/10'></span>

          <div className='w-full h-fit'>
            <div className='w-full h-10'>
              <span className='w-full h-full px-2 flex items-center text-sm'>
                Filtrar por precio
              </span>
            </div>
              <form 
              // onSubmit={}
               className='w-full py-2 flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                  <input type='text'
                    placeholder='Mínimo'
                    className='w-5/12 h-8 text-sm text-center rounded-md '/>
                  <span className='w-2 h-0.5 bg-black/50'></span>
                  <input type='text'
                    placeholder='Máximo'
                    className='w-5/12 h-8 text-sm text-center rounded-md '/>
                </div>
                <button className='text-sm text-white w-full bg-actions-success rounded-md py-2 hover:bg-opacity-80 duration-300 active:scale-95'>
                  Aplicar
                </button>
              </form>
          </div>
          <span className='separator w-full h-[2px] bg-black/10'></span>
          {/* <div className={`w-full flex flex-col overflow-hidden scroll-smooth duration-500
                          ${ view.data ? 'h-[260px]' : 'h-10'}`}>
            <button
              onClick={() => setView( prevView => ({ ...prevView, data: !view.data }))}
              className={`w-full min-h-10 flex justify-between items-center px-1 hover:text-actions-success
                          ${ view.data ? 'border-b-2 border-actions-success text-actions-success' : ''}`}>
              <p className='text-sm first-letter:uppercase'>
                data
              </p>
              <span className={`text-xl duration-500  ${view.data ? '' : 'rotate-180'}`}>
                <IoIosArrowUp/>
              </span>
            </button>
          </div>
          <span className='separator w-full h-[2px] bg-black/10'></span> */}
        </div>
    </div>
  )
}
