import { useEffect, useState } from 'react';

// ICONS
import { GoArrowSwitch } from 'react-icons/go';
import { IoIosArrowUp } from 'react-icons/io';
import { useSelector } from 'react-redux';

// COMPONENTS
import { SearchFilterSidebarMobile } from './SearchFilterSidebarMobile';



export const SearchFilterSidebar = () => {


  const { categories } = useSelector(state => state.ecommerce );
  const [ prueba, setPrueba ] = useState(false);

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
        { prueba && <div className='fixed w-full h-screen left-0 z-10 top-24 bg-black/10'></div>}
        { 
          prueba && 
            <SearchFilterSidebarMobile categories={categories} />
        }
      </div>
    </aside>
  )
}
