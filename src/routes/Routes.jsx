import HomePage from '../page/HomePage'
import Picado from '../page/Picado'
import Puas from '../page/Puas'
import {createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      errorElement: <h1>404</h1>
    },
    {
      path: "/picado",
      element: <Picado/>,
      errorElement: <h1>404</h1>
    },
    {
      path: "/puas",
      element: <Puas/>,
      errorElement: <h1>404</h1>
    }
  
  ])

  export default router