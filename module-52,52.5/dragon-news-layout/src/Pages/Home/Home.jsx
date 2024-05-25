import PropTypes from 'prop-types'; // ES6

const Home = () => {
    return (
        <div>
            <p className=' text-5xl font-poppins font-bold'>This is home</p>
        </div>
    );
};

export default Home;

Home.propTypes = {
   props : PropTypes.node
}