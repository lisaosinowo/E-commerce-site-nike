import nike1 from "../assets/n1-min.png";

const ShoeDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Shoe Image */}
      <div className="flex-1">
        <div className="">
          <img src={nike1} />
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
        <div className="text-3xl font-bold md:text-6xl">£100</div>
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
