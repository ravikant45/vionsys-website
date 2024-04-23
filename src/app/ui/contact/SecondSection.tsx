import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Second = () => {
  return (
    <div className=" mt-0 h-fit">
      <div className="flex justify-center p-4">
          <h2 className="justify-center text-2xl">
            Thank you for your
            <span className="text-indigo-800 text-2xl pl-1">
              Interest in Vionsys Services
            </span>
          </h2>
        </div>
      <div className="flex justify-center relative m-0 ">
        <div className="flex-col-3 flex w-1/2 shadow-md shadow-slate-400 rounded-lg p-12 m-4 transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-100 divide-y-2 duration-300">
          <h2 className="lg:text-2xl sm:text-sm md:text font-semibold mb-4 items-center text-black">
            Office Address-
          </h2>
          <p className=" text-black ml-2 border-none lg:text-2xl sm:text-wrap md:text-wrap pt-2 pl-5 font-semibold underline-offset-4 underline decoration-slice">
            6th floor office no. 504 Stellar Spaces ,
            <span className="">opposite Zensar it park Kharadi pune</span>{" "}
          </p>
        </div>
        <div className=" flex-col-3 flex w-1/2 shadow-md  shadow-slate-400 rounded-lg  pt-4 pl-9  m-4 h-auto transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-100 divide-y-2 duration-300">
          <h2 className="lg:text-2xl md:text-base sm:text-sm font-semibold mb-4 content-center text-black">
            Email ID-{" "}
          </h2>
          <p className="ml-2 border-none p-8">
            <span className="lg:text-2xl md:text-base sm:text-sm sm:pr-9 flex content-center mt-6 text-black font-semibold underline underline-offset-4 decoration-slice">
              Hr@Vionsys.com{" "}
            </span>
            <span className="text-orange-600 font-semibold lg:text-3xl sm:text-sm md:text-2xl">
              Feel free to contact...
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;
