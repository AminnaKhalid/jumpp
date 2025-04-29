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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    {
      name: "Dashboard",
      icon: Homeicon,
      hovericon: HoverHome,
      path: "/Dashboard",
    },
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
      path: "/Contractors",
      matchPaths: ["/Contractors"],
    },
    {
      name: "Categories",
      icon: categories,
      hovericon: hovercategories,
      path: "/category",
    },
    {
      name: "Reviews",
      icon: reviews,
      hovericon: hoverreview,
      path: "/review",
    },
    {
      name: "Transactions",
      icon: transaction,
      hovericon: hovertransaction,
      path: "/transaction",
      matchPaths: ["/transaction"],
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

  // Function to check if a nav item is active
  const isActive = (item) => {
    // If it's the exact path
    if (currentPath === item.path) return true;

    // If it has matchPaths and current path starts with any of them
    if (item.matchPaths) {
      return item.matchPaths.some((path) => currentPath.startsWith(path));
    }

    return false;
  };

  return (
    <>
      {/* Mobile hamburger menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50 bg-white p-1 rounded-md">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Spacer */}
      <div className="md:hidden h-16"></div>

      {/* Desktop Sidebar */}
      <div className="w-80 min-h-screen bg-[#000000] px-4 pt-10 justify-between flex-col hidden md:flex">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="" className="w-[149px] h-[60px]" />
          <div className="flex flex-col pt-4 w-full">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className={`px-2 py-3 flex items-center space-x-4 rounded-md relative ${
                  isActive(item) ? "bg-[#88FF55]" : "bg-[Black]"
                }`}
              >
                {isActive(item) && (
                  <div className="absolute -left-3 h-12 w-[4px] bg-[#88FF55] rounded-r-sm"></div>
                )}
                <img
                  src={isActive(item) ? item.hovericon : item.icon}
                  alt=""
                  className="w-5 h-5"
                />
                <span
                  className={`px-3 font-medium md:sm lg:text-lg ${
                    isActive(item) ? "text-[black]" : "text-white"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* logout */}
        <Link
          className="px-4 py-4 flex items-center space-x-4"
          onClick={() => {
            setOpen(true);
            setMobileMenuOpen(false);
          }}
        >
          <img src={logout} alt="" className="w-5 h-5" />
          <span className="text-white px-3 font-medium text-lg">Logout</span>
        </Link>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="relative z-50 w-80 h-full bg-[#000000] px-4 pt-6 overflow-y-auto">
            <div className="flex flex-col h-full justify-between pb-20">
              <div>
                <div className="flex justify-center py-4">
                  <img src={logo} alt="" className="w-[149px] h-[60px]" />
                </div>
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      to={item.path}
                      key={item.name}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-2 py-3 flex items-center space-x-4 rounded-md relative ${
                        isActive(item) ? "bg-[#88FF55]" : "bg-[Black]"
                      }`}
                    >
                      {isActive(item) && (
                        <div className="absolute -left-3 h-12 w-[4px] bg-[#88FF55] rounded-r-sm"></div>
                      )}
                      <img
                        src={isActive(item) ? item.hovericon : item.icon}
                        alt=""
                        className="w-5 h-5"
                      />
                      <span
                        className={`px-3 font-medium text-lg ${
                          isActive(item) ? "text-[black]" : "text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <Link
                  className="px-4 py-4 flex items-center space-x-4"
                  onClick={() => {
                    setOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  <img src={logout} alt="" className="w-5 h-5" />
                  <span className="text-white px-3 font-medium text-lg">
                    Logout
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal outside sidebar, so it works on both screens */}
      {open && <DeleteLogoutModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
