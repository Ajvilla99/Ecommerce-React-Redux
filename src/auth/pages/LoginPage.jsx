import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import Logo from '../../assets/img/Logo.png'
import { Link } from "react-router-dom";

import './css/loading.css'


export const LoginPage = () => {
  
  const onSubmit = (event) => {
    event.preventDefault()
  }

  const [viewPass, setViewPass] = useState(false);
  const [prueba, setPrueba] = useState(true);

  return (
    <section className='w-full h-screen flex flex-col items-center'>
      <div className='w-full h-16 shadow-md flex items-center justify-center'>
        <img src={Logo} alt="" className='h-full' />
      </div>
      <div className='w-full h-16 flex items-center justify-center'>
          <h3 className='text-xl font-semibold'>Iniciar sesión</h3>
      </div>
      <div className='w-11/12 flex items-center justify-center'>
      <form className='w-full flex flex-col gap-3 max-w-[400px]'>
        <div className='w-full'>
            <label className='text-xs font-semibold'>Correo electronico</label>
            <input type="text"
                placeholder='Ingresar correo electrónico' 
                className='w-full h-12 text-primary border-primary border rounded-md indent-5 outline-primary'/>
        </div>
        <div className='w-full relative'>
            <label className='text-xs font-semibold'>Contraseña</label>
            <input type="password"
                placeholder='Ingresar contraseña'
                className='w-full h-12 text-primary border-primary border rounded-md indent-5 outline-primary'/>
                <button
                  type='button'
                  onClick={()=>setViewPass(!viewPass)}
                  className='w-12 h-12 absolute bottom-0 rounded-r-md right-0 flex items-center justify-center text-xl grayscale'>
                    {
                      viewPass 
                      ? <FaRegEye  /> 
                      : <FaRegEyeSlash /> 
                    }
                </button>
        </div>
        <div className='flex items-center justify-end'>
            <Link className="text-xs font-semibold underline">
                ¿Olvidaste tu contraseña?
            </Link>
        </div>
        <div className='w-full'>
            <button className='w-full h-10 bg-primary rounded-md font-semibold text-white active:scale-95 duration-200'>
                Iniciar sesión
            </button>
        </div>
    </form>
      </div>
      <div className='w-11/12 flex flex-col items-center justify-center py-10 gap-3 max-w-[400px]'>
        <hr className='border-primary/50 w-full mb-5' />
        <h4 className="text-lg font-semibold">¿Aún no tienes una cuenta?</h4>
        <Link to={'/register'} className='w-full h-10 font-semibold flex items-center justify-center rounded-md border-2 border-primary active:scale-95 duration-200'>
          Crea una cuenta aqui
        </Link>
      </div>
    </section>
  )
}
