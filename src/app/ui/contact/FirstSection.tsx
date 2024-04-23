import React from "react";
import Image from "next/image";
const Conts = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] pb-0">
        <div className="w-full h-full relative">
          <img
            className="w-full h-full  object-cover bg-no-repeat"
            src="https://img.freepik.com/free-photo/easy-wireless-yechnology-payment_23-2149105216.jpg?t=st=1713522166~exp=1713525766~hmac=55a980a4e5020914f9d131f46c393d47c65dc10e07cccaad1ac0249612117b8f&w=900"
            alt=""
          />
          <div className="absolute top-0 left-0 right-20  w-full h-full flex items-center">
            <h1 className="absolute pl-5 text-white text-6xl font-bold whitespace-normal transition duration-500 slide -in-out lg:hover:scale-100 hover:text-yellow-300 md:hover:scale-100 sm:hover:scale-75">
              Think Beyond <span className="flex">With Vionsys</span>
              <span className="flex dark:text-white text-4xl font-semibold">
                Redefining IT Solutions. . .
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conts;
