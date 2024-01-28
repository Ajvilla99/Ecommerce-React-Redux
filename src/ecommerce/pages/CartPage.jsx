import React from 'react'
import { useSelector } from 'react-redux'

export const CartPage = () => {

  const { products } = useSelector(state => state.ecommerce);

  const product = products[0]

  return (
    <section className='w-full flex justify-center'>
        <div className='w-full flex flex-col-reverse'>
          <div className='w-full flex flex-col items-center bg-white rounded-md mb-10'>
            <div className='hidden'>
              <p className='text-base'>Productos</p>
            </div>
            <div className='w-full h-[1px] bg-black/10'>
            </div>
              <ul className='w-full flex flex-col items-center py-3'>
                <li className='w-full h-40 flex p-3'>
                  <div className='w-full h-full relative p-3'>
                    <div className='w-full h-full absolute left-0 top-0 bg-black/5 rounded-md'></div>
                    <div className='w-full h-full flex flex-row'>
                      <div className='w-2/5 h-full flex items-center'>
                        <img src={product.image} alt={''} className='max-w-[95%] max-h-[95%] object-cover' />
                      </div>
                      <div className='w-3/5'>
                          <div className='flex flex-col gap-2'>
                              <h3 className='text-sm line-clamp-2'>{ product.name }</h3>
                              <span className='font-semibold max-w-fit text-xs p-2 box-content rounded-md bg-actions-discount'>{`${product.discount}% OFF`}</span>
                              <span className='font-semibold'>$ { product.price }</span>
                          </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='w-full h-40 flex p-3'>
                  <div className='w-full h-full relative p-3'>
                    <div className='w-full h-full absolute left-0 top-0 bg-black/5 rounded-md'></div>
                    <div className='w-full h-full flex flex-row'>
                      <div className='w-2/5 h-full flex items-center'>
                        <img src={product.image} alt={''} className='max-w-[95%] max-h-[95%] object-cover' />
                      </div>
                      <div className='w-3/5'>
                          <div className='flex flex-col gap-2'>
                              <h3 className='text-sm line-clamp-2'>{ product.name }</h3>
                              <span className='font-semibold max-w-fit text-xs p-2 box-content rounded-md bg-actions-discount'>{`${product.discount}% OFF`}</span>
                              <span className='font-semibold'>$ { product.price }</span>
                          </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            <div>
            </div>
          </div>
        <div className='w-full h-[1px] bg-black/10'></div>
          <div className='w-full flex flex-col items-center bg-white'>
            <div className='w-full h-14 flex items-center px-5'>
              <p className='text-base'>Resumen de compra</p>
            </div>
            <div className='w-full h-[1px] bg-black/10'></div>
            <div className='w-full flex flex-col p-5 gap-[2px]'>
              <div className='flex justify-between text-sm'>
                <span>Producto</span>
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
