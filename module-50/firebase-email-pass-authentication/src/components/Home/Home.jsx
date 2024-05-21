import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Helmet>
                <title>Auth | Home</title>
            </Helmet>
            <h1 className="text-4xl font-bold">This is authentication practice</h1>
        </div>
    );
};

export default Home;