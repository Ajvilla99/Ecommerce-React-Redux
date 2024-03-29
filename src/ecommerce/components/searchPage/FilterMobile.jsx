import { useRef, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';


export const SearchFilterSidebarMobile = ({categories}) => {

  const [ displayFilter, setDisplayFilter ] = useState({ category: false, ordener: false, price: false});


  return (
    
    <div className='absolute flex flex-col w-72 min-h-20 right-1 top-12 bg-white rounded-md shadow-md z-30'>
                <div className='w-full h-12 flex px-4 items-center justify-between shadow-md relative'>
                  <h3 className='text-sm font-semibold'>Filtrar por:</h3>
                  <button className='text-xs text-actions-success z-30'>Limpiar filtro</button>
                  <div className='absolute bg-white h-10 w-10 z-10 right-6 top-0 rotate-45'></div>
                </div>

                <div className='w-full text-xs'>
                  <button 
                    onClick={() => setDisplayFilter( prevState => ({ ...prevState, ordener: !prevState.ordener })) }
                  className='w-full h-12 px-4 flex items-center justify-between'>
                    <div className='flex flex-col items-start'>
                      <h3 className='font-semibold'>Ordenar por:</h3>
                      <span className='text-actions-success'>Mas relevante</span>
                    </div>
                    <span className='text-actions-success'>
                      <IoIosArrowUp className='rotate-180'/>
                    </span>
                  </button>
                  <ul className={`w-full bg-gray-500/35 scroll-smooth duration-300 overflow-hidden
                                  ${ displayFilter.ordener ? 'h-24' : 'h-0' }`}>
                      <li className='h-12'>

                      </li>
                      <hr className='w-full h-[1px] bg-black/10' />
                      <li className='h-12'>

                      </li>
                  </ul>
                </div>

                <hr className='w-full h-[1px] bg-black/10' />
                <div className='w-full text-xs'>
                  <button 
                    onClick={() => setDisplayFilter( prevState => ({ ...prevState, category: !prevState.category }))}
                  className={`w-full h-12 px-4 flex items-center justify-between
                              ${ displayFilter.category ? 'border-b-2' : '' }`}>
                    <div className='flex flex-col items-start'>
                      <h3 className='font-semibold'>Elegir categoria</h3>
                      <span className='text-actions-success'>Mas relevante</span>
                    </div>
                    <span className='text-actions-success'>
                      <IoIosArrowUp className='rotate-180'/>
                    </span>
                  </button>
                  <ul
                    className={`w-full scroll-smooth duration-500 overflow-y-visible overflow-hidden flex flex-col gap-[1px] bg-black/5
                                  ${ displayFilter.category ? 'h-[587px]' : 'h-0' }`}>
                    {
                      categories.map(category => (
                        <li
                          key={category.id}
                          className='w-full min-h-12 max-h-12 bg-white/50'>
                          <button className='w-full h-full px-4 flex items-center justify-between group
                                             active:bg-black/10'>
                            { category.name }
                            <span className={`w-4 h-4 flex items-center justify-center rounded-full border-[1px] border-black/50 group-active:border-actions-success`}>
                              <span className={`w-2.5 h-2.5 rounded-full group-active:bg-actions-success/80`}>
                              </span>
                            </span>
                          </button>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <hr className='w-full h-[1px] bg-black/10'/>
                <div className='w-full text-xs'>
                  <button 
                    onClick={() => setDisplayFilter( prevState => ({ ...prevState, price: !prevState.price }))}
                  className={`w-full h-12 px-4 flex items-center justify-between
                              ${ displayFilter.price ? 'border-b-[2px]' : '' }`}>
                    <div className='flex flex-col items-start'>
                      <h3 className='font-semibold'>Precio</h3>
                      {/* <span className='text-actions-success'>90.000 - 150.000</span> */}
                    </div>
                    <span className='text-actions-success'>
                      <IoIosArrowUp className='rotate-180'/>
                    </span>
                  </button>
                  <div className={`w-full scroll-smooth duration-500 overflow-y-visible overflow-hidden flex flex-col gap-[1px] bg-black/5
                                  ${ displayFilter.price ? 'h-[135px]' : 'h-0' }`}>
                    <form className='w-full flex flex-col p-4 gap-3'>
                      <div className='w-full flex flex-row justify-between'>
                        <div className='w-5/12 relative flex flex-col gap-2'>
                          <span className='absolute text-sm text-gray-400 bottom-[5.5%]'>$</span>
                            <label className='text-gray-400'>Mínimo</label>
                          <input 
                            type=''
                            placeholder=''
                            name=''
                            // value=''
                            // onChange={''}
                            className='w-full h-6 text-gray-500 outline-none bg-transparent border-b-[2px] border-actions-success indent-3'
                          />
                        </div>
                        <div className='w-5/12 relative flex flex-col gap-2'>
                          <span className='absolute text-sm text-gray-400 bottom-[5.5%]'>$</span>
                            <label className='text-gray-400'>Máximo</label>
                          <input 
                            type=''
                            placeholder=''
                            name=''
                            // value=''
                            // onChange={''}
                            className='w-full h-6 text-gray-500 outline-none bg-transparent border-b-[2px] border-actions-success indent-3'
                          />
                        </div>
                        
                      </div>
                      <button 
                        type='submit'
                        className='w-full flex items-center justify-center h-10 bg-actions-success text-white font-semibold rounded-md'>
                        Aplicar
                      </button>
                    </form>
                  </div>
                </div>
                <hr className='w-full h-[1px] bg-black/10'/>
              </div>
  )
}
