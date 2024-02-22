// Hooks
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

// Functions
import { getProductById, renderRatingStarts } from '../helpers'

// Icons
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaAngleLeft } from 'react-icons/fa6';
import { IoClose } from "react-icons/io5";



export const ProductPage = () => {

  const { products } = useSelector( state => state.ecommerce );
  const [ view, setView ] = useState(false);
  const [ count, setCount ] = useState(1);

  const [ prueba, setPrueba ] = useState(true);

  const [ viewCant, setViewCant ] = useState(false);

  useEffect(() => {
    if (viewCant) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [viewCant]);

  const { id } = useParams()
  const product = getProductById( products, id );
  if ( !product ) { return <Navigate to={'/'}/>};

  const { name, price, image, discount, rating, inventory, features } = product;

  const stars = renderRatingStarts(rating);

  const action = (num) => {
      setCount(num);
      setViewCant(false)
  }

  const units = [
    { id: '1und', body: '1 Unidad',   onClick: ()=>action(1) },
    { id: '2und', body: '2 Unidades', onClick: ()=>action(2) },
    { id: '3und', body: '3 Unidades', onClick: ()=>action(2) },
    { id: '4und', body: '4 Unidades', onClick: ()=>action(2) },
    { id: '5und', body: '5 Unidades', onClick: ()=>action(2) },
  ]


  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='w-full flex-col items-center bg-white
                        lg:w-[1180px] lg:mt-10 lg:rounded-md'>
            <div className='w-full lg:flex lg:p-3'>
              <div className='w-full pt-3 lg:flex lg:flex-row-reverse'>
                <div className='lg:flex lg:flex-col'>
                  <div className='w-full px-4 py-1 flex gap-1 items-center justify-end text-xs
                                  lg:justify-start lg:order-2'>
                    <span>{rating}</span>
                    <span className='flex gap-0.5 text-actions-success'>{ stars.map( star => star ) }</span>
                    <span>{`(33)`}</span>
                  </div>
                  <div className='w-full px-4 lg:order-1 lg:pt-2'>
                    <span className='text-sm capitalize lg:text-xl'>{name}</span>
                  </div>
                </div>
                {/* ---------------  IMAGEN AND PURCHASE */}
                <div className='w-full h-80 p-4 relative flex items-center justify-center
                                lg:min-w-80 lg:h-[500px]'>
                  <img 
                    alt={`Imagen de ${name}`}
                    src={image} 
                    className='max-h-full lg:max-w-[80%]'
                  />
                  <button 
                    onClick={()=>setView(!view)}
                    className={`absolute w-10 h-10 right-4 top-4 rounded-full bg-primary/10 flex items-center justify-center text-xl
                                ${ view ? 'text-actions-success' : 'text-actions-success/60' }`}>
                    { view ? <GoHeartFill /> :  <GoHeart /> }
                  </button>
                </div>
              </div>
              <div className='px-4 lg:py-4 lg:min-w-80 lg:max-w-80 lg:rounded-lg lg:overflow-hidden lg:border lg:border-black/20'>
                <div className='w-full py-2'>
                  {/* ---------------  PRECIOS */}
                  <div className='px-2'>
                    <s className='text-sm text-black/20'>$ {price}</s>
                    <div className='flex'>
                      <span className='text-2xl'>$ {price}</span>
                      <span className='text-actions-discount text-sm ml-1'>{ discount }% OFF</span>
                    </div>
                  </div>
                </div> 
                <div>
                  {    
                    inventory === 1 
                      ? <div>
                          <span className='w-full py-1.5 px-2 bg-actions-discount rounded-md font-semibold text-sm text-white'>
                            Aprovecha
                          </span>
                          <span className='pl-2'>
                            ¡Ultima Disponible!
                          </span>
                        </div>
                      : <button
                          onClick={ ()=>setViewCant(!viewCant) }
                          className='bg-primary/10 w-full h-10 px-4 rounded-md flex items-center justify-between text-sm lg:h-8'>
                            <div className='flex'>
                              <span>Cantidad:</span>
                              <span className='ml-2'>{count}</span>                   
                              <span className='ml-2 text-black/40'>{`( ${inventory} Disponibles )`}</span>
                            </div>
                            <span className='rotate-180 text-actions-success'>
                              <FaAngleLeft />
                            </span>
                        </button>
                  }
                  {
                    viewCant &&
                      <div className='w-screen h-full absolute top-0 left-0 bg-black/50 flex items-end'>
                        <div className='w-full bg-white rounded-t-2xl relative'>
                          <button
                            onClick={() => setViewCant(false)} 
                            className='absolute w-12 h-12 -top-[55px] right-4 rounded-full flex items-center justify-center text-2xl text-white'>
                              { <IoClose /> }
                          </button>
                          <div className='w-full h-14 font-semibold text-lg px-5 flex items-center border-b border-black/30'>
                            <h3>Elige la cantidad</h3>
                          </div>
                          <ul className='w-full'>
                            {
                              units.map((unit) => (
                                <li 
                                  key={ unit.id }  
                                  className='w-full h-14 flex items-center justify-center border-b border-black/30'>
                                    <button
                                      onClick={ unit.onClick }
                                      className='w-full h-full flex items-center justify-center hover:bg-primary/30 text-sm'>
                                      {unit.body}
                                    </button>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                  }
                </div>
                <div className='w-full py-5 flex flex-col gap-3 text-base'>
                  <button className='bg-actions-success w-full h-12 lg:h-10 rounded-md text-white'>Comprar ahora</button>
                  <button className='bg-actions-success/20 w-full h-12 lg:h-10 rounded-md text-actions-success'>Agregar al carrito</button>
                </div>
            </div>
            </div>
          {/* ---------- Caracteristicas ---------- */}
            <div className='w-full py-4 px-4'>
              <div className='w-full h-12 flex items-center lg:pl-2'>
                  <span className='font-semibold'>Características del producto</span>
              </div>
              <ul className='w-full rounded-md overflow-hidden border '>
                  {
                    Object.entries(features).map(([key, value], i )=>(
                      <li
                        key={key} 
                        className={`w-full h-12 flex justify-between text-sm
                                    ${ i % 2 === 0 ? 'bg-black/15' : ''}`}>
                        <div className='w-full h-full flex items-center justify-start pl-4'>
                          <p>{key}</p>
                        </div>
                        <div className='w-full h-full flex items-center justify-start pl-4'>
                          <p>{value}</p>
                        </div>
                      </li>
                    ))
                  }
              </ul>
            </div>
        </div>
        <div className=''>

        </div>
      </div>
    </>
  )
}
