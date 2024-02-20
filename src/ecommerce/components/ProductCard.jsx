import { useRef } from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ name, image, price, discount, id, full }) => {

    const clickProduct = useRef(null);
    const onClick = () => {
        clickProduct.current.click()
    }

    const applyDiscount = (num1, num2) => {
        const a = parseInt(num1)
        const b = parseInt(num2)
        if ( a === 0 || b === 0 ) return
        const discountPrice = a - ((a * b) / 100)
        return formatNumber(discountPrice.toFixed(0))
    }

    // Función para formatear números con puntos de mil
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const productSlug = encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'));


  return (
    <li 
        onClick={onClick} className={`group p-1 w-full h-full bg-white cursor-pointer
                   lg:h-[361px] lg:min-w-[196.6px]`} >
        <div className='w-full h-full'>
            <div className='w-full lg:h-1/2 relative flex items-center justify-center'>
                <span className='absolute w-full h-full left-0 top-0 bg-gray-600/5 lg:hidden'></span>
                <img src={image} alt={`imagen de ${name}`} className='object-contain h-5/6  lg:h-full'/>
            </div>
            <div className='w-full lg:h-1/2 px-2 pt-5 text-black/90'>
                <Link
                 to={`/product/${id}`}
                 ref={clickProduct}
                 className='text-sm line-clamp-2 mb-2 px-2 group-hover:text-actions-success duration-200'>
                    {name}
                </Link>
                { discount > 0 ? <s className='text-xs px-2 text-gray-400'>$ {formatNumber(price)}</s> : '' }
                <div className='flex flex-wrap gap-1 px-2'>
                    <span className='font-semibold lg:text-xl lg:font-normal'>
                       $ { discount > 0 ? applyDiscount(price, discount) : formatNumber(price) }
                    </span>
                    { discount > 0 ? <span className='text-actions-discount text-xs lg:text-xs uppercase'>{discount}% off</span> : '' }
                </div>
            </div>
        </div>
    </li>
  )
}
