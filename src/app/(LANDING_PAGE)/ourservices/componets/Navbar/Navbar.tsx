// Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoCallOutline,
  IoMailOutline,
  IoMenu,
  IoCallSharp,
} from "react-icons/io5";
import LogoImage from "/public/assets/logo.png";
import { RxCross2 } from "react-icons/rx";



const Navbar: React.FC = ( ) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed px-4 z-50 w-full bg-white transition-all duration-300 ${
        visible ? "top-0 shadow-md shadow-gray-200" : "-top-full"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo of the organization */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home link">
              <Image src={LogoImage} alt="Home-link" width={152} height={40} />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 cursor-default">
            {/* CTA Button */}
            <button
              
              className="cursor-pointer text-sm font-semibold border-2 rounded-md border-orange text-blue3 uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
            >
              <span>Contact Us Now!</span>
            </button>
            <div className="text-gray-600 font-semibold hover:text-gray-900 flex items-center">
              <IoMailOutline className="h-5 w-5 mr-2 font-bold" />
              <span>info@vionsys.com</span>
            </div>
            <div
              className="bg-orange text-white flex px-5 py-2 hover:bg-blue-700 rounded-md cursor-pointer"
            >
              <IoCallSharp className="w-5 h-5" />
              <span className="px-1 font-semibold">Submit Request</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <RxCross2 className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <IoMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden cursor-default">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div
              className="bg-orange text-white px-5 py-2 hover:bg-blue-700 rounded-md cursor-pointer"
            >
              <IoCallOutline className="w-5 h-5" />
              Submit Request
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
