import { useSelector } from "react-redux"
import { CategoryCard } from "../components/CategoriesPage/CategoryCard"

export const CategoriesPage = () => {

  const { categories } = useSelector(state => state.ecommerce)

  return (
    <>
      <section className='w-full flex justify-center items-center'>
        <div className='w-11/12'>

          <ul className='w-full grid grid-cols-3 gap-3 py-3'>
           {
            categories.map((category) => (
              <CategoryCard key={category.id} {...category}/>
            ))
           }
          </ul>

        </div>
      </section>
    </>
  )
}
