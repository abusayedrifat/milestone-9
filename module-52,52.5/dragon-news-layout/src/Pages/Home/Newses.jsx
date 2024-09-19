import { FaRegBookmark, FaEye} from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Newses = ({news}) => {
    const {details, image_url, author, title, total_view, rating,category_id} = news
    return (
        <div className="shadow-lg space-y-4 rounded-md border border-[Dark 07]">
          
            <div className="flex justify-between items-center bg-[#F3F3F3] px-4 py-4">
                <div className="flex items-center gap-4 ">
                <img className="h-10 w-10 rounded-full" src={author.img} alt="" />
                <div className="flex flex-col">
                    {author.name} <span></span>
                    {author.published_date}
                </div>
            </div>
            <div className="flex items-center gap-4 text-xl text-[#706F6F] ">
                <FaRegBookmark></FaRegBookmark>
                <CiShare2 ></CiShare2>
            </div>

            </div>
            {/* ----------------- */}
            <div className="px-5 space-y-4">
                <h2 className="text-xl font-bold text-[#403F3F]"> {title} </h2>
                <img className="rounded-md w-full object-cover" src={image_url} alt="" />
                <p className="text-[#706F6F] font-semibold text-lg"> {details} <br />
                <Link to={`/newsDetails/${category_id}`} ><span className="text-[#F75B5F]">Read More</span></Link>
                 </p>
                 <hr className="border" />
                 <div className="flex justify-between pb-5">
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-1 text-[#FF8C47]">
                        <FaStar ></FaStar> 
                        <FaStar ></FaStar> 
                        <FaStar ></FaStar> 
                        <FaStar ></FaStar> 
                        <FaStar ></FaStar> 
                        </div>
                        <span> {rating.number} </span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaEye className="text-xl"></FaEye>
                        <span> {total_view} </span>
                    </div>
                 </div>
            </div>
            
           
        </div>
    );
};

export default Newses;

Newses.propTypes = {
    news: PropTypes.node
}