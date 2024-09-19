import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
   const {user} = useContext(AuthContext)
   console.log(user);
   
    return (
        <div>
            <p>this is home page</p>
            <p className="felx items-center justify-center">welcome { user ? <span>{user.email}</span> : <span className="loading loading-spinner loading-lg"></span> }  </p>
        </div>
    );
};

export default Home;