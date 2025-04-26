import React from "react";

const Heading = ({headingname}) => {
  return (
    <>
      <div className="bg-[#FFFFFF] px-2 py-2 md:px-4 md:py-4 border-b-[1px] border-[#E4E4E4] ">
        <span className="text-2xl lg:text-3xl xl:text-3xl font-medium">{headingname}</span>
      </div>
    </>
  );
};

export default Heading;
