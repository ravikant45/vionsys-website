"use client"
import React from "react";
import Image from "next/image";
import testimonials from "./TestLinks";

const Testimonial = () => {
  return (
    <>
      <h1 className="text-center text-4xl py-2 font-semibold hover:underline text-blue3">
        What Our Client's Are Saying
      </h1>
      <div className="h-auto w-[100%] px-2 py-2">
        <Image
          src="/test.jpg"
          height="1000"
          width="1000"
          className="overflow-hidden w-full object-contain rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
      <div className="h-auto w-screen flex justify-center flex-wrap gap-6 py-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-4 text-black w-96 border-l-2 border-b-2 border-white hover:border-l-2 hover:border-b-2 hover:border-blue4 p-4 rounded-bl-2xl">
            <svg
              height="35px"
              className="mb-2"
              fill="#5a67d8"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
            >
              <g>
                <g id="right_x5F_quote">
                  <g>
                    <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                    <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                  </g>
                </g>
              </g>
            </svg>
            <p className="mt-2 text-base leading-6">
              {testimonial.quote}
            </p>
            <div className="text-sm mt-5">
              <p className="font-medium leading-none text-indigo-600 hover:text-black transition duration-500 ease-in-out">
                {testimonial.author}
              </p>
              <p>{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
