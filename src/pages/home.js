import React from "react";
import { Maincontent } from "../components/Maincontent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="border-t-2 border-[#EDEDED] flex px-16">
        <Sidebar />
        <Maincontent/>
      </main>
    </>
  );
};

export default Home;
