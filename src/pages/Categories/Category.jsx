import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import filter from "../components/assets/searchicon.png";
import add from "../components/assets/addicon.png";
import icon from "./assets/caticon.png";
import image from "./assets/catimage.png";
import CategoryModal from "./CategoryModal";

const Category = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const category = [
    { id: 1, icon: icon, image: image, namecat: "Architecture" },
    { id: 2, icon: icon, image: image, namecat: "Design" },
    { id: 3, icon: icon, image: image, namecat: "Photography" },
    { id: 4, icon: icon, image: image, namecat: "Art" },
    { id: 5, icon: icon, image: image, namecat: "Fashion" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEdit = (id) => {
    console.log("Edit category with id:", id);
    setOpenDropdown(null);
    // Add your edit modal logic here
  };

  const handleDelete = (id) => {
    console.log("Delete category with id:", id);
    setOpenDropdown(null);
    // Add your delete modal logic here
  };

  const toggleDropdown = (id, event) => {
    event.stopPropagation();
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Navbar />
        <div className="flex flex-col min-h-screen w-full bg-[#FAFAFA]">
          <Heading headingname={"Categories"} />
          <div className="flex justify-end m-4 flex-col md:flex-row space-y-3 md:space-y-0">
            <button
              className="bg-[#88FF55] text-black rounded-lg px-4 py-2 mx-4 flex flex-row items-center cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img src={add} alt="add" className="w-5 h-5 mr-2" />
              <div className="lg:text-lg md:text-xs text-xs font-medium">
                Add Categories
              </div>
            </button>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-3 border-[1px] border-[#E6E6E9] bg-[#FFFFFF] mr-2 rounded-md md:w-80"
              />
              <img src={filter} alt="" className="h-10 w-10 cursor-pointer" />
            </div>

            {/* modal */}
            {open && <CategoryModal onClose={() => setOpen(false)} />}
          </div>

          {/* for cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
            {category.map((item) => (
              <div
                key={item.id}
                className="bg-[#F0F1F6] rounded-2xl flex flex-col justify-center items-center  relative p-3"
              >
                <div className="relative w-full flex justify-center items-start">
                  {/* fixed dropdown icon */}
                  <div className="absolute top-2 right-2">
                    <img
                      src={item.icon}
                      alt="options"
                      className="h-7 w-7 cursor-pointer z-20"
                      onClick={(e) => toggleDropdown(item.id, e)}
                    />
                  </div>
                  <img src={item.image} alt="" className="" />
                </div>
                <span className="font-medium text-lg py-2">{item.namecat}</span>

                {/* Dropdown menu */}
                {openDropdown === item.id && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-11 right-9 bg-white shadow-md rounded-md z-30 w-32"
                  >
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
