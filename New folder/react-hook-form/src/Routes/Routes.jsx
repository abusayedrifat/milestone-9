import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import LOgIn from "../Pages/LogIn/LOgIn";
import Register from "../Pages/Register/Register";


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
                element:<LOgIn></LOgIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;