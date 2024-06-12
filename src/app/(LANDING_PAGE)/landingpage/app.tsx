"use client";
import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = async (values: any) => {
    console.log('Form Values:', values); // Print form values to the console
    setLoading(true);
    try {
      const response = await axios.post("/api/email", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Thanks for connecting with us!");
      form.resetFields();
      setShowModal(false);
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
      <Modal
        // title="User Information"
        open={showModal}
        footer={null} // Remove default footer with Ok and Cancel buttons
        onCancel={handleCancel} // Add onCancel handler to handle the upper X button
      >
        <div className="max-w-lg mx-auto md:p-8 p-1 bg-white shadow-xl rounded-lg">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <h1 className="text-center font-bold text-blue-600 md:text-3xl text-xl pb-5">
          Connect with Us
        </h1>
        
        <Form.Item
          name="name"
          label={<span className="font-semibold text-gray-700">Your Name</span>}
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Enter Your Name" className="border border-gray-300 rounded-md p-2" />
        </Form.Item>
        
        <Form.Item
          name="email"
          label={<span className="font-semibold text-gray-700">Your Email</span>}
          rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
        >
          <Input placeholder="Enter Your Email" className="border border-gray-300 rounded-md p-2" />
        </Form.Item>
        
        <Form.Item
          name="number"
          label={<span className="font-semibold text-gray-700">Contact Number</span>}
          rules={[
            { required: true, message: 'Please enter your phone number!' },
            { pattern: /^\d{10}$/, message: 'Phone number must be numeric and 10 digits long.' },
          ]}
        >
          <Input placeholder="Enter Contact Number" className="border border-gray-300 rounded-md p-2" />
        </Form.Item>
        
        <Form.Item
          name="message"
          label={<span className="block text-sm font-semibold text-gray-700 py-2">Your Message</span>}
        >
          <Input.TextArea placeholder="Enter Message" className="border border-gray-300 rounded-md p-2" />
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

export default App;
