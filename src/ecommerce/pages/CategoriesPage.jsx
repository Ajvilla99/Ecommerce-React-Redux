import { CategoryCard } from "../components/CategoriesPage/CategoryCard"

export const CategoriesPage = () => {
  return (
    <>
      <section className='w-full flex justify-center items-center'>
        <div className='w-11/12'>

          <ul className='w-full grid grid-cols-3 gap-3 py-3'>
           {
            [...Array(9)].map((_, i) => (
              <CategoryCard name={'categoria'}/>
            ))
           }
          </ul>

        </div>
      </section>
    </>
  )
}
