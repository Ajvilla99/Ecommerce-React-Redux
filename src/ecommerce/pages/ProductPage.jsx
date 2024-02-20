// Hooks
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

// Functions
import { getProductById, renderRatingStarts } from '../helpers'

// Icons
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaAngleLeft } from 'react-icons/fa6';



export const ProductPage = () => {

  const { products } = useSelector( state => state.ecommerce );
  const [ view, setView ] = useState(false);
  const [ count, setCount ] = useState(1);

  const [ prueba, setPrueba ] = useState(true);

  const { id } = useParams()
  const product = getProductById( products, id );
  if ( !product ) { return <Navigate to={'/'}/>};

  const { name, price, image, discount, rating, inventory } = product;
  
  const stars = renderRatingStarts(rating);

  const action = (num) => {
    setCount(num)
    console.log(count);
  }

  const units = [
    { id: '1und', body: '1 Unidad', onClick: ()=>action(1) },
    { id: '2und', body: '2 Unidades', onClick: ()=>action(2) },
  ]


  return (
    <>
      <div className='w-full flex items-center'>
        <div className='w-full flex-col items-center bg-white'>
            <div className='w-full'>
              <div className='w-full pt-3'>
                <div className='w-full px-4 py-1 flex gap-1 items-center justify-end text-xs'>
                  <span>{rating}</span>
                  <span className='flex gap-0.5 text-actions-success'>{ stars.map( star => star ) }</span>
                  <span>{`(33)`}</span>
                </div>
                <div className='w-full px-4'>
                  <span className='text-sm capitalize'>{name}</span>
                </div>
              </div>
              <div className='w-full h-80 p-4 relative flex items-center justify-center'>
                <img 
                  alt={`Imagen de ${name}`}
                  src={image} 
                  className='max-h-full'
                />
                <button 
                  onClick={()=>setView(!view)}
                  className={`absolute w-10 h-10 right-4 top-4 rounded-full bg-primary/10 flex items-center justify-center text-xl
                              ${ view ? 'text-actions-success' : 'text-actions-success/60' }`}>
                  { view ? <GoHeartFill /> :  <GoHeart /> }
                </button>
              </div>
            </div>
            <div className='px-4'>
                <div className=''>
                  <button
                    // onClick={ }
                    className='bg-primary/10 w-full h-10 px-4 rounded-md flex items-center justify-between text-sm'>
                      <div className='flex'>
                        <span>Cantidad:</span>
                        <span className='ml-2'>{count}</span>                   
                        <span className='ml-2 text-black/40'>{`( ${inventory} Disponibles )`}</span>
                      </div>
                      <span className='rotate-180 text-black/50'>
                        <FaAngleLeft />
                      </span>
                  </button>
                </div>
                <div className='w-full mt-5 flex flex-col gap-3 text-base'>
                  <button className='bg-actions-success w-full h-12 rounded-md text-white'>Comprar ahora</button>
                  <button className='bg-actions-success/20 w-full h-12 rounded-md text-actions-success'>Agregar al carrito</button>
                </div>
            </div>
            {
              prueba &&
              <div className='absolute top-0 left-0 w-screen h-screen bg-black/20 flex items-end'>

              <div className='absolute bottom-0 w-full bg-white rounded-t-2xl'>
                <div className='w-full h-14 px-4 text-base font-semibold border-b border-black/10 flex items-center justify-between'>
                  <h3>Elige la cantidad</h3>
                </div>
                <ul className='w-full'>
                  {/* <li className='w-full h-14 border-b border-gray/70/90'>
                    <button className='w-full h-full flex items-center justify-center gap-3'>
                        <span>1</span>
                        <span>unidad</span>
                    </button>
                  </li> */}
                  { 
                    units.map((unit) => (
                      <li 
                        key={unit.id}
                        className='w-full h-14 border-b border-gray/70/90'>
                        <button
                          onClick={unit.onClick}
                          className='w-full h-full flex items-center justify-center gap-3'>
                            { unit.body }
                        </button>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>}
        </div>
      </div>
    </>
  )
}
