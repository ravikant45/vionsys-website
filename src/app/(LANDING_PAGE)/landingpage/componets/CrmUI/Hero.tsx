import Image from "next/image";
import React, { useState } from "react";
import CrmHero from "../../../landingpage/images/Crm/Hero1.jpg";
import { Button, Form, Input } from "antd";
import { StaffingLandingPageTemplate } from "@/utils/StaffingLandingPageTemplate";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { countryCodes } from "@/utils/CountryCodes";

type HeroProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero: React.FC<HeroProps> = ({ showModal, setShowModal }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState<string>("");

  const handleSubmit = async (values: any) => {
    const formattedData = {
      ...values,
      phone: countryCode + " " + values.number,
    };

    console.log(formattedData);
    const template = StaffingLandingPageTemplate(formattedData);

    const updatedData = {
      formattedData,
      template,
    };

    setLoading(true);
    try {
      const response = await axios.post("/api/email", updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Thanks for connecting with us!");
      form.resetFields();
    } catch (error) {
      toast.error("Failed to send message");
    }
    setLoading(false);
  };

  return (
    <div className="pt-16">
      <div className="relative">
        <Image src={CrmHero} alt="" className="object-fill md:block hidden" />
      </div>
      <div className="md:absolute items-center left-1 h-full top-0 flex md:flex-row lg:flex-row flex-col w-full p-2 md:p-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="md:max-w-[50rem] w-full flex flex-col gap-2 space-y-3"
        >
          <h1 className="text-4xl md:text-6xl text-[#215CBC] max-w-[50rem] font-bold pt-[10%]">
            Customer Relationship Management (CRM)
          </h1>
          <p className="md:text-4xl text-2xl font-semibold text-orange">
            Take Your Business to New Heights with us.
          </p>
          <div>
            <h1 className="text-[#215CBC] text-2xl font-semibold md:m-4 m-1">
              Highlights:
            </h1>
            <ul className="list-[upper-roman] mb-2 font-medium text-xl px-4">
              <li className="mb-3">
                Streamlined processes for greater efficiency
              </li>
              <li className="mb-3">Enhance customer relationships</li>
              <li className="mb-3">Optimize overall business performance</li>
            </ul>
          </div>
          <div className="flex justify-start items-center pb-3">
            <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8c00_0%,#ffa500_50%,#1e90ff_100%)]"></span>
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium bg-[#F0F0EE] text-blue1 backdrop-blur-3xl gap-2 undefined"
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                Reach Out to Our Specialists Today
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="md:w-1/2 flex text-start justify-end items-center md:p-4 p-2 md:mt-6"
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="space-y-1 md:py-4 md:px-6 p-4 rounded-xl bg-white"
          >
            <div>
              <h1 className="text-center text-blue1 text-xl font-bold pt-2">
                Get the Right IT Talent for Your Projects!
              </h1>
              <p className="text-sm text-orange text-center pb-4">
                Our Team will reach out to you shortly!
              </p>
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
                { required: true, message: "Please enter your full name" },
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

            <Form.Item
              name="number"
              label={
                <span className="block text-sm font-medium text-black">
                  Phone Number
                </span>
              }
              rules={[
                { required: true, message: "Please enter your phone number!" },
                {
                  pattern: /^\d{10}$/,
                  message: "Phone number must be numeric and 10 digits long.",
                },
              ]}
            >
              <div className="flex gap-2">
                <select
                  className="border border-gray-300 rounded text-gray-900 mt-1 px-1 py-[10.5px] focus:outline-none"
                  value={countryCode} // Bind value to state
                  onChange={(e) => setCountryCode(e.target.value)} // Update state on change
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.code} {country.name}
                    </option>
                  ))}
                </select>
                <Input
                  placeholder="Enter Phone Number"
                  className="w-full mt-1 p-2 border text-black border-gray-300 rounded"
                  disabled={loading}
                />
              </div>
            </Form.Item>

            <Form.Item
              name="message"
              label={
                <span className="block text-sm font-medium text-black">
                  Your Message
                </span>
              }
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea
                placeholder="Leave a comment..."
                className="w-full mt-1 p-2 border text-black border-gray-300 rounded"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-center items-center">
                <Button
                  className="w-full bg-blue-600 border-2 border-[#3e3e3e] rounded-lg text-white px-4 mt-2 py-2 text-base hover:bg-blue-700 transition-all transform hover:scale-105"
                  // htmlType="submit"
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
                    "Submit"
                  )}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
