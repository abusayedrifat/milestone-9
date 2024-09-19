import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Header = () => {
  const navbar = 
    <>
      <li className=" hover:bg-slate-300 rounded-md px-4 py-2 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" hover:bg-slate-300 rounded-md px-4 py-2 ">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li className=" hover:bg-slate-300 rounded-md px-4 py-2 ">
        <NavLink to="/info">Info</NavLink>
      </li>
      <li className=" hover:bg-slate-300 rounded-md px-4 py-2 ">
        <NavLink to="about">About</NavLink>
      </li>
    </>

  const {user, logOut} = useContext(AuthContext)
  const navigate = useNavigate()
 
  const handleLogOut = () =>{
      logOut()
      .then(result =>{
        navigate('/logIn')
        console.log('logged out', result);
      })
      .catch(error =>{
        console.log(error.message);
        
      })
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold mx-auto"
            >
              {navbar}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal  px-1 bg-none flex gap-3 font-bold text-xl">
            {navbar}
          </ul>
        </div>
        <div className="navbar-end">
         {
          user ? <button onClick={handleLogOut} className="btn">LogOut</button> :  <Link to='/logIn' className="btn">LogIn</Link>
         }
          
        </div>
      </div>
    </div>
  );
};

export default Header;
