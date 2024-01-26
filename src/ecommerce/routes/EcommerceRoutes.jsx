import { Navigate, Route, Routes } from 'react-router-dom'
import { CategoriesPage, Home } from '../pages'
import { Footer, Navbar } from '../../ui'
import { PurchaseDashboard } from '../pages'

export const EcommerceRoutes = () => {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/categories' element={ <CategoriesPage /> } />
          <Route path='/purchase' element={ <PurchaseDashboard /> } />
          {/* <Route path='' element={ <Home /> } /> */}
          <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    <Footer/>
    </>
  )
}
