"use client";
import { motion } from "framer-motion";
import React from "react";
import { SiReadthedocs } from "react-icons/si";
import { GrPlan } from "react-icons/gr";
import { FaPenToSquare } from "react-icons/fa6";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
const Implementation = () => {
  return (
    <div>
      <section className="w-[100vw] py-6">
        <div className="grid md:grid-cols-5 grid-cols-1 justify-center items-center gap-4 px-8">
          {/* left side */}
          <div className=" col-span-2 flex flex-col justify-center items-center gap-4 md:order-1 order-2">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2 py-8">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <SiReadthedocs size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2 py-2">
                <h3 className="text-ThirdHeading font-bold">
                  1. Requirement Understanding
                </h3>
                <p className="text-paragraph">
                  At the outset, we engage closely with our clients, delving
                  into their pivotal needs and aspirations. This initial phase
                  lays the groundwork for comprehending their unique
                  expectations and workflow intricacies, enabling us to
                  meticulously chart out project specifications with precision.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <GrPlan size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2">
                <h3 className="text-ThirdHeading font-bold">
                  2. Test Planning
                </h3>
                <p className="text-paragraph">
                  Crafting a thorough blueprint is our forte, encompassing
                  strategic outlines, delineated testing phases, deliverables
                  and resource requisites. This meticulous approach ensures
                  simplification and seamless implementation of the testing
                  process, driving efficiency and effectiveness throughout.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <FaPenToSquare size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2">
                <h3 className="text-ThirdHeading font-bold">
                  3. Test Cases Development
                </h3>
                <p className="text-paragraph">
                  Post-test plan analysis, our QA team swiftly identifies key
                  objectives, crafting detailed test cases. This includes test
                  data, preconditions, expected results and postconditions,
                  ensuring precision in our testing approach.
                </p>
              </div>
            </motion.div>
          </div>
          {/* middle */}
          <div className="md:flex hidden justify-center items-center md:order-2 order-1">
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="col-span-1 w-44 h-44 h-22 md:rounded-full bg-gray2 flex justify-center items-center border-4 border-blue1"
            >
              <h3 className="uppercase font-bold text-center text-black text-2xl">
                Steps of testing
              </h3>
            </motion.div>
          </div>
          {/* Right side */}
          <div className="col-span-2 flex flex-col justify-center items-center gap-4 order-3">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2 py-8">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <MdOutlineWifiProtectedSetup size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2 py-2">
                <h3 className="text-ThirdHeading font-bold">
                  4. Environment Set-up
                </h3>
                <p className="text-paragraph">
                  After grasping the project plan and objectives, our developers
                  swiftly select optimal advanced testing tools. We meticulously
                  configure these tools for test execution, culminating in a
                  dependable testing environment to uphold the integrity of our
                  testing procedures.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <TbSettingsAutomation size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2">
                <h3 className="text-ThirdHeading font-bold">
                  5. Test Execution & Automation
                </h3>
                <p className="text-paragraph">
                  As a premier software testing company in India, our adept QA
                  team swiftly executes and automates tests in accordance with
                  the test plan. We promptly initiate retesting to guarantee
                  flawless execution, upholding our commitment to seamless
                  software quality assurance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <TbReportAnalytics size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2">
                <h3 className="text-ThirdHeading font-bold">6. Final Report</h3>
                <p className="text-paragraph">
                  To offer a comprehensive overview for analysis, we
                  meticulously compile a detailed document summarizing the
                  entire process. This includes all tests conducted, the final
                  testing report and completion metrics, ensuring clarity and
                  transparency in our testing procedures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Implementation;
