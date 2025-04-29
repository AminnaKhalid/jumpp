import React, { useState } from "react";
import deletee from "./assets/delete.png";
import star from "./assets/staricon.png";
import on from "./assets/on.png";
import off from "./assets/off.png";
import profile from "../Transaction/assets/profile.png";
import DeleteModal from "../components/DeleteModal"
const Allusers = () => {
  const initialData = [
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: off,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: off,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: on,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: off,
    },
  ];

  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false)

  // Toggle function
  const handleToggle = (index) => {
    const updatedData = [...data];
    updatedData[index].status = updatedData[index].status === on ? off : on;
    setData(updatedData);
  };

  return (
    <div className="relative overflow-x-auto">
      {/* Table Container */}
      <div className="min-w-[600px] md:min-w-auto">
        <div className="grid grid-cols-12 md:grid-cols-9 bg-white mb-4 text-center border border-[#0000001A] font-[600] text-[10px] text-[#8C8E9C]">
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
          {data.map((items, index) => (
            <div
              className="grid grid-cols-12 md:grid-cols-9 text-center font-[600] text-[8px] md:text-[12px] text-black"
              key={index}
            >
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 flex items-center justify-center">
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

              {/* Status Toggle Button */}
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 md:col-span-1 flex items-center justify-center">
                <img
                  src={items.status}
                  alt=""
                  className="h-10 w-14 cursor-pointer"
                  onClick={() => handleToggle(index)}
                />
              </div>

              {/* Action Buttons */}
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 md:col-span-1 flex items-center justify-center lg:space-x-2 space-x-1">
                <img src={deletee} alt="" className="lg:w-8 lg:h-8 w-5 h-5" onClick={()=>setOpen(true)} />
                <img src={star} alt="" className="lg:w-8 lg:h-8 w-5 h-5" />

                {open && <DeleteModal onClose={()=> setOpen(false)}
                
                 />
                 }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allusers;
