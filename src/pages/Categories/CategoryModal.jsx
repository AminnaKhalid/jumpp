import React from 'react'
import catplus from "./assets/catplus.png"

const CategoryModal = ({onClose}) => {
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-[#0000007f] ">
        <div className="bg-white w-11/12 md:wd-[500px] lg:w-[450px]  rounded-md  shadow-lg py-6">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold text-center mb-4 ">
              Add Category
            </h2>
            <div className="w-70 h-40 md:w-80 md:h-52 border-[1px] border-[#E6E7E9] rounded-lg flex items-center justify-center">
              <img src={catplus} alt="" className="h-10 w-10 md:h-14 md:w-14" />
              {/* form */}
            </div>
          </div>

          <form action="" className="flex flex-col px-6 pt-3">
            <label htmlFor="name" className='font-medium text-sm'>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="border-[2px] border-[#E6E7E9] rounded-lg px-2 py-2 text-[#ADAFB9] my-2"
            />
          </form>
          <div className="flex justify-center items-center py-2">
            <button
              type="button"
              className="bg-[#FFFFFF] text-black rounded-lg px-4 py-3 mt-4 mr-2 border-[1px] border-[#E6E7E9] inset-shadow-sm w-30 md:w-40 font-medium text-lg cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className=" text-black rounded-lg px-4 py-3 mt-4 inset-shadow-sm w-30 md:w-40 bg-[#88FF55] text-lg font-medium cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryModal