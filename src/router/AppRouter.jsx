import { Route, Routes } from "react-router-dom"
import { EcommerceRoutes } from "../ecommerce/routes/EcommerceRoutes"
import { LoginPage, RegisterPage } from "../auth/pages"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <EcommerceRoutes /> }/>
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/register' element={ <RegisterPage /> } />
    </Routes>
  )
}
