import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle,FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import auth from "../../../firebase.config";
import { FaXTwitter } from "react-icons/fa6";

const RightSideNavbar = () => {

    const gitHubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogIn =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const handleGitHubLogIn = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-bold text-[#403F3F] text-center lg:text-left">LogIn With</h3>
            <button onClick={handleGoogleLogIn} className="btn bg-transparent border-2 border-[#403F3F]">
                <FaGoogle className="text-xl"></FaGoogle>
             LogIn with Google
             
            </button>
            <button onClick={handleGitHubLogIn} className="btn bg-transparent border-2 border-[#403F3F]">
                <FaGithub className="text-xl"></FaGithub>
             LogIn with GitHub
             
            </button>
        </div>

        <div className="flex flex-col mt-6 ">
            <h3 className="my-5 text-xl font-bold text-[#403F3F] text-center lg:text-left">Find Us On</h3>
            <button className="flex items-center gap-2 justify-center border-2 border-[#403F3F] p-4 lg:justify-start">
                <FaFacebook className="text-xl"></FaFacebook>
                FaceBook
            </button>
            <button className="flex items-center gap-2 justify-center border-2 border-[#403F3F] p-4 lg:justify-start">
                <FaXTwitter className="text-xl"></FaXTwitter>
                Twitter
            </button>
            <button className="flex items-center gap-2 justify-center border-2 border-[#403F3F] p-4 lg:justify-start">
                <FaInstagram className="text-xl"></FaInstagram>
                instagram
            </button>
        </div>
        </div>
    );
};

export default RightSideNavbar;