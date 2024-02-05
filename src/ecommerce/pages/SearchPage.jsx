// Components
import { useSelector } from 'react-redux';
import { ProductListWithSorting, SearchFilterSidebar } from '../components/searchPage';

export const SearchPage = () => {

  const {products} = useSelector(state => state.ecommerce);
  

  return (
    <>
        <section className='w-full flex flex-col'>
            <SearchFilterSidebar />
            <ProductListWithSorting products={products} />
        </section>
    </>
  )
}
