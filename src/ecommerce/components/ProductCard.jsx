import { useRef } from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ name, imagen, price, discount, id }) => {

    const clickProduct = useRef(null);
    const onClick = () => {
        clickProduct.current.click()
    }

  return (
    <li
        onClick={onClick} className='group group-hover:text-actions-success p-1 w-full h-full bg-white
                   lg:h-[361px] lg:min-w-[196.6px]' >
        <div className='w-full h-full'>
            <div className='w-full lg:h-1/2 relative flex items-center justify-center'>
                <span className='absolute w-full h-full left-0 top-0 bg-gray-600/5 lg:hidden'></span>
                <img src={imagen} alt={`imagen de ${name}`} className='object-contain h-5/6  lg:h-full'/>
            </div>
            <div className='w-full lg:h-1/2 px-2 pt-5 text-black/90'>
                <Link
                 to={`/category/${id}`}
                 ref={clickProduct}
                 className='text-sm line-clamp-2 mb-2 group'>
                    {name}
                </Link>
                { discount && <s className='text-xs text-gray-400'>$ 3.690.000</s>}
                <div className='flex flex-wrap gap-1'>
                    <span className='font-semibold lg:text-xl lg:font-normal'>
                       $ {price}
                    </span>
                    <span className='text-actions-discount text-xs lg:text-xs uppercase'>45% off</span>
                </div>
            </div>
        </div>
    </li>
  )
}
