import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const navigate = useNavigate()
    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.password.value = '';

        createUser(email, password)
        .then(result =>{
            navigate('/logIn')
            console.log(result.user);
            
        })
        .catch( error =>{
            console.log(error.message);
            
        })
        
    }
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="hero mt-24 mb-14  ">
          <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
            <form onSubmit={handleRegister} className="card-body p-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <div className="text-center mb-6">
              <p>
                Already have an account?
                <NavLink to="/logIn" className={"underline font-semibold"}>
                  SignIn
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
