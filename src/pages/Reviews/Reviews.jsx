import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import filter from "../Transaction/assets/filter.png";
import ReviewModal from "./ReviewModal";
import profile from "../Transaction/assets/profile.png";
import star from "../Transaction/assets/rate.png";
const Reviews = () => {
  const [open, SetOpen] = React.useState(false);
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen bg-[#FAFAFA]">
          <Heading headingname={"Reviews"} />

          {/* search bar and filter at end */}
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
          {open && <ReviewModal onClose={() => SetOpen(false)} />}

          {/* ya ha box area */}
          <div className="flex flex-col bg-white rounded-lg shadow-sm h-screen py-6 px-4 mx-6 my-4 border-[#0000001A] border-[0.96px] text-[#00000080] text-sm font-medium leading-5">
            <div className="flex flex-col border-1 border-[#0000001A] my-2 mx-3 p-3 rounded-md">
              <div className="flex flex-col md:flex-row justify-center md:justify-between ">
                <div className="flex justify-center items-center mb-4 md:mb-0">
                  <img src={profile} alt="" className="h-14 w-14 mr-2" />
                  <div className="flex flex-col">
                    <span>Brooklyn Simmons</span>
                    <span>November 7, 2017</span>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <img src={star} alt="" className=" w-32" />
                  <span>5.0</span>
                </div>
              </div>
              <div className="py-3 leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                dolorem animi, ex hic laboriosam, impedit accusantium libero
                similique fugit eum earum officiis iusto? Saepe totam, illo
                fugit ratione similique amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Architecto natus iste molestias
                sunt rem, incidunt tenetur earum sit aspernatur minus. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                laborum.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
