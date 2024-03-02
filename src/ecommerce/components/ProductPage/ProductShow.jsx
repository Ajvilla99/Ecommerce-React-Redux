import React from 'react'

// Components
import { GalleryImageMobile } from './GalleryImageMobile'
import { GalleryImage } from './GalleryImage'

// Functions
import { formatNumber, renderRatingStarts } from '../../helpers'
// Custom Hooks
import { useDisplaySize } from '../../../hooks'
import { FaAngleDown } from 'react-icons/fa6'

export const ProductShow = ({ price, name, images, rating, discount, inventory, counterProduct }) => {

    const { width } = useDisplaySize();
    
  return (
    <div className='bg-white'>
        { width < 1024 && 
            <div className='w-full py-2 px-4 text-sm flex'>
                <span className='flex items-center text-actions-success'>{renderRatingStarts(rating)}</span>
                <span className='ml-2'>{ rating.toFixed(1) }</span>
            </div>
        }
        { width < 1024 && 
                <div className='w-full py-1 px-4'>
                    <span>{name}</span>
                </div>
        }
        <div className=''>
            { width < 1024 ? <GalleryImageMobile images={images} /> : <GalleryImage  images={images}/> }
        </div>
        { width < 1024 &&
            <div className='w-full p-4'>
                <div className='flex'>
                    <span className='text-xl'>$ {formatNumber(price)}</span>
                { discount && <span className='text-actions-discount font-semibold ml-1'>{discount}% OFF</span>}
                </div>
                { inventory > 1 && 
                    <div>
                        <button 
                            className='w-full flex py-3 rounded-md items-center'>
                            <span className='capitalize'>cantidad:</span>
                            <span className='ml-2'>{counterProduct}</span>
                            <span className='ml-2 text-black/40'>{`(${inventory} Disponibles)`}</span>
                            <span className='ml-2 text-actions-success'><FaAngleDown /></span>
                        </button>
                    </div>
                }
                <div className='w-full mt-4'>
                    <button className='w-full py-3 font-semibold first-letter:uppercase active:scale-95 duration-300 text-white rounded-md bg-actions-success'>comprar ahora</button>
                    <button className='w-full py-3 font-semibold first-letter:uppercase active:scale-95 duration-300 text-actions-success rounded-md bg-actions-success/40 mt-4'>agregar al carrito</button>
                </div>
            </div>
        }
    </div>
  )
}
