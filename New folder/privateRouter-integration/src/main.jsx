import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import LogIn from './Components/LogIn/LogIn.jsx'
import Register from './Components/Register/Register.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import PrivateRouter from './Components/PrivateRouter/PrivateRouter.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
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
        path:'/blogs',
        loader: ()=> fetch(`/public/travel.json`),
        element:<PrivateRouter><Blogs></Blogs></PrivateRouter>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
   
  </StrictMode>,
)
