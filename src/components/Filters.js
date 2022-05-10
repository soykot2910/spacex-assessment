import React, { useState, useEffect } from "react";

const Filters = ({
  selectedDate,
  launchStatus,
  upcoming,
  setLaunchStatus,
  setUpcoming,
  setSelectedDate,
  allData,
  isLoading
}) => {
  const handleReset = () => {
    setLaunchStatus("Launch Status");
    setUpcoming("Is it upcoming?");
    setSelectedDate("Launch Date");
  };

  return (
    <div className="flex justify-between md:items-center">
      <p className="font-medium text-[#30545B]">{allData.length} Results</p>
      <div className="flex justify-between items-center flex-col md:flex-row">
        {(allData.length < 1 && !isLoading) && (
          <button
            className="bg-blue-700 text-white font-medium px-2 py-1 rounded-md mr-5"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
        <h3 className="font-bold text-[#30545B] text-lg">Sort by</h3>
        <div className="px-3">
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
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
            onChange={(e) => setLaunchStatus(e.target.value)}
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
            onChange={(e) => setUpcoming(e.target.value)}
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
