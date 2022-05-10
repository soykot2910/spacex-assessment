import React from "react";
import { SearchIcon } from "./SVGIcons";

const Navbar = () => {
  return (
    <nav class="py-4">
      <div class="w-full md:w-[90%] mx-auto flex flex-wrap justify-between items-center">
        <a href="#" class="flex items-center">
          <img
            src="/images/new-logo.png"
            class="w-[250px] h-[31px]"
            alt="Logo"
          />
        </a>
        <div className="flex relative justify-start items-center">
          <SearchIcon />
          <input
            placeholder="Search by rocket name"
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
