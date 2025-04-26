import React from "react";
import logout from "./assets/logoutmodal.png";
import { Link } from "react-router-dom";

const DeleteLogoutModal = () => {
  return (
    <div className="fixed inset-0 bg-[#0000007f] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative ">
        {/* Logout Illustration */}
        <div className="absolute -top-20 left-30 ">
          <img src={logout} alt="Logout illustration" className="w-48 h-48" />
        </div>

        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Logout</h3>
          <p className="text-gray-600 mb-8">Are you sure you want to Logout?</p>

          {/* Buttons */}
          <div className="flex gap-4 w-full">
            <Link className="flex-1 py-3 px-6 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition" to={'/Dashboard'}>
              Cancel
            </Link>
            <Link className="flex-1 py-3 px-6 bg-red-500 rounded-lg text-white font-medium hover:bg-red-600 transition" to={'/'} >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteLogoutModal;
