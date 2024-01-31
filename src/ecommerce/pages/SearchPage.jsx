
import { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { MdFilterList } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { RxStarFilled } from "react-icons/rx";

export const SearchPage = () => {

    const [prueba, setPrueba] = useState(false);

  return (
    <>
        <section className='w-full flex items-center justify-center'>
            <div className='w-full'>
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
                <div className='p-4'>
                    <div className='flex items-center gap-2'>
                    <IoSearchOutline />
                    <span>Carta</span>
                    </div>
                    <p className='text-gray-600/90'>18.000 resultados</p>
                </div>
                <div>
                    <aside className='hidden lg:flex'>
                    </aside>
                    <ul className='flex flex-col gap-3 px-3 pb-3'>
                        {
                            [...Array(5)].map((_, index) => (
                                <li key={index} className='w-full h-48 rounded-md bg-white group'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <div className='w-1/2 h-full p-2 relative flex items-center justify-center
                                        before:absolute before:w-[calc(100%-16px)] before:h-[calc(100%-16px)] before:rounded-md before:bg-black/5 before:top-2 before:left-2'>
                                           <img src="https://i.imgur.com/8KkhBqA.png" alt="" className='w-full h-full object-contain' />
                                        </div>
                                        <div className='w-1/2 h-full py-2.5 px-1'>
                                            <p className='text-sm line-clamp-2'>Monitor Led De 24 Con Panel Ips Y Diseño Sin Bordes Color Black 100V/240V</p>
                                            <div className='flex items-center text-actions-success/80 text-xs'>
                                            <RxStarFilled />
                                            <RxStarFilled />
                                            <RxStarFilled />
                                            <RxStarFilled />
                                            <RxStarFilled />
                                            <span className='ml-2 text-black/50'>
                                                (33)
                                            </span>
                                            </div>
                                            <div className='flex gap-1'>
                                                <p className='text-lg'>$ 501.000</p>
                                                <span className='text-actions-discount'>10% OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                

            </div>
        </section>
    </>
  )
}
