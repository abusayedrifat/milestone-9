import { NavLink } from "react-router-dom";


const LogIn = () => {
    return (
        <div>
            <h2 className=" text-center font-bold text-3xl mt-20 mb-7">Please LogIn</h2>
            <form className="mx-auto flex flex-col gap-4 w-1/4 p-5 bg-gray-200 rounded-xl">
                <input className="h-12 pl-4 rounded-lg" type="email" placeholder="Email"/>
                <input className="h-12 pl-4 rounded-lg" type="password" placeholder="Password" />
                <input className=" btn" type="login" value='LogIn' />
                <p className="flex justify-between">Don't have an account ? <NavLink to='/register' className='text-blue-500 underline'>Register Now</NavLink></p> 
            </form>
        </div>
    );
};

export default LogIn;