import { Route, Routes } from "react-router-dom"
import { EcommerceRoutes } from "../ecommerce/routes/EcommerceRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <EcommerceRoutes /> }/>
    </Routes>
  )
}
