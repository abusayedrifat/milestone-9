import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import "./logIn.css";
import { useContext } from "react";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";

const LogIn = () => {
    const {logInUser} = useContext(AuthContext)
    const navigate = useNavigate()


    const handlelogIn = e =>{

        e.preventDefault();
        const form = new FormData(e.currentTarget)
        
        const email = form.get('email')
        const password = form.get('password')
        e.target.email.value =''
        e.target.password.value =''
        

        logInUser(email, password)
        .then(result =>{
            navigate('/');
            console.log(result);
            
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    }
   
  
    
    
  return (
    <div className="bg-[#F3F3F3] pb-[50px] ">
      <Navbar></Navbar>
      <div className="bg-white h-full w-[70%] mx-auto my-28 px-24 py-20  rounded-md">
        <h1 className="text-color text-3xl font-semibold text-center mb-24   ">
          Login your account
        </h1>
        <form onSubmit={handlelogIn} action="" className="space-y-8">
          <div className="form-control space-y-3">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input bg-[#F3F3F3] input-bordered"
              required
            />
          </div>
          <div className="form-control space-y-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-[#F3F3F3] input-bordered"
              required
            />
          </div>
        
                <button className="btn bg-[#403F3F] w-full text-white text-xl hover:text-[#403F3F]">
            Log In
          </button>
        
          
        </form>
        <div className="text-center mt-8 text-[#706F6F] font-semibold">
            <p>
              Don&apos;t Have An Account?{" "}
              <NavLink to="/register" className="text-[#F75B5F]">
                Register
              </NavLink>
            </p>
          </div>
      </div>
    </div>
  );
};

export default LogIn;
