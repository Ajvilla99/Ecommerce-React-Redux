import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

const products = [
    {
      "id": 13,
      "name": "Lavadora Samsung 22kg Panel Multicontrol Negra | Wf22c6400av Color Negro 110v",
      "price": "3099900",
      "discount": "40",
      "descripcion": "Una cómoda camiseta de algodón en colores variados.",
      "imagen": "https://http2.mlstatic.com/D_Q_NP_2X_724288-MLU73557327279_122023-AB.webp"
    },
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
  ]

export const CarrouselOferts = () => {
  return (
    <section className='w-full flex items-center justify-center mt-5
                        lg:justify-start'>
        <div className='w-11/12 flex flex-col gap-[1px]
                        lg:bg-white lg:rounded-md overflow-hidden'>
            <div className='w-full h-14 rounded-t-md bg-white px-5 flex gap-2 items-center'>
                <h3 className='font-semibold text-lg'>Oferta del dia</h3>
            </div>
            <ul className='w-full bg-white'>
                {products.length > 0 && <ProductCard {...products[0]} full />}
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
