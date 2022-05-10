import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import LaunchCard from "./LaunchCard";
import { Spinner } from "./SVGIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByDate,
  filterByIsUpcoming,
  filterByLaunchStatus,
  getLaunchItems,
} from "../redux/slices/launchSlice";

export const Maincontent = () => {
  const [selectedDate, setSelectedDate] = useState("Launch Date");
  const [launchStatus, setLaunchStatus] = useState("Launch Status");
  const [upcoming, setUpcoming] = useState("Is it upcoming?");

  const dispatch = useDispatch();

  const { launchItems, isLoading } = useSelector((state) => state.launch);

  useEffect(() => {
    if (
      launchStatus === "Launch Status" &&
      upcoming === "Is it upcoming?" &&
      selectedDate === "Launch Date"
    ) {
      dispatch(getLaunchItems());
    }

    if (launchStatus !== "Launch Status") {
      dispatch(filterByLaunchStatus(launchStatus));
    }
    if (upcoming !== "Is it upcoming?") {
      dispatch(filterByIsUpcoming(upcoming));
    }
    if (selectedDate !== "Launch Date") {
      dispatch(filterByDate(Number(selectedDate)));
    }
  }, [dispatch, launchStatus, upcoming, selectedDate]);

  return (
    <div className="bg-[#F1F9F9] w-full lg:w-[70%]  border-l-2 border-[#EDEDED] px-12 pt-2">
      <Filters
        selectedDate={selectedDate}
        launchStatus={launchStatus}
        upcoming={upcoming}
        setSelectedDate={setSelectedDate}
        setLaunchStatus={setLaunchStatus}
        setUpcoming={setUpcoming}
        allData={launchItems}
        isLoading={isLoading}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {launchItems?.map((item,idx) => (
              <LaunchCard item={item} key={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
