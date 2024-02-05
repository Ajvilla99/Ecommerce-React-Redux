import { useEffect, useState } from 'react';

// ICONS
import { IoIosArrowUp } from 'react-icons/io';
import { useSelector } from 'react-redux';

// COMPONENTS
import { SearchFilterSidebarMobile } from './FilterSidebarMobile';



export const SearchFilterSidebar = () => {

  const { categories } = useSelector(state => state.ecommerce );

  const [ viewFilter, setViewFilter ] = useState(false);

  useEffect(() => {
    if (viewFilter) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [viewFilter]);

  return (
    <aside className='w-full'>
      <div className='w-full h-12 flex items-center justify-between relative px-4 shadow-md 
                      lg:hidden'>
        <span className='text-sm text-black/50'>
          +2000 Resultados
        </span>
        <button onClick={() => setViewFilter(!viewFilter)} className='text-sm flex items-center gap-2 text-actions-success'>
          Filtrar {`(1)`} <IoIosArrowUp className='rotate-180'/>
        </button>
        { viewFilter && 
            <div
              onClick={() => setViewFilter(false)}
              className='absolute w-full h-screen left-0 z-10 top-12 bg-black/20'></div>}
        { 
          viewFilter && 
            <SearchFilterSidebarMobile 
              categories={categories} />
        }
      </div>
    </aside>
  )
}
