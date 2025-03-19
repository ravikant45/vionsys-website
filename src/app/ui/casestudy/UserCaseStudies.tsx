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
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import useGetAllCaseStudies from "@/services/caseStudies/useGetAllCaseStudies";
import { Form, Input, Select } from "antd";
import { country, countryCodes } from "@/utils/CountryCodes";
import useSendCaseStudy from "@/services/caseStudies/useSendCaseStudy";

interface caseStudy {
  id: string;
  image: string;
  imageMid: string;
  title: string;
  industry: string;
  caseStudyFile: string;
  createdAt?: string;
  description?: string;
  keyWord?: string;
}

const UserCaseStudies = () => {
  const { id } = useParams();
  const { data, isPending } = useGetCaseStudy(id);
  const { data: allCasestudies, isPending: allPending } =
    useGetAllCaseStudies();
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState<string>("+1");
  const { mutate, isPending: caseStudyPending } = useSendCaseStudy();
  const [loading, setLoading] = useState(false);

  const handleCountryChange = (value: string) => {
    setCountryCode(value);
  };

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
  const filterOption = (
    input: string,
    option?: { value: string; children: React.ReactNode }
  ) => {
    const childrenAsString = option?.children?.toString().toLowerCase() || "";
    return (
      (childrenAsString.includes(input.toLowerCase()) ||
        option?.value.toLowerCase().includes(input.toLowerCase())) ??
      false
    );
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const { name, email, countryCode, number } = values;

    const formData = {
      fullName: name,
      email,
      mobileNumber: `${countryCode} ${number}`, // Combining country code and phone number
    };

    mutate(formData, {
      onSuccess: async () => {
        // Download PDF file if available
        // Auto-download logic
        if (data?.data?.caseStudyFile) {
          try {
            const response = await fetch(data.data.caseStudyFile);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
              "download",
              `case_study_${data?.data?.title}.pdf`
            ); // Custom filename

            document.body.appendChild(link);
            link.click();

            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          } catch (error) {
            console.error("Download failed:", error);
          }
        }
        form.resetFields();
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
      },
    });
  };

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
          <section className="flex flex-col md:justify-center md:flex-row gap-8 bg-gray-100 p-4 rounded-md h-full">
            <div className="flex flex-col justify-center h-[100] pl-3">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="md:text-4xl text-2xl font-bold top-0 text-gray-800 mb-4 text-center flex items-center h-full"
              >
                {data?.data.title}
              </motion.h1>

              <div className="flex flex-col md:flex-row md:justify-between justify-start md:items-end h-full gap-2">
                {/* Industry Icon */}
                <div className="flex items-center gap-2 p-1 text-xl font-medium">
                  <BsBuildings
                    size={40}
                    className="bg-blue-500 hover:bg-black text-white p-1 rounded-md"
                  />
                  <span className="font-bold text-xl">Industry:</span>{" "}
                  {data?.data.industry}
                </div>

                {/* social media icons */}
                <div className="flex gap-4">
                  <Link
                    aria-label="facebook link"
                    href="https://www.facebook.com/share/j5CS6REwZ5K4WJWz/?mibextid=qi2Omg"
                    target="_blank"
                  >
                    <FaFacebook
                      size={40}
                      className="text-blue-500 hover:text-black bg-white rounded-full transition-all transform hover:scale-105"
                    />
                  </Link>
                  <Link
                    aria-label="instagram link"
                    href="https://www.instagram.com/vionsys.it.solutions/?igsh=aXMyYzU1cjZ3M3Ux"
                    target="_blank"
                  >
                    <FaInstagram
                      size={40}
                      className="text-white bg-blue-500 hover:bg-black rounded-full p-1 transition-all transform hover:scale-105"
                    />
                  </Link>
                  <Link
                    aria-label="linkedin link"
                    href="https://www.linkedin.com/company/vionsys-it-solutions-ind-pvt-ltd/?originalSubdomain=in"
                    target="_blank"
                  >
                    <FaLinkedinIn
                      size={40}
                      className="text-white bg-blue-500 hover:bg-black rounded-full transition-all transform hover:scale-105 p-1 text-center"
                    />
                  </Link>
                  <Link
                    aria-label="twitter link"
                    href="https://twitter.com/vionsysit"
                    target="_blank"
                  >
                    <RiTwitterXFill
                      size={40}
                      className="rounded-full text-white bg-blue-500 hover:bg-black p-1 transition-all transform hover:scale-105"
                    />
                  </Link>
                </div>
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
              className="w-full lg:w-1/2 relative pr-3"
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

          <section className="flex md:flex-row flex-col-reverse my-4">
            <div className="flex md:flex-col flex-col">
              <div className="md:flex-1/2 w-full">
                <Image
                  src={data?.data.imageMid}
                  alt={data?.data.title + " mid image"}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
              {/* download case study */}
              <div className="flex justify-center items-center">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  className="space-y-1 md:py-4 md:px-6 p-4 rounded-xl bg-white border m-4 md:w-2/3 w-full"
                >
                  <div>
                    <h2 className="text-center text-blue1 text-xl font-bold pt-2">
                      Download Case Study
                    </h2>
                  </div>

                  <Form.Item
                    className="w-full"
                    name="name"
                    label={
                      <span className="block text-sm font-medium text-black">
                        Full Name
                      </span>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter Your Name"
                      className="w-full mt-1 p-2 border text-black border-gray-300 rounded"
                      disabled={loading}
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label={
                      <span className="block text-sm font-medium text-black">
                        Email Address
                      </span>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email!",
                        type: "email",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter Email Address"
                      className="w-full mt-1 p-2 border text-black border-gray-300 rounded"
                      disabled={loading}
                    />
                  </Form.Item>

                  <div className="flex gap-x-2 h-16">
                    <Form.Item
                      name="countryCode"
                      label={<span className="font-semibold">Country</span>}
                      rules={[
                        {
                          required: true,
                          message: "Please select your country!",
                        },
                      ]}
                      initialValue="+1"
                      className="w-36"
                    >
                      <Select
                        showSearch
                        placeholder="Country"
                        optionFilterProp="children"
                        onChange={handleCountryChange}
                        filterOption={filterOption}
                      >
                        {country.map((c, index) => (
                          <Select.Option key={index} value={c.code}>
                            <div className="flex items-center">
                              <Image
                                src={c.image}
                                width={20}
                                height={20}
                                alt={`Flag of ${c.code}`}
                              />
                              <span className="ml-2">{c.code}</span>
                            </div>
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name="number"
                      label={
                        <span className="font-semibold">Phone Number</span>
                      }
                      rules={[
                        {
                          required: true,
                          message: "Please enter your phone number!",
                        },
                        {
                          pattern: /^\d{8,15}$/,
                          message: "Please enter valid phone number",
                        },
                      ]}
                      className="w-full"
                    >
                      <Input
                        placeholder="Enter Phone Number"
                        maxLength={15}
                        minLength={8}
                      />
                    </Form.Item>
                  </div>

                  <Form.Item>
                    <div className="flex justify-center items-center">
                      <Button
                        className="w-full bg-blue-600 border-2 border-[#3e3e3e] rounded-lg text-white px-4 mt-2 py-2 text-base hover:bg-blue-700 transition-all transform hover:scale-105"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? (
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.697 0-5.074-1.072-6.834-2.709l2.834-2.833zm8-10.582A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4c2.697 0 5.074 1.072 6.834 2.709l-2.834 2.833z"
                            ></path>
                          </svg>
                        ) : (
                          "Download"
                        )}
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div
              className="prose prose-sm max-w-none text-gray-800 md:w-1/2 w-full h-full flex-2/3 leading-tight whitespace-normal"
              dangerouslySetInnerHTML={{ __html: data?.data?.description }}
            />
          </section>
        </div>
      </div>

      {/* Recent Case Studies Section */}
      <div className="md:p-5 p-2">
        <span className="text-white bg-black font-semibold text-2xl px-5 py-1">
          Recent Case Studies
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
