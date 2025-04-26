import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import star from "./assets/rate.png";
import profile from "./assets/profile.png";
import onestar from "./assets/star.png"
const TransactionDetail = () => {
  const card = [
    {
      name: "Brooklyn Simmons",
      date: "November 7, 2017",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit eaque dolores aliquid exercitationem voluptatum rerum error fuga vel quisquam?",
    },
    {
      name: "Brooklyn Simmons",
      date: "November 7, 2017",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit eaque dolores aliquid exercitationem voluptatum rerum error fuga vel quisquam?",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row  min-h-screen">
      <Navbar />
      <div className="flex flex-col w-full bg-[#FAFAFA] min-h-screen">
        <Heading headingname={"Transaction details"} />
        <div className="bg-white rounded-lg shadow-sm py-6 px-4 mx-2 md:mx-6 my-4 border-[#0000001A] border-[0.96px] font-medium leading-5">
          {/* Date section */}
          <div className="flex justify-end font-medium text-lg md:text-[22px] my-2">
            October 30, 2012
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 my-5 px-2">
            {/* Left column - details */}
            <div className="flex flex-col lg:border-r-[3.28px] lg:border-[#00000033] lg:border-dotted space-y-3 md:space-y-4 pr-0 lg:pr-4">
              <span className="text-base md:text-[20px] text-[#20212499] font-[400]">
                Title:{" "}
                <b className="text-black">Food processing facility workers</b>
              </span>
              <span className="text-base md:text-[20px] text-[#20212499] font-[400]">
                Duration: <b className="text-black">3 days</b>
              </span>
              <span className="text-base md:text-[20px] text-[#20212499] font-[400]">
                Client Name: <b className="text-black">Darrell Steward</b>
              </span>
              <span className="text-base md:text-[20px] text-[#20212499] font-[400]">
                Posted Date: <b className="text-black">February 29, 2012</b>
              </span>
              <div className="text-base md:text-[20px] text-[#20212499] font-[400]">
                Description:
                <p className="text-sm md:text-[17px] font-sm leading-6 md:leading-[32px] mt-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  alias temporibus tempora, nostrum officiis illum?
                </p>
                <span className="text-sm md:text-[17px] bg-gradient-to-r from-[#67e033] to-[#529933] bg-clip-text text-transparent cursor-pointer">
                  Read More
                </span>
              </div>
            </div>

            {/* Right column - cards */}
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {card.map((item) => (
                <div
                  className="border-[#0000001A] border-2 p-3 rounded-md"
                  key={item}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    {/* Profile section */}
                    <div className="flex mb-2 sm:mb-0">
                      <img
                        src={profile}
                        alt=""
                        className="w-10 h-10 md:w-14 md:h-14 mr-2"
                      />
                      <div className="flex flex-col">
                        <span className="text-base md:text-lg font-medium">
                          {item.name}
                        </span>
                        <span className="text-[#8C8E9C] text-xs md:text-sm">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Star rating */}
                    <div className="flex items-center space-x-2">
                      <img src={star} alt="" className="h-4 md:h-6" />
                      <span className="font-[600] text-base md:text-lg">
                        5.0
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm md:text-[16px] font-[600] text-[#8C8E9C]">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lower box of card */}
          <div className="border-2 border-[#E6E7E9] rounded-sm bg-[#FFFFFF] p-4 flex flex-col space-y-4 mx-2">
            <div className="flex border-b-3 border-[#00000033] pb-4 mb-4 border-dotted">
              <img src={profile} alt="" className="w-20 h-20" />
              <div className="flex flex-col justify-center ml-4">
                <span className="font-[400] text-[22px] ">Jerome Bell</span>
                <span className="font-[500]  text-2xl">
                  UI/UX Designer
                  <span className="text-[#20212499] text-lg font-[400]">
                    (12hours ago)
                  </span>
                </span>
              </div>
            </div>
            <div className="font-[400] text-xl md:text-3xl letter-spacing-[2%] text-[#202124A6] leading-[32px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              Lorem ipsum dolor sit amet. iure.
            </div>
            <div className="flex md:justify-between justify-between">
              <div className="flex justify-center items-center space-x-2">
                <img src={onestar} alt="" className="w-5 h-5" />
                <span className="font-[600] text-2xl">5.0</span>
                <span className="text-[#20212499] font-[400] text-[20px]">
                  (480)
                </span>
              </div>
              <div>
                <span className="font-medium text-2xl md:text-4xl ">$13</span>
                <span className="font-[400] text-xl md:text-2xl">/hours</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4 font-medium text-2xl md:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-[#67e033] to-[#529933] text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl">
              Total Price
            </span>
            <span className="text-black">: $3500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
