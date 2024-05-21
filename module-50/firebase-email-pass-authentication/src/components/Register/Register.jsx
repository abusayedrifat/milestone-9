import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.config.js";
import { useState } from "react";
import {FaRegEye} from 'react-icons/fa';
import { RxEyeClosed} from 'react-icons/rx';
import { Helmet } from "react-helmet-async";
const Register = () => {

    const [submitError, setSubmitError] = useState('');
    const [submitSuccess ,  setSubmitSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [verifyEmail, setVerifyEmail] = useState('');
    const [verifyError, setVerifyError] = useState('');
   
    const handleSubmit = e =>{
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       const acceptTerms = e.target.terms.checked;
    // const text = e.target.text.value;
      setSubmitError('');
       setSubmitSuccess('');
        if (!acceptTerms) {
            setSubmitError('please accept our terms and conditions');
            return;
        }

    createUserWithEmailAndPassword(auth,email,password)
       .then(result =>{
        const user = result.user;
        console.log(user);
    sendEmailVerification(result.user)
        .then(result=>{
            if (result.user.emailVerified) {
            setVerifyEmail('email verified'); 
             console.log(result.user);
            }
            
        })
        .catch(error=>{
            setVerifyError('user not verified.To verify check your email');
            console.log(error.message);
        })
        // setSubmitSuccess('user created successfully. Please logIn')
       })

       .catch(() =>{
        setSubmitError('user already exists')
       })
       e.target.email.value = '';
       e.target.password.value = '';
       e.target.text.value = '';
       e.target.terms = false;
    }
    //keyUp event
    const handlePassword = e =>{
        console.log(e.target.value);
       const password = e.target.value;
        if(password.length < 6){
            setSubmitError('pasword must be at least 6 character');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setSubmitError('password must contain at least one capital letter');
            return;
        }
        else if(!/[0-9]/.test(password)){
            setSubmitError('password must contain at least one "digit"');
            return;
        }
        else{
            setSubmitError('your password is good now.please register');
            return;
        }

    }
    return (
        <div className=" mx-auto">
            <Helmet>
                <title>Auth | Register</title>
            </Helmet>
            <h2 className=" text-center font-bold text-3xl mt-20 mb-7">Please Register</h2>
            <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4 p-5 bg-gray-200 rounded-xl w-[350px]">
                <input className="h-12 pl-4 rounded-lg" type="text" name="text" placeholder="Name"/>
                <input className="h-12 pl-4 rounded-lg" type="email" name="email" placeholder="Email" required />
                <div className="flex relative">
                <input 
                 onKeyUp={handlePassword}
                 className="h-12 pl-4 w-full rounded-lg" name="password" 
                 type={showPass ? "text" : "password" } 
                 placeholder="Password" required/> 
                 <span onClick={()=>setShowPass(!showPass)} className="absolute top-4 right-4 text-xl">
                    {showPass ?  <FaRegEye></FaRegEye>:<RxEyeClosed></RxEyeClosed>  }</span>
                </div>
                <div>
                    <input type="checkbox" name="terms"/>
                    <span className="ml-2">Accept our terms and condition</span>
                </div>
                <input className=" btn bg-purple-700 text-white hover:bg-purple-900" type="submit" value='Register' />
            </form>
            <div className="w-[330px]  mx-auto ">
            <p className="flex">Already have an account? Please <NavLink to='/logIn' className='text-blue-500 underline ml-1'>LogIn</NavLink></p> 
                
            </div>
            {
                submitError && <p className=" text-red-600 text-center my-5">{submitError}</p>  
            }
            {
                submitSuccess && <p className="text-center text-green-700 my-5">{submitSuccess} 😀 </p>
            }
            {
                verifyEmail && <p className="text-center text-green-700 my-5">{verifyEmail} </p>
            }
            {
                verifyError && <p className=" text-red-600 text-center my-5">{verifyError}</p>  
            }
          
        </div>
    );
};

export default Register;