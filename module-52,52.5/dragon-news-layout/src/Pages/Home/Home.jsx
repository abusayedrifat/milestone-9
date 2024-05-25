import PropTypes from 'prop-types'; // ES6
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNavbar from '../Shared/RightSideNavbar/RightSideNavbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <p className=' text-5xl font-poppins font-bold'>This is home</p>
            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=' lg:col-span-2'>
                    News comming soon
                </div>
                <div className='border'>
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