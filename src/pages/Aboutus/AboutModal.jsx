import React from 'react'

const AboutModal = ({onClose}) => {
  return (
    <>
      <div className="fixed inset-0 bg-[#0000007f] flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-[550px] lg:w-[650px]">
          <h2 className="text-xl font-semibold mb-4 p-4 text-center border-b-[1px] border-[#E6E7E7]">
            Add About Us
          </h2>
          <form className="p-4">
            <label htmlFor="language" className="font-medium text-[16px] ">
              Language
            </label>
            <select
              id="language"
              className="w-full border border-[#E6E7E7] rounded-lg px-2 py-2 text-[#ADAFB9] my-2"
            >
              <option value="english">English</option>
              <option value="urdu">Urdu</option>
              <option value="punjabi">Punjabi</option>
            </select>
            <label htmlFor="add" className="font-medium text-[16px]">
              Add About Us
            </label>
            <textarea
              id="add"
              className="w-full border border-[#E6E7E7] rounded-lg px-2 py-2 text-[#ADAFB9] mt-2"
              rows="4"
            />
            <div className="flex justify-center items-center  border-t-[1px] border-[#E6E7E7]">
              <button
                type="button"
                className="bg-[#FFFFFF] text-black rounded-lg px-4 py-3 mt-4 mr-2 border-[1px] border-[#E6E7E9] inset-shadow-sm w-40 font-medium text-lg cursor-pointer"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" text-black rounded-lg px-4 py-3 mt-4 inset-shadow-sm w-40 bg-[#88FF55] text-lg font-medium cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AboutModal