import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const LOgIn = () => {
  const {logIn} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    const {email,password}= data
    logIn(email,password)
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
    console.log(data)
  } 
  return (
    <div className="w-1/3 min-w-96 mx-auto border-2 rounded-lg p-4">
      <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-4">
        <div className="flex flex-col w-full">
          <label> Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
          />
           {errors.email && (
            <span className="text-red-500">This field is required</span>)}
        </div>
        <div className="flex flex-col w-full">
          <label> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            {...register("password", {required:true})}
          />
        {errors.password && (
            <span className="text-red-500">This field is required</span>)}
        </div>
        <button className="btn w-full">LogIn</button>
      </form>
    </div>
  );
};

export default LOgIn;
