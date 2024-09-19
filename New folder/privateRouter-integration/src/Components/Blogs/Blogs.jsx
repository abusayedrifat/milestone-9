import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const data = useLoaderData()
    
    return (
        <div className="mx-auto mb-72 mt-20 w-[90%]">
            <h1 className="text-gray-700 text-3xl lg:text-4xl font-bold border-b-2 border-gray-700 pb-2 w-[480px] mb-14">Here are some blogs for you</h1>
            <div className="flex flex-col mx-auto gap-16">
               {
                data.map(blog => <Blog blog={blog}></Blog>)
               }
            </div>
        </div>
    );
};

export default Blogs;