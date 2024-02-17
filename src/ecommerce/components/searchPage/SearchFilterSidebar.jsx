import { useEffect, useState } from 'react';

// ICONS
import { IoIosArrowUp } from 'react-icons/io';
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

// COMPONENTS
import { SearchFilterSidebarMobile } from './FilterMobile';
import { FilterSideBarDesktop } from './FilterDesktop';
import { useDisplaySize } from '../../../hooks';



export const SearchFilterSidebar = ({ searchText }) => {


  const { width } = useDisplaySize()
  const { categories } = useSelector(state => state.ecommerce );

  const [ viewFilterMobile, setViewFilterMobile ] = useState(false);

  useEffect(() => {
    if (viewFilterMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [viewFilterMobile]);

  return (
    <aside className='w-full lg:w-[300px]'>
      <div className='w-full h-12 flex items-center justify-between relative px-4 shadow-md 
                      lg:hidden'>
        <span className='text-sm text-black/50'>
          +2000 Resultados
        </span>
        <button onClick={() => setViewFilterMobile(!viewFilterMobile)} className='text-sm flex items-center gap-2 text-actions-success'>
          Filtrar {`(1)`} <IoIosArrowUp className='rotate-180'/>
        </button>
        { 
          viewFilterMobile && 
            <div
              onClick={() => setViewFilterMobile(false)}
              className='absolute w-full h-screen left-0 z-10 top-12 bg-black/20'>
            </div>
        }
        { 
          viewFilterMobile && 
            <SearchFilterSidebarMobile 
              categories={categories} />
        }
      </div>
      { 
        width >= 1024 
          && <div className='w-full flex flex-col gap-3'>
                <div className='w-full h-12 flex items-center px-4'>
                  <IoSearchOutline className='text-xl text-gray-700 mr-2'/>
                  <span className='text-xl text-gray-700'>{searchText}</span>
                </div>
                <FilterSideBarDesktop categories={categories} />
              </div>
      }
    </aside>
  )
}
