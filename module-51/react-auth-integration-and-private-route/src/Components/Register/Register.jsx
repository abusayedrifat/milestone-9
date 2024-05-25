import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password);

    //create user in firebase
    createUser(email, password)
    .then(result =>{
      navigate('/logIn')
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error.message)
    })
    e.target.email.value = '';
       e.target.password.value = '';
       e.target.name.value = '';
  }
    return (
        <div className="flex flex-col justify-center items-center px-6 bg-gray-300 h-screen">
      <h1 className="text-5xl font-bold mb-8">Register now!</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Register;