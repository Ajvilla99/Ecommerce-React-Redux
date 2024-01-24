import { Link } from 'react-router-dom'
import { Carrousel } from '../components/Carrousel'
import { CarrouselProduct } from '../components/CarrouselProduct'
import { CarrouselOferts } from '../components/CarrouselOferts'




export const Home = () => {

  // TODO: 
  // Solo para entregar datos

  return (
    <>
      <Carrousel />
      <div className='w-full flex justify-center'>
          <div className='lg:max-w-[1180px] flex flex-col lg:flex-row lg:justify-between'>
            <CarrouselOferts />
            <CarrouselProduct itemPagina={4}/>
        </div>
      </div>
      <CarrouselProduct fullScreen itemPagina={6}/>
      <CarrouselProduct fullScreen itemPagina={6}/>
      
    </>
  )
}
