"use client";
import React, { useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
import { country } from "@/utils/CountryCodes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { vEmployeeModelTemplate } from "@/utils/vEmployeeModelTemplate";

type Inputs = {
  name: string;
  countryCode: string;
  number: string;
  email: string;
  message: string;
};
interface PopUpProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  title: string;
}

const PopUp: React.FC<PopUpProps> = ({ showModal, setShowModal, title }) => {
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
    const phoneNumber = values.number
      ? `${values.countryCode} ${values.number}`
      : "";

    const formattedData = {
      ...values,
      number: phoneNumber, // Update the number field with country code
    };

    const subject = `${title} - Contact Form Submission`;

    const template = vEmployeeModelTemplate(formattedData);
    const sendTo = [
      "info@vionsys.com",
      "pawandolas@vionsys.com",
      "dushyant.s@vionsys.com",
    ];
    // const sendTo = ["workvansh12@gmail.com"];

    const updatedData = {
      formattedData,
      subject,
      template,
      sendTo,
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
      console.log(error);
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <Modal open={showModal} onCancel={handleCancel} footer={null} width={700}>
      <div className="flex flex-col md:flex-row rounded-lg gap-4">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center rounded-lg">
          <Image
            src="/assets/ModelImage.jpg"
            className="rounded-lg w-full h-auto min-h-[150px] md:min-h-[300px] object-cover object-center"
            alt="Vionsys Contact Image"
            width={400}
            height={700}
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-white">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="space-y-1"
          >
            <Form.Item
              name="name"
              label={<span className="font-semibold text-gray-700">Name</span>}
              rules={[{ required: true, message: "Please enter your name" }]}
              className="mb-3"
            >
              <Input
                placeholder="Your Full Name"
                className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label={<span className="font-semibold text-gray-700">Email</span>}
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
                placeholder="Your Email Address"
                className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              />
            </Form.Item>

            <div className="flex gap-x-1">
              <Form.Item
                name="countryCode"
                label={
                  <span className="font-semibold text-gray-700">Country</span>
                }
                rules={[{ required: true, message: "Select your country!" }]}
                initialValue="+1"
                className="w-28 mb-3"
              >
                <Select
                  showSearch
                  placeholder="Code"
                  optionFilterProp="children"
                  onChange={handleCountryChange}
                  filterOption={filterOption}
                  className="rounded-md"
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
                label={
                  <span className="font-semibold text-gray-700">Phone</span>
                }
                rules={[
                  { required: true, message: "Enter your phone number!" },
                  { pattern: /^\d{8,15}$/, message: "Invalid phone number" },
                ]}
                className="w-full mb-3"
              >
                <Input
                  placeholder="Phone Number"
                  maxLength={15}
                  minLength={8}
                  className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="message"
              label={
                <span className="font-semibold text-gray-700">Message</span>
              }
              className="mb-3"
            >
              <Input.TextArea
                placeholder="Enter your message"
                rows={3}
                className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="w-full mt-4 bg-blue1 rounded-lg text-white px-4 py-2 text-base"
                htmlType="submit"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-blue1"
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
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
