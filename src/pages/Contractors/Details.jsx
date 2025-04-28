import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import profile from "../Transaction/assets/profile.png";
import id from "./assets/idcard.png";
import cv from "./assets/cv.png";
import download from "./assets/download.png";
const Details = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen bg-[#FAFAFA]">
          <Heading headingname={"Contractor Details"} />
          <div className="flex flex-col bg-white rounded-lg shadow-sm  py-6 px-4 mx-6 my-4 border-[#0000001A] border-[0.96px] leading-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="md:border-r-3 md:border-dotted md:border-[#0000004D] px-2">
                {/* profile section here */}
                <div className="flex items-center">
                  <img
                    src={profile}
                    alt=""
                    className="h-20 w-20 rounded-full"
                  />
                  <div className="flex flex-col ml-4 font-medium text-sm">
                    <span>Clelsea Gregry</span>
                    <span className="text-xs md:text-sm">
                      clelsea.gregry@email.com
                    </span>
                  </div>
                </div>

                {/* details of profile */}
                <div className="flex flex-col mt-4">
                  <span className="font-[500] text-sm text-[#8A8A8F]">
                    Phone Number:
                    <b className="ml-2 font-medium text-black">
                      (219) 555-0114
                    </b>
                  </span>
                  <span className="font-[500] text-sm text-[#8A8A8F]">
                    Physical Address:
                    <b className="ml-2 font-medium text-black">
                      2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                    </b>
                  </span>
                </div>

                {/* driver license section */}
                <div className="mt-4">
                  <span className="font-medium text-2xl">Drivers License</span>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
                    <div className="mt-4">
                      <span className="text-lg font-[400] text-[#8A8A8F]">
                        Front Side
                      </span>
                      <img
                        src={id}
                        alt=""
                        className="h-[140px] w-[90%] rounded-2xl  mt-3"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-lg font-[400] text-[#8A8A8F]">
                        Back Side
                      </span>
                      <img
                        src={id}
                        alt=""
                        className="h-[140px] w-[90%] rounded-2xl  mt-3"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="font-medium text-2xl">
                    Government ID optional
                  </span>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
                    <div className="mt-4">
                      <span className="text-lg font-[400] text-[#8A8A8F] mb-2">
                        Front Side
                      </span>
                      <img
                        src={id}
                        alt=""
                        className="h-[140px] w-[90%] rounded-2xl mt-3 "
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-lg font-[400] text-[#8A8A8F]">
                        Back Side
                      </span>
                      <img
                        src={id}
                        alt=""
                        className="h-[140px] w-[90%] rounded-2xl mt-3 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-2 ">
                <span className="text-xl font-medium py-3">Resume</span>
                <div className="rounded-md flex flex-col border-2 border-[#B0B7C324] w-full md:w-2/3">
                  <div className="flex py-6 px-2 ">
                    <img src={cv} alt="" className="h-9 w-9" />
                    <div className="flex flex-col ml-4 ">
                      <span className="font-medium text-lg">CPR Card</span>
                      <span className="text-xs font-[400] text-[#8C959A]">
                        Submitted 12 May 2024, 8:32 PM
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center py-2 bg-[#F7F8F8]">
                    <img src={download} alt="" className="w-8 h-8 mr-3" />
                    <span className="font-[400] text-sm">Download</span>
                  </div>
                </div>
                <span className="text-xl font-medium py-3">
                  Copy of Diploma
                </span>
                <div className="rounded-md flex flex-col border-2 border-[#B0B7C324] w-full md:w-2/3">
                  <div className="flex py-6 px-2 ">
                    <img src={cv} alt="" className="h-9 w-9" />
                    <div className="flex flex-col ml-4 ">
                      <span className="font-medium text-lg">CPR Card</span>
                      <span className="text-xs font-[400] text-[#8C959A]">
                        Submitted 12 May 2024, 8:32 PM
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center py-2 bg-[#F7F8F8]">
                    <img src={download} alt="" className="w-8 h-8 mr-3" />
                    <span className="font-[400] text-sm">Download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
