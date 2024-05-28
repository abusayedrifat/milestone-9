import PropTypes from 'prop-types'; // ES6
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNavbar from '../Shared/RightSideNavbar/RightSideNavbar';
import NewsHeadline from './NewsHeadline';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NewsHeadline></NewsHeadline>
            <Navbar></Navbar>
           
            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=' lg:col-span-2'>
                    News comming soon
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