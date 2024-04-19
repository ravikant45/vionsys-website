import React from "react";
import Image from "next/image";
import Training from "./training";
import Jobs from "./jobs";
const CareerComponent = () => {
  return (
    <div className="  w-[100vw] h-[100vh] ">
      <div className="relative w-full h-full">
        <img
          className="w-full h-full object-cover bg-no-repeat"
          src="https://img.freepik.com/free-photo/business-people-casual-meeting_53876-101882.jpg?t=st=1713510542~exp=1713514142~hmac=fef28ed03b741c43607fcaf862aacddc43828e21ad0a19766fe1c71edcb03856&w=1060"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 pt-10">
          <h1 className="text-6xl font-bold py-6">
            {" "}
            Build your career at Vionsys
          </h1>
          <p className="text-xl w-1/3">
            Discover limitless opportunities at Vionys.Join a vibrant team where
            innovation, growth and collaboration shine. Start your journey to a
            brighter career today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerComponent;
