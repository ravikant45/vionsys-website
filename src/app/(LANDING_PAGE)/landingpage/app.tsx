"use client";
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        console.log('Form Values:', values);

        form.resetFields();
        setShowModal(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <Modal
        title="User Information"
        visible={showModal}
        footer={null} // Remove default footer with Ok and Cancel buttons
        onCancel={handleCancel} // Add onCancel handler to handle the upper X button
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Your Name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Enter Your Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Your Email"
            rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
          >
            <Input placeholder="Enter Your Email" />
          </Form.Item>
          <Form.Item
            name="number"
            label="Contact Number"
            rules={[{ required: true, message: 'Please enter your contact number!' }]}
          >
            <Input placeholder="Enter Contact Number" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Your Message"
          >
            <Input.TextArea placeholder="Enter Message" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
