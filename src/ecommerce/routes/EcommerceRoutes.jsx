import { Navigate, Route, Routes } from 'react-router-dom'
import { CategoriesPage, Home, CartPage, ProductPage } from '../pages'
import { Footer, Navbar } from '../../ui'
import { SearchPage } from '../pages/SearchPage'

export const EcommerceRoutes = () => {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/categories' element={ <CategoriesPage /> } />
          <Route path='/cart' element={ <CartPage /> } />
          <Route path='/search' element={ <SearchPage /> } />
          <Route path='/product/:id' element={ <ProductPage /> } />
      </Routes>
    <Footer/>
    </>
  )
}
