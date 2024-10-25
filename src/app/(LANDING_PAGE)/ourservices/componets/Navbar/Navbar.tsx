"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {  IoMailOutline, IoMenu } from "react-icons/io5";
import LogoImage from "/public/assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { BiPhone } from "react-icons/bi";

interface PopUpProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const Navbar = ({ showModal, setShowModal }: PopUpProps) => {
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

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes slide {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .gradient-text {
        background: linear-gradient(90deg, #ff4d4d, #ff9900, #ffff00, #33cc33, #3366ff, #9900cc);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient 8s ease infinite;
      }
      .slide-effect::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transform: translateX(-100%);
        animation: slide 3s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className={`fixed px-4 z-50 w-full bg-white transition-all duration-300 ${visible ? "top-0 shadow-md shadow-gray-200" : "-top-full"
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
            <div className="text-gray-600 font-semibold flex items-center">
              <BiPhone
                size={20}
                className="text-gray-600 mr-2 animate-bounce"
              />
              <Link href="tel:02047242493" className="hover:text-gray-900">
                (020) 4724-2493
              </Link>
            </div>
            <div className="text-gray-600 font-semibold hover:text-gray-900 flex items-center">
              <IoMailOutline className="h-5 w-5 mr-2 font-bold" />
              <span>info@vionsys.com</span>
            </div>
            {/* CTA Button */}
            <button
              onClick={() => setShowModal(!showModal)}
              className="cursor-pointer text-sm font-semibold border-2 rounded-md border-orange text-blue3 uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
            >
              <span>Contact Us Now!</span>
            </button>
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
        <div className="md:hidden px-2 pt-2 pb-3 space-y-3 sm:px-3 cursor-default">
          <div className="text-gray-600 font-semibold flex items-center space-x-2">
            <BiPhone size={20} className="animate-bounce" />
            <Link href="tel:02047242493" className="hover:text-gray-900">
              (020) 4724-2493
            </Link>
          </div>
          <div className="text-gray-600 font-semibold flex items-center space-x-2">
            <IoMailOutline className="h-5 w-5" />
            <span>info@vionsys.com</span>
          </div>
          {/* Mobile CTA Button */}
          <button
            onClick={() => setShowModal(!showModal)}
            className="cursor-pointer text-sm font-semibold border-2 rounded-md border-orange text-blue3 uppercase bg-white px-4 py-2 mt-4 w-full active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
          >
            Contact Us Now!
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
