import React from "react";
import logout from "./assets/deletemodal.png";
import { Link } from "react-router-dom";

const DeleteModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#00000018] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[40%] relative">
        {/* Logout Illustration */}
        <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2">
          <img
            src={logout}
            alt="Logout illustration"
            className="w-32 h-32 sm:w-48 sm:h-48"
          />
        </div>

        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center text-center mt-20 sm:mt-24">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Delete
          </h3>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Are you sure you want to Delete?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              className="flex-1 py-3 px-6 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition text-base"
              onClick={onClose}
            >
              Cancel
            </Link>
            <Link
              className="flex-1 py-3 px-6 bg-red-500 rounded-lg text-white font-medium hover:bg-red-600 transition text-base"
              onClick={onClose}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
