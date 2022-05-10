import React, { useState } from "react";

const Filters = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [launchStatus, setLaunchStatus] = useState("");
  const [upcoming, setUpcoming] = useState("");


  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-[#30545B]"> Results</p>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-[#30545B] text-lg">Sort by</h3>
        <div className="px-3">
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="p-3 rounded-md font-medium outline-none  borders-2 border-[#EDEDED]"
          >
            <option>Launch Date</option>
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>
        <div className="">
          <select
            value={launchStatus}
            onChange={(e) => setLaunchStatus(e.target.value)}
            className="p-3 rounded-md font-medium outline-none  borders-2 border-[#EDEDED]"
          >
            <option>Launch Status</option>
            <option value="true">Success</option>
            <option value="false">Failure</option>
          </select>
        </div>
        <div className="">
          <select
            value={upcoming}
            onChange={(e) => setUpcoming(e.target.value)}
            className="p-3 rounded-md font-medium outline-none  borders-2 border-[#EDEDED]"
          >
            <option>Is it upcoming?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
