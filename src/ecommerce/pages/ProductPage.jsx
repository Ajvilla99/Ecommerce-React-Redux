// Hooks
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Custom Hooks
import { useDisplaySize } from '../../hooks/useDisplaySize';

// Functions
import { formatNumber, getProductById, renderRatingStarts } from '../helpers'

// Components
import { FeaturesProduct, GalleryImage, ProductInteractionBar, DescriptionProduct, CarouselImage, CommentSection } from '../components/ProductPage';

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

  const { name, price, images, discount, rating, inventory, features, description, comments } = product;

  const stars = renderRatingStarts(rating);
  const priceFormat = formatNumber(price);


  return (
    <>
        <section className='w-full flex flex-col items-center'>
          <div className='w-full flex flex-col lg:w-desktop bg-white lg:flex-row lg:p-4 lg:mt-10 lg:rounded-md'>
              <section className='w-full'>
                <div className='w-full lg:flex lg:flex-row-reverse'>
                  <div className='w-full flex flex-col lg:flex-col-reverse lg:h-fit'>
            {/* ---- Price And Inventory ---- */}
                    <div className='w-full flex lg:flex-col justify-between lg:justify-start lg:gap-3 my-2 px-4'>
                        <span className='text-black/60 text-sm'>
                          Nuevo | {inventory} Disponible
                        </span>
                        <span className='flex items-center gap-1 text-sm'>
                          <span>{rating}</span>
                          <span className='flex text-actions-success'>{ stars.map( star => star ) }</span>
                          <span>({11})</span>
                        </span>
                        { width >= 1024 && 
                            <span className='flex gap-1'>
                              <span className='text-2xl'>$ {formatNumber(price)}</span>
                              { discount && <span className='text-actions-discount'>{discount}% OFF</span>}
                            </span>
                        }
                    </div>
            {/* ---- Name ---- */}
                    <div className='px-4 relative lg:pr-14 lg:mt-5'>
                      <span>{name}</span>
                    </div>
                  </div>
                  { width < 1024 ? <CarouselImage {...product} /> : <GalleryImage {...product} /> }
                  { width < 1024 && <ProductInteractionBar {...product} /> }       
                </div>
                <hr className='mx-5 lg:mx-7'/>           
                <FeaturesProduct features={features} />
                <hr className='mx-5 lg:mx-7'/>              
                <DescriptionProduct description={description} />           
              </section>
              { width >= 1024 &&
                  <div className='w-[320px] p-3 rounded-md border'>
                    <ProductInteractionBar {...product} /> 
                  </div>
              }
          </div>
          <CommentSection rating={rating} comments={comments}/>
        </section>
    </>
  )
}
