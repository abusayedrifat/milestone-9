import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import './Register.css'
import { useContext } from "react";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photoUrl = form.get('photoUrl')

        console.log(name,photoUrl);
        

        e.target.name.value =''
        e.target.email.value =''
        e.target.password.value =''
        e.target.photoUrl.value =''

        createUser(email, password)
        .then(result =>{
            navigate('/logIn')
            console.log(result);
            
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    }
    return (
        <div className="bg-[#F3F3F3] pb-[50px] ">
      <Navbar></Navbar>
      <div className="bg-white h-full w-[750px] mx-auto my-28 px-24 py-20  rounded-md">
        <h1 className="text-color text-3xl font-semibold text-center mb-24   ">
         Register your account
        </h1>
        <form onSubmit={handleRegister} action="" className="space-y-8">
          <div className="form-control space-y-3">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input bg-[#F3F3F3] input-bordered"
             
            />
          </div>
          <div className="form-control space-y-3">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Enter your photo url"
              className="input bg-[#F3F3F3] input-bordered"
             
            />
          </div>
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
          <div>
            
          <input type="checkbox" name="" id="" />
            <label htmlFor="">Accept terms and condition</label>
          </div>
          <button className="btn bg-[#403F3F] w-full text-white text-xl hover:text-[#403F3F]">
            Register
          </button>
        </form>
        <div className="text-center mt-8 text-[#706F6F] font-semibold">
            <p>
              Already Have An Account?
              <NavLink to="/logIn" className="text-[#F75B5F]">
                LogIn
              </NavLink>
            </p>
          </div>
      </div>
    </div>
    );
};

export default Register;