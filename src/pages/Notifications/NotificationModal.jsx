import React from 'react'

const NotificationModal = ({onClose}) => {
  return (
    <>
      <div className="fixed inset-0 bg-[#0000007f] flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-[550px] lg:w-[650px] p-3">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Notifications
          </h2>
          <form className="mx-3 my-3 py-4 px-4 border-[1px] border-[#E6E7E7] rounded-md">
            <label htmlFor="language" className="font-medium text-[16px]">
              Title
            </label>
            <input
           
              className="w-full border border-[#E6E7E7] rounded-lg px-2 py-2 text-[#ADAFB9] my-2"
            />
             
            <label htmlFor="add" className="font-medium text-[16px]">
             Description
            </label>
            <textarea
              id="add"
              className="w-full border border-[#E6E7E7] rounded-lg px-2 py-2 text-[#ADAFB9] mt-2"
              rows="4"
            />
          </form>
          <div className="flex justify-center items-center ">
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
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationModal