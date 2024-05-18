import React from 'react';
import { motion } from "framer-motion";

const services = () => {
  return (
    <div className='bg-dot-slate-300'>
        <div className="relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 py-8">
      <h2 data-aos="fade-down" className="mb-1 md:text-MainHeading text-2xl text-[#215cbc] font-extrabold">Our Services</h2>
      <p data-aos="fade-down" className="mb-4 md:text-SubHeading text-xl text-[#e57e2c] text-bold">Explore a range of outstanding services we provide.</p>
      <div data-aos='zoom-in' className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#215cbc] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#215cbc] rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 md:text-lg text-base font-bold text-black">Temporary Staffing Solutions</h3>
                </div>
                <p className="mb-2 text-gray-600 md:text-base text-sm">
                When you need immediate access to IT expertise to tackle short-term projects or cover temporary staffing gaps, our temporary staffing solutions deliver qualified professionals ready to hit the ground running.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#e57e2c] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#e57e2c] rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 md:text-lg text-base font-bold text-black">Contract Staffing Services</h3>
                </div>
                <p className="mb-2 text-gray-600 md:text-base text-sm">
                Our contract staffing services offer the flexibility to scale your IT team up or down based on project demands. Whether you need specialized skills for a finite period or ongoing support, we can match you with experienced professionals to meet your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#215cbc] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#215cbc] rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 md:text-lg text-base font-bold text-black">Permanent Staffing</h3>
                </div>
                <p className="mb-2 text-gray-600 md:text-base text-sm">
                Finding the right IT talent for your organization can be challenging. Our permanent staffing services take the hassle out of hiring by leveraging our extensive network and industry expertise to identify and attract top candidates who align with your company culture and objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#e57e2c] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#e57e2c] rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 md:text-lg text-base font-bold text-black">Specialized Staffing</h3>
                </div>
                <p className="mb-2 text-gray-600 md:text-base text-sm">
                From software development and cybersecurity to cloud computing and data analytics, we specialize in matching organizations with IT professionals possessing the specific skills and expertise needed to drive success in their industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#215cbc] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#215cbc] rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 md:text-lg text-base font-bold text-black">Recruitment Process Outsourcing (RPO)</h3>
                </div>
                <p className="mb-2 text-gray-600 md:text-base text-sm">
                Streamline your hiring process and reduce time-to-fill with our end-to-end recruitment process outsourcing services. Our dedicated team handles everything from candidate sourcing and screening to offer negotiation and onboarding, allowing you to focus on your core business priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#e57e2c] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#e57e2c] rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 md:text-lg text-base font-bold text-black">Skill Assessment and Training</h3>
                </div>
                <p className="mb-2 text-gray-600 md:text-base text-sm">
                Invest in the continuous development of your IT workforce with our skill assessment and training programs. We offer technical assessments, coding challenges, and professional development courses designed to enhance your team's capabilities and keep them ahead of the curve.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#215cbc] rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-[#215cbc] rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 md:text-lg text-base font-bold text-black">Vendor Management Services (VMS)</h3>
                </div>
                <p className="mb-2 text-gray-600 md:text-base text-sm">
                Simplify the management of your contingent workforce with our vendor management services. We help you optimize vendor relationships, standardize processes, and ensure compliance to maximize efficiency and minimize risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default services