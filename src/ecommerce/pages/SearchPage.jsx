
import { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { MdFilterList } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { RxStar, RxStarFilled } from "react-icons/rx";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export const SearchPage = () => {

    const [prueba, setPrueba] = useState(false);

  return (
    <>
        <section className='w-full flex items-center justify-center'>
            <div className='w-full flex flex-col 
                            lg:w-[1180px]'>
                <div className='w-full h-14 flex items-center lg:hidden shadow-md bg-white'>
                    <button
                        onClick={() => setPrueba(true)}
                        className='w-[calc(50%-.5px)] h-full flex items-center justify-center gap-3 pl-3'>
                        <p className='first-letter:uppercase'>ordenar</p> {<GoArrowSwitch rotate={2}  className=''/>}
                    </button>
                    <div className='h-4/5 w-[1px] bg-primary/50'></div>
                    <button
                        onClick={() => setPrueba(true)}
                        className='w-[calc(50%-.5px)] h-full flex items-center justify-center gap-3 pr-3'>
                        <p className='first-letter:uppercase'>filtrar</p> {<MdFilterList />}
                    </button>
                </div>
                <div className='w-full pb-3 lg:flex lg:py-5 lg:gap-5 lg:justify-between lg: '>
                    <div className='lg:flex lg:flex-col lg:gap-2 lg: '>
                        <div className='w-full p-4 lg:min-h-20 lg:p-0 lg:flex lg:flex-col lg:justify-center lg:pl-2 '>
                            <span className='flex items-center gap-2'>
                                <IoSearchOutline size={18}/>
                                <p className='first-letter:uppercase'>Carta</p>
                            </span>
                            <p className='text-sm text-black/50'>18.000 Resultados</p>
                        </div>
                        <aside className='hidden lg:flex flex-col w-64 h-full rounded-md gap-2'>
                            <div className='w-full h-14 text-black/70 bg-white rounded-md flex items-center p-3'>
                                <span className='w-full flex items-center justify-center gap-2'>
                                    <MdFilterList size={18}/>
                                    <p>filtro de busqueda</p>
                                </span>
                            </div>
                            <ul className='w-full flex flex-col gap-4'>
                                <li className='w-full group flex flex-col h-12 border-b-2 border-black/10 overflow-y-hidden hover:h-[248px] scroll-smooth duration-500'>
                                    <div className='w-full min-h-12 p-2 flex justify-between items-center group-hover:text-actions-success'>
                                        <p>Categoria</p> <span className='rotate-180 group-hover:rotate-0 duration-300'><IoIosArrowUp /></span> 
                                    </div>
                                    <button className='w-full min-h-10 p-2 flex items-center border-y border-black/5 hover:bg-black/5'>
                                       Tecnologia
                                    </button>
                                </li>
                                <li className='w-full flex flex-col h-12 border-b-2 border-black/10 overflow-y-hidden hover:h-[248px] scroll-smooth duration-500'>
                                    <div className='w-full min-h-12 p-2 flex justify-between items-center'>
                                        Calificación <span className='rotate-180'><IoIosArrowUp /></span> 
                                    </div>
                                    <button className='w-full min-h-10 p-2 flex items-center border-y border-black/5 text-actions-success hover:bg-black/5'>
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        
                                    </button>
                                    <button className='w-full min-h-10 p-2 flex items-center border-b border-black/5 text-actions-success hover:bg-black/5'>
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        <RxStar />
                                    </button>
                                    <button className='w-full min-h-10 p-2 flex items-center border-b border-black/5 text-actions-success hover:bg-black/5'>
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        <RxStar />
                                        <RxStar />
                                    </button>
                                    <button className='w-full min-h-10 p-2 flex items-center border-b border-black/5 text-actions-success hover:bg-black/5'>
                                        <RxStarFilled />
                                        <RxStarFilled />
                                        <RxStar />
                                        <RxStar />
                                        <RxStar />
                                    </button>
                                    <button className='w-full min-h-10 p-2 flex items-center border-b border-black/5 text-actions-success hover:bg-black/5'>
                                        <RxStarFilled />
                                        <RxStar />
                                        <RxStar />
                                        <RxStar />
                                        <RxStar />
                                    </button>
                                </li>
                                <li className='w-full flex flex-col gap-3'>
                                    <div className='w-full flex items-center h-12 p-2' >
                                        <h3>Rango de precios</h3>
                                    </div>
                                    <form className='w-full flex flex-col px-2 gap-3'>
                                        <div className='w-full flex items-center justify-between'>
                                            <input 
                                                type="text" 
                                                placeholder='$ Mínimo'
                                                className='w-2/5 h-10 rounded-md outline-primary text-sm text-center shadow-md'/>
                                            <span className='w-3 h-0.5 bg-black/20'></span>
                                            <input 
                                                type="text" 
                                                placeholder='$ Máximo'
                                                className='w-2/5 h-10 rounded-md outline-primary text-sm text-center shadow-md'/>
                                        </div>
                                        <button className='w-full h-10 text-sm text-white rounded-md bg-actions-success hover:bg-actions-success/80 active:scale-90 duration-300 shadow-md'>
                                            Aplicar
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className='flex flex-col gap-2 lg:w-[calc(100%-340px)]'>
                        <div className='hidden lg:flex px-4 items-center rounded-md w-full h-20'>
                            <span className='mr-5'>
                                Ordenar por
                            </span>
                            <div className='flex'>
                                <div className='h-10 w-52 px-2 bg-white rounded-sm relative cursor-pointer group'>
                                    <div className='w-full h-10 text-sm flex items-center justify-between px-2'>
                                        <p>Precio</p>
                                        <span className='rotate-180'><IoIosArrowUp /></span>
                                    </div>
                                    <div className='w-full h-0 z-20 overflow-hidden flex-col absolute left-0 bg-white rounded-b-md shadow-md
                                                    group-hover:h-20 duration-300 scroll-smooth'>
                                        <button className='w-full h-10 text-sm flex items-center justify-center hover:text-actions-success'>
                                            Precio: de Menor a Mayor
                                        </button>
                                        <button className='w-full h-10 text-sm flex items-center justify-center hover:text-actions-success'>
                                            Precio: de Mayor a Menor
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className='w-full grid grid-cols-1 gap-1 lg:gap-0.5'>
                                {
                                    [...Array(5)].map((_, index) => (
                                        <li key={index} 
                                            className='w-full h-48 rounded-md bg-white group
                                                        lg:rounded lg:cursor-pointer'>
                                            <div className='w-full h-full flex items-center justify-center'>
                                                <div className='w-1/2 h-full p-2 relative flex items-center justify-center
                                                                before:absolute before:w-[calc(100%-16px)] before:h-[calc(100%-16px)] before:rounded-md before:bg-black/5 before:top-2 before:left-2
                                                                lg:before:bg-transparent lg:w-[192px]'>
                                                    <img src={"https://i.imgur.com/8KkhBqA.png"} alt="" className='w-full h-full object-contain' />
                                                </div>
                                                <div 
                                                    className='w-1/2 h-full py-2.5 px-1
                                                               lg:w-[calc(100%-192px)]'>
                                                    <Link className='text-sm line-clamp-2 group-hover:text-actions-success duration-300'>Monitor Led De 24 Con Panel Ips Y Diseño Sin Bordes Color Black 100V/240V</Link>
                                                    <div className='flex items-center text-actions-success/80 text-xs
                                                                    lg:mt-2'>
                                                    <span className='mr-2'>4.5</span>
                                                    <RxStarFilled />
                                                    <RxStarFilled />
                                                    <RxStarFilled />
                                                    <RxStarFilled />
                                                    <RxStarFilled />
                                                    <span className='ml-2 text-black/50'> (33) </span>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <s className='text-xs text-black/35'>$ 1.000.000</s>
                                                        <div className='flex gap-1'>
                                                            <p className='text-lg'>$ 501.000</p>
                                                            <span className='text-actions-discount lg:text-sm'>10% OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        </li>
                                    ))
                                }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


{/* <li key={index} className='w-full h-48 rounded-md bg-white group
lg:rounded'>
<div className='w-full h-full flex items-center justify-center'>
    <div className='w-1/2 h-full p-2 relative flex items-center justify-center
    before:absolute before:w-[calc(100%-16px)] before:h-[calc(100%-16px)] before:rounded-md before:bg-black/5 before:top-2 before:left-2
    lg:before:bg-transparent'>
       <img src="https://i.imgur.com/8KkhBqA.png" alt="" className='w-full h-full object-contain' />
    </div>
    <div className='w-1/2 h-full py-2.5 px-1'>
        <p className='text-sm line-clamp-2'>Monitor Led De 24 Con Panel Ips Y Diseño Sin Bordes Color Black 100V/240V</p>
        <div className='flex items-center text-actions-success/80 text-xs'>
        <span className='mr-2'>4.5</span>
        <RxStarFilled />
        <RxStarFilled />
        <RxStarFilled />
        <RxStarFilled />
        <RxStarFilled />
        <span className='ml-2 text-black/50'>
            (33)
        </span>
        </div>
        <div className='pt-2 '>
            <s className='text-xs text-black/50'>$ 1.000.000</s>
            <div className='flex gap-1'>
                <p className='text-lg'>$ 501.000</p>
                <span className='text-actions-discount'>10% OFF</span>
            </div>
        </div>
    </div>
</div>
</li> */}