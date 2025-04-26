import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import add from "../components/assets/addicon.png";
import PrivacyModal from "./PrivacyModal";
const Privacypolicy = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <div className="flex flex-col  w-full h-screen">
          <Heading headingname={"Privacy Policy"} />
          <div className="flex justify-end">
            <button
              className="bg-[#88FF55] text-black rounded-lg px-4 py-2 m-4 flex flex-row items-center text-[16px] font-medium cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img src={add} alt="" className="w-5 h-5" />
              <span>Add Privacy Policy</span>
            </button>

            {open && <PrivacyModal onClose={() => setOpen(false)} />}
          </div>
          <div className="flex flex-col  items-center bg-white rounded-lg shadow-sm h-screen py-6 px-4 mx-6 my-4 border-[#0000001A] border-[0.96px] text-[#00000080] text-sm font-medium leading-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            reiciendis totam voluptatibus aut nihil amet neque animi libero est
            commodi! Placeat maiores eius est cum molestiae quas, dolorem,
            obcaecati perferendis debitis mollitia ab temporibus consectetur
            veniam ad minima officiis neque.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            pariatur totam voluptas quam quaerat ipsum maiores ratione id
            officiis distinctio.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            maxime in explicabo quam illo, voluptatum modi illum ab veritatis, a
            atque nemo dolore, amet velit eligendi delectus fuga voluptas rem.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            corrupti commodi incidunt hic animi perspiciatis, repellendus
            adipisci nostrum dolorem sit ratione quos amet voluptatum sapiente
            iusto natus illum rerum maiores! Cum, quidem quia. Autem,
            doloremque?
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacypolicy;
