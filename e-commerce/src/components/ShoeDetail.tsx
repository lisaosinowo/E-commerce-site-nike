import nike1 from "../assets/n1-min.png";
import Select from "./Select";
import { SIZES, QUANTITIES } from "../constant";

const ShoeDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Shoe Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-linear-to-br from-[#f637cf] via-[#e3d876] to-[#4cc4c6]">
          <img className="animate-float" src={nike1} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe Details */}
        <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle show that's sure to turn heads with its vibrant colour gradient"
          }
        </div>
        <div className="flex space-x-6">
          <div className="text-3xl font-bold md:text-6xl">£100</div>
          <Select title="QTY" options={QUANTITIES} />
          <Select title="SIZE" options={SIZES} />
        </div>
       
        {/* Shoe Button and Links */}
        <div className="space-x-10">
          <button className="hover:bg-gray-900 cursor-pointer active:bg-gray-700 h-14 w-44 bg-black text-white">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
