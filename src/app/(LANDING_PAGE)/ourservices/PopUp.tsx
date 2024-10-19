"use client";
import React, { useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
import { country } from "@/utils/CountryCodes";
  import Image from "next/image";
import { useRouter } from "next/navigation";
import { MainContactFormTemplate } from "@/utils/MainContactFormTemplate";

type Inputs = {
  name: string;
  phone: {
    countryCode: string;
    number: string;
  };
  email: string;
  message: string;
};
interface PopUpProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const PopUp: React.FC<PopUpProps> = ({ showModal, setShowModal }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState<string>("");
  const router = useRouter();

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
      countryCode,
    };
    console.log(formattedData)
    const template = MainContactFormTemplate(formattedData)
    const sendTo = ["ssbankar18@gmail.com"];

    const updatedData = {
      formattedData,
      template,
      sendTo
    };

    setLoading(true);
    try {
      await axios.post("/api/email", updatedData, {
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
    setLoading(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="inset-0 flex flex-col items-center justify-center">
      <Modal open={showModal} footer={null} onCancel={handleCancel}>
        <div className="w-full max-w-md mx-auto md:p-6 p-1 bg-white rounded-lg">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <h1 className="text-center font-bold text-blue-600 md:text-3xl text-xl pb-5">
              Connect with Us
            </h1>

            <Form.Item
              name="name"
              label={
                <span className="font-semibold text-gray-700">Your Name</span>
              }
              rules={[{ required: true, message: "Please enter your name" }]}
              className="mb-3"
            >
              <Input
                placeholder="Enter Your Name"
                className="border border-gray-300 rounded-md px-2"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label={
                <span className="font-semibold text-gray-700">Your Email</span>
              }
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                  type: "email",
                },
              ]}
              className="mb-3"
            >
              <Input
                placeholder="Enter Your Email"
                className="border border-gray-300 rounded-md px-2"
              />
            </Form.Item>

            <Form.Item
              name="number"
              label={
                <span className="font-semibold text-gray-700">
                  Contact Number
                </span>
              }
              rules={[
                { required: true, message: "Please enter your phone number!" },
                {
                  pattern: /^\d{10}$/,
                  message: "Phone number must be numeric and 10 digits long.",
                },
              ]}
              className="mb-3"
            >
              <div className="flex gap-2 cursor-pointer">
                <Select
                  showSearch
                  placeholder="Country"
                  optionFilterProp="children"
                  value={countryCode}
                  onChange={handleCountryChange}
                  filterOption={filterOption}
                >
                  <option value="" disabled>
                    Country
                  </option>
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
                <Input
                  placeholder="Enter Contact Number"
                  className="border border-gray-300 rounded-md px-2"
                />
              </div>
            </Form.Item>

            <Form.Item
              name="message"
              label={
                <span className="block text-sm font-semibold text-gray-700 px-2">
                  Your Message
                </span>
              }
              className="mb-3"
            >
              <Input.TextArea
                placeholder="Enter Message"
                className="border border-gray-300 rounded-md px-2"
              />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-center items-center">
                <Button
                  className="bg-blue-600 border-2 border-transparent rounded-lg text-white px-6 py-2 text-base hover:bg-blue-500 cursor-pointer transition relative"
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
      </Modal>
    </div>
  );
};

export default PopUp;
