// Components
import { useSelector } from 'react-redux';
import { ProductListWithSorting, SearchFilterSidebar } from '../components/searchPage';

import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getProductByName } from '../helpers';

export const SearchPage = () => {

  const { products } = useSelector(state => state.ecommerce);
  
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  
  const productSearch = getProductByName( products, q )

  return (
    <>
        <section className='w-full flex items-center justify-center'>
          <div className='w-full flex flex-col
                          lg:flex-row lg:justify-between lg:w-[1180px] lg:pt-5'>
            <SearchFilterSidebar searchText={q} />
            <ProductListWithSorting products={productSearch} />
          </div>
        </section>
    </>
  )
}
