import React from 'react'
import side from "./assets/loginsidecover.png"
import login from "./assets/logojumpp.png"
import eye from "./assets/eyeicon.png"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen">
        <div className=" justify-center items-center m-4 hidden md:flex">
          <img src={side} alt="" className="w-full h-[95vh] " />
        </div>
        <div className="flex flex-col justify-center items-center md:px-16 px-4">
          <div className="flex items-center justify-center flex-col mb-8">
            <img src={login} alt="" className="w-52 h-24 mb-4" />
            <span className="font-[600] text-3xl">Welcome back!</span>
            <span className="text-sm text-gray-500 text-center">
              Ullamco nostrud veniam Lorem dolor excepteur veniam Lorem <br />
              fugiat ipsum
            </span>
          </div>

          <form action="" className="flex flex-col space-y-4 md:w-4/5 w-full">
            <label htmlFor="name" className="text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              placeholder="hi@example.com"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="*************"
                className="border border-gray-300 rounded-md p-2 w-full "
              />
              <img
                src={eye}
                alt=""
                className="h-6 w-6 absolute top-2 right-2 cursor-pointer"
              />
            </div>
            <Link
              type="submit"
              className="bg-[#000000] text-white py-2 px-4 rounded-md mt-4 hover:bg-white hover:text-black hover:border-2 hover:border-gray-200 text-center"
              to={"/Dashboard"}
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login