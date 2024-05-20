"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import LinkedIn from "../../../../public/assets/socialicons/linkedin.png";
import Instagram from "../../../../public/assets/socialicons/instagram.png";
import Facebook from "../../../../public/assets/socialicons/facebook.png";
import Twitter from "../../../../public/assets/socialicons/Twitter4.png";
import Image from "next/image";
import { motion } from "framer-motion";
// import LogoImage from "/public/assets/logo.png";

const Footer = () => {
  const columnStyle: React.CSSProperties = {
    textAlign: "left",
    marginBottom: "1rem",
  };
  return (
    <footer className="px-4 pt-6 w-[100vw] overflow-hidden bg-blue5 text-white z-10">
      {/* Footer Content */}
      <div className="bg-transparent py-5 overflow-hidden">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {/* Logo */}
            {/* <div className="text-center md:text-left flex justify-center items-center ">
              <Image
                src={LogoImage}
                alt=""
                className="bg-white rounded-md p-2"
              />
            </div> */}

            {/* About Us */}
            <div className="text-center md:text-left col-span-2 flex flex-col gap-2">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: {type:'spring', stiffness: 30},
                  opacity: {duration: 0.6},
                  ease: "easeIn",
                 }}
                className=" text-start text-2xl text-white font-bold mb-2"
              >
                {" "}
                <Link href="/about">About Us</Link>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: {type:'spring', stiffness: 30},
                  opacity: {duration: 0.6},
                  ease: "easeIn",
                 }}
                className="text-base md:text-start text-justify"
              >
                Vionsys IT Solutions India Pvt. Ltd. is a comprehensive IT
                company offering end-to-end technology solutions. Specializing in software development, network infrastructure, cybersecurity, cloud services and IT consulting, we enable businesses to excel in the digital age.{" "}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: {type:'spring', stiffness: 30},
                  opacity: {duration: 0.6},
                  ease: "easeIn",
                 }}
                className="flex gap-4 md:justify-start justify-center py-6"
              >
                <Link href="https://www.facebook.com/share/j5CS6REwZ5K4WJWz/?mibextid=qi2Omg ">
                  <Image
                    src={Facebook}
                    alt=""
                    quality={100}
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="https://www.instagram.com/vionsys.it.solutions/?igsh=aXMyYzU1cjZ3M3Ux">
                  <Image
                    src={Instagram}
                    alt=""
                    quality={100}
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/vionsys-it-solutions-ind-pvt-ltd/?originalSubdomain=in">
                  <Image
                    src={LinkedIn}
                    alt=""
                    quality={100}
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="https://twitter.com/vionsysit">
                  <Image
                    src={Twitter}
                    alt=""
                    quality={100}
                    width={40}
                    height={40}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Our Services */}
            <div className=" md:text-left flex flex-col col-span-2 gap-2">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: {type:'spring', stiffness: 30},
                  opacity: {duration: 0.6},
                  ease: "easeIn",
                 }}
                className="md:text-2xl text-xl text-start text-white font-bold mb-2"
              >
                Our Services
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: {type:'spring', stiffness: 30},
                  opacity: {duration: 0.6},
                  ease: "easeIn",
                 }}
                className="grid md:grid-cols-2 grid-cols-1 gap-2 text-base"
              >
                <Link href="/services/softwareDevelopment">
                  Software Development
                </Link>
                <Link href="/services/webDevelopment">Web Development</Link>

                <Link href="/services/salesforce">Salesforce</Link>
                <Link href="/services/devOps">DevOps Solutions</Link>
                <Link href="/services/cloudComputing">Cloud Computing</Link>
                <Link href="/services/crm">CRM</Link>
                <Link href="/services/digitalMarketing">Digital Marketing</Link>
                <Link href="/services/biAnalytics">BI and Analytics</Link>
                <Link href="/services/testing">Testing and QA</Link>
                <Link href="/services/productDevelopment">Product Development</Link>
                <Link href="/services/bigDataAnalytics">Big Data Analytics</Link>
                <Link href="/services/machineLearningAI">Machine Learning and AI</Link>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className=" text-start col-span-2 flex flex-col  gap-2">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: {type:'spring', stiffness: 30},
                  opacity: {duration: 0.6},
                  ease: "easeIn",
                 }}
                className=" text-start text-2xl text-white font-bold mb-2"
              >
                <Link href="/contact">Contact Info</Link>
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: {type:'spring', stiffness: 30},
                  opacity: {duration: 0.6},
                  ease: "easeIn",
                 }}
                className="flex flex-col justify-center gap-2 text-base"
              >
                <div className="flex  gap-3">
                  <div>
                    <FiPhoneCall size={19} className="mr-2" />
                  </div>
                  <span> Phone: 8766613742</span>
                </div>
                <div className="flex gap-3">
                  <div>
                    {" "}
                    <MdOutlineMail size={22} className="mr-2" />
                  </div>
                  <span> Email: hr@vionsys.com</span>
                </div>
                <div className="flex  gap-3">
                  <div>
                    <GrLocation className="w-6 h-6 flex-shrink-0 mr-2" />
                  </div>
                  <span>
                    Address: 6th floor office no.504 Stellar Spaces, opposite
                    Zensar IT Park, Kharadi, Pune - 411014.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center  relative flex justify-center items-center pt-4 ">
        <p className=" text-slate-200">
          {" "}
          Copyright &#169; 2023 Vionsys IT Solutions India Pvt. Ltd . - All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
