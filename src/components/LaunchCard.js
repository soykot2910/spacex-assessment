import React from "react";
import { LeftArrow } from "./SVGIcons";

const LaunchCard = ({ item }) => {
  return (
    <div
      className="bg-white rounded-lg border flex flex-col items-center 
                  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="rounded-t-lg"
        src={item.links.mission_patch_small}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">
          Mission Name: {item.mission_name}
        </h5>
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">
          Rocket Name: {item.rocket.rocket_name}
        </h5>
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">
          Site Name: {item.launch_site.site_name}
        </h5>
        <h5 className="text-gray-900 mb-2 text-base font-bold tracking-tight">
          Launch Status:{" "}
          <span
            className={`${
              item.launch_success ? "bg-green-500" : "bg-red-600"
            } text-white px-3 rounded-md`}
          >
            {item.launch_success ? "Success" : "Failed"}
          </span>
        </h5>
        <p className="mb-3  font-normal text-gray-700 ">
          <b>Description:</b> {item.details}
        </p>
        <a href={item.links.article_link} className="text-blue-600 font-bold">
          Learn More <span className="text-xl"> > </span>
        </a>
      </div>
    </div>
  );
};

export default LaunchCard;
