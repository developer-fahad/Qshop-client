/* eslint-disable react/prop-types */
import { FaHeart} from "react-icons/fa";
import { FaRegClock, FaStar } from "react-icons/fa6";
import moment from 'moment-timezone';
import { SiBrandfolder } from "react-icons/si";
import { FcRating } from "react-icons/fc";

const ProductCard = ({product}) => {
  const {name, img, description, price, category, ratings, creation_date, brand} = product;
  // Convert to a specific time zone (e.g., Asia/Dhaka)
  const localTimeInDhaka = moment.tz(creation_date, 'UTC').tz('Asia/Dhaka').format('YYYY-MM-DD h:mm A');


  return (
    <>
      <div className=" max-w-sm mx-auto group rounded border-2">

        <div className="overflow-hidden relative">
          <img role="presentation" className="object-cover transition-all group-hover:scale-110 duration-700 ease-in-out w-full rounded h-56 bg-gray-500" src={img} />
          <h3 className="z-10 group-hover:bg-white bg-[#00000050] text-sm font-medium text-white absolute top-4 right-5 rounded-full py-2 px-2 xs:text-xl md:text-sm flex items-center gap-2"> <FaHeart className="group-hover:text-green-500" /></h3>
          <h3 className="z-10 bg-green-500 text-sm font-medium text-white absolute top-4 left-5 rounded-full py-1 px-4 xs:text-xl md:text-sm flex items-center gap-2"> <SiBrandfolder />{brand}</h3>
        </div>

        <div className="p-6 space-y-0.5">
          {/* <div className="flex justify-between">
            <span className=" flex items-center gap-2 text-[#9ca3a9] font-medium"><FaStar className="text-[#ffa801] " /> 8.0 Superb</span>
          </div> */}
          <h3 className="text-sm font-semibold ">{category}</h3>
          <div className="flex justify-between">
            <h3 className="text-xl  font-semibold ">{name}</h3>
            <div className=" flex justify-between items-center pb-1">
              <h2 className=" text-[#9ca3a9] font-medium">
                <span className="text-green-500 font-semibold text-xl ">${price}</span>
              </h2>
            </div>
          </div>
          <p className=" border-b pb-6">{description.slice(0, 80)}</p>



          <div className="flex justify-between gap-6 font-medium text-[#9ca3a9] pt-3 text-sm">
            <p className="flex gap-2 items-center"><FaRegClock className="text-green-500" /> {localTimeInDhaka.split(" ")[0]} at {localTimeInDhaka.split(" ")[1]} {localTimeInDhaka.split(" ")[2]}</p>
            <p className="flex items-center justify-center gap-1 text-xl text-green-500" ><FcRating className="text-xl" />{ratings}</p>
          </div>

        </div>
      </div>
      
    </>
  );
}

export default ProductCard;