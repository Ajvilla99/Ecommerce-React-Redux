import { Carrousel } from '../components/Carrousel'
import { CarrouselProduct } from '../components/CarrouselProduct'
import { CarrouselOferts } from '../components/CarrouselOferts'
import { CarrouselCategory } from '../components'
import { categories } from '../components/categories'
import { useDisplaySize } from '../../hooks/useDisplaySize'




export const Home = () => {


  const { width , height } = useDisplaySize()
  
  // TODO: 
  // Solo para entregar datos

  return (
    <>
      <Carrousel />
      <div className='w-full flex justify-center'>
          <div className='lg:w-[1180px] flex flex-col lg:flex-row lg:justify-between'>
            <CarrouselOferts />
            <CarrouselProduct itemPagina={4}/>
        </div>
      </div>
      <CarrouselProduct fullScreen itemPagina={6}/>
      <CarrouselCategory data={categories} itemPagina={9}/>
    </>
  )
}
