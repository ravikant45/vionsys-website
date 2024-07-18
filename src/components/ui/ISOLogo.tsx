import React from "react";
import Image from "next/image";
import isoLogo from "@/../public/isoLogo.png";

export const ISOLogo = () => {
  return (
    <>
      <section className="py-10 md:py-7 md:px-6">
        <div className="container flex md:flex-row flex-col gap-4  items-center justify-evenly  px-4">
          <div className="space-y-4">
            <h2 className="text-3xl text-blue1 font-extrabold tracking-tighter text-center md:text-MainHeading">
              ISO Certified
            </h2>
            <p className="max-w-[600px] text-2xl text-orange text-center md:text-SubHeading">
              Our company is proud to be ISO certified, ensuring the highest
              standards of quality and compliance in our operations.
            </p>
            <div className="flex gap-4"></div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[200px] rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
              <Image
                src={isoLogo}
                alt="ISO Certification"
                width={200}
                height={200}
                className=" object-contain md:h-[48] md:w-[56]"
              />
              <div className="absolute top-0 right-0 -mt-3 -mr-3 rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                ISO Certified
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-12 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Quality Assurance</h3>
              <CircleCheckIcon className="h-6 w-6 text-blue1" />
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Our ISO certification ensures rigorous quality control and
              continuous improvement in our processes.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Productivity and Efficiency</h3>
              <GaugeIcon className="h-6 w-6 text-blue1" />
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Maximizing productivity and efficiency through streamlined
              processes and innovative methods.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Customer Satisfaction</h3>
              <ThumbsUpIcon className="h-6 w-6 text-blue1" />
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Our commitment to quality and compliance ensures our customers
              receive the best possible experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ISOLogo;

function CircleCheckIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function GaugeIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function ThumbsUpIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
