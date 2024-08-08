"use client";
import React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";
const Workflow = () => {
  return (
    <div>
      <section className="w-full py- l5g:pb-10 md:py-24 lg:py-4 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-MainHeading font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              DevOps Workflow
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
              className="mx-auto max-w-[700px] text-SubHeading font-bold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Streamline your development and deployment process with our DevOps
              solutions.
            </motion.p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:gap-8 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
            <div className="flex flex-col items-center md:gap-4 gap-2 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
              <PlaneIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-ThirdHeading font-semibold">Plan</h3>
              <p className="text-center text-cardPara">
                Collaborate on project requirements and define the roadmap.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
              <CodeIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-ThirdHeading font-semibold">Code</h3>
              <p className="text-center text-cardPara">
                Write clean, modular code and manage version control.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
              <BuildingIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-ThirdHeading font-semibold">Build</h3>
              <p className="text-center text-cardPara">
                Automate the build process and run comprehensive tests.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
              <CommandIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-ThirdHeading font-semibold">Deploy</h3>
              <p className="text-center text-cardPara">
                Continuously deliver updates and monitor application health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workflow;
interface MountainIconProps extends React.SVGProps<SVGSVGElement> {}
function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CommandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 6h6a3 3 0 1 1-3 3v12a3 3 0 1 1-3-3H6a3 3 0 1 1 3-3V6a3 3 0 1 1 3 3z" />
    </svg>
  );
}

function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

const MountainIcon: React.FC<MountainIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};
