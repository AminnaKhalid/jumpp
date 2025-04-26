import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import add from "../components/assets/addicon.png";
import TermsModal from "./TermsModal";
const Terms = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Navbar />
        <div className="flex flex-col h-screen w-full">
          <Heading headingname={"Terms & Conditions"} />
          <div className="flex justify-end">
            <button
              className="bg-[#88FF55] text-black rounded-lg px-4 py-2 m-4 flex flex-row items-center text-[16px] font-medium cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img src={add} alt="add" className="w-5 h-5 mr-2" />
              <span>Add Terms & Conditions</span>
            </button>
            {open && <TermsModal onClose={() => setOpen(false)} />}
          </div>
          <div className="flex flex-col  items-center bg-white rounded-lg shadow-sm h-screen py-6 px-4 mx-6 my-4 border-[#0000001A] border-[0.96px] text-[#00000080] text-sm font-medium leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            consequuntur quam voluptatum ducimus laboriosam excepturi aperiam
            expedita nisi similique voluptatem! Ratione itaque enim quibusdam
            eius, et pariatur veritatis explicabo eaque!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            necessitatibus velit, doloribus molestias vel et vero, neque modi a
            delectus ipsum? Ex, id temporibus exercitationem quaerat ipsum error
            dolor nisi?
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A numquam
            ipsa dicta adipisci enim ullam quidem id animi corrupti asperiores.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus consequatur vero vitae officia maiores harum sapiente
            nihil rem debitis distinctio.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            labore voluptatibus velit, ipsum error quis repudiandae. Accusamus
            temporibus nemo ad, eius maxime possimus adipisci ab unde quis. Eum,
            et velit?
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
