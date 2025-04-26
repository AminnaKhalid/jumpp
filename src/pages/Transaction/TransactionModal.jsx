import React from 'react'
import filter from "./assets/advancefilter.png"
const TransactionModal = ({onClose}) => {
  const formdata = [
    { title: "Total Amount", placetitle: "Select total amount" },
    { title: "Contractor name", placetitle: "Select contractor name" },
    { title: "Client name", placetitle: "Select client name" },
    { title: "Date", placetitle: "Select date" },
    { title: "Transaction ID", placetitle: "Enter transaction ID" },
    { title: "Location", placetitle: "Select location" },
    { title: "Duration", placetitle: "Select duration" },
  ];
  return (
    <>
      <div className="fixed inset-0 bg-[#0000007f] flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-[550px] lg:w-[450px]">
          {/* for heading */}
          <div className="flex  md:justify-between justify-center items-center py-4 px-4 border-b-2 border-[#E6E7E9]">
            <div className="flex items-center justify-center space-x-2">
              <img src={filter} alt="" className="h-5 w-5" />
              <span className="font-[600] text-lg">Advance Filter</span>
            </div>
            <span className="underline underline-offset-2 bg-gradient-to-r from-[#67e033] to-[#529933] text-transparent bg-clip-text cursor-pointer">
              Clear All
            </span>
          </div>

          {/* form */}
          <form action="" className="flex flex-col space-y-3 py-4 px-4">
            {formdata.map((item) => (
              <di key={item} className="flex flex-col">
                <label
                  htmlFor="totalamount"
                  className="font-medium text-sm mb-2"
                >
                  {item.title}
                </label>
                <input
                  type="text"
                  placeholder={item.placetitle}
                  className="border-[1px] border-[#D4D4DA] rounded-lg px-2 py-2 text-[#939393]"
                />
              </di>
            ))}
          </form>

          {/* buttons */}
          <div className="bg-[#F7F8F8] flex justify-center items-center py-4 rounded-b-lg space-x-3 px-4">
            <button onClick={onClose} className="bg-[#FFFFFF] w-full py-3 border-[1px] border-[#E6E7E9] rounded-md text-black font-medium text-lg cursor-pointer">
              Cancel
            </button>
            <button onClick={onClose} className="bg-[#88FF55] w-full py-3 border-[1px] border-[#E6E7E9] rounded-md text-black font-medium text-lg cursor-pointer">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionModal