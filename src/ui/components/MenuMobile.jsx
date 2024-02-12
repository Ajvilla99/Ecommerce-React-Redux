import { IoMenu, IoSearchSharp, IoCartOutline } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { IoIosNotifications, IoIosArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';



export const MenuMobile = ({onSubmit}) => {

  const [ focusForm, setFocusForm ] = useState(false);
  const [ viewMenu , setViewMenu] = useState(false);

  return (
    <div className='w-full bg-menu-primary'>
      <div className='w-full h-14 px-4 flex items-center justify-between text-primary-light'>
        <div className='w-10 h-10'>
            <button className='w-full h-full flex items-center justify-center'>
              <IoMenu size={36}/>
            </button>
        </div>
        <div className={`${ focusForm ? `absolute w-full left-0 top-0 h-14 duration-300 shadow-md z-40 flex flex-col items-center justify-center` : `w-[calc(90%-90px)] h-8`}`}>
          <form
            onSubmit={onSubmit}
            className='w-full h-full flex items-center relative'>
            <input
              onFocus={()=>setFocusForm(!focusForm)}
              type='search' 
              name=''
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
            <div className='bg-white px-4 absolute top-14 left-0 w-full h-screen z-30'>
              <ul className=''>

              </ul>
            </div>
          }
            
        </div>
        <div className='w-10 h-10'>
          <button className='w-full h-full flex items-center justify-center'>
            <IoCartOutline size={30}/>
          </button>
        </div>
      </div>
      <div className='w-full'>
        <Link className='h-10 px-4 flex items-center text-menu-primary-light text-xs'>
          <span className='w-8 h-8 flex items-center justify-center'>
            <MdLocationOn/>
          </span>
          <p className='first-letter:uppercase'>
            ingresa tu direccion
          </p>
        </Link>
      </div>
    </div>
  )
}
