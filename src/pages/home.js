import React, { useEffect, useState } from "react";
import { Maincontent } from "../components/Maincontent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getLaunchItems } from "../redux/slices/launchSlice";

const Home = () => {
  const [displayData, setDisplayData] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLaunchItems());
  }, [dispatch]);

  const { launchItems, filterItems, isLoading } = useSelector(
    (state) => state.launch
  );


//   useEffect(() => {
//     if (filterItems.length>0) {
//       setDisplayData(filterItems);
//     } else {
//       setDisplayData(launchItems);
//     }
//   }, [filterItems]);

  console.log(displayData)

    let allData = filterItems.length > 0 ? filterItems : launchItems;

  return (
    <>
      <Navbar />
      <main className="border-t-2 border-[#EDEDED] flex px-16">
        <Sidebar />
        <Maincontent data={allData} isLoading={isLoading} />
      </main>
    </>
  );
};

export default Home;
