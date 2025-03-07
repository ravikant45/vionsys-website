"use client";
import useGetCaseStudy from "@/services/caseStudies/useGetCaseStudy";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Loading from "../../loading";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import { formatDate } from "@/utils/formatDate";
import useGetAllCaseStudies from "@/services/caseStudies/useGetAllCaseStudies";

interface caseStudy {
  id: string;
  image: string;
  title: string;
  createdAt?: string;
  description?: string;
  keyWord?: string;
}

const UserCaseStudies = () => {
  const { id } = useParams();
  const { data, isPending } = useGetCaseStudy(id);
  const { data: allCasestudies, isPending: allPending } =
    useGetAllCaseStudies();

  const caseStuides = (allCasestudies?.data || []).sort(
    (a: any, b: any) =>
      new Date(b?.createdAt)?.getTime() - new Date(a?.createdAt)?.getTime()
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const caseStudiesPerPage = 6;
  const totalCaseStudies = caseStuides.length;

  const nextCaseStudies = () => {
    if (currentIndex + caseStudiesPerPage < totalCaseStudies) {
      setCurrentIndex(currentIndex + caseStudiesPerPage);
    }
  };

  const prevCaseStudies = () => {
    if (currentIndex - caseStudiesPerPage >= 0) {
      setCurrentIndex(currentIndex - caseStudiesPerPage);
    }
  };

  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="overflow-hidden">
      <div className="py-14 md:pl-8 mt-3 px-4 flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="w-full mx-auto bg-white rounded-lg shadow-lg md:p-8 p-4">
          <div className="mb-4">
            <Link
              href="/caseStudies"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <IoMdArrowBack size={24} />
              <span className="ml-2 text-lg font-medium">Back</span>
            </Link>
          </div>
          <section className="flex flex-col md:justify-center md:items-center md:flex-row gap-8 bg-gray-100 p-4 rounded-md">
            <div className="flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="text-4xl font-bold text-gray-800 mb-4"
              >
                {data?.data.title}
              </motion.h1>
              {/* Industry Icon */}
              <div className="flex items-center gap-2 p-1 rounded-full text-xl font-medium">
                <BsBuildings
                  size={40}
                  className="bg-orange text-white p-1 rounded-md"
                />
                <span className="font-bold text-xl">Industry:</span> IT Service
              </div>

              {/* social media icons */}
              <div className="flex gap-4 py-4">
                <Link
                  aria-label="facebook link"
                  href="https://www.facebook.com/share/j5CS6REwZ5K4WJWz/?mibextid=qi2Omg "
                >
                  <FaSquareFacebook size={50} className="text-[#1877F2]" />
                </Link>
                <Link
                  aria-label="instagram link"
                  href="https://www.instagram.com/vionsys.it.solutions/?igsh=aXMyYzU1cjZ3M3Ux"
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="instagram-gradient"
                        x1="1"
                        y1="1"
                        x2="23"
                        y2="23"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stop-color="#feda75" />
                        <stop offset="25%" stop-color="#fa7e1e" />
                        <stop offset="50%" stop-color="#d62976" />
                        <stop offset="75%" stop-color="#962fbf" />
                        <stop offset="100%" stop-color="#4f5bd5" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M16 2H8C4.69 2 2 4.69 2 8V16C2 19.31 4.69 22 8 22H16C19.31 22 22 19.31 22 16V8C22 4.69 19.31 2 16 2ZM20 16C20 18.21 18.21 20 16 20H8C5.79 20 4 18.21 4 16V8C4 5.79 5.79 4 8 4H16C18.21 4 20 5.79 20 8V16ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15ZM17.5 6.5C16.67 6.5 16 7.17 16 8C16 8.83 16.67 9.5 17.5 9.5C18.33 9.5 19 8.83 19 8C19 7.17 18.33 6.5 17.5 6.5Z"
                      fill="url(#instagram-gradient)"
                    />
                  </svg>
                </Link>
                <Link
                  aria-label="linkedin link"
                  href="https://www.linkedin.com/company/vionsys-it-solutions-ind-pvt-ltd/?originalSubdomain=in"
                >
                  <FaLinkedin
                    size={50}
                    className="text-[#0077B5] text-center"
                  />
                </Link>
                <Link
                  aria-label="twitter link"
                  href="https://twitter.com/vionsysit"
                >
                  <FaSquareXTwitter size={48} />
                </Link>
              </div>
              {/* <p>Updated at : {formatDate(data.data.updatedAt)}</p> */}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="w-full lg:w-1/2 relative"
            >
              <Image
                src={data?.data.image}
                alt={data?.data.title}
                layout="responsive"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </section>

          <section
            className="prose prose-sm max-w-none text-gray-800 pt-6"
            dangerouslySetInnerHTML={{ __html: data?.data?.description }}
          />
        </div>
      </div>
      
      <div className="md:p-5 p-2">
        <span className="text-white bg-black font-semibold text-2xl px-5 py-1">
          Other Case Studies
        </span>
        <div className="border-t-4 border-gray-800"></div>
        <div className="grid md:grid-cols-3 mb-6 gap-5 md:p-4 p-2">
          {caseStuides?.map((caseStudy: caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 capitalize"
            >
              <div className="relative">
                <Link href={`/blogs/${caseStudy?.keyWord}`}>
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    width={1000}
                    height={1000}
                    className="rounded-t-lg w-full h-48 object-cover"
                  />
                </Link>
              </div>
              <div className="py-4 flex justify-between items-center md:px-4 px-2">
                <Link
                  href={`/caseStudies/${caseStudy?.keyWord}`}
                  className="text-black hover:text-blue-500 hover:underline md:text-xl text-lg font-semibold capitalize"
                >
                  {caseStudy?.title?.toLowerCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 m-4 justify-center">
          <button
            onClick={prevCaseStudies}
            disabled={currentIndex === 0}
            className={`text-gray-700 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            <IoArrowBackCircleSharp size={40} />
          </button>
          <button
            onClick={nextCaseStudies}
            disabled={currentIndex + caseStudiesPerPage >= totalCaseStudies}
            className={`text-gray-700 ${
              currentIndex + caseStudiesPerPage >= totalCaseStudies
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            <IoArrowForwardCircleSharp size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCaseStudies;
