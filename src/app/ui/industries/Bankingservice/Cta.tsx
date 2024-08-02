import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <>
      <section className="w-full flex bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-5">
          <p className="md:text-MainHeading text-xl text-blue-700 font-bold">
          Partner 
            <span className="px-2 py-1 relative inline-block">
              <svg
                className="stroke-current bottom-0 absolute text-amber-600 -translate-x-2"
                viewBox="8 2 310 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                  strokeWidth="12"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="relative">with Vionsys IT Solutions.</span>
            </span>
          </p>
          <p className="md:max-w-4xl text-paragraph">
          Vionsys IT Solutions India Pvt. Use Our specialized IT solutions to transform your banking operations to enable banks to achieve operational efficiencies, manage compliance and deliver exceptional customer service. Contact us now to learn how we can help your bank thrive in the digital age.
          </p>
          <Link
            href="/contact"
            className="bg-amber-600 hover:bg-amber-500 transition ease-in-out duration-150 text-base text-white px-4 lg:px-8 py-2 inline-block font-bold rounded-md shadow-xl"
          >
            Connect With Us
            </Link>
            <p className="pt-4 font-medium text-xl">Contact us today to learn how we can help your business succeed.</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Cta;
