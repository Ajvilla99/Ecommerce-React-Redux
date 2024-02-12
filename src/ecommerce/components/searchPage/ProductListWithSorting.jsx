
//Icons
import { IoIosArrowUp } from 'react-icons/io';

// Components
import { ProductCardSearch } from './'
import { useState } from 'react';



export const ProductListWithSorting = ({ products }) => {

  const [ stringOrdener, setStringOrdener ] = useState([
    { name: 'Más relevantes'}, 
    { name: 'Menor precio',}, 
    { name: 'Mayor precio',}, 
    ])

  return (
    <div className='w-full flex lg:flex-col gap-3
                    lg:w-[calc(1180px-370px)]'>
      <div className='hidden h-12 lg:flex items-end justify-end'>
        <div className='relative flex gap-2 text-sm'>
          <span>Ordenar por:</span>
          <button className='flex gap-1 items-center'>
            Más relevantes
            <p className='rotate-180'>
              <IoIosArrowUp />
            </p>
          </button>
          <div className='hidden absolute top-[130%] -right-5 rounded-md shadow-md z-30 bg-black/15 overflow-hidden'>
            <ul className='flex flex-col gap-[1px]'>
              {
                stringOrdener.map((_, i) => (
                    <li key={i} className={`w-full h-10 bg-white border-l-[6px] border-actions-success`}>
                      <button className='w-full h-full px-2 flex items-center hover:bg-black/15 hover:text-actions-success'>
                          {_.name}
                      </button>
                    </li>
                ))
               }
              
            </ul>
          </div>
        </div>
      </div>
      <ul className='w-full flex flex-col py-3 bg-white
                    lg:pb-3 lg:pt-0 lg:gap-0.5 lg:bg-transparent'>
        {
          products.map(product => (
            <ProductCardSearch  key={product.id} {...product}/>
          ))
        }
      </ul>
    </div>
  )
}
