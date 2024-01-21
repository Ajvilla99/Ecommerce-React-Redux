import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const CarrouselOferts = () => {
  return (
    <section className='w-full flex items-center justify-center mt-5'>
        <div className='w-11/12 flex gap-[1px] flex-col items-center justify-center rounded-md overflow-hidden
                        lg:max-w-[380px] lg:gap-0'>
            <div className='w-full h-14 px-5 flex items-center bg-white'>
                <h3 className='font-semibold text-lg'>Oferta del dia</h3>
            </div>
            <ul className='w-full bg-white'>
                <li className='p-1 w-full h-full bg-white
                                    lg:h-[361px]' >
                    <div className='w-full h-full'>
                        <div className='w-full relative flex flex-col mb-5'>
                        <span className='absolute w-full h-full left-0 top-0 bg-gray-600/5 lg:hidden
                                        lg:min-'></span>
                            <img src='https://http2.mlstatic.com/D_Q_NP_2X_794797-MLA50436072460_062022-V.webp' alt='' className='object-cover lg:object-contain aspect-square' />
                        </div>
                        <Link className='text-black/85 px-3 text-xs line-clamp-2'>
                            Audífonos Sony Bluetooth Noise Cancelling | Wh-1000xm5 Color Negro
                        </Link>
                        <div className='pl-3 pb-3'>
                            <s className='text-xs text-gray-500'>
                                $ 3.000.000
                            </s>
                            <div className='flex gap-1'>
                                <span className='text-sm'>$ 1.900.000</span>
                                <span className='text-xs text-actions-discount uppercase'>50% off</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className='w-full bg-white lg:hidden'>
                <button className='w-full px-5 h-14 flex items-center justify-between text-sm text-actions-success font-semibold'>
                    Ver todas las ofertas <FaAngleLeft className='rotate-180'/>
                </button>
            </div>
        </div>
    </section>
  )
}
