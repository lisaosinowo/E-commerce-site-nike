import NikeLogo from "../assets/nike-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import {useState} from "react";

const ROUTES: string[] = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center z-10 relative">
      <a href="#">
        {/* Logo */}
        <img src={NikeLogo} className="h-20 w-20" alt="Nike Logo" />
      </a>
      {/* Burger Menu */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 p-2 rounded-lg cursor-pointer">
        <RxHamburgerMenu size={25} />
      </button>

      {/* Navigation Links */}
      <div className={`${isMenuOpen ? "" : "hidden"} w-full lg:w-auto lg:block`}> {/* Full width on small screens, auto width on large screens */}
        <ul className="lg:space-x-8 flex flex-col lg:flex-row lg:bg-transparent lg:border-none bg-gray-50 text-lg border border-gray-100 rounded-lg p-4">
          {/*Loop through each item in the ROUTES array and create a list item for each */}
          {ROUTES.map((route, i) => <li className={`px-3 py-2 cursor-pointer rounded lg:hover:bg-transparent lg:hover:text-blue-500 ${i === 0 ? "bg-purple-400 text-white lg:bg-transparent lg:text-purple-400" : "hover:bg-gray-100"} ${(i==3 || i==4) && "lg:text-white"}`} key={route}>{route}</li>)} {/*A unique key is required for each list item */}
        </ul>
      </div>
      {/* Shopping Bag */}
      <div className="fixed left-4 bottom-4 lg:static lg:mr-8"> {/* Fixed position for the shopping bag icon, at the bottom left of the screen */}
        <div className="rounded-full bg-white shadow-md flex-center h-12 w-12">
        {/* Render the icon component instead of using it as an image src */}
          <TbShoppingBag className="h-6 w-6" size={40} />
        </div>
      </div>
      
    </nav>
  );
};

export default Nav;
