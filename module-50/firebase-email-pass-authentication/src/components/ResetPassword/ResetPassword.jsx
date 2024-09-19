import { sendPasswordResetEmail } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import auth from "../firebase.config";
import { ToastContainer, toast } from "react-toastify";
const ResetPassword = () => {
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(() => {});
    toast("please check your your email to reset password");
  };
  return (
    <div>
      <Helmet>
        <title>Auth | Reset Password</title>
      </Helmet>
      <h2 className=" text-center font-bold text-3xl mt-20 mb-7">
        Reset Your Password
      </h2>
      <form
        onSubmit={handleResetPassword}
        className="mx-auto flex flex-col gap-4  w-[350px] p-5 bg-gray-200 rounded-xl"
      >
        <input
          className="h-12 pl-4 rounded-lg"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="btn bg-purple-700 text-white hover:bg-purple-900"
          type="submit"
          value="Reset"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
