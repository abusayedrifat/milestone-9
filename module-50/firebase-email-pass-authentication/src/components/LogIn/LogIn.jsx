import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.config";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const LogIn = () => {
    const [userFound , setUserFound] = useState('');
    const [userNotFound , setUserNotFound] = useState('');

    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
    setUserFound('');
    setUserNotFound('');

    signInWithEmailAndPassword(auth,email,password)

    .then(result =>{
        const user = result.user;
        if (result.user.emailVerified) {
         setUserFound('successfully LoggedIN')
         console.log(user);   
        }
        else{
            setUserNotFound('please verify first')
            return
        }
        
    })
    .catch(error =>{
        setUserNotFound('email or password may not be correct')
        console.log(error.message);
    })
    e.target.email.value = '';
    e.target.password.value = '';
}
    return (
        <div>
            <Helmet>
                <title>Auth | LogIn</title>
            </Helmet>
            <h2 className=" text-center font-bold text-3xl mt-20 mb-7">Please LogIn</h2>
            <form onSubmit={handleLogIn} className="mx-auto flex flex-col gap-4  w-[350px] p-5 bg-gray-200 rounded-xl">
                <input className="h-12 pl-4 rounded-lg" type="email" name="email" placeholder="Email"/>
                <input className="h-12 pl-4 rounded-lg" type="password" name="password" placeholder="Password" />
                <NavLink to='/resetPassword' className='underline'>Forget Password</NavLink>
                <input className="btn bg-purple-700 text-white hover:bg-purple-900" type="submit" value='LogIn' />
                
            </form>
            <div className="w-[330px]  mx-auto ">
            <p className="flex">Don&apos;t have an account ? <NavLink to='/register' className='text-blue-500 underline'>Register Now</NavLink></p> 
                
            </div>
            { 
                <p className="text-center my-5 text-xl font-bold text-red-500">{userNotFound} </p>
            }
            { 
                <p className="text-center my-5 text-xl font-bold text-green-700">{userFound} </p>
            }
        </div>
    );
};

export default LogIn;