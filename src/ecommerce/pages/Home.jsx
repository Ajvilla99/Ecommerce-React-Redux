
import { Carrousel, CarrouselProduct, CarrouselOferts, CarrouselCategory } from '../components'
import { useDisplaySize } from '../../hooks/useDisplaySize'
import { useSelector } from 'react-redux'




export const Home = () => {

  const { categories } = useSelector(state => state.ecommerce);
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
