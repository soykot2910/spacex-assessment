import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filterByLaunchStatus,
  filterByIsUpcoming,
  filterByDate,
} from "../redux/slices/launchSlice";

const Filters = ({data}) => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState("Launch Date");
  const [launchStatus, setLaunchStatus] = useState("Launch Status");
  const [upcoming, setUpcoming] = useState("Is it upcoming?");

  const handleLaunchStatus = (e) => {
    setLaunchStatus(e.target.value);
    dispatch(filterByLaunchStatus(e.target.value));
  };

  const handleIsUpcoming = (e) => {
    setUpcoming(e.target.value);
    dispatch(filterByIsUpcoming(e.target.value));
  };

  const handleDateFilter = (e) => {
    setSelectedDate(e.target.value);
    dispatch(filterByDate(Number(e.target.value)));
  };

  return (
    <div className="flex justify-between md:items-center">
      <p className="font-medium text-[#30545B]"> {data.length} Results</p>
      <div className="flex justify-between items-center flex-col md:flex-row">
        <h3 className="font-bold text-[#30545B] text-lg">Sort by</h3>
        <div className="px-3 ">
          <select
            value={selectedDate}
            onChange={handleDateFilter}
            className="p-3 rounded-md font-medium outline-none borders-2 border-[#EDEDED]"
          >
            <option disabled>Launch Date</option>
            <option value="7">Last Week</option>
            <option value="30">Last Month</option>
            <option value="365">Last Year</option>
            <option value="730">Last 2 Year</option>
          </select>
        </div>
        <div className="my-3 md:my-0">
          <select
            value={launchStatus}
            onChange={handleLaunchStatus}
            className="p-3 mr-2 rounded-md font-medium outline-none  borders-2 border-[#EDEDED]"
          >
            <option disabled>Launch Status</option>
            <option value={true}>Success</option>
            <option value={false}>Failure</option>
          </select>
        </div>
        <div className="">
          <select
            value={upcoming}
            onChange={handleIsUpcoming}
            className="p-3 rounded-md font-medium outline-none  borders-2 border-[#EDEDED]"
          >
            <option disabled>Is it upcoming?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
