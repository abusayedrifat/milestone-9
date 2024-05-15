import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config.js";
import { useState } from "react";

const Register = () => {

    const [submitError, setSubmitError] = useState('');
    const [submitSuccess ,  setSubmitSuccess] = useState('');
 
    const handleSubmit = e =>{
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
    //    const text = e.target.text.value;
      setSubmitError('');
       setSubmitSuccess('');

        if(password.length < 6){
            setSubmitError('pasword must be at least 6 character');

            return;
        }
       createUserWithEmailAndPassword(auth,email,password)
       .then(result =>{
        const user = result.user;
        console.log(user);
        setSubmitSuccess('user created successfully')
       })
       .catch(() =>{
        setSubmitError('user already exists')
       })
       e.target.email.value = '';
       e.target.password.value = '';
       e.target.text.value = '';
    }
    return (
        <div className="">
            <h2 className=" text-center font-bold text-3xl mt-20 mb-7">Please Register</h2>
            <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4 w-1/4 p-5 bg-gray-200 rounded-xl">
                <input className="h-12 pl-4 rounded-lg" type="text" name="text" placeholder="Name"/>
                <input className="h-12 pl-4 rounded-lg" type="email" name="email" placeholder="Email" required />
                <input className="h-12 pl-4 rounded-lg" name="password" type="password" placeholder="Password" required/>
                <input className=" btn bg-purple-700 text-white hover:bg-purple-900" type="submit" value='Register' />
            </form>
            {
                submitError && <p className=" text-red-600 text-center my-5">{}{submitError}</p>
                
            }
            {
                submitSuccess && <p className="text-center text-green-700 my-5">{submitSuccess}</p>
            }
          
        </div>
    );
};

export default Register;