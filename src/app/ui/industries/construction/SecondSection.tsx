'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button";
import { Services } from '@/utils/Services';


export default function SecondSection() {

    return (
        <div>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            {Services.map((item) => (
                <div key={item.id}>
                    <div className='py-5'>
                    <h1 className='text-SubHeading sm:text-MainHeading text-center border-y-2 border-MainHeading'>
                    <div data-aos="flip-left">{item.heading}</div>
                    </h1>
                    </div>
                    <div className="grid gap-6 row-gap-10 lg:grid-cols-2 mb-5">
                        <div className={`lg:py-6 lg:pr-16 ${item.className1}`}>
                            <div data-aos="fade-down" data-aos-duration="500" className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div>
                                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                            <svg
                                                className="w-4 text-gray-600"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <line
                                                    fill="none"
                                                    strokeMiterlimit="10"
                                                    x1="12"
                                                    y1="2"
                                                    x2="12"
                                                    y2="22"
                                                />
                                                <polyline
                                                    fill="none"
                                                    strokeMiterlimit="10"
                                                    points="19,15 12,22 5,15"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-px h-full bg-gray-300" />
                                </div>
                                <div className="pt-1 pb-8">
                                    <p className="mb-2 text-lg font-bold">{item.subheading1}</p>
                                    <p className="text-gray-700">
                                        {item.para1}
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="500" className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div>
                                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                            <svg
                                                className="w-4 text-gray-600"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <line
                                                    fill="none"
                                                    strokeMiterlimit="10"
                                                    x1="12"
                                                    y1="2"
                                                    x2="12"
                                                    y2="22"
                                                />
                                                <polyline
                                                    fill="none"
                                                    strokeMiterlimit="10"
                                                    points="19,15 12,22 5,15"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-px h-full bg-gray-300" />
                                </div>
                                <div className="pt-1 pb-8">
                                    <p className="mb-2 text-lg font-bold">{item.subheading2}</p>
                                    <p className="text-gray-700">
                                        {item.para2}
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="500" className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div>
                                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                            <svg
                                                className="w-4 text-gray-600"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <line
                                                    fill="none"
                                                    strokeMiterlimit="10"
                                                    x1="12"
                                                    y1="2"
                                                    x2="12"
                                                    y2="22"
                                                />
                                                <polyline
                                                    fill="none"
                                                    strokeMiterlimit="10"
                                                    points="19,15 12,22 5,15"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-px h-full bg-gray-300" />
                                </div>
                                <div className="pt-1 pb-8">
                                    <p className="mb-2 text-lg font-bold">{item.subheading3}</p>
                                    <p className="text-gray-700">
                                        {item.para3}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`relative ${item.className2}`}>
                            <Image
                                className="inset-0 object-cover object-bottom w-auto md:w-full rounded shadow-lg h-auto lg:absolute lg:h-full"
                                src={item.img}
                                width={500}
                                height={500}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="px-2 mb-10 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="p-8 bg-blue1 bg-opacity-10 border-t rounded-xl shadow-xl sm:p-16">
          <div className="flex">
            <div className="relative w-full">
              <h2 data-aos="fade-left" className="text-center mb-6 text-MainHeading font-bold tracking-tight sm:text-4xl">
              Work with Vionsys IT Solutions
              </h2>
              <p data-aos="fade-right"  className="mb-4 text-base text-center text-gray-700">
              Vionsys IT Solutions India Pvt. Transform your construction industry with Our specialized IT solutions to empower construction companies to drive operational efficiencies, drive innovation and deliver better project outcomes. Contact us today to learn how we can help your organization thrive in a competitive manufacturing environment.
              </p>
             <div className='flex justify-center items-center'>
             <Link href={"/contact"}>
              <Button className="text-lg text-center" data-aos="fade-left" data-aos-duration="500">Contact Us</Button>
            </Link>
             </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    )
}
