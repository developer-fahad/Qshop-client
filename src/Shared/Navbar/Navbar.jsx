import { Link, NavLink } from "react-router-dom";
import Container from './../Container';
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = <>
        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0  pb-1 rounded-none text-[16px] border-b-2 border-transparent hover:border-green-500 font-medium mt-2 '
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:pb-1  hover:rounded-none text-[16px] hover:border-b-2  mt-2'
        }> Home </NavLink> </li>


        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0  pb-1 rounded-none text-[16px] border-b-2 border-transparent hover:border-green-500 font-medium mt-2 '
                :
                'font-medium p-0 transition-all duration-200 ease-in-out  hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 '
        }> Shop </NavLink> </li>


      

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0  pb-1 rounded-none text-[16px] border-b-2 border-transparent hover:border-green-500 font-medium mt-2 '
                :
                'font-medium p-0 transition-all duration-200 ease-in-out  hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 '
        }> About </NavLink> </li>

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0  pb-1 rounded-none text-[16px] border-b-2 border-transparent hover:border-green-500 font-medium mt-2 '
                :
                'font-medium p-0 transition-all duration-200 ease-in-out  hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 '
        }> Blogs </NavLink> </li>

    </>


    return (

        <div className="bg-white">

            <Container>
                <div className=" navbar items-center justify-between barlow-regular min-h-[99px] p-0 md:py-3 py-5 ">

                    <div className="">

                        <details className="dropdown">
                            <summary className="-ml-3 btn bg-transparent border-none shadow-none hover:bg-transparent lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </summary>
                            <ul className="p-2 shadow dropdown-content z-50 bg-white rounded-box w-52 text-black space-y-2">
                                {
                                    navLinks
                                }
                            </ul>
                        </details>



                        <Link to={'/home'} className="font-bold text-lg md:text-3xl gap-3 flex items-center">
                            <span className=" uppercase text-green-500">Q<span className="text-black">Shop</span></span></Link>


                        {/* Nav Menu */}
                        <div className="navbar-center hidden ml-8 lg:flex">
                            <ul className="menu-horizontal space-x-6 ">
                                {
                                    navLinks
                                }
                            </ul>
                        </div>
                    </div>


                    {/* NavEnds */}
                    <div className="">
                        <div className="flex gap-2">
                            
                            <div className="flex-none">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
                                        <div className="indicator">
                                        <IoMdHeartEmpty className="text-3xl" />
                                            <span className="badge badge-sm indicator-item h-5">0</span>
                                        </div>
                                    </div>
                                    {/* Conditionally render dropdown content based on isOpen state */}
                                    {isOpen && (
                                        <div className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                            <div className="card-body">
                                                <span className="text-lg font-bold">0 Items</span>
                                                <span className="text-info">Subtotal: $0</span>
                                                <div className="card-actions">
                                                    <button className="btn text-[#51AA1B] btn-block">View cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>



                            <div className="flex-none">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
                                        <div className="indicator">
                                        <AiOutlineShopping className="text-3xl" />
                                            <span className="badge badge-sm h-5 rounded-full indicator-item bg-[#51AA1B] text-white">0</span>
                                        </div>
                                    </div>
                                    {/* Conditionally render dropdown content based on isOpen state */}
                                    {isOpen && (
                                        <div className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                            <div className="card-body">
                                                <span className="text-lg font-bold">0 Items</span>
                                                <span className="text-info">Subtotal: $0</span>
                                                <div className="card-actions">
                                                    <button className="btn text-[#51AA1B] btn-block">View cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>




                        </div>

                    </div>
                </div>

                
            </Container>
        </div>
    );
};


export default Navbar;