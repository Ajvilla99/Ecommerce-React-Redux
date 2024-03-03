// Hooks
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Custom Hooks
import { useDisplaySize } from '../../hooks/useDisplaySize';

// Functions
import { formatNumber, getProductById, renderRatingStarts } from '../helpers'

// Components
import { FeaturesProduct, ProductInteractionBar, DescriptionProduct, CarouselImage, CommentSection, ProductShow } from '../components/ProductPage';
import { useCounter } from '../../hooks';

export const ProductPage = () => {

  const { products } = useSelector( state => state.ecommerce );
  const { width } = useDisplaySize();

  const { counter, increment, decrement } = useCounter(1);

  const { id } = useParams();
  const product = getProductById( products, id );
  if ( !product ) { return <Navigate to={'/'}/>};

  const { name, price, images, discount, rating, inventory, features, description, comments } = product;

  const stars = renderRatingStarts(rating);
  const priceFormat = formatNumber(price);


  return (
    <>
        <section className='flex flex-col lg:flex-row lg:justify-center lg:mt-5'>
          <div className='w-full lg:w-desktop lg:mx-w-desktop bg-white lg:flex lg:rounded-md lg:p-4'>
              <section className=''>
                <ProductShow {...product} counterProduct={counter}/>
                <hr />
                <FeaturesProduct {...product}/>
                <hr />
                <DescriptionProduct {...product} />
                <hr />
                <CommentSection {...product} />
              </section>
              { width >= 1024 && 
                  <ProductInteractionBar
                    {...product}
                    counterProduct={counter}
                    increment={increment}
                    decrement={decrement}
                  />
              }
          </div>
        </section>
    </>
  )
}
