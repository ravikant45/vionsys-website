import {
  IndustriesLinks,
  QuickLinks,
  ServicesLinks,
} from "@/app/ui/navbar/Navlinks";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2c3340] w-screen h-auto">
      <div className="w-full h-full grid lg:grid-cols-4 px-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  py-6">
        {/* Our Services Section */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-[24px] font-bold">Our Services</h4>
          <ul className="flex flex-col gap-2 ml-[7px]">
            {ServicesLinks.map((link) => (
              <li key={link.title} className=" text-[14px]">
                <Link
                  className="text-gray-300"
                  href={link.href}
                  aria-label={link.ariaLabel}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Industries */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-[24px] font-bold">Industries</h4>
          <ul className="flex flex-col gap-2 ml-[7px]">
            {IndustriesLinks.map((link) => (
              <li key={link.title} className="text-white">
                <Link
                  className="text-gray-300 text-[14px]"
                  href={link.href}
                  aria-label={link.ariaLabel}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-[24px] font-bold">Quick Links</h4>
          <ul className="flex flex-col gap-2 ml-[7px]">
            {QuickLinks.map((link) => (
              <li key={link.title} className="text-white">
                <Link
                  className="text-gray-300 text-[14px]"
                  href={link.href}
                  aria-label={link.ariaLabel}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Us */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-[24px] font-bold">Contact</h4>
          <div className="flex flex-col justify-between h-full">
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2">
                <FaMapMarkerAlt className="h-4 w-4 text-gray-300 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-[14px]">
                  <p>
                    Vionsys IT Solutions India Pvt. Ltd. Office No. 502, World
                    Trade Center, Tower 1, Kharadi, Pune, India - 411014
                  </p>
                </div>
              </li>
              <li className="flex gap-2">
                <MdEmail className="h-4 w-4 text-gray-300 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-[14px]">
                  <p>info@vionsys.com</p>
                </div>
              </li>
            </ul>
            <div className="flex justify-start w-full gap-6 ">
              <Link
                target="_blank"
                aria-label="linkedin link"
                href="https://www.linkedin.com/company/vionsys-it-solutions-ind-pvt-ltd/?originalSubdomain=in"
                className="auto"
              >
                <FaLinkedin
                  size={28}
                  color="white"
                  className="hover:scale-110 duration-300 ease-in-out"
                />
              </Link>
              <Link
                target="_blank"
                aria-label="instagram link"
                href="https://www.instagram.com/vionsys.it.solutions/?igsh=aXMyYzU1cjZ3M3Ux"
                className="auto"
              >
                <FaInstagram
                  size={28}
                  color="white"
                  className="hover:scale-110 duration-300 ease-in-out"
                />
              </Link>
              <Link
                target="_blank"
                aria-label="facebook link"
                href="https://www.facebook.com/share/j5CS6REwZ5K4WJWz/?mibextid=qi2Omg"
                className="auto"
              >
                <FaFacebook
                  size={28}
                  color="white"
                  className="hover:scale-110 duration-300 ease-in-out"
                />
              </Link>
              <Link
                target="_blank"
                aria-label="twitter link"
                href="https://twitter.com/vionsysit"
                className="auto"
              >
                <FaSquareXTwitter
                  size={28}
                  color="white"
                  className="hover:scale-110 duration-300 ease-in-out"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Copyright */}
      <div className="flex justify-center text-white text-[14px] py-[10px]">
        Copyright &copy; 2025 Vionsys IT Solutions India Pvt. Ltd . - All Rights
        Reserved |{" "}
        <Link href="./privacy-policy" className="px-1">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
