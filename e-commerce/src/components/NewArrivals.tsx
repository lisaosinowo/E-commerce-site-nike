import type { Item } from "./Card";
import Card from "./Card";

const NewArrivals = ({ items }: {items: Item[]}) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center txt-4xl font-extrabold">
        NEW ARRIVALS
        </div>
      </div>
      
      <div className="justify-between mt-5 grid grid-cols-1 gap-y-15 md:grid-cols-2 xl:grid-cols-3 gap-x-7">
        {/* On mobile 1 card is shown per column, on medium screen 2 cards are shown per column, on a extra large screen 3 cards are shown*/}
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals
