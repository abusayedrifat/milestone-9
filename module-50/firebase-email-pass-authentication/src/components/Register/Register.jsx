
const Register = () => {
    const handleSubmit = e =>{
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       const text = e.target.text.value;
       console.log(email, password, text);

    }
    return (
        <div className="">
            <h2 className=" text-center font-bold text-3xl mt-20 mb-7">Please Register</h2>
            <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4 w-1/4 p-5 bg-gray-200 rounded-xl">
                <input className="h-12 pl-4 rounded-lg" type="text" name="text" placeholder="Name"/>
                <input className="h-12 pl-4 rounded-lg" type="email" name="email" placeholder="Email"/>
                <input className="h-12 pl-4 rounded-lg" name="password" type="password" placeholder="Password" />
                <input className=" btn" type="submit" value='register' />
            </form>
        </div>
    );
};

export default Register;