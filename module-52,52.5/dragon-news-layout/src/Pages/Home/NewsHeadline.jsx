import Marquee from "react-fast-marquee";


const NewsHeadline = () => {
    return (
        <div>
             <div className="flex gap-6 w-full bg-[#F3F3F3] p-4 items-center my-6">
                <button className="btn bg-[#D72050] text-white rounded-none">Latest</button>
                <Marquee className="font-semibold text-[#403F3F] w-full"  >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
            </div>
        </div>
    );
};

export default NewsHeadline;