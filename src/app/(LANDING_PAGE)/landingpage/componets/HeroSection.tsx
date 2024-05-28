import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "/public/assets/logo.png";

const HeroSection = () => {
  return (
    <main>
      <div className=" w-full md:min-w-fullp-6 md:p-10">
        <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
          <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
          <div className="relative bg-white shadow-lg sm:rounded-3xl">
            <div className=" px-4 md:px-20 py-6">
              {/* navbar  */}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="flex md:items-center justify-center text-3xl font-bold text-true-gray-800">
                    <div className="px-4 py-2">
                      <Link href="/">
                        <Image src={LogoImage} alt="" className="w-[152px]" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <Link
                    href={"/contact"}
                    className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href={"/about"}
                    className="px-6 py-3 rounded-3xl font-medium text-orange outline-none focus:outline-none shadow-md from-true-gray-900 transition duration-200 ease-in-out"
                  >
                    About Us
                  </Link>
                </div>
              </div>
              {/* <!-- /nav -->

          <!-- hero section --> */}
              <div className=" w-full mt-12 ">
                <div className="text-xl md:text-5xl font-semibold text-gray-900 leading-none">
                  Web Design & Web Development Company
                </div>
                <div className="mt-6 w-full text-lg md:text-xl font-light text-true-gray-500 antialiased">
                  Your one-stop destination for top-notch web design &
                  development services.
                </div>
                <div className="mt-6 w-full text-lg md:text-xl font-light text-true-gray-500 antialiased">
                  You Think, We Make It!
                </div>
                <Link
                  href={"/"}
                  className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center my-6 items-center font-extrabold"
                >
                  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                  <p className="z-10">Discover More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
