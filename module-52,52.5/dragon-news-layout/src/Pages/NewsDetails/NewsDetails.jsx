import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import { FaLongArrowAltLeft  } from "react-icons/fa";

const NewsDetails = () => {
    const newsData = useLoaderData()    
    const {category_id} = useParams()
    const newsId = parseInt(category_id)
    const exactNews = newsData.find(news => news.category_id == newsId ) 
    const {details,title,image_url} = exactNews
    console.log(exactNews);
    
    return (
        <div >
            <Header></Header>
            <div className="flex gap-6 mt-12 mb-32">
                <div className="w-2/3">
                    <h2 className='text-[#403F3F] text-xl font-semibold'>Dragon News</h2>
                   <div className="p-7 border rounded-md my-6 space-y-6">
                        <img src={image_url} className="w-full" alt="" />
                        <h2 className="text-2xl font-bold text-[#403F3F]"> {title} </h2>
                        <p className="text-[#706F6F] "> {details} </p>
                        <div className="pt-5">
                            
                            <Link to='/'>
                            <div className="bg-[#D72050] flex items-center gap-3 py-2 pl-2 text-xl text-white w-[300px]">
                                <span> <FaLongArrowAltLeft className="text-2xl" ></FaLongArrowAltLeft ></span>All news in this category 
                                </div>    </Link>
                        </div>
                        
                       
                   </div>
                </div>
                <div className="w-1/3">
                    <RightSideNavbar></RightSideNavbar>
                </div>
            

            </div>
        </div>
    );
};

export default NewsDetails;