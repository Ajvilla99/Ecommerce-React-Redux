import React from 'react'

import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const products = [
  {
    "id": 1,
    "nombre": "Camiseta básica",
    "precio": 19.99,
    "descripcion": "Una cómoda camiseta de algodón en colores variados.",
    "imagen": "https://ejemplo.com/camiseta.jpg"
  },
  {
    "id": 2,
    "nombre": "Zapatos deportivos",
    "precio": 49.99,
    "descripcion": "Zapatos para correr con suela amortiguadora y diseño moderno.",
    "imagen": "https://ejemplo.com/zapatos.jpg"
  },
  {
    "id": 3,
    "nombre": "Mochila resistente",
    "precio": 39.99,
    "descripcion": "Una mochila espaciosa y duradera para el día a día.",
    "imagen": "https://ejemplo.com/mochila.jpg"
  },
  {
    "id": 4,
    "nombre": "Reloj inteligente",
    "precio": 89.99,
    "descripcion": "Un reloj con funciones inteligentes y pantalla táctil.",
    "imagen": "https://ejemplo.com/reloj.jpg"
  }
]

export const CarrouselProduct = () => {
  return (
    <section className='w-full flex items-center justify-center mt-5'>
        <div className='w-11/12 flex flex-col gap-[1px]
                        lg:min-w-[826px] lg:bg-white lg:rounded-md'>
            <div className='w-full h-12 rounded-t-md bg-white px-5 flex gap-2 items-center justify-between'>
                <div className='flex'>
                    <h3 className='font-semibold lg:text-lg'>Ofertas</h3>
                    <button className='pt-[9px] pb-[8px] px-[12px]'>
                        <p className='hidden lg:block lg:text-sm lg:text-actions-success first-letter:uppercase font-semibold'>mostrar todas las ofertas</p>
                    </button>
                </div>
                <div className='flex items-center gap-1'>
                    {
                        products.map((data) => (
                            <button
                             disabled
                             className='w-[6px] h-[6px] bg-gray-400/50 rounded-full'>

                            </button>
                        ))
                    }
                </div>
            </div>
            <div className='w-full'>
                <ul className='grid grid-cols-2 gap-[1px]
                               lg:flex lg:flex-nowrap lg:rounded-b-md lg:relative'>
                    <button className='absolute w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-white top-[calc(50%-40px)] -left-8 z-20 text-actions-success'>
                        <FaAngleLeft className='rotate-180'/>
                    </button>
                    <button className='absolute w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-white top-[calc(50%-40px)] -right-8 z-20 text-actions-success'>
                        <FaAngleLeft className='rotate-180'/>
                    </button>
                    {
                        products.map((data) => (
                            <li className='p-1 w-full h-full bg-white
                                    lg:h-[361px]' >
                    <div className='w-full h-full'>
                        <div className='w-full relative flex flex-col mb-5'>
                        <span className='absolute w-full h-full left-0 top-0 bg-gray-600/5 lg:hidden'></span>
                            <img src='https://http2.mlstatic.com/D_Q_NP_2X_794797-MLA50436072460_062022-V.webp' alt={data.name} className='object-cover lg:object-contain aspect-square' />
                        </div>
                        {/* <Link className=''>
                            Audífonos Sony Bluetooth Noise Cancelling | Wh-1000xm5 Color Negro
                        </Link>
                        <div className=''>
                            <s className='0'>
                                $ 3.000.000
                            </s>
                            <div className=''>
                                <span className=''>$ 1.900.000</span>
                                <span className=''>50% off</span>
                            </div>
                        </div> */}
                    </div>
                </li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full h-12 bg-white rounded-b-md lg:hidden'>
                <button className='w-full h-full px-5 flex items-center justify-between text-xs'>
                    <p className='first-letter:uppercase font-semibold text-actions-success'>ver mas ofertas</p>
                    <FaAngleLeft className='rotate-180'/>
                </button>
            </div>
        </div>
    </section>
  )
}
