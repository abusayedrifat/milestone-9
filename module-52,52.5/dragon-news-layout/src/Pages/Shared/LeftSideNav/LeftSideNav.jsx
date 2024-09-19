import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h3 className="text-xl font-bold text-[#403F3F] mb-7 ">All Category </h3>
            <div className='text-center border'>
                {
                    categories.map(category => <Link to={`${category.id}`} key={category.id} className=" flex pl-8 py-6 w-full text-xl text-[#9F9F9F] font-medium hover:bg-[#9F9F9F] hover:text-[#403F3F] rounded-md"> {category.name} </Link> )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;