import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoClose, IoSearchSharp, IoSettingsOutline } from 'react-icons/io5';


export const MenuDesktop = ({ onSubmit, onChange, value, logo, onResetForm }) => {

  const [viewMenu, setviewMenu] = useState({
    user: false,
    notification: false,
  })

  const pathNavbar = [
    { id: 'M01', name: 'Inicio', to: '/categories' },
  ]

  const userOptionStringAndPath = [
    { id: 'S02', name: 'ayuda y soporte tecnico' },
    { id: 'S03', name: 'cerrar sesion' },
  ]

  return (
    <div className='w-full flex flex-col items-center py-4 bg-menu-primary'>
      <div className='w-[1180px] h-14 flex items-center justify-between flex-nowrap'>
        <div className='w-40 h-full flex items-center justify-center overflow-hidden'>
          <Link to={'/'}>
            <img src={logo} alt='Logo' className='max-h-[90%]' />
          </Link>
        </div>
        <div className='w-[600px] h-full flex items-center'>
          <form 
            onSubmit={onSubmit}
            className='w-full relative'>
              <input
                autoComplete='off'
                type='text'
                name='searchText'
                value={value}
                onChange={onChange}
                placeholder='Buscar producto...'
                className='h-12 w-full rounded-md indent-20 text-menu-primary pr-12'/>
              <button 
                type='submit'
                className='absolute top-0 left-0 bg-menu-primary-light/90 flex items-center justify-center w-16 h-12 rounded-l-md text-3xl text-menu-primary
                          hover:bg-menu-primary-light duration-200'>
                <IoSearchSharp />
              </button>
              { 
                value !== '' &&
                <button
                  onClick={()=>onResetForm()}
                  type='button'
                  className='w-12 h-12 flex items-center justify-center text-menu-primary text-lg absolute right-0 top-0 outline-none'>
                    <IoClose />
                </button>
              }
          </form>
        </div>
        <div className='h-full flex items-center gap-2 relative'>
          <button className='w-12 h-12 flex items-center justify-center text-3xl text-menu-primary-light bg-menu-primary-light/20 hover:bg-menu-primary-light/40 duration-200 rounded-full'>
              <IoIosNotificationsOutline />
          </button>
          <button
            onClick={()=>setviewMenu(prevstate => ({...prevstate, user: !prevstate.user }))}
            className='w-12 h-12 bg-white rounded-full overflow-hidden'>
            <img src='https://i.imgur.com/773QfGA.jpg' alt='LOGO' className='object-contain' />
          </button>
          {
            viewMenu.user && 
              <div className='w-80 top-14 right-0 rounded-md z-50 absolute bg-menu-primary border-menu-primary-light border p-3'>
                <div className='w-full px-4 py-2 flex items-center flex-col bg-menu-primary-light/15 rounded-md'>
                  <div className='w-full flex items-center justify-start gap-4 px-2'>
                    <div className='w-10 h-10 flex items-center rounded-full overflow-hidden'>
                      <img src='https://i.imgur.com/773QfGA.jpg' alt='LOGO' className='object-contain' />
                    </div>
                    <div className='flex items-center'>
                      <span className='capitalize text-menu-primary-light'>abrahan villa</span>
                    </div>
                    {/* <Link className='w-10 h-10 rounded-full hover:bg-menu-primary-light/50 text-white flex items-center justify-center text-lg'>
                      <IoSettingsOutline />
                    </Link> */}
                  </div>
                  <span className='w-full h-0.5 my-1.5 bg-menu-primary-light/50'></span>
                  <span className='w-full h-4 flex items-center justify-center text-menu-primary-light text-xs'>
                      Configuracion de la cuenta
                  </span>
                </div>
                <ul className='w-full h-full flex flex-col gap-1'>
                  
                </ul>
              </div>
          }
        </div>
      </div>
      <div className='w-'>

      </div>
    </div>
  )
}
