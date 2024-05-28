import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FaGoogle, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import auth from "../../../firebase.config";
import { FaXTwitter } from "react-icons/fa6";

const RightSideNavbar = () => {
  const gitHubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGitHubLogIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>

      <div className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold text-[#403F3F] text-center lg:text-left">
          LogIn With
        </h3>
        <button
          onClick={handleGoogleLogIn}
          className="btn bg-transparent border-2 border-[#403F3F]"
        >
          <FaGoogle className="text-xl"></FaGoogle>
          LogIn with Google
        </button>
        <button
          onClick={handleGitHubLogIn}
          className="btn bg-transparent border-2 border-[#403F3F]"
        >
          <FaGithub className="text-xl"></FaGithub>
          LogIn with GitHub
        </button>
      </div>

{/* Find us */}

      <div className="flex flex-col mt-6 ">
        <h3 className="my-5 text-xl font-bold text-[#403F3F] text-center lg:text-left">
          Find Us On
        </h3>
        <div className="border-2 border-[#403F3F] rounded-lg">
          <a
            className="flex items-center gap-2 justify-center p-4 lg:justify-start"
            href=""
          >
            <FaFacebook className="text-xl"></FaFacebook>
            Facebook
          </a>
          <a
            className="flex items-center gap-2 justify-center border-y-2 border-[#403F3F] p-4 lg:justify-start"
            href=""
          >
            <FaXTwitter className="text-xl"></FaXTwitter>
            Twitter
          </a>
          <a
            className="flex items-center gap-2 justify-center p-4 lg:justify-start"
            href=""
          >
            <FaInstagram className="text-xl"></FaInstagram>
            instagram
          </a>
        </div>
      </div>
      

{/* Q-zone */}
        <div className="bg-[#F3F3F3] my-8  px-5 pb-6">
        <h3 className="py-7 text-2xl font-bold text-[#403F3F] text-center lg:text-left">
          Q-Zone
        </h3>
        <div className="space-y-5">
        <img className=" lg:w-full" src="/src/assets/qZone1.png" alt="" />
        <img className=" lg:w-full" src="/src/assets/qZone2.png" alt="" />
        <img className=" lg:w-full" src="/src/assets/qZone3.png" alt="" />
        </div>
        </div>

    </div>
  );
};

export default RightSideNavbar;
