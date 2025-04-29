import React, { useState } from "react";
import deletee from "./assets/delete.png";
import star from "./assets/staricon.png";
import off from "./assets/off.png";
import on from "./assets/on.png"; // <-- You need ON icon too!
import profile from "../Transaction/assets/profile.png";
import DeleteModal from "../components/DeleteModal";

const ActiveUser = () => {
  const [users, setUsers] = useState([
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: false,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: false,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: false,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: false,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: false,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: false,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: false,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: false,
    },
    {
      user: "John Doe",
      email: "mansknak@gmail.com",
      number: "112233",
      address: "Sahiwal",
      status: false,
    },
  ]);

  const toggleStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = !updatedUsers[index].status;
    setUsers(updatedUsers);
  };

  const[open,setOpen] = useState(false)

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
          {users.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 md:grid-cols-9 text-center font-[600] text-[8px] md:text-[12px] text-black"
            >
              <div className="border-b border-r  border-gray-200 p-2 col-span-2 flex items-center justify-center">
                <img src={profile} alt="Profile" className="w-8 h-8 mr-3" />
                {item.user}
              </div>
              <div className="border-b border-r border-gray-200 p-2 col-span-2 flex items-center justify-center">
                {item.email}
              </div>
              <div className="border-b border-r border-gray-200 p-2 md:col-span-1 col-span-2 flex items-center justify-center">
                {item.number}
              </div>
              <div className="border-b border-r border-gray-200 p-2 col-span-2 flex items-center justify-center ">
                {item.address}
              </div>

              {/* Status with Toggle */}
              <div className="border-b border-r border-gray-200 p-2 col-span-2 md:col-span-1 flex items-center justify-center">
                <img
                  src={item.status ? on : off} // <-- Conditional render
                  alt="Status"
                  className="h-10 w-14 cursor-pointer"
                  onClick={() => toggleStatus(index)} // <-- Click to toggle
                />
              </div>

              {/* Action Buttons */}
              <div className="border-b border-gray-200 p-2 col-span-2 md:col-span-1 flex items-center justify-center space-x-2">
                <img
                  src={deletee}
                  alt="Delete"
                  className="lg:w-8 lg:h-8 w-5 h-5 cursor-pointer"
                  onClick={()=>setOpen(true)}
                />

                {open && <DeleteModal 
                  onClose={()=> setOpen(false)}
                />}
                <img src={star} alt="Star" className="lg:w-8 lg:h-8 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
