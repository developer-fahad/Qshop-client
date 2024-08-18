import Container from "../Container";
import { FaFacebookF, FaGlobeAmericas, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import useAuth from "../../Hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Topbar = () => {

    const navigate = useNavigate()

    const {logOut} = useAuth()
    
    const handleLogoutBtn = () => {
        logOut()
        navigate('/')
            .then(() => {
                console.log("Sing Out Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="bg-green-500 text-white py-2 md:block hidden">
            <Container>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex text-sm items-center">
                        <div className="flex items-center pr-3 border-r gap-2">
                        <TbTruckDelivery className="text-xl" />
                            <span>Free Shipping</span>
                        </div>
                        {/* <div className="flex items-center px-3 border-r gap-2">
                        <FaGlobeAmericas />
                            <span>Returns Policy</span>
                        </div> */}
                        <div className="flex items-center pl-3">
                            <span className="mr-3">Follow Us</span>
                            <div className="flex space-x-2.5">
                              <FaFacebookF className="cursor-pointer" />
                                <FaTwitter className="cursor-pointer" />
                                <FaInstagram className="cursor-pointer" />
                                <FaPinterestP className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={`/`} onClick={handleLogoutBtn} className="text-white text-sm flex items-center gap-1 font-bold">Logout<MdLogout /></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Topbar;