import Banner from "../../Components/Hero/Banner";
import Product from "../../Components/Product/Product";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Topbar from "../../Shared/Navbar/Topbar";

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div className="sticky top-0 z-50 ">
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <Product/>
            <Footer/>
        </div>
    );
};

export default Home;