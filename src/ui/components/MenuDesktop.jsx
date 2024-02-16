import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { IoIosNotificationsOutline, IoIosArrowUp } from "react-icons/io";
import { IoClose, IoSearchSharp, IoSettingsOutline, IoLocationOutline, IoCartOutline } from 'react-icons/io5';
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from 'react-redux';

export const MenuDesktop = ({ onSubmit, onChange, value, logo, onResetForm }) => {

  const { categories } = useSelector(state => state.ecommerce );

  const [ viewMenu, setviewMenu ] = useState({
    user: false,
    notification: false,
  })

  const pathNavbar = [
    { id: 'MN01', name: 'ofertas', to: '/categories' },
    { id: 'MN02', name: 'historial', to: '/history' },
    { id: 'MN03', name: 'vender', to: '/sell' },
    { id: 'MN04', name: 'gamer', to: '/categories=games' },
    // { id: 'MN05', name: 'Inicio', to: '/categories' },
  ]

  const userSettingOptions = [
    { id: 'S01', to: '/account', name: 'mi cuenta', icon: <IoSettingsOutline/> },
    { id: 'S02', to: '/order', name: 'mis compras', icon: <MdOutlineShoppingBag/> },
  ]

  return (
    <div className='w-full flex justify-center pt-4 bg-menu-primary'>
      <div className='w-[1180px]'>

        {/* Menu Top */}
        <div className='w-full h-14 flex items-center justify-between flex-nowrap'>
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
                  className='h-10 w-full rounded-md indent-20 text-menu-primary pr-12'/>
                <button 
                  type='submit'
                  className='absolute top-0 left-0 bg-menu-primary-light/90 flex items-center justify-center w-16 h-10 rounded-l-md text-3xl text-menu-primary
                            hover:bg-menu-primary-light duration-200'>
                  <IoSearchSharp />
                </button>
                { 
                  value !== '' &&
                  <button
                    onClick={()=>onResetForm()}
                    type='button'
                    className='w-10 h-10 flex items-center justify-center text-menu-primary text-lg absolute right-0 top-0 outline-none'>
                      <IoClose />
                  </button>
                }
            </form>
          </div>
          <div className='w-40 h-full flex items-center justify-end gap-2 relative'>
            <button className='w-10 h-10 flex items-center justify-center text-2xl text-menu-primary-light bg-menu-primary-light/20 hover:bg-menu-primary-light/40 duration-200 rounded-full'>
                <IoIosNotificationsOutline />
            </button>
            <button className='w-10 h-10 flex items-center justify-center text-2xl text-menu-primary-light bg-menu-primary-light/20 hover:bg-menu-primary-light/40 duration-200 rounded-full'>
                <IoCartOutline />
            </button>
            <button
              onClick={()=>setviewMenu(prevstate => ({...prevstate, user: !prevstate.user }))}
              className='w-10 h-10 bg-white rounded-full overflow-hidden'>
              <img src='https://i.imgur.com/773QfGA.jpg' alt='LOGO' className='object-contain' />
            </button>
            {
              viewMenu.user && 
                <div className='w-48 top-14 right-0 rounded-md z-50 absolute bg-menu-primary border-menu-primary-light border'>
                  <ul className='w-full h-full flex flex-col'>
                      {
                        userSettingOptions.map(({id, name, to, icon}) => (
                          <li key={id} className='w-full h-12 rounded-md hover:bg-menu-primary-light/15 text-menu-primary-light'>
                            <Link
                              to={to}
                              className='w-full h-full flex items-center justify-start px-4 gap-2'>
                              <div className='w-8 h-8 rounded-full flex items-center justify-center bg-menu-primary-light/20 text-base'> { icon } </div>
                              <p className='text-sm first-letter:uppercase'>{ name }</p>
                            </Link>
                          </li>
                        ))
                      }
                      <li className='w-full h-12 rounded-md hover:bg-menu-primary-light/15 text-menu-primary-light'>
                        <button className='w-full h-full flex items-center justify-start px-4 gap-2'>
                          <div className='w-8 h-8 rounded-full flex items-center justify-center bg-menu-primary-light/20 text-xl'> <RiLogoutCircleLine/> </div>
                          <p className='text-sm first-letter:uppercase'>cerrar sesión</p>
                        </button>
                      </li>
                  </ul>
                </div>
            }
          </div>
        </div>

        {/* Menu Bot */}
        <div className='w-full h-12 flex items-center justify-between text-menu-primary-light'>
          <div className='w-40'>
            <Link className='w-full h-full flex items-center justify-center gap-1'>
              <span className='text-2xl'>
                <IoLocationOutline />
              </span>
              <div className='text-xs'>
                <span>Enviar a Abrahan</span>
                <p className='text-sm'>Calle 117 #10k-28</p>
              </div>
            </Link>
          </div>
          <div className='w-[610px] h-full flex items-center'>
            <ul className='w-full h-full flex'>
              <li className='w-fit h-full group relative'>
                <button className='w-full h-full px-2 text-sm flex items-center gap-1'>
                  Categoria 
                  <span className='rotate-180'>
                    <IoIosArrowUp/>
                  </span>
                </button>
                <div className='hidden group-hover:flex justify-center absolute left-0 top-[85%] z-30'>
                  <span className='w-10 h-10 absolute right-[51%] top-0 rotate-45 bg-menu-primary-light z-10'></span>
                    <ul className='w-60 bg-menu-primary-light rounded-md text-menu-primary py-4 z-20'>
                      {
                        categories.map(({ id, name, to })=>(
                          <li key={id} className='w-full h-10 text-sm'>
                            <Link to={`categorie/?q=${id}`}
                              className='w-full h-full flex items-center px-5 hover:bg-menu-primary/70 hover:text-menu-primary-light'>
                              <p className='first-letter:uppercase'>{name}</p>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                </div>
              </li>
              {
                pathNavbar.map(({id, to, name}) => (
                  <li key={id} className='w-fit h-full group relative'>
                    <Link to={to}
                      className='w-full h-full px-2 text-sm flex items-center'>
                      <p className='first-letter:uppercase'>{name}</p>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='w-40'>
            
          </div>
        </div>
      </div>
    </div>
  )
}
