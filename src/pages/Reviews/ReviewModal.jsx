import React from 'react'
import filter from "../Transaction/assets/advancefilter.png"

const ReviewModal = ({onClose}) => {
  return (
    <>
      <div className="fixed z-50 inset-0 justify-center flex items-center bg-[#0000007f]">
        <div className="bg-white w-11/12 md:w-[400px] lg:w-[400px] rounded-md border-[1px] border-[#DCDCDE] ">
          <div className="flex  md:justify-between justify-center items-center py-4 px-4 border-b-2 border-[#E6E7E9]">
            <div className="flex items-center justify-center space-x-2">
              <img src={filter} alt="" className="h-5 w-5" />
              <span className="font-[600] text-lg">Advance Filter</span>
            </div>
            <span className="underline underline-offset-2 bg-gradient-to-r from-[#67e033] to-[#529933] text-transparent bg-clip-text cursor-pointer">
              Clear All
            </span>
          </div>
          <form action="" className="flex flex-col space-y-3 py-4 px-4">
            <label
              htmlFor="user type"
              className="font-medium text-sm leading-[20px]"
            >
              App user type
            </label>
            <select
              id="user-type"
              className="border-[1px] border-[#DCDCDE] rounded-md p-2 mb-4 "
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
            <label
              htmlFor="user type"
              className="font-medium text-sm leading-[20px]"
            >
              Category
            </label>
            <select
              id="user-type"
              className="border-[1px] border-[#DCDCDE] rounded-md p-2"
            >
              <option value="admin">client category</option>
              <option value="editor">User Category</option>
            </select>
            <label
              htmlFor="user type"
              className="font-medium text-sm leading-[20px]"
            >
              Rating
            </label>
            <select
              id="user-type"
              className="border-[1px] border-[#DCDCDE] rounded-md p-2"
            >
              <option value="admin">1</option>
              <option value="editor">2</option>
              <option value="viewer">3</option>
            </select>
          </form>

          {/* buttons */}
          <div className="bg-[#F7F8F8] flex justify-center items-center py-4 rounded-b-lg space-x-3 px-4">
            <button
              onClick={onClose}
              className="bg-[#FFFFFF] w-full py-3 border-[1px] border-[#E6E7E9] rounded-md text-black font-medium text-lg cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="bg-[#88FF55] w-full py-3 border-[1px] border-[#E6E7E9] rounded-md text-black font-medium text-lg cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewModal