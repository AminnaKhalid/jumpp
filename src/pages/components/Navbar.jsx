import React from "react";
import Homeicon from "./navassets/home.png";
import HoverHome from "./navassets/hoverhome.png";
import usersicon from "./navassets/users.png";
import hoverUsers from "./navassets/hoverusers.png";
import contractoricon from "./navassets/contractors.png";
import hovercontractor from "./navassets/hovercontractor.png";
import categories from "./navassets/allcontractors.png";
import hovercategories from "./navassets/hovercategory.png";
import reviews from "./navassets/reviews.png";
import hoverreview from "./navassets/hoverreview.png";
import transaction from "./navassets/transaction.png";
import hovertransaction from "./navassets/hovertransaction.png";
import notification from "./navassets/notification.png";
import hovernotification from "./navassets/hovernotification.png";
import aboutus from "./navassets/aboutus.png";
import hoveraboutus from "./navassets/hoveraboutus.png";
import privacy from "./navassets/privacy.png";
import hoverprivacy from "./navassets/hoverprivacy.png";
import terms from "./navassets/termsconditions.png";
import hoverterms from "./navassets/hoverterms.png";
import logout from "./navassets/logout.png";
import logo from "./navassets/logojumpp.png";
import { Link, useLocation } from "react-router-dom";
import DeleteLogoutModal from "./DeleteLogoutModal";
const Navbar = () => {

  const location = useLocation();
const currentPath = location.pathname;

const [open, setOpen] = React.useState(false);
  const navItems = [
    { name: "Dashboard", icon: Homeicon, hovericon: HoverHome, path: "/Dashboard" },
    {
      name: "All Users",
      icon: usersicon,
      hovericon: hoverUsers,
      path: "/users",
    },
    {
      name: "All Contractors",
      icon: contractoricon,
      hovericon: hovercontractor,
      path: "/contractors",
    },
    {
      name: "Categories",
      icon: categories,
      hovericon: hovercategories,
      path: "/category",
    },
    { name: "Reviews", icon: reviews, hovericon: hoverreview, path: "/review" },
    {
      name: "Transactions",
      icon: transaction,
      hovericon: hovertransaction,
      path: "/transaction",
    },
    {
      name: "Notification",
      icon: notification,
      hovericon: hovernotification,
      path: "/notification",
    },
    {
      name: "About Us",
      icon: aboutus,
      hovericon: hoveraboutus,
      path: "/aboutus",
    },
    {
      name: "Privacy Policy",
      icon: privacy,
      hovericon: hoverprivacy,
      path: "/privacypolicy",
    },
    {
      name: "Terms & Conditions",
      icon: terms,
      hovericon: hoverterms,
      path: "/terms",
    },
  ];
  return (
    <>
      {/* desktop sidebar */}
      <div className="w-80 min-h-screen bg-[#000000] px-4 pt-10  justify-between flex-col hidden md:flex">
        <div className="flex flex-col justify-center items-center ">
          <img src={logo} alt="" className="w-[149px] h-[60px]" />
          {/* navbaritems */}
          <div className="flex flex-col pt-4">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className={`px-2 py-3 flex items-center space-x-4 rounded-md ${
                  currentPath === item.path ? "bg-[#88FF55]" : "bg-[Black]"
                } `}
              >
                <img
                  src={currentPath === item.path ? item.hovericon : item.icon}
                  alt=""
                  className="w-5 h-5"
                />
                <span
                  className={`px-3 font-medium text-lg ${
                    currentPath === item.path ? "text-[black]" : "text-white"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* logout */}
        <Link  className="px-4 py-4 flex items-center space-x-4" onClick={() => setOpen(true)}>
          <img src={logout} alt="" className="w-5 h-5" />
          <span className="text-white px-3 font-medium text-lg" >Logout</span>
        </Link>

        {open && <DeleteLogoutModal onClose={() => setOpen(false)} />}
      </div>
    </>
  );
};

export default Navbar;
