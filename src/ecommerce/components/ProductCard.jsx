import { useRef } from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ name, price, discount }) => {

    const clickProduct = useRef(null)

    const onClick = () => {
        clickProduct.current.click()
    }

  return (
    <li onClick={() => onClick()} className='w-full h-28 flex lg:cursor-pointer'>
        <div className='w-2/5 h-full'>
            <img src='https://i.imgur.com/kXM6Y3t.jpg' alt="" className='object-cover h-full'/>
        </div>
        <div className='w-3/5 h-full flex flex-col py-2 px-1 relative'>
            <Link
                ref={clickProduct}
                to={'category/id'}
                className='text-xs capitalize'>Lorem ipsum dolor sit amet consectetur
            </Link>
            <div className='flex gap-2'>
                <p className='text-lg'>$ 14.900</p>
                <p className='text-xs font-bold text-actions-discount'>30% OFF</p>
            </div>
        </div>
    </li>
  )
}
