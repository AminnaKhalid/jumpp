import React from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import filter from "./assets/filter.png"
import date from "./assets/date.png"
import { Link } from 'react-router-dom'
import TransactionModal from './TransactionModal'
const Transaction = () => {
  const [open, SetOpen] = React.useState(false);
  const transdata = [
    { title: "Architecture", duration: "3 days", amount: "1500 $" },
    { title: "Architecture", duration: "3 days", amount: "1500 $" },
  ];
  return (
    <>
      <div className="flex md:flex-row flex-col ">
        <Navbar />
        <div className="flex flex-col h-screen w-full bg-[#FAFAFA]">
          <Heading headingname={"Transaction"} />
          <div className="flex justify-end m-4">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-3 border-[1px] border-[#E6E6E9] bg-[#FFFFFF] mr-2 rounded-md  md:w-1/4"
            />
            <img
              src={filter}
              alt=""
              className="h-10 w-10 cursor-pointer"
              onClick={() => SetOpen(true)}
            />
          </div>

          {/* filter modal */}
          {open && <TransactionModal onClose={() => SetOpen(false)} />}
          <div className="flex flex-col bg-white rounded-lg shadow-sm h-screen py-6 px-4 mx-6 my-4 border-[#0000001A] border-[0.96px] text-[#00000080] text-sm font-medium leading-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {transdata.map((items, index) => (
                <div
                  className="rounded-2xl border-[#F7F8F8] bg-[#FFFFFF] border-3 "
                  key={index}
                >
                  <div className="flex justify-between py-5 px-4">
                    <div className="mt-2 space-y-2">
                      <div>
                        <span className="mr-2">Job Title :</span>
                        <span className="text-black">{items.title}</span>
                      </div>
                      <div className="">
                        <span className="mr-2">Duration:</span>
                        <span className="text-black">{items.duration}</span>
                      </div>
                      <div className="">
                        <span className="mr-2">Total Amount:</span>
                        <span className="text-black">{items.amount}</span>
                      </div>
                    </div>
                    <img src={date} alt="" className="h-10 w-25" />
                  </div>

                  {/* button below the data */}
                  <div className="flex justify-center items-center bg-[#F7F8F8] rounded-bl-2xl rounded-br-2xl">
                    <Link
                      to="/transaction/detail"
                      className="w-[80%] bg-[#88FF55] mx-3 my-4 py-3 px-2 rounded-md text-black text-[16px] cursor-pointer text-center"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction