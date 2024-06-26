import { createBrowserRouter } from "react-router-dom";

import Error from "../Error.jsx";
import Root from "../Layout/Root.jsx";
import Home from "../Pages/Home/Home.jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          
        ]
      }
])

export default router;