import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
// import Card from "./components/Card";
import { SHOES } from "./constant";
import NewArrivals from "./components/NewArrivals";
import SideBar from "./components/SideBar";
import { useState } from "react";
import CartItem from "./components/CartItem";

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="p-10 xl: px-10 animate-fadeIn">
      <Nav onClickShoppingBtn={() => setIsSideBarOpen(true)} />
      <ShoeDetail />
      {/* <Card item={SHOES[0]} /> */}
      <NewArrivals items={SHOES} />
      <SideBar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <h2 className="m-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOES[0]} />
        <CartItem item={SHOES[1]} />
        <CartItem item={SHOES[2]} />
      </SideBar>
    </div>
  );
};

export default App;
