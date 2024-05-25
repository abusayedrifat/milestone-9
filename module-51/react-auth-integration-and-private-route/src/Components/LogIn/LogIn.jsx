import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const LogIn = () => {
  const navigate = useNavigate()
  const {signInUser} = useContext(AuthContext)

  const handleSignIn = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email,password)
    .then(result =>{
      console.log(result.user);
      navigate('/')
    })
    .catch(error =>{
      console.log(error.message);
    })
  }
  return (
    <div className="flex flex-col justify-center items-center px-6 bg-gray-300 h-screen">
      <h1 className="text-5xl font-bold mb-8">Login now!</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
      <div className="flex ">
            <p>Don&apos;t have an account?</p>
            <NavLink to='/register' className="underline text-blue-600 italic">Register</NavLink>
        </div>
    </div>
  );
};

export default LogIn;
