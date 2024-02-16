import { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ItemSearch } from './ItemSearch';

// Icons
import { MdLocationOn } from 'react-icons/md';
import { IoMenu, IoSearchSharp, IoCartOutline, IoClose } from 'react-icons/io5';
import { IoIosNotificationsOutline, IoIosArrowRoundBack, IoMdHeartEmpty, IoIosList } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { SlHandbag } from 'react-icons/sl';


export const MenuMobile = ({ onSubmit, onChange, value }) => {

  const [ focusForm, setFocusForm ] = useState(false);
  const [ viewMenu , setViewMenu] = useState(false);
  
  const actionNavbar = () => {
    setViewMenu(false)
  }

  const stringPath = [
    { name: 'inicio', id: 'M01', path: '/', icon: <AiOutlineHome/>, action: actionNavbar},
    { name: 'notificaciones', id: 'M02', path: '/notification', icon: <IoIosNotificationsOutline/>, action: actionNavbar},
    { name: 'mis compras', id: 'M03', path: '/my_purchase', icon: <SlHandbag/>, action: actionNavbar},
    { name: 'favoritos', id: 'M04', path: '/bookmarks', icon: <IoMdHeartEmpty/>, action: actionNavbar},
    { name: 'categorias', id: 'M05', path: '/categories', icon: <IoIosList />, action: actionNavbar},
  ]

  return (
    <div className='w-full bg-menu-primary'>
      <div className='w-full h-14 px-4 flex items-center justify-between text-primary-light'>
        <div className='w-10 h-10'>
            <button 
              onClick={()=>setViewMenu(true)}
              className='w-full h-full flex items-center justify-center'>
              <IoMenu size={36}/>
            </button>
        </div>
        <div className={`${ focusForm ? `absolute w-full left-0 top-0 h-14 duration-300 shadow-md z-40 flex flex-col items-center justify-center` : `w-[calc(90%-90px)] h-8`}`}>
          <form
            onSubmit={onSubmit}
            className='w-full h-full flex items-center relative'>
            <input
              onFocus={()=>setFocusForm(true)}
              type='search' 
              name='searchText'
              value={value}
              onChange={onChange}
              placeholder='Buscar producto'
              className={`w-full h-full outline-none pr-4 text-menu-primary text-sm
                          ${ focusForm ? 'border-b-2 border-black/10 indent-10 py-2' : 'rounded indent-8' }`}/>
            {
              focusForm 
                  ? <button 
                      onClick={()=>setFocusForm(false)}
                      className='absolute w-10 h-full flex items-center justify-center text-3xl text-menu-primary'>
                      <IoIosArrowRoundBack />
                    </button>
                  : <button 
                      className={`absolute w-8 h-8 flex items-center justify-center text-menu-primary`}>
                      <IoSearchSharp/>
                    </button>
            }
          </form>
          {
            focusForm && 
            <div className='bg-white absolute top-14 left-0 w-full h-screen z-30'>
              <ul className='flex flex-col'>
                  {
                    [...Array(5)].map(i => (
                      <ItemSearch key={i+0.1}/>
                    ))
                  }
              </ul>
            </div>
          }
            
        </div>
        <div className='w-10 h-10'>
          <Link to={'cart'} className='w-full h-full flex items-center justify-center'>
            <IoCartOutline size={30}/>
          </Link>
        </div>
      </div>
      <div className='w-full'>
        <Link to={'address'} className='h-10 px-4 flex items-center text-menu-primary-light text-xs'>
          <span className='w-8 h-8 flex items-center justify-center'>
            <MdLocationOn/>
          </span>
          <p className='first-letter:uppercase'>
            ingresa tu direccion
          </p>
        </Link>
      </div>
        <div
          // onClick={()=>setViewMenu(!viewMenu)}
          className={`h-screen absolute top-0 left-0 bg-white/30 duration-500 z-40
                        ${viewMenu ? 'w-full' : 'w-full -translate-x-full pointer-events-none'} `}>
          <button 
            onClick={()=>setViewMenu(!viewMenu)}
            className='w-10 h-10 bg-menu-primary rounded-md text-3xl absolute flex items-center justify-center top-4 right-4 text-white/80'>
                  <IoClose />
          </button>

          <aside 
            // onClick={(e) => e.stopPropagation()}
            className='w-9/12 h-full bg-menu-primary overflow-hidden'>
              <Link className='w-full h-24 p-4 bg-white flex items-center gap-2 shadow-md'>
                  <div className='w-14 h-14 bg-menu-primary rounded-full flex items-center justify-center'>
                    <span className='text-white text-3xl'>
                      <LuUser2/>
                    </span>
                  </div>
                  <div className='w-[calc(100%-60px)] flex flex-col overflow-hidden'>
                      <div className='min-w-full text-lg'>
                        Abraham Josue
                      </div>
                      <span className='min-w-full text-xs flex items-center'>
                        Mi perfil {`>`}
                      </span>
                  </div>
              </Link>
              <ul className='w-full flex flex-col py-3'>
                {
                  stringPath.map(({ name, id, path, icon, action }) => (
                    <li 
                      key={id}
                      className='w-full h-12'>
                      <Link
                        onClick={action}
                        to={path}
                        className='w-full h-full pr-4 pl-6 flex justify-between text-menu-primary-light active:bg-menu-primary-light/15'>
                        <div className='h-full flex items-center gap-5'>
                          <span className='text-2xl'> 
                            {icon}
                          </span>
                          <p className='first-letter:uppercase text-sm'>
                            {name}
                          </p>
                        </div>
                        <div className=''>

                        </div>
                      </Link>  
                    </li>
                  ))
                }
                  
              </ul>
          </aside>
        </div>
    </div>
  )
}
