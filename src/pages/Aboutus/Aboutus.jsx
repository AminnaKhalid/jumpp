import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import add from "../components/assets/addicon.png"
import AboutModal from './AboutModal'
const Aboutus = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className="w-full h-screen bg-[#FAFAFA] flex flex-col">
        <Heading headingname="About Us" />
        <div className="flex justify-end">
          <button
            className="bg-[#88FF55] text-black rounded-lg px-4 py-2 m-4 flex flex-row items-center text-[16px] font-medium cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <img src={add} alt="add" className="w-5 h-5 mr-2" />
            Add About Us
          </button>

          {open && <AboutModal onClose={() => setOpen(false)} />}
        </div>
        <div className="flex flex-col  items-center bg-white rounded-lg shadow-sm h-screen py-6 px-4 mx-6 my-4 border-[#0000001A] border-[0.96px] text-[#00000080] text-sm font-medium leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolor
          tempore. Rerum dolore voluptas magnam, exercitationem perspiciatis
          iusto consequuntur consequatur eaque nam libero eum voluptatem,
          maiores, non ipsum mollitia? Dolorem.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aut
          rerum debitis, autem deleniti id beatae dolorum quisquam similique
          adipisci dolorem officia sapiente iste ex qui dicta itaque. Iusto,
          aut.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          cupiditate aut neque optio laborum eveniet nostrum vero illum.
          Doloribus veniam perferendis animi. Provident officia illo, beatae
          fugit ex iste nisi laboriosam nostrum recusandae, enim omnis quis
          consectetur veritatis! Dignissimos, quam?
          <br />
        
        </div>
      </div>
    </div>
  );
}

export default Aboutus