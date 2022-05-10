import React from "react";
import Filters from "./Filters";
import LaunchCard from "./LaunchCard";
import { Spinner } from "./SVGIcons";

export const Maincontent = ({ data, isLoading }) => {
  return (
    <div className="bg-[#F1F9F9] w-full lg:w-[70%]  border-l-2 border-[#EDEDED] px-12 pt-2">
      <Filters />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-20">
          <div className="grid grid-cols-3 gap-4">
            {data.map((item) => (
              <LaunchCard item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
