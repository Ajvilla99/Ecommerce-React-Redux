import { Navigate, Route, Routes } from "react-router-dom"
import { EcommerceRoutes } from "../ecommerce/routes/EcommerceRoutes"
import { useSelector } from "react-redux";
import { AuthRoutes } from "../auth/routes/AuthRoutes";


export const AppRouter = () => {

  // const status = useCheckAuth();

  // if ( status === 'cheking') { return <CheckinAuth />}
  const { status } = useSelector( state => state.auth ); 

  return (
    <Routes>
        {
          ( status === 'authenticated' )
           ? <Route path='/*' element={ <EcommerceRoutes /> }/>
           : <Route path='/auth/*' element={ <AuthRoutes /> }/>
        }

          <Route path="/*" element={ <Navigate to='/auth/login' /> }/>
    </Routes>
  )
}
