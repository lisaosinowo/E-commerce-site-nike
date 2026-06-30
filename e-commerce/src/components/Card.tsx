export type Item = {
  id: number;
  src: string;
  className: string;
  title: string;
  description: string;
  price: number;
};

const Card = ({ item }: { item: Item }) => {
  return (
    <div
      className={`${item.className} relative max-w-xl transform transition hover:scale-105 cursor-pointer`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="underline underline-offset-4 font-semibold mt-10">
          SHOP NOW +
        </div>
      </div>
      <img className="absolute top-5 left-[40%] h-40 w-56" src={item.src} />
    </div>
  );
};

export default Card;
