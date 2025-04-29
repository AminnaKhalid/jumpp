import React from "react";
import logout from "./assets/deletemodal.png";
import { Link } from "react-router-dom";

const DeleteModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#00000018] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-[400] sm:max-w-lg md:max-w-[550] lg:max-w-[600] relative">
        {/* Logout Illustration */}
        <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2">
          <img
            src={logout}
            alt="Logout illustration"
            className="md:w-36 md:h-36 w-30 h-30"
          />
        </div>

        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center text-center md:mt-12  mt-10">
          <h3 className="md:text-3xl text-2xl font-bold text-gray-800 mb-2">
            Delete
          </h3>
          <p className="text-[#8C959A] mb-8 md:text-2xl text-base font-[400]">
            Are you sure you want to Delete?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              className="flex-1 py-3 px-6 border-2 border-[#E6E7E9] rounded-lg text-black font-medium text-xl hover:bg-gray-50 transition"
              onClick={onClose}
            >
              Cancel
            </Link>
            <Link
              className="flex-1 py-3 px-6 bg-[#EA4334] rounded-lg text-white font-medium hover:bg-red-600 transition text-xl"
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
