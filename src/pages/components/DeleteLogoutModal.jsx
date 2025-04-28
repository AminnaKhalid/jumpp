import React from "react";
import logout from "./assets/logoutmodal.png";
import { Link } from "react-router-dom";

const DeleteLogoutModal = () => {
  return (
    <div className="fixed inset-0 bg-[#0000007f] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative mx-auto">
        {/* Logout Illustration */}
        <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <img
            src={logout}
            alt="Logout illustration"
            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
          />
        </div>

        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center text-center pt-16">
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Logout
          </h3>
          <p className="text-sm xs:text-base text-gray-600 mb-6 max-w-xs mx-auto">
            Are you sure you want to Logout?
          </p>

          {/* Buttons - Row on Large Screens, Stacked on Mobile */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Link
              className="w-full sm:w-auto flex-1 py-2 xs:py-3 px-4 xs:px-6 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition text-sm xs:text-base md:py-3"
              to={"/Dashboard"}
            >
              Cancel
            </Link>
            <Link
              className="w-full sm:w-auto flex-1 py-2 xs:py-3 px-4 xs:px-6 bg-red-500 rounded-lg text-white font-medium hover:bg-red-600 transition text-sm xs:text-base md:py-3"
              to={"/"}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteLogoutModal;
