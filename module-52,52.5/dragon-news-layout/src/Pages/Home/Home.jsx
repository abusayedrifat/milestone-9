import PropTypes from 'prop-types'; // ES6
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNavbar from '../Shared/RightSideNavbar/RightSideNavbar';
import NewsHeadline from './NewsHeadline';
import { useLoaderData } from 'react-router-dom';
import Newses from './Newses';

const Home = () => {
    const newses = useLoaderData()
    return (
        <div>
            <Header></Header>
            <NewsHeadline></NewsHeadline>
            <Navbar></Navbar>
           
            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-6 mb-[100px]'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=' flex flex-col gap-7   lg:col-span-2'>
                <h1 className='text-[#403F3F] text-xl font-semibold'>Dragon News Home</h1>
                    {
                     newses.map(news => <Newses key={news._id} news={news} ></Newses> )   
                    }
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;

Home.propTypes = {
   props : PropTypes.node
}