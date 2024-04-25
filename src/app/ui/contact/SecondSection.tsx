/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Second = () => {
  return (
    <div className="mt-0 w-full">
      <div className="flex justify-center md:p-4 bg-gray-200">
        <h2 className="text-2xl transform hover:scale-125 transition duration-300 ease-in-out">
          Thanks for your
          <span className="text-blue-700 text-2xl md:pl-1 md:align-center transform hover:scale-125 transition duration-300 ease-in-out font-bold">
            Interest in Vionsys Services
          </span>
        </h2>
      </div>
      <div className="md:py-2 flex justify-center md:flex-wrap md:pt-0">
        <img
          src="https://img.freepik.com/free-vector/white-technology-background_23-2148390327.jpg?t=st=1714029584~exp=1714033184~hmac=b94f61580fabfd448168591c056a35d5be9f70f2bd3a9957fbc69fef7591226f&w=900"
          alt=""
          className="md:w-full md:md-h-md lg:h-screen"
        ></img>
        <div className="absolute lg:w-full md:max-w-md flex justify-center">
        <h4 data-aos="zoom in" className="text-amber-500 text-2xl font-bold tracking-wider underline decoration-dotted underline-offset-4 decoration-slate-700 absolute md:mt-6 sm:w-60">
          LET'S GO WITH US
          </h4>
          </div>
        <div className="absolute lg:mt-32 md:mt-22 sm:mt-44 bg-white outline outline-blue-400 outline-offset-1 rounded-[22px] lg:w-[100vh] overflow-hidden">
          <div className="text-center mx-auto lg:w-full md:max-w-md md:p-4 lg:h-96 lg:mt-10">
            <h1 className="text-amber-600 text-xl font-bold  tracking-wide border-b-4">
              Office Address
            </h1>
            <div>
              <p className=" md:text-left text-wrap font-semibold transform hover:scale-105 transition duration-300 ease-in-out md:pt-2">
                Stellar Spaces Office no.504 6th floor,
                Opposite Zensar IT park
                Kharadi pune.
              </p>
              <h1 className="lg:pt-3 text-amber-600 text-xl font-bold tracking-wider border-b-4">
                Contact
              </h1>
              <p className=" lg:pt-3 font-semibold transform hover:scale-125 transition duration-300 ease-in-out">
                hr@vionsys.com
              </p>
              <p className=" lg: pt-2 font-semibold transform hover:scale-125 transition duration-300 ease-in-out">
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
