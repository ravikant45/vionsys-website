"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Form, Input } from "antd";

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
      <div>
        <div className="flex md:flex-row flex-col justify-evenly items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} //X:100
            whileInView={{ opacity: 1, scale: 1 }} //y:100
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="flex justify-center items-center px-4 md:py-10 py-5 sm:px-6 sm:py-16 lg:px-8"
          >
            <Image
              src="/ContactForm.jpg"
              height={3000}
              width={5000}
              className="rounded-2xl lg:h-[78vh] lg:w-[40vw] transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
              alt="Image not found"
            />
          </motion.div>
          <div className="flex items-center justify-center md:py-10 py-5 sm:py-16 lg:px-8">
            <div className="md:w-[35rem] w-[18rem] border-2 rounded-2xl border-blue1">
              <h2 className="text-3xl text-orange font-bold text-center leading-tight text-blue950 sm:text-4xl py-6">
                Get In Touch
              </h2>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="p-5"
              >
                <Form.Item
                  className="w-full"
                  name="name"
                  label={<span className="font-semibold">Full Name</span>}
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
                  label={<span className="font-semibold">Email Address</span>}
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
                    <span className="block text-sm font-semibold py-2">
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
        </div>
      </div>
    </>
  );
};

export default ContactUs;
