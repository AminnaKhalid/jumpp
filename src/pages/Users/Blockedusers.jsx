import React from "react";
import deletee from "./assets/delete.png";
import star from "./assets/staricon.png";
import on from "./assets/on.png";
import profile from "../Transaction/assets/profile.png";
const Blockedusers = () => {

  const data = [
    {
      user: "John Doe",
      email: "mansknak",
      number: "Active",
      address: "2023-01-01",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak",
      number: "Active",
      address: "2023-01-01",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak",
      number: "Active",
      address: "2023-01-01",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak",
      number: "Active",
      address: "2023-01-01",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak",
      number: "Active",
      address: "2023-01-01",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak",
      number: "Active",
      address: "2023-01-01",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak",
      number: "Active",
      address: "2023-01-01",
      status: on,
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      {/* Table Container */}
      <div className="min-w-[600px]">
        <div className="grid grid-cols-12 md:grid-cols-9 bg-white mb-8 text-center border border-[#0000001A] font-[600]  text-[10px] text-[#8C8E9C]">
          <div className="border border-[#0000001A] p-2 col-span-2">
            User Details
          </div>
          <div className="border border-[#0000001A] p-2 col-span-2">
            Email Address
          </div>
          <div className="border border-[#0000001A] p-2 col-span-2 md:col-span-1">
            Phone Number
          </div>
          <div className="border border-[#0000001A] p-2 col-span-2">
            Address
          </div>
          <div className="border border-[#0000001A] p-2 col-span-2 md:col-span-1">
            Status
          </div>
          <div className="border border-[#0000001A] p-2 col-span-2 md:col-span-1">
            Action
          </div>
        </div>
        {/* Table Body */}
        <div className="bg-white">
          {data.map((items) => (
            <div
              className="grid grid-cols-12 md:grid-cols-9 text-center  font-[600]  text-[10px] md:text-[12px] text-black"
              key={items}
            >
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 flex items-center justify-center ">
                <img src={profile} alt="" className="w-8 h-8 mr-3" />
                {items.user}
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 flex items-center justify-center">
                {items.email}
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 md:col-span-1 col-span-2 flex items-center justify-center">
                {items.number}
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 flex items-center justify-center">
                {items.address}
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 md:col-span-1 flex items-center justify-center">
                <img src={items.status} alt="" className="h-10 w-14" />
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 md:col-span-1 flex items-center justify-center space-x-2">
                <img src={deletee} alt="" className="w-8 h-8" />
                <img src={star} alt="" className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blockedusers;
