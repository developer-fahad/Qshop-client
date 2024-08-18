import slider1 from "../../assets/images/slider.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import slider4 from "../../assets/images/slider4.jpg";

const Banner = () => {
  return (
    <div
      className="md:h-screen h-[200px] bg-black"
      style={{
        backgroundImage: `url(${slider4})`,
        backgroundSize: "cover", // Keep the original size of the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        backgroundPosition: "top", // Center the image within the div
      }}
    >
      <div className=" h-full w-full text-center flex flex-col justify-center items-center gap-3 bg-black bg-opacity-65">
        <h1 className="uppercase text-xl md:text-3xl lg:text-5xl font-bold text-green-500">Big Sale Offer!</h1>
        <h3 className="uppercase text-slate-200">Upto 70% off!</h3>
        <button className="py-3 px-5 border-2 font-semibold uppercase border-green-500 text-green-500 hover:bg-transparent">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
