import React from "react";
import filter from "../Transaction/assets/advancefilter.png";
import drop from "./down.png"
const ReviewModal = ({ onClose }) => {
  return (
    <div className="fixed z-50 inset-0 justify-center flex items-center bg-[#0000007f]">
      <div className="bg-white w-11/12 md:w-[400px] lg:w-[400px] rounded-md border-[1px] border-[#DCDCDE]">
        <div className="flex md:justify-between justify-center items-center py-4 px-4 border-b-2 border-[#E6E7E9]">
          <div className="flex items-center justify-center space-x-2">
            <img src={filter} alt="" className="h-5 w-5" />
            <span className="font-[600] text-lg">Advance Filter</span>
          </div>
          <span className="underline underline-offset-2 bg-gradient-to-r from-[#67e033] to-[#529933] text-transparent bg-clip-text cursor-pointer ">
            Clear All
          </span>
        </div>

        <form className="flex flex-col space-y-3 py-4 px-4">
          <div className="relative">
            <label
              htmlFor="user-type"
              className="font-medium text-sm leading-[20px] block mb-1"
            >
              App user type
            </label>
            <div className="relative">
              <select
                id="user-type"
                className="appearance-none border-[1px] border-[#DCDCDE] rounded-md py-3 px-3 w-full pr-8 focus:outline-none focus:ring-1 focus:ring-[#88FF55]"
              >
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
              <img src={drop} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="category"
              className="font-medium text-sm leading-[20px] block mb-1"
            >
              Category
            </label>
            <div className="relative">
              <select
                id="category"
                className="appearance-none border-[1px] border-[#DCDCDE] rounded-md py-3 px-3 w-full pr-8 focus:outline-none focus:ring-1 focus:ring-[#88FF55]"
              >
                <option value="admin">client category</option>
                <option value="editor">User Category</option>
              </select>
              <img src={drop} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="rating"
              className="font-medium text-sm leading-[20px] block mb-1"
            >
              Rating
            </label>
            <div className="relative">
              <select
                id="rating"
                className="appearance-none border-[1px] border-[#DCDCDE] rounded-md py-3 px-3 w-full pr-8 focus:outline-none focus:ring-1 focus:ring-[#88FF55]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <img src={drop} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
            </div>
          </div>
        </form>

        <div className="bg-[#F7F8F8] flex justify-center items-center py-4 rounded-b-lg space-x-3 px-4">
          <button
            onClick={onClose}
            className="bg-[#FFFFFF] w-full py-3 border-[1px] border-[#E6E7E9] rounded-md text-black font-medium text-lg cursor-pointer hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="bg-[#88FF55] w-full py-3 border-[1px] border-[#E6E7E9] rounded-md text-black font-medium text-lg cursor-pointer hover:bg-[#7ae542] transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
