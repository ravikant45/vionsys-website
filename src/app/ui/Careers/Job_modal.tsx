import React, { useState } from "react";
import { Modal } from "antd";
import { Button } from "@/components/ui/button";

const Job_modal = ({
  isModalOpen,
  setisModalOpen,
}: {
  isModalOpen: any;
  setisModalOpen: any;
}) => {
  const [JobApplication, setJobApplication] = useState({
    userName: "",
    email: "",
    position: "",
    experience: "",
    resume: "",
  });

  const handleClose = () => {
    setisModalOpen(false);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Job Application Details:", JobApplication);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setJobApplication((prevApplication) => ({
      ...prevApplication,
      [name]: value,
    }));
  };

  return (
    <div>
      <Modal
        title="Job Application"
        visible={isModalOpen}
        onCancel={handleClose}
        footer={null}
      >
        <div className="w-full">
          <div className="p-2 border border-gray-300 sm:rounded-md">
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-wrap">
                <label className="block mb-6 w-full">
                  <span className="text-gray-700">Your name</span>
                  <input
                    required
                    name="userName"
                    type="text"
                    className="block w-full mt-1 p-2 border"
                    placeholder="Enter your Name"
                    value={JobApplication.userName}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="block mb-6 w-full">
                  <span className="text-gray-700">Email address</span>
                  <input
                    required
                    name="email"
                    type="email"
                    className="block w-full p-2 border "
                    placeholder="Enter your email address"
                    value={JobApplication.email}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="flex gap-4">
                <label className="block mb-6 w-full">
                  <span className="text-gray-700">Position</span>
                  <input
                    required
                    name="position"
                    type="text"
                    className="block w-full mt-1 p-2 border"
                    placeholder="Enter Position"
                    value={JobApplication.position}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="block mb-6 w-full">
                  <span className="text-gray-700">Years of experience</span>
                  <select
                    required
                    name="experience"
                    className="p-2 block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            "
                    value={JobApplication.experience}
                    onChange={handleInputChange}
                  >
                    <option value="">Select years of experience</option>
                    <option value="Less than a year">Less than a year</option>
                    <option value="1 - 2 years">1 - 2 years</option>
                    <option value="2 - 4 years">2 - 4 years</option>
                    <option value="4 - 7 years">4 - 7 years</option>
                    <option value="7 - 10 years">7 - 10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </label>
              </div>
              <label className="block mb-6">
                <span className="text-gray-700">Your CV</span>
                <input
                  required
                  name="resume"
                  type="file"
                  className="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  onChange={handleInputChange}
                />
              </label>
              <div className="mb-6">
                <div className="mt-2">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="mb-6">
                <Button type="submit">Apply</Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Job_modal;
