import Logo from '../../assets/img/Logo.png'

import { BsCart3, BsListUl } from "react-icons/bs";
import { BiSolidDiscount } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchSharp, IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowRight, MdOutlineWatchLater } from "react-icons/md";
import { HiOutlineArrowLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { FiUser, FiHeart } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { LiaHeadsetSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ItemSearch } from './ItemSearch';


export const Navbar = () => {

  const [ isFocused, setIsFocused ] = useState(false);
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ viewMessage, setViewMessage ] = useState(false);

  return (
    <header className='w-full'>
      {/* Navbar Mobile */}
      <div className={`w-full pt-2 bg-menu-primary flex flex-col items-center lg:hidden`}>
        <div className='w-11/12 h-12 flex items-center justify-between gap-3'>
            <button 
              onClick={() => setMenuOpen(true)}
              className='text-primary-light h-10 w-10 flex items-center justify-center'>
              <AiOutlineMenu size={24}/>
            </button>
            <form className={`flex flex-row-reverse 
                            ${ isFocused ? 'absolute left-0 top-0 w-screen h-14 duration-300' : 'w-3/5' }`}>
              <button 
                onClick={() => setIsFocused(false)}
                type='button' className={`${ isFocused ? 'absolute left-0 top-0 h-14 w-14 flex items-center justify-center' : 'hidden' }`}>
                <HiOutlineArrowLeft size={24}/>
              </button>
              <input type="search" 
                    onFocus={() => setIsFocused(true)}
                    className={`outline-none
                                              ${ isFocused ? 'rounded-none w-full indent-14' : 'rounded-r-md w-[calc(100%-40px)]' }`}/>
              <button className={`rounded-l-md h-10 w-10 bg-primary-light text-primary flex items-center justify-center
                                ${ isFocused ? 'hidden' : '' }`}>
                <IoSearchSharp size={24}/>
              </button>
              {
                isFocused && <div className='absolute w-screen h-screen bg-gray-200 left-0 top-14 z-30'>
                  <ItemSearch />
                  <ItemSearch />
                  <ItemSearch />
                  <ItemSearch />
                </div>
              }
            </form>
            <div className='flex gap-2'>
              <Link to={''} className='w-10 h-10 text-primary-light flex items-center justify-center rounded-md'>
                <RiNotification2Line size={22}/>
              </Link>
              <Link to={'/cart'} className='w-10 h-10 text-primary-light flex items-center justify-center rounded-md'>
                <BsCart3 size={22}/>
              </Link>
            </div>
        </div>
        <div className='w-full h-10 pr-2 flex items-center justify-center relative text-primary-light'>
          <Link className='w-11/12 h-10  flex items-center pl-2 gap-1'>
              <IoLocationOutline size={16}/>
              <p className='text-sm'>117 #10k-28</p>
          </Link>
        </div>
      </div>
      <div className={`absolute overflow-hidden h-screen left-0 top-0 bg-black bg-opacity-80 duration-200 lg:hidden z-10
                       ${ menuOpen ? 'w-full z-30' : 'w-0'}`}>
        <div className='w-9/12 h-full bg-gray-300 flex flex-col'>
            <div className='w-full p-5 bg-menu-primary flex items-center justify-center'>
                <button className='w-full flex gap-3'>
                  <div className='w-12 h-12 flex items-center justify-center rounded-full bg-white'>
                    <FiUser size={28}/>
                  </div>
                  <Link to={'/login'} className='flex w-8/12 flex-col h-12 gap-0 text-left justify-center'>
                      <span className='first-letter:uppercase font-semibold'>iniciar sesion</span>
                      <span className='text-xs flex items-center gap-0'>Mi perfil <MdKeyboardArrowRight size={16}/></span>
                  </Link>
                </button>
            </div>
            {/* Navbar */}
            <nav className='w-full'>
              <ul className='w-full'>
                <li className='w-full h-12 hover:bg-black hover:bg-opacity-15'>
                    <Link to={''}
                      className='h-full px-8 flex items-center gap-6'>
                        <IoHomeOutline size={22}/>
                        <p className='first-letter:uppercase text-md font-semibold'>inicio</p>
                    </Link>
                </li>
                <li className='w-full h-12 hover:bg-black hover:bg-opacity-15'>
                    <Link to={''}
                      className='w-full h-full px-8 flex items-center gap-6'>
                        <RiNotification2Line size={22}/>
                        <p className='first-letter:uppercase text-md font-semibold'>notificaciones</p>
                    </Link>
                </li>
                <li className='w-full h-12 hover:bg-black hover:bg-opacity-15'>
                    <Link to={''}
                      className='w-full h-full px-8 flex items-center gap-6'>
                        <HiOutlineShoppingBag size={24}/>
                        <p className='first-letter:uppercase text-md font-semibold'>mis compras</p>
                    </Link>
                </li>
                <li className='w-full h-12 hover:bg-black hover:bg-opacity-15'>
                    <Link to={''}
                      className='w-full h-full px-8 flex items-center gap-6'>
                        <BiSolidDiscount size={24}/>
                        <p className='first-letter:uppercase text-md font-semibold'>ofertas</p>
                    </Link>
                </li>
                <li className='w-full h-12 hover:bg-black hover:bg-opacity-15'>
                    <Link to={''}
                      className='w-full h-full px-8 flex items-center gap-6'>
                        <MdOutlineWatchLater size={24}/>
                        <p className='first-letter:uppercase text-md font-semibold'>historial</p>
                    </Link>
                </li>
                <li className='w-full h-12 hover:bg-black hover:bg-opacity-15'>
                    <Link to={''}
                      className='w-full h-full px-8 flex items-center gap-6'>
                        <BsListUl size={24}/>
                        <p className='first-letter:uppercase text-md font-semibold'>categorias</p>
                    </Link>
                </li>
                <li className='w-full h-12 hover:bg-black hover:bg-opacity-15'>
                    <Link to={''}
                      className='w-full h-full px-8 flex items-center gap-6'>
                        <LiaHeadsetSolid size={24}/>
                        <p className='first-letter:uppercase text-md font-semibold'>ayuda / PQR</p>
                    </Link>
                </li>
              </ul>
            </nav>
        </div>
      </div>
      {/* Menu Desktop */}
      <div className='hidden bg-menu-primary text-menu-secondary lg:w-full lg:h-32 lg:flex lg:flex-col lg:items-center lg:justify-center'>
          <div className='w-full max-w-[1200px] h-16 flex items-center justify-between'>
                <Link to={'/'} className='w-40 h-full flex items-center justify-center'>
                  <img src={Logo} alt="" className=' h-full' />
                </Link>
                <form className='w-[calc(1200px-500px)] flex flex-row-reverse items-center justify-center relative'>
                  <input 
                    type="search" 
                    className='w-full rounded-r h-12 outline-none pr-3 indent-5 text-base text-menu-primary bg-[#eee]' />
                  <button type='submit' className='w-16 flex items-center justify-center rounded-l bg-gray-500 h-12'>
                    <IoSearchSharp size={24} color='white'/>
                  </button>
                </form>
                {/* ------- */}
                <Link to={'auth/login'} className='w-52 h-full flex gap-2 items-center justify-between'>
                  <div className='w-12 h-12 overflow-hidden rounded-full'>
                    <img src="https://i.imgur.com/773QfGA.jpg" alt="foto usuario" className='object-contain'/>
                  </div>
                  <div className='w-[calc(100%-50px)] flex flex-col'>
                    <div className='flex items-center gap-2'>
                      <span className='line-clamp-1 text-left'>Iniciar sesion</span>
                      <IoIosArrowDown />
                    </div>
                    <span className='text-left text-menu-secondary font-semibold text-xs'></span>
                  </div>
                </Link>
          </div>
          <div className='w-full max-w-[1200px] h-16 flex items-center justify-between'>
            <div className='h-full relative'>
              <Link 
                to={'address'}
                className='w-40 h-full flex items-center justify-center relative'>
                  <IoLocationOutline size={32} className='animate-bounce'/>
                  <div className='flex flex-col'>
                    <span className='first-letter:uppercase text-xs'>ingresa tu</span>
                    <span className='first-letter:uppercase text-sm'>ubicaciòn</span>
                  </div>                
              </Link>
              <div className={`absolute p-5 w-80 bottom-[-300%] rounded left-[0%] bg-[#eee] z-10 items-center justify-center shadow-md
                                ${ !viewMessage ? 'hidden' : 'flex' }`}>
                  <div className='relative w-full h-full text-black z-10'>
                    <div className='absolute bg-[#eee] w-10 h-10 top-[-22.5%] left-[10%] text-black rotate-45 z-[-1]'>
                    </div>
                    <h4 className='font-semibold'>Conoce el envío a tu ubicación</h4>
                    <span className='text-sm leading-3 text-justify text-gray-900'>Agrega tu ubicación para ver costos y tiempos de entrega precisos en tu búsqueda.</span>
                    <div className='w-full flex text-sm items-center font-semibold mt-3 gap-4'>
                        <button type='button' className='py-2 px-3 rounded bg-actions-success text-white bg-opacity-90 hover:bg-opacity-100 duration-300'>Agregar ubicaciòn</button>
                        <button 
                          type='button'
                          onClick={() => setViewMessage(false)}
                          className='p-2 text-actions-success rounded-md hover:bg-black hover:bg-opacity-10 duration-300'>Màs tarde</button>
                    </div>
                  </div>
                </div>
            </div>
            <div className='w-[calc(1200px-500px)]'>
            {/* Navbar */}
              <nav className='w-full'>
                <ul className='w-full flex justify-between text-md'>
                  <li className='h-12 hover:bg-black hover:bg-opacity-15 rounded'>
                      <Link to={'categories'}
                        className='h-full p-2 flex items-center gap-6'>
                          <p className='first-letter:uppercase'>categorias</p>
                      </Link>
                  </li>
                  <li className='h-12 hover:bg-black hover:bg-opacity-15 rounded'>
                      <Link to={'notification'}
                        className=' h-full p-2 flex items-center gap-6'>
                          <p className='first-letter:uppercase'>notificaciones</p>
                      </Link>
                  </li>
                  <li className='h-12 hover:bg-black hover:bg-opacity-15 rounded'>
                      <Link to={''}
                        className=' h-full p-2 flex items-center gap-6'>
                          <p className='first-letter:uppercase'>mis compras</p>
                      </Link>
                  </li>
                  <li className='h-12 hover:bg-black hover:bg-opacity-15 rounded'>
                      <Link to={''}
                        className=' h-full p-2 flex items-center gap-6'>
                          <p className='first-letter:uppercase'>ofertas</p>
                      </Link>
                  </li>
                  <li className='h-12 hover:bg-black hover:bg-opacity-15 rounded'>
                      <Link to={''}
                        className=' h-full p-2 flex items-center gap-6'>
                          <p className='first-letter:uppercase'>historial</p>
                      </Link>
                  </li>
                  <li className='h-12 hover:bg-black hover:bg-opacity-15 rounded'>
                      <Link to={''}
                        className=' h-full p-2 flex items-center gap-6'>
                          <p className='first-letter:uppercase'>categorias</p>
                      </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Menu Notifications */}
            <div className='w-52 h-12 flex gap-2 items-center justify-evenly'>
              <Link to={''}
                className='w-12 h-12 flex items-center justify-center rounded hover:bg-black hover:bg-opacity-15'>
                <FiHeart size={22}/>
              </Link>
              <Link to={'/notification'}
                className='w-12 h-12 flex items-center justify-center rounded hover:bg-black hover:bg-opacity-15'>
                <RiNotification2Line size={22}/>
              </Link>
              <Link to={'/cart'}
                className='w-12 h-12 flex items-center justify-center rounded hover:bg-black hover:bg-opacity-15'>
                <BsCart3 size={22}/>
              </Link>
            </div>
          </div>
      </div>
    </header>
  )
}
