/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import mail from "../../images/ITStaffing/SectorIcons/mail.png";
import { Form, Input, Select } from "antd";
import Contact from "@/app/(LANDING_PAGE)/ourservices/images/WebDevelopment/Contact4.png";
import { Button } from "@/components/ui/button";
import { country } from "@/utils/CountryCodes";
import Link from "next/link";
import LinkedIn from "../../../../../../public/assets/socialicons/linkedin.png";
import Instagram from "../../../../../../public/assets/socialicons/instagram.png";
import Facebook from "../../../../../../public/assets/socialicons/facebook.png";
import Twitter from "../../../../../../public/assets/socialicons/Twitter4.png";
import { StaffingLandingPageTemplate } from "@/utils/StaffingLandingPageTemplate";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  countryCode: string;
  number: string;
  email: string;
  message: string;
};

export default function ContactUs() {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const [countryCode, setCountryCode] = useState<string>("");

  const handleCountryChange = (value: string) => {
    setCountryCode(value);
  };

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
    const formattedData = {
      ...values,
      countryCode: values.countryCode,
    };

    const template = StaffingLandingPageTemplate(formattedData);
    const sendTo = ["info@vionsys.com", "pawandolas@vionsys.com"];
    const updatedData = {
      formattedData,
      template,
      sendTo,
    };
    console.log("formated", formattedData);

    // Print form values to the console
    setLoading(true);
    try {
      const response = await axios.post("/api/email", updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      form.resetFields();
      router.push("/thank-you");
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <>
      <div className="w-[100%] md:h-full bg-white grid md:grid-cols-3">
        <div className="relative w-full flex md:justify-between md:items-center col-span-2">
          {/* Image Section */}
          <Image
            src={Contact}
            className="rounded-xl md:block hidden object-cover md:h-full"
            alt="Contact Image"
          />

          {/* Form section */}
          <div className=" md:h-auto w-full md:pr-6  rounded-2xl border-r-2   border-slate-200">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="text-2xl text-orange font-extrabold text-center leading-tight text-blue950 md:text-3xl py-4"
            >
              Get In Touch
            </motion.h2>
            <div className="flex md:flex-row gap-6 flex-col md:justify-evenly justify-center items-center">
              <div className="flex py-1">
                <Image src={mail} alt="call icon" className="h-5 w-5" />
                <span className="px-2 text-xs font-semibold flex items-center justify-center">
                  info@vionsys.com
                </span>
              </div>
            </div>
            <div className="h-[1.5px] w-full bg-black"></div>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="p-4 "
            >
              <Form.Item
                className="w-full"
                name="name"
                label={<span className="font-semibold">Full Name</span>}
                rules={[
                  { required: true, message: "Please enter your full name" },
                ]}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }} //X:100
                  whileInView={{ opacity: 1, scale: 1 }} //y:100
                  transition={{
                    delay: 0.2,
                    scale: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                >
                  <Input
                    type="text"
                    placeholder="Enter Your Name"
                    id="name"
                    name="name"
                    className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </motion.div>
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className="font-semibold">Email Address</span>}
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                    type: "email",
                  },
                ]}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }} //X:100
                  whileInView={{ opacity: 1, scale: 1 }} //y:100
                  transition={{
                    delay: 0.2,
                    scale: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                >
                  <Input
                    type="text"
                    placeholder="Enter Email Address"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </motion.div>
              </Form.Item>

              <div className="flex gap-x-2">
                <Form.Item
                  name="countryCode"
                  label={<span className="font-semibold"> Country</span>}
                  rules={[
                    { required: true, message: "Please select your country!" },
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
                            className="mr-2"
                          />
                          {c.code}
                        </div>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="number"
                  label={<span className="font-semibold">Phone Number</span>}
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

              <Form.Item
                name="message"
                label={
                  <span className="block text-sm font-semibold">
                    Your Message
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please enter your message!",
                  },
                ]}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }} //X:100
                  whileInView={{ opacity: 1, scale: 1 }} //y:100
                  transition={{
                    delay: 0.2,
                    scale: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                >
                  <Input.TextArea
                    placeholder="Leave a comment..."
                    id="message"
                    name="message"
                    className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </motion.div>
              </Form.Item>

              <Form.Item>
                <div className="flex justify-center w-full items-center">
                  <Button
                    disabled={loading}
                    className="text-lg w-full text-center"
                  >
                    {loading && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
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
                    )}
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* Right section */}
        <div className=" flex flex-col w-screen md:w-[100%] md:w- justify-center items-center gap-4 font-extrabold text-MainHeading ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
            }}
            className="text-center"
          >
            Let’s Get Started Today!
          </motion.div>
          <div className="font-bold text-lg px-2 text-slate-500 text-center">
            Our team of professionals is ready to bring your ideas to reality.
            whether you need custom software development, mobile app solutions,
            salesforce or cloud-based services, it staffing, crm and more, we’re
            here to help.
          </div>
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
            <Link
              aria-label="facebook link"
              href="https://www.facebook.com/share/j5CS6REwZ5K4WJWz/?mibextid=qi2Omg "
            >
              <Image
                src={Facebook}
                alt="Facebook logo"
                quality={100}
                width={40}
                height={40}
              />
            </Link>
            <Link
              aria-label="instagram link"
              href="https://www.instagram.com/vionsys.it.solutions/?igsh=aXMyYzU1cjZ3M3Ux"
            >
              <Image
                src={Instagram}
                alt="Instagram logo"
                quality={100}
                width={40}
                height={40}
              />
            </Link>
            <Link
              aria-label="linkedin link"
              href="https://www.linkedin.com/company/vionsys-it-solutions-ind-pvt-ltd/?originalSubdomain=in"
            >
              <Image
                src={LinkedIn}
                alt="LinkedIn logo"
                quality={100}
                width={40}
                height={40}
              />
            </Link>
            <Link
              aria-label="twitter link"
              href="https://twitter.com/vionsysit"
            >
              <Image
                src={Twitter}
                alt="Twitter logo"
                quality={100}
                width={40}
                height={40}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
