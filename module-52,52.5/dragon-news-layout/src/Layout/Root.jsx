import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className=" px-8 max-w-7xl lg:px-14 font-poppins mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;