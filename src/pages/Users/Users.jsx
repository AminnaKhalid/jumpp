import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import alluser from "./assets/alluser.png";
import block from "./assets/blockuser.png";
import active from "./assets/activeuser.png";
import lightall from "./assets/lightall.png";
import lightactive from "./assets/lightactive.png";
import lightblock from "./assets/lightblock.png";
import filter from "../components/assets/searchicon.png";
import AllUsers from "./Allusers"; // Make sure file name matches
import ActiveUsers from "./Activeusers"; // You'll need to create this
import BlockedUsers from "./Blockedusers"; // Make sure file name matches

const Users = () => {
  const [activeTab, setActiveTab] = useState("All");

  const buttondata = [
    {
      icon: activeTab === "All" ? lightall : alluser,
      name: "All User",
      value: "All",
    },
    {
      icon: activeTab === "Active" ? lightactive : active,
      name: "Active User",
      value: "Active",
    },
    {
      icon: activeTab === "Blocked" ? lightblock : block,
      name: "Blocked User",
      value: "Blocked",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Active":
        return <ActiveUsers />;
      case "Blocked":
        return <BlockedUsers />;
      default:
        return <AllUsers />;
    }
  };

  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Navbar />
        <div className="min-h-screen w-full flex flex-col bg-[#FAFAFA]">
          <Heading headingname={"All Users"} />

          {/* Toggle buttons and search bar */}
          <div className="flex justify-between items-center flex-col md:flex-row m-4">
            <div className="flex items-center justify-center space-x-3">
              {buttondata.map((item) => (
                <div
                  key={item.value}
                  className={`flex justify-center items-center rounded-md border-2 border-[#E6E6E8] px-3 py-2 cursor-pointer ${
                    activeTab === item.value
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(item.value)}
                >
                  <img src={item.icon} alt="" className="w-3.5 h-3.5 mr-2" />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end m-4">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-3 border-[1px] border-[#E6E6E9] bg-[#FFFFFF] mr-2 rounded-md"
              />
              <img src={filter} alt="" className="h-10 w-10 cursor-pointer" />
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 p-4">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default Users;
