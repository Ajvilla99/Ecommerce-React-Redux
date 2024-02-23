// Hooks
import { useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Custom Hooks
import { useDisplaySize } from '../../hooks/useDisplaySize';
import { useCounter } from '../../hooks';

// Functions
import { getProductById, renderRatingStarts } from '../helpers'

// Icons
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaAngleLeft } from 'react-icons/fa6';
import { IoClose } from "react-icons/io5";

import { SlArrowLeft } from "react-icons/sl";
import { CarouselImage } from '../components/ProductPage/CarouselImage';
import { GalleryImage } from '../components/ProductPage';

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



  return (
    <>
        <section className='w-full flex justify-center'>
          <div
            className='w-full bg-white
                       lg:w-desktop lg:p-5 lg:mt-10 lg:flex lg:gap-10 lg:rounded-md'>
              
              <section className='w-full'>
                
                <div className='w-full lg:flex lg:flex-row-reverse'>
                    <div className='w-full lg:w-[calc()] py-2 px-4'>
                      <div className='flex items-center justify-end gap-1 text-sm'>
                        <span className=''>{rating}</span>
                        <span className='flex gap-0.5 text-actions-success'>{ stars.map( star => star ) }</span>
                        <span className='text-black/50'>{`(${33})`}</span>
                      </div>
                      <span className=''>{name}</span>
                    </div>
                    { width < 1024
                       ? <CarouselImage  image={image}/> 
                        : <GalleryImage image={image} />
                    }
                </div>
              </section>


              <div className='w-full lg:w-[325px] lg:min-w-[325px] lg:max-w-[325px] rounded-md h-screen'>
                
                <div className='button'>

                </div>
              </div>
          </div>

        </section>
    </>
  )
}
