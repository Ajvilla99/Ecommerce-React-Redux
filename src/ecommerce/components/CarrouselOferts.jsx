import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { ProductCard } from './ProductCard'
import { useSelector } from 'react-redux'



export const CarrouselOferts = () => {

  const { state, products } = useSelector( state => state.ecommerce );

  return (
    <section className='w-full flex items-center justify-center mt-5
                        lg:justify-start'>
        <div className='w-11/12 flex flex-col gap-[1px]
                        lg:min-w-[325.6px]
                        lg:bg-white lg:rounded-md overflow-hidden'>
            <div className='w-full h-14 rounded-t-md bg-white px-5 flex gap-2 items-center'>
                <h3 className='font-semibold text-lg'>Oferta del dia</h3>
            </div>
            <ul className='w-full bg-white'>
                { products.length > 0 && <ProductCard {...products[0]} full /> }
            </ul>
            <div className='w-full bg-white rounded-b-md lg:hidden'>
                <button className='w-full px-5 h-14 flex items-center justify-between text-sm text-actions-success font-semibold'>
                    Ver todas las ofertas <FaAngleLeft className='rotate-180'/>
                </button>
            </div>
        </div>
    </section>
  )
}
