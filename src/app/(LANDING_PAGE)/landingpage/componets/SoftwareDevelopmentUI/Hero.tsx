/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import sdHero1 from "../../images/SoftwareDevelopment/sdHero1.jpg";
import sdHero2 from "../../images/SoftwareDevelopment/sdHero2.jpg";
import sdHero3 from "../../images/SoftwareDevelopment/sdHero3.jpg";
import axios from "axios";
import toast from "react-hot-toast";
import { countryCodes } from "@/utils/CountryCodes";
import { Button, Form, Input } from "antd";
import { StaffingLandingPageTemplate } from "@/utils/StaffingLandingPageTemplate";

type HeroProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type Inputs = {
  name: string;
  phone: {
    countryCode: string;
    number: string;
  };
  email: string;
  message: string;
};

const Hero: React.FC<HeroProps> = ({ showModal, setShowModal }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState<string>("");
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

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
    <section className="relative h-full md:w-[100vw]">
      {/* Embla Carousel */}
      <div className="embla w-full h-full absolute top-0 left-0" ref={emblaRef}>
        <div className="embla__container w-full h-full">
          {/* Slide 1 */}
          <div className="embla__slide w-full h-full relative">
            <Image
              src={sdHero1}
              alt="carousel image 1"
              className="absolute w-full h-full object-cover"
              quality={100}
            />
            {/* Dark overlay */}
            <div className="absolute w-full h-full bg-black opacity-50"></div>
          </div>
          {/* Slide 2 */}
          <div className="embla__slide w-full h-full relative">
            <Image
              src={sdHero2}
              alt="carousel image 2"
              className="absolute w-full h-full object-cover"
              quality={100}
            />
            {/* Dark overlay */}
            <div className="absolute w-full h-full bg-black opacity-50"></div>
          </div>
          {/* Slide 3 */}
          <div className="embla__slide w-full h-full relative">
            <Image
              src={sdHero3}
              alt="carousel image 3"
              className="absolute w-full h-full object-cover"
              quality={100}
            />
            {/* Dark overlay */}
            <div className="absolute w-full h-full bg-black opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Static Text and Contact Form */}
      <div className="relative z-10 flex md:flex-row flex-col items-center justify-between w-full h-full md:px-6 px-4 py-10">
        {/* Static Text */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut"
        }}
        className="flex flex-col justify-center h-full md:w-1/2 pt-10 space-y-6">
          <h2
            
            className="md:text-6xl  text-3xl font-extrabold capitalize text-white"
          >
            <span className="text-orange">C</span>ustom{" "}
            <span className="text-orange">S</span>oftware <br />
            <span className="text-orange">D</span>evelopment{" "}
            <span className="text-orange">S</span>ervices
          </h2>
          <p
           
            className="md:text-3xl text-lg font-bold text-white"
          >
            Comprehensive IT Solutions for Today's Challenges
          </p>
          <div className="flex flex-col space-y-1">
            <p className="md:text-md text-md  text-slate-100">
              1. We specialize in custom web, app, and software development that
              fuels your business growth.
            </p>
            <p className="md:text-md text-md  text-slate-100">
              2. We would be happy to hear from you, Please fill out the form
              below or send your requirements to us here- info@vionsys.com.
            </p>
          </div>
          <div className="pb-4 md:pb-0">
            <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8c00_0%,#ffa500_50%,#1e90ff_100%)]"></span>
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium bg-blue1 text-white backdrop-blur-3xl gap-2 undefined"
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                Get in Touch with Our Experts Today
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

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut"
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
                {
                  required: true,
                  message: "Please enter your phone number!",
                },
                {
                  pattern: /^\d{10}$/,
                  message: "Phone number must be numeric and 10 digits long.",
                },
              ]}
            >
              <div className="flex gap-2">
                <select
                  className="border border-gray-300 w-1/2 rounded text-gray-900 mt-1 px-1 py-[10.5px] focus:outline-none"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
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
                  className="md:w-full w-1/2 mt-1 p-2 border text-black border-gray-300 rounded"
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
                  htmlType="submit"
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
    </section>
  );
};

export default Hero;
