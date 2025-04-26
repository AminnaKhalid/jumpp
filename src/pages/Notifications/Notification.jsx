import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import add from "../components/assets/addicon.png"
import NotificationModal from './NotificationModal'
const Notification = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Navbar />
        <div className="flex flex-col h-screen w-full">
          <Heading headingname={"Notifications"} />
          <div className="flex justify-end">
            <button
              className="bg-[#88FF55] text-black rounded-lg px-4 py-2 m-4 flex flex-row items-center text-[16px] font-medium cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img src={add} alt="" className="h-5 w-5 mr-2" />
              <span>Notifications</span>
            </button>

            {open && <NotificationModal onClose={() => setOpen(false)} />}
          </div>
          <div className="flex flex-col  items-center bg-white rounded-lg shadow-sm h-screen py-6 px-4 mx-6 my-4 border-[#0000001A] border-[0.96px] text-[#00000080] text-sm font-medium leading-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            totam voluptas, eligendi eos doloremque ut dolorum sint! Enim
            voluptatibus quam eum ea, dolorem consequuntur modi consequatur
            impedit illum quaerat tempore alias unde, velit quas officia ipsa,
            perferendis deleniti pariatur iure.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            quos porro, nostrum neque iste reprehenderit quae possimus, natus
            consequatur iusto eveniet nesciunt. Cum illum dignissimos inventore
            obcaecati reiciendis itaque modi.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus nam ipsam quasi et sit exercitationem asperiores
            reiciendis corrupti nesciunt tempore! Culpa beatae ea esse sit
            ducimus ad distinctio repellat minus.
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification