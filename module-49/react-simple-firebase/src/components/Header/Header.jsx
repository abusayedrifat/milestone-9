import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/logIn'>LogIn</NavLink>
            </div>

        </div>
    );
};

export default Header;