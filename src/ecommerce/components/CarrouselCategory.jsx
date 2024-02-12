import React, { useEffect, useRef, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6';
import { CategoryCard } from './CategoriesPage/CategoryCard';

export const CarrouselCategory = ({data, itemPagina = 4}) => {

    const carrousel = useRef(null);

    const [ width, setWidth ] = useState({})

    // Pagination
    const [ paginaActual, setPaginaActual ] = useState(1);
    const pagination = Math.ceil(data.length / itemPagina);

    // Scrolls
    const scroll_prev = () => { 
      carrousel.current.scrollBy(-width.width,0)
      setPaginaActual(paginaActual-1)
    }
    const scroll_next = () => { 
      carrousel.current.scrollBy(width.width,0)
      setPaginaActual(paginaActual+1)
    }

    useEffect(() => {
      const rect = carrousel.current

      if (rect) {
        const widthCarrousel = rect.getBoundingClientRect();
        setWidth(widthCarrousel)
      }

    },[width.width]); 

  return (
    <section className='w-full flex items-center justify-center mt-5'>
        <div className={`w-11/12 flex flex-col gap-[1px]
                        lg:bg-white lg:rounded-md lg:w-[1180px]`}>
            <div className='w-full h-14 rounded-t-md bg-white px-5 flex gap-2 items-center justify-between'>
                <div className='flex gap-3 justify-end'>
                    <h3 className='font-semibold lg:text-lg'>Ofertas</h3>
                    <button className=''>
                        <p className='hidden lg:block lg:text-sm lg:text-actions-success first-letter:uppercase font-semibold lg:font-normal'>mostrar todas las ofertas</p>
                    </button>
                </div>
                <div className='hidden lg:flex items-center gap-1'>
                    {
                        [...Array(pagination)].map((_, index) => (
                            <button key={index}
                             disabled
                             className={`w-[6px] h-[6px] rounded-full active:bg-actions-success
                                        ${index + 1 === paginaActual ? 'bg-actions-success' : 'bg-gray-400/50'}`}>
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className='w-full relative'>
                    <button 
                      onClick={scroll_prev} 
                      className={`absolute w-16 h-16 hidden items-center justify-center rounded-full shadow-lg hover:shadow-xl bg-white top-[calc(50%-40px)] -left-8 z-20 text-actions-success/80
                                  hover:text-actions-success ${ paginaActual === 1 ? 'lg:hidden' : 'lg:flex'} `}>
                        <FaAngleLeft size={30} className=''/>
                    </button>
                    <button 
                      onClick={scroll_next}
                      className={`absolute w-16 h-16 hidden items-center justify-center rounded-full shadow-lg hover:shadow-xl bg-white top-[calc(50%-40px)] -right-8 z-20 text-actions-success/80
                                  hover:text-actions-success ${ paginaActual === pagination ? 'hidden' : 'lg:flex'}`}>
                        <FaAngleLeft size={30} className='rotate-180'/>
                    </button>
                    {/* ----- Ul Container ----- */}
                <ul ref={carrousel} className='grid row-auto p-3 bg-white gap-3
                                                lg:flex lg:p-5 lg:pt-0 lg:gap-5 lg:overflow-hidden lg:scroll-smooth'>
                    {
                        data.reduce((acc, category, index) => {
                            if (index % 3 === 0) {
                              acc.push([]);
                            }
                            acc[acc.length - 1].push(category);
                            return acc;
                          }, []).map((group, groupIndex) => (
                        <div key={groupIndex} className='flex min-w-[270px] items-center gap-3 justify-between
                                                        lg:flex-col lg:gap-5'>
                        {group.map((category) => (
                            <CategoryCard key={category.id} {...category} />
                        ))}
                        </div>
                    ))}
                </ul>
            </div>
            <div className='w-full h-12 bg-white rounded-b-md lg:hidden'>
                <button className='w-full h-full px-5 flex items-center justify-between text-xs text-actions-success'>
                    <p className='first-letter:uppercase font-semibold'>ver mas categorias</p>
                    <FaAngleLeft className='rotate-180'/>
                </button>
            </div>
        </div>
    </section>
  )
}
