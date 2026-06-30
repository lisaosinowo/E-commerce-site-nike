import { IoIosArrowDown } from "react-icons/io";

const Select = ({ title, options }: { title: string; options: number[] }) => {
  return (
    <div className="relative">
      <select defaultValue={""} className="w-24 appearance-none border border-gray-300 bg-white p-4"> {/* This is the default selected option that will be displayed initially */}
        <option value="" disabled hidden> {/* Disabled and hidden will hide this option from the dropdown */}
          {title}
        </option> {/* Default option */}
        {options.map((option: number) => (
          <option value={option} key={option}>
            {option} {/*This is a size option */}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3"> 
        {/*inset-y-0 makes the div vertically centered  */}
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
