import moment from "moment/moment";
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <img src={logo} className="mx-auto my-5" alt="" />
            <p className="text-[#706F6F] text-lg">Journalism Without Fear or Favour</p>
            <p className="text-[#706F6F] text-xl font-medium">
                <span className="text-[#403F3F]">{moment().format("dddd,")}</span>
            {moment().format(" MMMM D, YYYY")}
            </p>
           
        </div>
    );
};

export default Header;