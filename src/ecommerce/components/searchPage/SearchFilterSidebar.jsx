import { useEffect, useState } from 'react';

// ICONS
import { GoArrowSwitch } from 'react-icons/go';
import { IoIosArrowUp } from 'react-icons/io';
import { useSelector } from 'react-redux';

// COMPONENTS



export const SearchFilterSidebar = () => {


  const { categories } = useSelector(state => state.ecommerce );
  const [ prueba, setPrueba ] = useState(false);
  const [ displayFilter, setDisplayFilter ] = useState({ category: false, ordener: false, });
  
  console.log(categories)

  return (
    <aside className='w-full'>
      <div className='w-full h-12 flex items-center justify-between relative px-4 shadow-md 
                      lg:hidden'>
        <span className='text-sm text-black/50'>
          +2000 Resultados
        </span>
        <button onClick={() => setPrueba(!prueba)} className='text-sm flex items-center gap-2 text-actions-success'>
          Filtrar {`(1)`} <IoIosArrowUp className='rotate-180'/>
        </button>
        { prueba && <div className='absolute w-full h-screen left-0 top-24 bg-black/10'></div>}
        { 
          prueba && 
              <div className='absolute flex flex-col w-72 min-h-20 right-1 top-12 bg-white rounded-md shadow-md'>
                <div className='w-full h-12 flex px-4 items-center justify-between shadow-md relative'>
                  <h3 className='text-sm font-semibold z-10'>Filtrar por:</h3>
                  <button className='text-xs text-actions-success z-10'>Limpiar filtro</button>
                  <div className='absolute bg-white h-10 w-10 z-0 right-6 top-0 rotate-45'></div>
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
                  className='w-full h-12 px-4 flex items-center justify-between'>
                    <div className='flex flex-col items-start'>
                      <h3 className='font-semibold'>Elegir categoria</h3>
                      <span className='text-actions-success'>Mas relevante</span>
                    </div>
                    <span className='text-actions-success'>
                      <IoIosArrowUp className='rotate-180'/>
                    </span>
                  </button>
                  <ul
                    className={`w-full bg-gray-500/35 scroll-smooth duration-500 overflow-y-visible overflow-hidden scrollbar
                                  ${ displayFilter.category ? 'h-[576px]' : 'h-0' }`}>
                    {
                      categories.map(category => (
                        <li 
                          key={category.id}
                          className='w-full h-12 flex items-center px-4'>
                          <button>
                            { category.name }
                          </button>
                        </li>
                      ))
                    }
                  </ul>
                </div>

                <hr className='w-full h-[1px] bg-black/10' />
                {/* <div className='w-full text-xs'>
                  <button 
                    onClick={() => setDisplayFilter(prevState => ({...prevState,  pruebaClick:{ show: !prevState.pruebaClick.show }}))}
                  className='w-full h-12 px-4 flex items-center justify-between'>
                    <div className='flex flex-col items-start'>
                      <h3 className='font-semibold'>Elegir prueba</h3>
                      { displayFilter.pruebaClick.select && <span className='text-actions-success'>Mas relevante</span>}
                    </div>
                    <span className='text-actions-success'>
                      <IoIosArrowUp className='rotate-180'/>
                    </span>
                  </button>
                  <ul className={`w-full bg-gray-500/35 scroll-smooth duration-300 overflow-hidden
                                  ${ displayFilter.pruebaClick.show ? 'h-24' : 'h-0' }`}>
                      <li className='w-full h-12'>
                        <button
                          onClick={() => setDisplayFilter(prevState => ({...prevState,  pruebaClick: { select: 'prueba1' }}))}
                           className='w-full h-full'>
                          prueba 1
                        </button>

                      </li>
                      <hr className='w-full h-[1px] bg-black/10' />
                      <li className='w-full h-12'>
                        <button className=''>
                          prueba 1
                        </button>

                      </li>
                  </ul>
                </div>
                 */}

              </div>
        }
      </div>
    </aside>
  )
}
