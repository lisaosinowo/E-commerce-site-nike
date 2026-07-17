type SideBarProps = {
  children: string;
  isOpen: () => void;
  onClickClose: () => void;
};

const SideBar = ({ children, isOpen, onClickClose }: SideBarProps) => {
  return (
    <div>
      <div
        className={`overflow-y-auto h-full w-full bg-white fixed top-0 z-50 right-0 transition transform duration-300 shadow-lg p-5 md:w-[50%] lg:w-[35%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 text-black font-bold cursor-pointer"
        >
          X
        </button>
        {children}
      </div>
          {isOpen && <div className={"fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"}></div>}
          {/*isOpen && <div></div> will make sure that the black semi-transparent screen covers the rest of the screen whilst the cart sidebar is open*/}
    </div>
  );
};

export default SideBar;
