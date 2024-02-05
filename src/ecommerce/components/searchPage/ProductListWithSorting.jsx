import React from 'react'
import { ProductCardSearch } from './ProductCardSearch'

export const ProductListWithSorting = ({ products }) => {
  return (
    <ul className=''>
      {products.map(product => (
        <ProductCardSearch  key={product.id} {...product}/>
      ))}
    </ul>
  )
}
