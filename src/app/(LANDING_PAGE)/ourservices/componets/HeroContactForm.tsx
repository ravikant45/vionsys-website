import React, { useState } from "react";
import { countryCodes } from "@/utils/CountryCodes";
import toast from "react-hot-toast";
import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import { StaffingLandingPageTemplate } from "@/utils/StaffingLandingPageTemplate";
import { motion } from "framer-motion";
import { SiTicktick } from "react-icons/si";

type Inputs = {
  name: string;
  phone: {
    countryCode: string;
    number: string;
  };
  email: string;
  message: string;
};

const HeroContactForm: React.FC<{ heading: string }> = ({ heading }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState<string>("");

  const handleSubmit = async (values: any) => {
    const formattedData = {
      ...values,
      phone: countryCode + " " + values.number,
    };

    console.log(formattedData);
    const template = StaffingLandingPageTemplate(formattedData);
    const sendTo = ["ssbankar18@gmail.com",""];
    const updatedData = {
      formattedData,
      template,
      sendTo,
    };

    setLoading(true);
    try {
      const response = await axios.post("/api/email", updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false)
      setIsModal2Open(true)
      form.resetFields();
    } catch (error) {
      toast.error("Failed to send message");
    }
    setLoading(false);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 40 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="md:w-1/2 flex text-start justify-center items-center md:p-4 p-2 md:mt-6"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-1 md:py-4 md:px-6 p-4 rounded-xl bg-white"
        >
          <div>
            <h1 className="text-center text-blue1 text-xl font-bold pt-2">
             {heading}
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
            rules={[{ required: true, message: "Please enter your full name" }]}
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
            rules={[{ required: true, message: "Please enter your message!" }]}
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

        {/* Thank you message modal */}
        <Modal
          footer={null}
          open={isModal2Open}
          onCancel={() => setIsModal2Open(false)}
          className=""
        >
          <div className="pt-6 flex justify-center items-center bg-white text-black">
            <div className="flex flex-col items-center gap-4">
              <div className="text-center p-4 bg-green-50 rounded-full border-2 border-green-400">
                <SiTicktick size={30} className="text-green-400" />
              </div>
              <h2 className="text-center text-4xl font-bold text-[#215cbc] capitalize">
                Thank you for reaching out!
              </h2>
              <p className="text-2xl font-semibold text-SubHeading text-center">
                We appreciate your interest and will get back to you shortly.
              </p>
            </div>
          </div>
        </Modal>
      </motion.div>
    </>
  );
};

export default HeroContactForm;