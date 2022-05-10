import React from "react";

const Sidebar = () => {
  return (
    <div className="px-6 pt-2 w-full lg:w-[30%]">
      <div className="flex justify-between pb-2 border-b-2 border-[#EDEDED]">
        <h3 className="font-bold text-base text-[#103740]">Filter by</h3>
        <p className="text-[#00B2B2] font-medium cursor-pointer">
          Reset Filters
        </p>
      </div>
      <div className="">
        <div className="my-2">
          <input type="radio" className="mr-3" defaultChecked name="category" />
          <label className="text-lg text-[#8FA1A5]">Launches</label>
        </div>
        <div className="my-2">
          <input type="radio" className="mr-3" name="category" />
          <label className="text-lg text-[#8FA1A5]">Mission</label>
        </div>
        <div className="my-2">
          <input type="radio" className="mr-3" name="category" />
          <label className="text-lg text-[#8FA1A5]">Rockets</label>
        </div>
        <div className="my-2">
          <input type="radio" className="mr-3" name="category" />
          <label className="text-lg text-[#8FA1A5]">Ships</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
