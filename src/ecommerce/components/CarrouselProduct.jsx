import React, { useEffect, useRef, useState } from 'react'

import { FaAngleLeft } from "react-icons/fa6";
import { ProductCard } from './ProductCard';


const products = [
  {
    "id": 1,
    "name": "Lavadora Samsung 22kg Panel Multicontrol Negra | Wf22c6400av Color Negro 110v",
    "price": "3099900",
    "discount": "40",
    "descripcion": "Una cómoda camiseta de algodón en colores variados.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_724288-MLU73557327279_122023-AB.webp"
  },
  {
    "id": 2,
    "name": "Filtro Purificador Agua Bioenergetico Ecotrade 28 Litros",
    "price": "185380",
    "discount": "30",
    "descripcion": "Zapatos para correr con suela amortiguadora y diseño moderno.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_868154-MCO73494261492_122023-AB.webp"
  },
  {
    "id": 3,
    "name": "Asador Ahumador Barril Mini",
    "price": "377223",
    "descripcion": "Una mochila espaciosa y duradera para el día a día.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_766582-MLA73075460021_112023-AB.webp"
  },
  {
    "id": 4,
    "name": "Monitor Led De 24 Con Panel Ips Y Diseño Sin Bordes Color Black 100V/240V",
    "price": "501000",
    "descripcion": "Un reloj con funciones inteligentes y pantalla táctil.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_992802-MLU72746216408_112023-AB.webp"
  },
  {
    "id": 5,
    "name": "Lavadora Samsung 22kg Panel Multicontrol Negra | Wf22c6400av Color Negro 110v",
    "price": "3099900",
    "descripcion": "Una cómoda camiseta de algodón en colores variados.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_724288-MLU73557327279_122023-AB.webp"
  },
  {
    "id": 6,
    "name": "Filtro Purificador Agua Bioenergetico Ecotrade 28 Litros",
    "price": "185380",
    "descripcion": "Zapatos para correr con suela amortiguadora y diseño moderno.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_868154-MCO73494261492_122023-AB.webp"
  },
  {
    "id": 7,
    "name": "Lavadora Samsung 22kg Panel Multicontrol Negra | Wf22c6400av Color Negro 110v",
    "price": "3099900",
    "descripcion": "Una cómoda camiseta de algodón en colores variados.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_724288-MLU73557327279_122023-AB.webp"
  },
  {
    "id": 8,
    "name": "Filtro Purificador Agua Bioenergetico Ecotrade 28 Litros",
    "price": "185380",
    "descripcion": "Zapatos para correr con suela amortiguadora y diseño moderno.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_868154-MCO73494261492_122023-AB.webp"
  },
  {
    "id": 9,
    "name": "Asador Ahumador Barril Mini",
    "price": "377223",
    "descripcion": "Una mochila espaciosa y duradera para el día a día.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_766582-MLA73075460021_112023-AB.webp"
  },
  {
    "id": 10,
    "name": "Monitor Led De 24 Con Panel Ips Y Diseño Sin Bordes Color Black 100V/240V",
    "price": "501000",
    "descripcion": "Un reloj con funciones inteligentes y pantalla táctil.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_992802-MLU72746216408_112023-AB.webp"
  },
  {
    "id": 11,
    "name": "Lavadora Samsung 22kg Panel Multicontrol Negra | Wf22c6400av Color Negro 110v",
    "price": "3099900",
    "descripcion": "Una cómoda camiseta de algodón en colores variados.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_724288-MLU73557327279_122023-AB.webp"
  },
  {
    "id": 12,
    "name": "Filtro Purificador Agua Bioenergetico Ecotrade 28 Litros",
    "price": "185380",
    "descripcion": "Zapatos para correr con suela amortiguadora y diseño moderno.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_868154-MCO73494261492_122023-AB.webp"
  },
  {
    "id": 13,
    "name": "Filtro Purificador Agua Bioenergetico Ecotrade 28 Litros",
    "price": "185380",
    "descripcion": "Zapatos para correr con suela amortiguadora y diseño moderno.",
    "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_868154-MCO73494261492_122023-AB.webp"
  },
]

export const CarrouselProduct = ({ fullScreen, itemPagina }) => {

    const carrousel = useRef(null);

    const [ width, setWidth ] = useState({})

    // Pagination
    const [ paginaActual, setPaginaActual ] = useState(1);
    const pagination = Math.ceil(products.length / itemPagina);

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
                        lg:bg-white lg:rounded-md
                        ${ fullScreen ? 'lg:w-[1180px]' : `lg:w-[826px] px-[17.5px]`}`}>
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
                      className={`absolute w-16 h-16 hidden items-center justify-center rounded-full shadow-lg hover:shadow-xl bg-white top-[calc(50%-40px)] -left-8 z-20 text-actions-success
                                  ${ paginaActual === 1 ? 'lg:hidden' : 'lg:flex'} ${ fullScreen ? '' : '-left-12'}`}>
                        <FaAngleLeft size={30} className=''/>
                    </button>
                    <button 
                      onClick={scroll_next}
                      className={`absolute w-16 h-16 hidden items-center justify-center rounded-full shadow-lg hover:shadow-xl bg-white top-[calc(50%-40px)] -right-8 z-20 text-actions-success
                                  ${ paginaActual === pagination ? 'hidden' : 'lg:flex'} ${ fullScreen ? '' : '-right-12'}`}>
                        <FaAngleLeft size={30} className='rotate-180'/>
                    </button>
                    {/* ----- Ul Container ----- */}
                <ul ref={carrousel} className='grid grid-cols-2 gap-[1px] snap-mandatory
                               lg:flex lg:flex-nowrap lg:rounded-b-md lg:overflow-hidden lg:bg-white lg:relative lg:scroll-smooth'>
                    {
                        products.map((data, index) => (
                              <ProductCard key={data.id} {...data}/>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full h-12 bg-white rounded-b-md lg:hidden'>
                <button className='w-full h-full px-5 flex items-center justify-between text-xs text-actions-success'>
                    <p className='first-letter:uppercase font-semibold'>ver mas ofertas</p>
                    <FaAngleLeft className='rotate-180'/>
                </button>
            </div>
        </div>
    </section>
  )
}
