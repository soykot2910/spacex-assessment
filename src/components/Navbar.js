import React from "react";
import { SearchIcon } from "./SVGIcons";
import { useDispatch } from "react-redux";
import { handleSearch } from "../redux/slices/launchSlice";

const Navbar = () => {
    const dispatch = useDispatch();
  return (
    <nav className="py-4">
      <div className="w-full md:w-[90%] mx-auto flex flex-wrap justify-between items-center">
        <a href="#" className="flex items-center">
          <img
            src="/images/new-logo.png"
            className="w-[250px] h-[31px]"
            alt="Logo"
          />
        </a>
        <div className="flex relative justify-start items-center">
          <SearchIcon />
          <input
            placeholder="Search by rocket name"
            name="search"
            type="text"
            onChange={(e) => dispatch(handleSearch(e.target.value))}
            className="p-3 pl-10 w-[500px] lg:w-[800px] rounded-md  border-2 outline-none border-[#EDEDED]"
          />
          <button className="absolute right-3 bg-[#00B2B2] font-medium text-white py-1.5 px-4 rounded-md">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
