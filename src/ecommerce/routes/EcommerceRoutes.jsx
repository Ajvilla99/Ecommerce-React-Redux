import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'
import { Footer, Navbar } from '../../ui'
import { LoginPage } from '../../auth/pages/LoginPage'

export const EcommerceRoutes = () => {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path='*' element={ <Home /> } />
          <Route path='/login' element={ <LoginPage /> } />
      </Routes>
    <Footer/>
    </>
  )
}
