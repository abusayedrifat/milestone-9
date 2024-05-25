import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Header = () => {

  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error.message);
    })
  }
    const navbar = <>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/logIn'>LogIn</NavLink></li>
       <li><NavLink to='/register'>Register</NavLink></li>
       <li><NavLink to='/orders'>Orders</NavLink></li>
    
    </>
    return (
        <div>
            <nav>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navbar}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Auth-Integration</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navbar}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user &&  <> 
      <span> {user.email} </span> 
     
      </>
       
    }
    {
      user? <button onClick={handleLogOut} className="btn"> SignOut </button> :  <Link to='/logIn' className="btn">LogIn</Link>
    }
  </div>
</div>
            </nav>
        </div>
    );
};

export default Header;