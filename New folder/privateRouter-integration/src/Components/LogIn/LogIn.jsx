import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const LogIn = () => {
    const {logInUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logInUser(email, password)
        .then(result =>{
            navigate('/')
            console.log('logged In',result.user);
            
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="hero mt-24 mb-14 ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center">
        <p>Don&apos;t have an account?</p>{" "}
        <NavLink to="/register" className="underline  font-semibold">
          Register Now
        </NavLink>
      </div>
    </div>
  );
};

export default LogIn;
