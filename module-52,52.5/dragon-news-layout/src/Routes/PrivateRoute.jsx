import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);
    

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/logIn'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes ={
    children : PropTypes.node
}