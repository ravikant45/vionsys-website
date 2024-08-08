"use client";
import React from "react";
import { motion } from "framer-motion";
const Keyfeatures = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-24">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg px-3 py-1 text-SubHeading font-bold dark:bg-gray-800">
                Key Features
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="text-MainHeading font-bold tracking-tighter sm:text-5xl"
              >
                Accelerate Your DevOps Workflow
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="max-w-[900px] text-SubHeading md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold"
              >
                Streamline your software delivery with our powerful DevOps
                platform. Automate deployments, scale effortlessly and gain
                real-time insights.
              </motion.p>
            </div>
          </div>
          {/*Cards Division */}
          <div className="mx-auto grid items-start gap-5 sm:max-w-4xl sm:grid-cols-2 md:gap-20 lg:max-w-5xl lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="grid gap-1 border border-gray-300 rounded p-4 transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <h3 className="text-ThirdHeading font-bold">
                Automated Deployments
              </h3>
              <p className="text-lg text-cardPara">
                Streamline your deployment process with our CI/CD capabilities.
                Deploy with a single click and focus on building great software.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="grid gap-1 border border-gray-300 rounded p-4 transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <h3 className="text-ThirdHeading font-bold">
                Scalable Infrastructure
              </h3>
              <p className="text-lg text-cardPara">
                Scale your applications seamlessly with our cloud-based
                infrastructure. Never worry about managing servers or upgrading
                hardware.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="grid gap-1 border border-gray-300 rounded p-4 transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <h3 className="text-ThirdHeading font-bold">
                Real-time Monitoring
              </h3>
              <p className="text-lg text-cardPara">
                Get detailed insights into your application's performance with
                our advanced monitoring tools. Identify and fix issues quickly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="grid gap-1 border border-gray-300 rounded p-4 transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <h3 className="text-ThirdHeading font-bold">
                Secure and Compliant
              </h3>
              <p className="text-lg text-cardPara">
                Ensure your application's security and compliance with our
                robust security features and industry-leading certifications.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="grid gap-1 border border-gray-300 rounded p-4 transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <h3 className="text-ThirdHeading font-bold">
                Collaboration-Focused
              </h3>
              <p className="text-lg text-cardPara">
                Foster seamless collaboration within your team with built-in
                code review tools and integrated communication channels.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="grid gap-1 border border-gray-300 rounded p-4 transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <h3 className="text-ThirdHeading font-bold">
                Customizable Workflows
              </h3>
              <p className="text-lg text-cardPara">
                Tailor our DevOps platform to your unique needs. Automate custom
                workflows and integrate with your existing tools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Keyfeatures;
