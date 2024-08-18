import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'
import { IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import login from './../../assets/images/login.jpg';


const Register = () => {

    const { profileUpdate, userRegistration, } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleRegisterForm = data => {

        const { email, password, name, photo } = data

        // e.preventDefault();
        // console.log(name, email, password);

        if (password.length < 6) {
            return toast.error('Password should be at least 6 characters');

        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Password must have at least one uppercase letter');
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error('Password must have at least one lowercase letter');
        }

        userRegistration(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    toast.success('Sing in Successful')
                    navigate(location?.state || "/home")
                }
                // Update Profile
                profileUpdate(name, photo)
            })
            .catch(err => {
                console.log(err.message);
            })
    }


    return (
        <>
            <Helmet>
                <title>Register - ZenMarket</title>
            </Helmet>
            <div className="flex justify-center items-center bg-cover bg-center bg-no-repeat h-[100vh]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${login})` }}>
                <div className="font-[sans-serif] text-[#333] -mt-5">
                    <div className=" flex flex-col items-center justify-center">
                        <div className="mx-auto md:w-[550px] w-full p-4">

                            {/* Form */}
                            <div className="md:max-w-[550px] w-full bg-white border-2 px-6 py-8">
                                <form onSubmit={handleSubmit(handleRegisterForm)}>
                                <div className=" pb-2">
                                        <h3 className="text-[22px] uppercase font-semibold ">Register</h3>
                                    </div>

                                    <div>
                                        <label className="text-[15px] block mb-2 font-semibold">Your Name*</label>
                                        <div className="relative">
                                            <input
                                                {...register("name", { required: true })}
                                                name="name" type="text" className="w-full text-sm border border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Your Name" />
                                            {errors.name && <span className="text-red-600">Please Enter Your Name</span>}
                                        </div>

                                    </div>

                                    <div className="mt-4">
                                        <label className="text-[15px] block mb-2 font-semibold">Email*</label>
                                        <div>
                                            <div className="relative flex items-center">
                                                <input {...register("email", { required: true })} name="email" type="text" className="w-full text-sm border border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Your Email" />
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                                                    <defs>
                                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            {errors.email && <span className="text-red-600">Please Enter Your Email</span>}
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="text-[15px] block mb-2 font-semibold">Password*</label>
                                        <div>
                                            <div className="relative flex items-center">
                                                <input {...register("password", { required: true })} name="password" type={showPassword ? "text" : "password"} className="w-full text-sm border border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter password" />
                                                {
                                                    showPassword ? <IoEyeOffOutline onClick={() => setShowPassword(!showPassword)} className="w-[18px] h-[18px] absolute right-2 cursor-pointer text-[#bbb]" />
                                                        :
                                                        <svg onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                                            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                                        </svg>
                                                }
                                            </div>
                                            {errors.password && <span className="text-red-600">Please Enter a password</span>}
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div className="mt-6">
                                        <button className="bg-[#51AA1B] relative h-10 px-5 uppercase text-white md:text-[16px] text-sm">Register</button>
                                    </div>

                                    <div className="">
                                        <p className="text-sm mt-4 ">Already have an account?<Link to={`/`} className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login</Link></p>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;