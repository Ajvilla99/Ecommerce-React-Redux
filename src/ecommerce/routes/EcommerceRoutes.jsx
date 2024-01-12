import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'
import { Footer, Navbar } from '../../ui'

export const EcommerceRoutes = () => {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
      </Routes>
    <Footer/>
    </>
  )
}
