import type { Item } from "./Card";
import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import {SIZES, QUANTITIES} from "../constant";

const CartItem = ({ item }: { item: Item }) => {
  return (
    <div>
      <div className="flex hover:bg-purple-200 p-2 cursor-pointer bg-gray-50 space-x-2">
        {/* Image */}
        <img className="h-24" src={item.src} />
        <div className="space-y-2">
          {/* Title and Description */}
          <div className="font-bold">{item.title}</div>
          <div className="text-sm text-gray-400">{item.description}</div>
        </div>
        {/* Price */}
        <div className="font-bold">£{item.price}</div>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="font-bold">SIZE</div>
          <Select options={SIZES} />
        </div>
        <div>
          <div className="font-bold">QTY</div>
          <Select options={QUANTITIES} />
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
