// Components
import { useSelector } from 'react-redux';
import { ProductListWithSorting, SearchFilterSidebar } from '../components/searchPage';

export const SearchPage = () => {

  const { products } = useSelector(state => state.ecommerce);
  

  return (
    <>
        <section className='w-full flex items-center justify-center'>
          <div className='w-full flex flex-col
                          lg:flex-row lg:justify-between lg:w-[1180px] lg:pt-5'>
            <SearchFilterSidebar />
            <ProductListWithSorting products={products} />
          </div>
        </section>
    </>
  )
}
