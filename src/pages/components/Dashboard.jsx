import React from "react";
import Heading from "./Heading";
import Navbar from "./Navbar";

const Dashboard = () => {
  const data = [
    { name: "All Users", value: "5,500" },
    { name: "Active Users", value: "5,000" },
    { name: "Block Users", value: "500" },
    { name: "Active Users", value: "5,000" },
    { name: "Block Users", value: "500" },
    { name: "Active Users", value: "5,000" },
    { name: "Block Users", value: "500" },
  ];
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Navbar />
        <div className="h-screen w-full flex flex-col bg-[#FAFAFA]">
          <Heading headingname="Dashboard" />
          <div className="space-x-2 m-4 flex flex-col">
            <span className="text-black text-2xl md:text-4xl font-medium">
              Welcome back, Cameron W.
            </span>
            <span className="mt-2 text-[#8E8F96]  text-[14px]">
              <b className="text-[black] pr-1">Sunday, 23 June 2024.</b>
              Here is a quick snapshot of the overall business
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 md:mt-15">
              {data.map((item) => (
                <div
                  key={item}
                  className="flex flex-col  justify-center bg-white rounded-lg shadow-md py-6 px-4 m-2 border-[#0000001A] border-[0.96px] "
                >
                  <span className="text-[#88FF55] font-500 text-3xl">
                    {item.name}
                  </span>
                  <span className="font-bold text-3xl">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
