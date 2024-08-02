import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 md:pt-6 pb-6 lg:py-5">
        <div className="bg-blue-100 py-8 lg:py-12 px-6 relative rounded-md text-center">
          <p className="text-2xl sm:text-3xl lg:text-MainHeading font-bold text-gray-800 mb-4">
          Partner With Vionsys IT Solutions
          </p>
          <p className="text-paragraph mx-auto">
          Vionsys IT Solutions India Pvt Ltd can help you achieve maximum company potential. Our professional services provide you with the skills, insights, and solutions needed to overcome obstacles, innovate, and achieve your strategic goals.
          </p>
          <div className="h-12 w-12 bg-blue-100 left-1/2 -ml-6 -bottom-6 absolute transform rotate-45">
            &nbsp;
          </div>
        </div>
        <div className="pt-12 lg:py-12 text-center">
          <Link
            href="/contact"
            className="bg-amber-600 hover:bg-amber-500 transition ease-in-out duration-150 text-base text-white px-4 lg:px-8 py-2 inline-block font-bold rounded-md shadow-xl">
            Connect With Us
          </Link>
          <p className="pt-4 font-medium text-xl">Contact us today to learn how we can help your business succeed.</p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
