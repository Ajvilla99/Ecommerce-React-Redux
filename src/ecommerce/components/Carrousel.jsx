import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Icons
import { FaAngleLeft } from "react-icons/fa6";


export const Carrousel = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const [ width, setWidth ] = useState({width: 0})
  const prueba = useRef(null)

  useEffect(() => {
    const ulElement = prueba.current;
    
    if (ulElement) {
      const rect = ulElement.getBoundingClientRect();
      setWidth(rect.width);
    }
  }, [width]);

  const btnPrev = () => {
      prueba.current.scrollBy(-width, 0);
  }
  const btnNext = () => {
      prueba.current.scrollBy(width, 0);
  }

  const dataImage = [
    {id:1, img: 'https://http2.mlstatic.com/D_NQ_813231-MLA73870695420_012024-OO.webp'},
    {id:2, img: 'https://http2.mlstatic.com/D_NQ_926364-MLA74036942443_012024-OO.webp'},
    {id:3, img: 'https://http2.mlstatic.com/D_NQ_987685-MLA73735800617_122023-OO.webp'},
    {id:4, img: 'https://http2.mlstatic.com/D_NQ_926364-MLA74036942443_012024-OO.webp'},
    {id:5, img: 'https://http2.mlstatic.com/D_NQ_987685-MLA73735800617_122023-OO.webp'},
  ]

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataImage.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className='w-full'>
        <div className='w-full h-[200px] flex flex-col items-center relative
                       lg:h-[450px]'>
            <button onClick={btnPrev} className='w-10 h-10 absolute bg-white top-[calc(50%-20px)] left-0 flex items-center justify-center'><FaAngleLeft /></button>
            <button onClick={btnNext} className='w-10 h-10 absolute bg-white top-[calc(50%-20px)] right-0 flex items-center justify-center rotate-180'><FaAngleLeft /></button>

            <ul ref={prueba} className='w-11/12 h-full flex overflow-hidden scroll-smooth'>
                {
                  dataImage.map((data) => (
                    <li key={data.id} className='w-full min-w-full h-full bg-slate-600 flex-none'>
                        <Link className='w-full h-full'>
                            <img src={data.img} alt={`imagen ${data.img}`} className='h-full w-full object-cover'/>
                        </Link>
                    </li>
                  ))
                }
            </ul>
        </div>
    </section>
  )
}
