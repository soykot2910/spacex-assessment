import React, { useEffect, useState } from "react";
import { Maincontent } from "../components/Maincontent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getLaunchItems } from "../redux/slices/launchSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLaunchItems());
  }, [dispatch]);

  const { launchItems, filterItems, isLoading } = useSelector(
    (state) => state.launch
  );

    let allData = filterItems.length > 0 ? filterItems : launchItems;


  return (
    <>
      <Navbar />
      <main className="border-t-2 border-[#EDEDED] flex flex-col md:flex-row md:px-16">
        <Sidebar />
        <Maincontent data={allData} isLoading={isLoading} />
      </main>
    </>
  );
};

export default Home;
