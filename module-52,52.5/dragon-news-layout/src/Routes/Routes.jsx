import { createBrowserRouter } from "react-router-dom";

import Error from "../Error.jsx";
import Root from "../Layout/Root.jsx";
import Home from "../Pages/Home/Home.jsx";
import LogIn from "../Pages/LogIn/LogIn.jsx";
import Register from "../Pages/Register/Register.jsx";
import NewsDetails from "../Pages/NewsDetails/NewsDetails.jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
          {
            path:'/',
            loader:()=> fetch('/public/news.json'),
            element:<Home></Home>
          },
          {
            path:'/logIn',
            element:<LogIn></LogIn>
          },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:'/newsDetails/:category_id',
            loader:()=> fetch('/public/news.json'),
            element:<NewsDetails></NewsDetails>
          }
          
        ]
      }
])

export default router;