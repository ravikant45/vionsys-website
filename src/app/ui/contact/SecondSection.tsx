/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Second = () => {
  return (
    <div
      className="mt-0 h-auto bg-cover bg-no-repeat md:block"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/white-technology-background_23-2148390327.jpg?t=st=1714029584~exp=1714033184~hmac=b94f61580fabfd448168591c056a35d5be9f70f2bd3a9957fbc69fef7591226f&w=900')",
      }}
    >
      <div className="flex justify-center bg-gray-200 pt-2">
        <h2 className="md:text-3xl text-center transform hover:scale-125 transition duration-300 ease-in-out">
          Thanks for your
          <span className="text-blue-700 md:text-3xl md:pl-1 md:align-center transform hover:scale-125 transition duration-300 ease-in-out font-bold">
            Interest in Vionsys Services
          </span>
          <h2
            className="flex justify-center text-amber-600 pt-5 font-medium  border-amber-600 border-b-2
          "
          >
            Let's Go With Us
          </h2>
        </h2>
      </div>

      <div className="flex justify-center p-2 ">
        <div className="p-10 sm:m-20 w-auto  flex justify-center  bg-white outline outline-blue-400 outline-offset-1 rounded-[22px] lg:w-[50vw] px-2">
          <div className="text-center mx-auto lg:w-full md:max-w-md md:p-4">
            <h1 className="text-blue-600 text-xl font-bold  tracking-wide border-b-4 border-neutral-900">
              Office Address
            </h1>
            <div>
              <p className=" md:text-left text-wrap font-medium transform hover:scale-110 transition duration-300 ease-in-out md:pt-2">
                Stellar Spaces Office no.504 6th floor, Opposite Zensar IT park
                Kharadi pune.
              </p>
              <h1 className="lg:pt-3 text-blue-600 text-xl font-bold tracking-wider border-b-4 border-neutral-900">
                Contact
              </h1>
              <p className=" lg:pt-3 font-medium transform hover:scale-125 transition duration-300 ease-in-out">
                hr@vionsys.com
              </p>
              <p className=" lg: pt-2 font-medium transform hover:scale-125 transition duration-300 ease-in-out">
                8766613742
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
