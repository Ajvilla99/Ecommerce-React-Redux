// Components
import { ProductListWithSorting, SearchFilterSidebar } from '../components/searchPage';

export const SearchPage = () => {

  return (
    <>
        <section className='w-full flex flex-col'>
            <SearchFilterSidebar />
            <ProductListWithSorting />
        </section>
    </>
  )
}
