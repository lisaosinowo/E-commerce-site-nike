import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import Card from "./components/Card";
import { SHOES } from "./constant";

const App = () => {
  return (
    <div className="p-10 xl: px-10 animate-fadeIn">
          {/* <Nav />
          <ShoeDetail /> */}
      <Card item={SHOES[0]} />
    </div>
  );
}

export default App;
