import Image from 'next/image'
import React from 'react'
import CRMMiddle from '/public/assets/services/crm/CRMMiddle.jpg';

const Img = () => {
    return (
        <div className="pt-16 overflow-x-hidden relative">
            <div className="bg-black relative">
                <Image src={CRMMiddle} alt='' className="md:w-[100vw] md:h-[100vh] h-[60vh] opacity-55" />
                <div className='absolute bottom-4 md:px-3 px-2 flex justify-center items-center flex-col gap-4 transform text-white'>
                    <h1 data-aos="fade-right" className="md:text-4xl text-2xl py-4 text-white text-center font-bold pt-4 md:w-1/2 w-full">
                        Why Choose Us?
                    </h1>
                    <ul className="bg-white rounded-lg md:w-1/2 w-full text-paragraph font-medium list-inside list-disc md:h-auto">
                        <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc">
                            Tailored CRM solutions designed to match your unique business needs.
                        </li>
                        <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                            Intuitive and user-friendly interface for seamless adoption and usage.
                        </li>
                        <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                            Comprehensive features including lead management, sales forecasting, and marketing automation.
                        </li>
                        <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                            Scalable platform that grows with your business, accommodating increasing demands.
                        </li>
                        <li data-aos="fade-left" className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400">
                            Dedicated customer support and training resources to ensure success.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Img;