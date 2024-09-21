"use client";
import React, { useState } from "react";
import HeroImg from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/Hero.jpg";
import Image from "next/image";
import { Button, Form, Input } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Hero = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    console.log("Form Values:", values); // Print form values to the console
    setLoading(true);
    try {
      const response = await axios.post("/api/email", values, {
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
    <>
      <section className="relative h-screen flex items-center md:pt-10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HeroImg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-8 z-10 flex flex-col md:flex-row items-center justify-around">
          {/* Left Side: Title, Subheading, and Description */}
          <div className="md:w-1/2  mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-4xl text-white md:text-5xl font-bold mb-4"
            >
              Need an Employee?
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-2xl text-white md:text-3xl font-semibold mb-4"
            >
              Hire Top Talents With Our IT Staffing Services
            </motion.h2>
            <p
              className="text-lg text-slate-200 mb-6"
            >
              We provide cutting-edge solutions to help your business grow. Our
              team of experts is ready to assist you with all your needs.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 max-w-md w-full">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="bg-white bg-opacity-10 backdrop-blur-md p-3 rounded-lg shadow-lg space-y-2"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                How can we assist you today?
              </h3>
              <Form.Item
                className="w-full"
                name="name"
                label={<span className="font-bold text-white">Full Name</span>}
                rules={[
                  { required: true, message: "Please enter your full name" },
                ]}
              >
                <Input
                  placeholder="Enter Your Name"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #a1a1aa",
                    borderRadius: "0",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={
                  <span className="font-semibold text-white">
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
                  style={{
                    border: "none",
                    borderBottom: "2px solid #a1a1aa",
                    borderRadius: "0",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="number"
                label={
                  <span className="font-semibold text-white">Phone Number</span>
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
                <Input
                  placeholder="Enter Phone Number"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #a1a1aa",
                    borderRadius: "0",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="message"
                label={
                  <span className="block text-sm font-semibold text-white py-2">
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
                <Input.TextArea
                  placeholder="Leave a comment..."
                  style={{
                    border: "none",
                    borderBottom: "2px solid #a1a1aa",
                    borderRadius: "0",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </Form.Item>

              <Form.Item>
                <div className="flex justify-center items-center">
                  <Button
                    className="bg-blue-600 border-2 border-[#3e3e3e] rounded-lg text-white px-4 py-2 text-base hover:bg-blue2 cursor-pointer transition relative"
                    htmlType="submit"
                    disabled={loading}
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
      </section>
    </>
  );
};

export default Hero;
