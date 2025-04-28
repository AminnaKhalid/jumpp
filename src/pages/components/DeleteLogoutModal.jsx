import React from "react";
import logout from "./assets/logoutmodal.png";
import { Link } from "react-router-dom";

const DeleteLogoutModal = () => {
  return (
    <div className="fixed inset-0 bg-[#0000007f] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-[90%] sm:max-w-[60%] md:max-w-[40%] relative">
        {/* Logout Illustration */}
        <div className="absolute top-0 left-0 right-0 mx-auto transform -translate-y-16 sm:-translate-y-20 flex justify-center">
          <img
            src={logout}
            alt="Logout illustration"
            className="w-32 h-32 sm:w-48 sm:h-48"
          />
        </div>

        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center text-center mt-16 sm:mt-24">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Logout
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8">
            Are you sure you want to Logout?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              className="w-full sm:w-auto py-3 px-6 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition mb-4 sm:mb-0"
              to={"/Dashboard"}
            >
              Cancel
            </Link>
            <Link
              className="w-full sm:w-auto py-3 px-6 bg-red-500 rounded-lg text-white font-medium hover:bg-red-600 transition"
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
