import React, { useState } from "react";
import deletee from "../Users/assets/delete.png";
import eye from "./assets/eyeicon.png";
import off from "../Users/assets/off.png";
import on from "../Users/assets/on.png";
import profile from "../Transaction/assets/profile.png";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";

const Blockedcontractor = () => {
  const navigate = useNavigate();

  // Instead of const data = [...], we use useState to make it dynamic
  const [data, setData] = useState([
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
      status: off,
    },
  ]);

  // Toggle status function
  const toggleStatus = (index) => {
    const updatedData = [...data];
    updatedData[index].status = updatedData[index].status === on ? off : on;
    setData(updatedData);
  };

  const[open ,setOpen] = useState(false)
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
          {data.map((item, index) => (
            <div
              className="grid grid-cols-12 md:grid-cols-9 text-center font-[600] text-[10px] md:text-[12px] text-black"
              key={index}
            >
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 flex items-center justify-center">
                <img src={profile} alt="Profile" className="w-8 h-8 mr-3" />
                {item.user}
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 flex items-center justify-center">
                {item.email}
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 md:col-span-1 col-span-2 flex items-center justify-center">
                {item.number}
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 flex items-center justify-center">
                {item.address}
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 md:col-span-1 flex items-center justify-center">
                <img
                  src={item.status}
                  alt="Status Toggle"
                  className="h-10 w-14 cursor-pointer"
                  onClick={() => toggleStatus(index)}
                />
              </div>
              <div className="border-r-1 border-b-1 border-gray-200 p-2 col-span-2 md:col-span-1 flex items-center justify-center lg:space-x-2">
                <img
                  src={eye}
                  alt="View Details"
                  className="lg:w-8 lg:h-8 w-5 h-5 cursor-pointer"
                  onClick={() => navigate("/Contractors/Details")}
                />
                <img
                  src={deletee}
                  alt="Delete"
                  className="lg:w-8 lg:h-8 w-5 h-5 cursor-pointer"
                  onClick={()=>setOpen(true)}
                />

                {open && <DeleteModal 
                  onClose={()=> setOpen(false)}
                />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blockedcontractor;
