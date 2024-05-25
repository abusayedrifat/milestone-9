import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const Home = () => {
    const userInfo = useContext(AuthContext)
    return (
        <div className="flex justify-center items-center h-screen">
           <h1 className=" text-center text-5xl font-bold -mt-20">Welcome <br /> <span className=" font-medium"> {userInfo.name} </span> </h1>
        </div>
    );
};

export default Home;