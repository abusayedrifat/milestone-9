import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, reloading} = useContext(AuthContext)
    console.log(user);

    if (reloading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    if (user) {
        return children
    }
    return <Navigate to='/logIn'></Navigate>
};

export default PrivateRouter;