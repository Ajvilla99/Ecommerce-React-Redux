// Hooks
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Custom Hooks
import { useDisplaySize } from '../../hooks/useDisplaySize';


// Functions
import { formatNumber, getProductById, renderRatingStarts } from '../helpers'

// Icons
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaAngleLeft } from 'react-icons/fa6';
import { IoClose } from "react-icons/io5";

import { SlArrowLeft } from "react-icons/sl";
import { CarouselImage } from '../components/ProductPage/CarouselImage';
import { GalleryImage } from '../components/ProductPage';
import { ProductInteractionBar } from '../components/ProductPage/ProductInteractionBar';

// useEffect(() => {
//   if (viewCant) {
//     document.body.style.overflow = 'hidden';
//   } else {
//     document.body.style.overflow = 'auto';
//   }
// }, [viewCant]);

export const ProductPage = () => {

  const { products } = useSelector( state => state.ecommerce );
  
  const { width } = useDisplaySize();

  const { id } = useParams()
  const product = getProductById( products, id );
  if ( !product ) { return <Navigate to={'/'}/>};

  const { name, price, image, discount, rating, inventory, features } = product;

  const stars = renderRatingStarts(rating);
  const priceFormat = formatNumber(price);


  return (
    <>
        <section className='w-full flex justify-center'>
          <div
            className='w-full bg-white
                       lg:w-desktop lg:p-5 lg:mt-10 lg:flex lg:gap-5 lg:rounded-md'>
              
              <section className='w-full'>
                
                <div className='w-full lg:flex lg:flex-row-reverse'>
                    <div className='w-full py-2 px-4 lg:pt-4'>
                        <div className='flex flex-col lg:flex-col-reverse lg:relative'>
                          <div className='flex items-center justify-end gap-1 text-sm lg:justify-start lg:mt-4'>
                            <span className=''>{rating}</span>
                            <span className='flex gap-0.5 text-actions-success'>{ stars.map( star => star ) }</span>
                            <span className='text-black/50'>{`(${33})`}</span>
                          </div>
                        <span className='w-full lg:text-xl lg:flex lg:mt-5'>{name}</span>    
                      </div>
                      { 
                        width >= 1024 
                          && <div className='w-full flex flex-col'>
                              <div className='mt-2 flex flex-col'>
                                <div className='flex gap-2'>
                                  <span className='text-2xl'>$ {priceFormat}</span>
                                  <span className='text-actions-discount text-sm'>{discount}% OFF</span>
                                </div>
                                    <Link className='mt-2 text-sm text-actions-success'>Ver medios de pagos</Link>
                              </div>
                            </div>
                      }
                    </div>
                    { width < 1024
                       ? <CarouselImage  image={image}/> 
                        : <GalleryImage image={image} />
                    }
                </div>
                <hr  className='hidden lg:block mx-10'/>
                
              </section>


              <div className='w-full lg:w-[300px] lg:p-5 lg:min-w-[300px] lg:max-w-[300px] lg:border lg:border-black/15 rounded-md h-screen'>
                <ProductInteractionBar {...product}/>
              </div>
          </div>

        </section>
    </>
  )
}
