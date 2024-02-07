
// Components
import { ProductCardSearch } from './'

export const ProductListWithSorting = ({ products }) => {
  return (
    <div className='w-full flex lg:flex-col gap-3
                    lg:w-[calc(1180px-370px)]'>
      <div className='hidden h-12 lg:flex items-center bg-white'>

      </div>
      <ul className='w-full flex flex-col py-3 bg-white'>


        {
          products.map(product => (
            <ProductCardSearch  key={product.id} {...product}/>
          ))
        }
      </ul>
    </div>
  )
}
