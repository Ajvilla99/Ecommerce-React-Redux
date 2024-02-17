import React, { useState } from 'react'
import Logo from '../../assets/img/logo1.png'
import { Link } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { MdArrowBackIos } from "react-icons/md";

export const RegisterPage = () => {

  
  const [viewPass, setViewPass] = useState(false);
  const [prueba, setPrueba] = useState(false);


  return (
    <section className='w-full h-screen flex flex-col items-center'>
      <div className='w-full h-16 shadow-md flex items-center justify-center'>
        <img src={Logo} alt="" className='h-full' />
      </div>
      <div className='w-11/12 pt-3 max-w-[400px]'>
        <Link to={'/login'} className='flex items-center font-semibold gap-1 text-primary'>
          <MdArrowBackIos />
          <p>Volver</p>
        </Link>
      </div>
      <div className='w-full py-1 flex flex-col items-center justify-center'>
          <h3 className='text-xl font-semibold text-primary'>Creación de cuenta</h3>
          <p className='text-primary'>Paso 1: ingresa los siguientes datos.</p>
      </div>
      <div className='w-11/12 flex items-center justify-center'>
      <form className='w-full flex flex-col gap-3 max-w-[400px]'>
        <div className='w-full flex flex-col'>
            <label className='text-xs font-semibold mb-1 text-primary'>Nombre</label>
            <input type="text"
                placeholder='Ingresa tu nombre' 
                className='w-full h-12 text-primary border-primary border rounded-md indent-5 outline-primary'/>
        </div>
        <div className='w-full flex flex-col'>
            <label className='text-xs font-semibold mb-1 text-primary'>Apellido</label>
            <input type="text"
                placeholder='Ingresa tu apellido' 
                className='w-full h-12 text-primary border-primary border rounded-md indent-5 outline-primary'/>
        </div>
        <div className='w-full flex flex-col'>
            <label className='text-xs font-semibold mb-1 text-primary'>Correo electronico</label>
            <input type="text"
                placeholder='Ingresar correo electrónico' 
                className='w-full h-12 text-primary border-primary border rounded-md indent-5 outline-primary'/>
        </div>
        <div className='w-full relative flex flex-col'>
            <label className='text-xs font-semibold mb-1 text-primary'>Contraseña</label>
            <input type="password"
                placeholder='Ingresar contraseña'
                className='w-full h-12 text-primary border-primary border rounded-md indent-5 outline-primary'/>
                <button
                  type='button'
                  onClick={()=>setViewPass(!viewPass)}
                  className='w-12 h-12 text-primary absolute bottom-0 rounded-r-md right-0 flex items-center justify-center text-xl grayscale'>
                    {
                      viewPass 
                      ? <FaRegEye  /> 
                      : <FaRegEyeSlash /> 
                    }
                </button>
        </div>
        <div className='w-full flex flex-col relative'>
            <label className='text-xs font-semibold mb-1 text-primary'>confirma tu contraseña</label>
            <input type="password"
                placeholder='Ingresar contraseña'
                className='w-full h-12 text-primary border-primary border rounded-md indent-5 outline-primary'/>
                <button
                  type='button'
                  onClick={()=>setViewPass(!viewPass)}
                  className='w-12 h-12 text-primary absolute bottom-0 rounded-r-md right-0 flex items-center justify-center text-xl grayscale'>
                    {
                      viewPass 
                      ? <FaRegEye  /> 
                      : <FaRegEyeSlash /> 
                    }
                </button>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-3 items-center justify-start'>
              <input type='checkbox' name='oferts' className='hidden'/>
              <button 
                onClick={()=>setPrueba(!prueba)}
                type='button'
                className='flex items-center justify-center text-primary'>
                {
                  prueba
                    ? <ImCheckboxUnchecked size={24}/>
                    : <ImCheckboxChecked size={24}/>
                }
              </button>
              <p className='first-letter:uppercase text-primary text-xs'>
                acepto recibir <span className='underline font-semibold'>descuentos exclusivos, promociones, muestras, novedades y contenido de los productos. (Opcional).</span>
              </p>
            </div>
            <div className='flex flex-row gap-3 items-center'>
              <input type='checkbox' name='t&c' className='hidden justify-start'/>
              <button 
                onClick={()=>setPrueba(!prueba)}
                type='button'
                className='flex items-center justify-center text-primary'>
                {
                  prueba
                    ? <ImCheckboxUnchecked size={24}/>
                    : <ImCheckboxChecked size={24}/>
                }
              </button>
              <p className='first-letter:uppercase text-primary text-xs'>
                acepto <span className='underline font-semibold'>Términos y Condiciones y Politica de privacidad.</span>
              </p>
            </div>
        </div>
        <div className='w-full'>
            <button className='w-full h-10 bg-primary rounded-md font-semibold text-white active:scale-95 duration-200'>
                Iniciar sesión
            </button>
        </div>
    </form>
    </div>

    </section>
  )
}
