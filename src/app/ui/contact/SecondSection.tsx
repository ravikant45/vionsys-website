import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Second = () => {
  return (
    <div className="mt-0 h-">
      <div className="flex justify-center p-4">
        <h2 className="justify-center text-2xl transform hover:scale-125 transition duration-300 ease-in-out">
          Thanks for your
          <span className="text-blue-700 text-2xl pl-1 transform hover:scale-125 transition duration-300 ease-in-out font-bold">
            Interest in Vionsys Services
          </span>
        </h2>
      </div>
      <div className="flex justify-center pt-4 pb-4">
        <h4 className="text-amber-500 text-2xl font-bold underline decoration-slice underline-offset-4 decoration-slate-700">
          LET'S GO WITH US
        </h4>
      </div>
      <div className="py-2 h-[80vh] flex justify-evenly">
        <div className="grid grid-cols-2 gap-10">
          <div className="relative bg-slate-200 text-center shadow-xl shadow-amber-600 rounded-[22px] max-w-sm p-4 sm:p-10 ">
            <h1 className="text-amber-600 text-xl font-bold pb-5">
              Office Address
            </h1>
            <p className="">
              6th floor office no. 504 Stellar Spaces , opposite Zensar it park
              Kharadi pune
            </p>
          </div>
          <div className="relative bg-slate-200 text-center  shadow-xl shadow-amber-600 rounded-[22px] max-w-sm p-4 sm:p-10">
            <h1 className="text-amber-600 text-xl font-bold pb-5">
              Email id/Contact
            </h1>
            <p> hr@vionsys.com<span className="flex justify-center flex-wrap">8766613742</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
