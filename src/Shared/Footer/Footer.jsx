import { MdEmail } from "react-icons/md";
import { IoCall, IoLocationOutline } from "react-icons/io5";
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#131318]">
            <div className="container mx-auto md:pt-24 pt-12 md:pb-4 flex flex-col lg:flex-row lg:justify-between lg:items-start items-center gap-10 max-w-6xl">

                {/* <!-- item1 --> */}
                <div className=" md:w-[300px] lg:text-start text-center">
                    <h3 className="text-white font-bold text-lg">
                        {/* <Link to={'/'} className="font-bold text-2xl gap-3 flex items-center"> <img className="w-12 h-10 relative" src={logo} alt="" /><span className="">Turio</span></Link> */}
                        <Link to={'/home'} className="font-bold text-lg md:text-3xl gap-3 flex items-center">
                        <span className=" uppercase text-green-500">Q<span className="uppercase text-white">Shop</span></span></Link>
                    </h3>
                    <p className="text-[#FFFFFF99] mt-4 pb-6"><span className="text-green-500 font-bold">Q</span><span className="uppercase font-bold">Shop</span> brings you a handpicked selection of products from top brands, ensuring quality and convenience in every purchase. Shop with confidence and ease on our user-friendly platform, where trusted brands meet your everyday needs.</p>

                </div>

                {/* <!-- item 2 --> */}

                <div className="">
                    <h2 className="text-white font-bold text-lg mb-2">QUICK LINKS</h2>
                    <div className="flex flex-col lg:text-start text-center space-y-4 text-[#FFFFFF99] text-sm">
                        <Link className="no-underline hover:underline cursor-pointer">Shop</Link>

                        <Link className="no-underline cursor-pointer hover:underline">Contact Us</Link>
                        <Link className="no-underline cursor-pointer hover:underline">Support Center</Link>
                        <Link className="no-underline cursor-pointer hover:underline">Terms & Conditions</Link>



                    </div>
                </div>


                {/* <!-- item 3 --> */}
                <div className="">
                    <h2 className="text-white font-bold text-lg mb-7">SOCIAL LINKS:</h2>
                    <div className="flex flex-col space-y-4 text-[#FFFFFF99] text-sm">
                        <div className="bg-[#1313180C] rounded-2xl flex justify-center items-center">
                            <div className="space-x-2 text-3xl flex">
                                <Link><FaSquareTwitter className="transition-all duration-300 hover:text-green-600" /></Link>
                                <Link>
                                    <FaSquareFacebook className="transition-all duration-300 hover:text-green-600" />
                                </Link>
                                <Link>
                                    <FaLinkedin className="transition-all duration-300 hover:text-green-600" />
                                </Link>
                                <Link>
                                    <FaGithub className="transition-all duration-300 hover:text-green-600 " />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer footer-center text-gray-200 p-4 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by <span className=" uppercase text-green-500 font-bold">Q<span className="uppercase text-white">Shop</span></span></p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;