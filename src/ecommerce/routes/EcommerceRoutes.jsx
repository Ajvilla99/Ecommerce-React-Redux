import { Navigate, Route, Routes } from 'react-router-dom'
import { CategoriesPage, Home, CartPage } from '../pages'
import { Footer, Navbar } from '../../ui'

export const EcommerceRoutes = () => {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/categories' element={ <CategoriesPage /> } />
          <Route path='/cart' element={ <CartPage /> } />
          
          {/* <Route path='/*' element={ <Navigate to='/' /> } /> */}
      </Routes>
    <Footer/>
    </>
  )
}
