"use client";
import React from "react";
import Link from "next/link";
import LinkedIn from "../../../../public/assets/socialicons/linkedin.png";
import Instagram from "../../../../public/assets/socialicons/instagram.png";
import Facebook from "../../../../public/assets/socialicons/facebook.png";
import Twitter from "../../../../public/assets/socialicons/Twitter4.png";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoImage from "/public/assets/logo.png";

const industries = [
  "IT Digital Transformation",
  "Banking",
  "Pharmaceutical",
  "Education",
  "Insurance",
  "E-Commerce",
  "Construction",
  "Healthcare",
  "Field Services",
  "Finance"
];
const Footer = () => {
  const columnStyle: React.CSSProperties = {
    textAlign: "left",
    marginBottom: "1rem",
  };
  return (
    <footer className="px-4 w-[100vw] pt-4 overflow-hidden bg-blue3 text-white z-10">
      {/* Footer Content */}
      <div className="bg-transparent overflow-hidden">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-2">
            {/* About Us */}
            <div className="text-center md:text-left col-span-2 flex flex-col gap-2">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                }}
                className=" text-start text-2xl text-white font-bold"
              >
                {/* Logo */}
                {<div className="text-center md:text-left flex justify-left items-center ">
                  <Image
                    src={LogoImage}
                    alt=""
                    className="bg-white text-center object-contain rounded-md px-4 h-20 w-64"
                  />
                </div>}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                }}
                className="text-base text-start leading-6"
              >
                Vionsys IT Solutions India Pvt. Ltd. is a comprehensive IT
                company offering end-to-end technology solutions. Specializing
                in software development, network infrastructure, cybersecurity,
                cloud services and IT consulting, we enable businesses to excel
                in the digital age.{" "}
              </motion.p>

            </div>

            {/* Our Services */}
            <div className=" md:text-left flex flex-col col-span-2 gap-2">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
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
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                }}
                className="grid md:grid-cols-2 grid-cols-1 gap-2 text-base"
              >
                <Link href="/services/software-development">
                  Software Development
                </Link>
                <Link href="/services/web-development">Web Development</Link>

                <Link href="/services/salesforce">Salesforce</Link>
                <Link href="/services/devOps">DevOps Solutions</Link>
                <Link href="/services/cloud-computing">Cloud Computing</Link>
                <Link href="/services/crm">CRM</Link>
                <Link href="/services/digital-marketing">Digital Marketing</Link>
                <Link href="/services/bi-analytics">BI and Analytics</Link>
                <Link href="/services/testing">Testing and QA</Link>
                <Link href="/services/product-development">
                  Product Development
                </Link>
                <Link href="/services/big-data-analytics">
                  Big Data Analytics
                </Link>
                <Link href="/services/ML-AI">
                  Machine Learning and AI
                </Link>
              </motion.div>
              {/* social media icons */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                }}
                className="flex gap-6 md:justify-center py-2"
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
            {/* industries */}
            <div className=" md:text-left flex flex-col col-span-2 gap-2">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                }}
                className="md:text-2xl text-xl text-start text-white font-bold mb-2"
              >
                Industries
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                }}
              >
                <ul className="grid md:grid-cols-2 grid-cols-1 gap-2 text-base">
                  {industries.map((industry, index) => (
                    <li key={index}>{industry}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center  relative flex justify-center items-center  ">
        <p className=" text-slate-200">
          {" "}
          Copyright &#169; 2024 Vionsys IT Solutions India Pvt. Ltd . - All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
