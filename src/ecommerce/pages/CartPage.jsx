import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductCart } from '../components/CartPage/ProductCart';

export const CartPage = () => {

  const { products } = useSelector(state => state.ecommerce);

  return (
    <section className='w-full flex justify-center lg:pt-10'>
        <div className='w-full flex flex-col-reverse
                        lg:flex-row lg:max-w-[1180px] lg:justify-between lg:gap-5'>
          <div className='w-full min-h-[400px] flex flex-col items-center bg-white rounded-md
                          lg:w-2/3 lg:shadow-md lg:min-h-fit'>
            <div className='hidden w-full h-12 lg:flex items-center px-5'>
              <p className='text-base'>Productos</p>
              </div>
                <div className='border-separator w-11/12 h-[1px] bg-black/10 lg:w-full'>
                </div>
                  <ul className='w-full flex flex-col gap-3 items-center p-3'>
                        <ProductCart {...products[0]}/>
                        <ProductCart {...products[1]}/>
                        <ProductCart {...products[2]}/>
                        <ProductCart {...products[3]}/>
                </ul>
              <div>
            </div>
          </div>
        
          <div className='w-full flex flex-col items-center bg-white
                          lg:w-[340px] lg:max-h-[220px] lg:rounded-md lg:sticky lg:top-0 lg:shadow-md'>
            <div className='w-full h-12 flex items-center px-5'>
              <p className='text-base'>Resumen de compra</p>
            </div>
            <div className='w-full h-[1px] bg-black/10'></div>
            <div className='w-full flex flex-col p-5 gap-[2px]'>
              <div className='flex justify-between text-sm'>
                <span>Producto{`(${'1'})`}</span>
                <span>$ 300.000</span>
              </div>
              <div className='flex justify-between text-sm'>
                <span>Envio</span>
                <span>$ 10.000</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-semibold'>Total</span>
                <span className='font-semibold'>$ 24.040</span>
              </div>
            </div>
            <div className='w-11/12 pb-5'>
            <button 
              onClick={''}
              className='w-full h-12 text-white flex items-center justify-center font-semibold rounded-md bg-actions-success active:scale-95 hover:bg-actions-success/90 duration-300'>
              Continuar compra
              {/* <span class="loader w-12 h-12 rounded-full inline-block border-white border-t-[3px] box-border rotate-2"></span> */}
            </button>
            </div>
          </div>
        </div>
    </section>
  )
}
