"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import call from "../../images/call1.png";
import mail from "../../images/mail.png";
import { Form, Input } from "antd";
import Contact from "@/app/(LANDING_PAGE)/landingpage/images/landingImg/contact4.jpg";
import { Button } from "@/components/ui/button";

const ContactUs: React.FC = () => {
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
      <div className="flex md:justify-evenly justify-center items-center">
        <div className="relative w-full md:h-screen h-[80vh] flex justify-start items-center md:mx-[14%]">
          <Image
            src={Contact}
            className="rounded-xl transition-all duration-300 md:block hidden"
            alt="Contact Image"
          ></Image>
          <div className="absolute md:w-[35rem] w-full bg-tranparent rounded-2xl md:right-0 items-center">
            <h2 className="text-2xl text-orange font-extrabold text-center leading-tight text-blue950 md:text-3xl py-4">
              Get In Touch
            </h2>
            <div className="flex md:flex-row flex-col md:justify-evenly justify-center items-center">
              <div className="flex py-1">
                <Image src={call} alt="call icon" className="h2 w-6" />
                <span className="px-2 text-sm font-semibold flex items-center justify-center">
                  +91 8766613742
                </span>
              </div>
              <div className="flex py-1">
                <Image src={mail} alt="call icon" className="h2 w-6" />
                <span className="px-2 text-sm font-semibold flex items-center justify-center">
                  info@vionsys.com
                </span>
              </div>
            </div>
            <div className="h-[1.5px] w-full bg-black"></div>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="p-4"
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

              <Form.Item
                name="number"
                label={<span className="font-semibold">Phone Number</span>}
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
                    placeholder="Enter Phone Number"
                    id="number"
                    name="number"
                    className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </motion.div>
              </Form.Item>

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
                <div className="flex justify-center items-center">
                  <Button disabled={loading} className="text-lg text-center">
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
      </div>
    </>
  );
};

export default ContactUs;
