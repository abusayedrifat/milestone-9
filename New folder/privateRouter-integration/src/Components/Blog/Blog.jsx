import './blog-text.css'
const Blog = ({blog}) => {
    const {url,description, date, author, title} = blog
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="h-[300px] w-[250px]">
               <img src={url} alt="" className="h-full w-full object-cover rounded-lg shadow-xl mb-6" /> 
            </div>
            <div className='space-y-1 lg:w-1/3'>
                <h1 className=" title-text">{title}</h1>
                <p className="text-md font-medium text-gray-800">Author : {author} </p>
                <p className='text-gray-700'> {date} </p>
                <div className='p-2'></div>
                <p className='text-gray-600'> {description} </p>
            </div>
            
           
            
        </div>
    );
};

export default Blog;