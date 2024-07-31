
import Link from 'next/link';
import { MLAIServicesData } from "@/app/ui/services/data/ML&AIServicesData";
import { Metadata } from "next";
import React from "react";
import ALML3 from "/public/AIML3.jpg";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import background from "/public/background.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import MLAIFaq from '@/app/ui/services/MLAIFaq';
import ScheduleMeetAndContactCTA from '@/utils/ScheduleMeetAndContactCTA';
// import FAQpage from '@/app/ui/services/FAQpage';

export const metadata: Metadata = {
  title: "ML and AI Services",
  description: "Vionsys IT Solutions India Pvt Ltd offers cutting-edge Machine Learning and AI services that can transform your organization. Our team of professionals provides unique solutions that use AI to automate operations, improve decision-making, and drive growth. From predictive analytics to custom AI models, we offer tailored services to fit your specific requirements. Today, use our powerful ML and AI solutions to propel your organization forward. ",
  openGraph: {
    images:"/opangraph.png",
    description:"Vionsys IT Solutions India Pvt Ltd provides superior AI and Machine Learning services that can catapult your company into the future. Our comprehensive solutions include AI-powered analytics, intelligent automation, and personalized machine learning models that increase productivity and stimulate innovation. Partner with us to obtain a competitive advantage by leveraging our cutting-edge AI and ML technology. "
  }
};
const page = () => {

  return (
    <main className="pt-16 overflow-hidden">
      <section id="bg" className="bg-white dark:bg-gray-800"> 
        <div className="container flex lg:h-[40rem] flex-wrap lg:flex-row lg:items-center">
        <div data-aos='fade-up' className="flex w-full lg:w-1/2 justify-center items-center dark:bg-slate-800">
          <div className="mx-auto flex justify-center px-4 sm:mt-6 sm:px-4 md:mt-4 lg:mt-2 lg:px-8">
            <div className="text-center py-10">
              <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-300 to-pink-500 bg-clip-text text-transparent sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  <span className="mb-1 block">{MLAIServicesData?.line1}</span>
                  <span className="text-gray-100">
                    {MLAIServicesData?.line2}
                  </span>
                </span> 
              </h1>
              
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:h-[40rem] lg:w-1/2">
          <Image className="object-cover w-full lg:h-[40rem] rounded-md" src={ALML3} alt="glasses photo" width={1000} height={1000}></Image>
        </div>      
      </div>
    </section>

    {/* Features */}
    <section className="py-10 md:py-20 mt-4 md:mt-0 flex items-center justify-center flex-col">
        <div className="flex w-[90%] flex-col items-center text-start">
          <p data-aos='fade-right' className="text-2xl md:text-3xl text-blue-700 decoration-orange font-bold">
            Discover the amazing features offered by us to enhance your online
            presence.
          </p>
        </div>

        <div data-aos='zoom-out' className="w-[90%] grid items-center justify-center gap-4 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 my-4 md:my-10 ">
          {MLAIServicesData?.features?.map((feat) => {
            return (
              <div
                key={feat?.id}
                className="relative hover:scale-105 transition-all overflow-hidden border border-gray-300 rounded-lg bg-background p-2"
              >
                <div className="flex flex-col justify-center items-center rounded-md p-1">
                  <div className='text-8xl text-orange'><feat.icon /></div>
                  <div className="md:space-y-2 flex flex-col items-center justify-center w-[16rem] sm:w-full">
                    <h3 className="text-xl md:text-2xl text-blue-800 font-semibold">{feat?.title}</h3>
                    <p className="text-sm md:text-md text-muted-foreground">
                      {feat?.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* why choose us */}
      <section>
        <div className='relative w-full h-[40rem] sm:h-[26rem] flex items-center justify-center'>
          <Image className='object-cover w-full h-[40rem] sm:h-[26rem]' src={background} alt="background image" height={1000} width={1000}></Image>
          <div className='absolute inset-0 flex flex-col gap-2 md:gap-4 items-start justify-center p-6 md:w-[60%]'>
            <h2 className='text-2xl md:text-3xl text-orange font-semibold'>Why Choose Us for Machine Learning and AI Services ?</h2>
            <p className='text-sm md:text-md text-white text-muted-foreground'>Choosing us for your AI and ML needs means partnering with a team of dedicated experts who are at the forefront of technological innovation. Our deep industry experience and cutting-edge solutions are tailored to drive your business success. We offer end-to-end services from initial consultation and data collection to model development, integration and ongoing support, ensuring seamless implementation and maximum impact. Our commitment to data privacy, security and ethical AI practices guarantees that your projects are handled with the utmost care and responsibility. Additionally, our customer-centric approach means we work closely with you to understand your unique challenges and goals, delivering customized solutions that provide real, measurable results. Trust us to transform your data into actionable insights, optimize your operations and give you a competitive edge in the ever-evolving market.</p>
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section className='py-10 md:py-20'>
        <div className=' flex flex-col items-center justify-center'>
          <h1 className='text-2xl md:text-3xl text-blue-700 decoration-orange pb-4 md:pb-10 font-bold'>Industries We Serve</h1>
          <div className='md:w-[90%] grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 px-6'>
          {MLAIServicesData?.industries?.map((feat) => {
            return (
            <div className='grid grid-cols-1 border-2 p-6 cursor-pointer hover:bg-slate-200 transition-all hover:scale-105 ease-linear'>
              <div key={feat?.id} className='text-6xl text-blue-600'><feat.icon /></div>
                <h2 className='text-xl md:text-2xl text-orange font-semibold'>{feat?.title}</h2>
                <h3 className='text-lg md:text-xl text-blue-700'>{feat?.heading}</h3>
                <p className='text-sm md:text-md text-muted-foreground'>{feat?.description}</p>
              </div>
            );
          })}
            
          </div>
        </div>
      </section>
      <MLAIFaq/>

      <section className="bg-gray-100">
        <ScheduleMeetAndContactCTA />
      </section>
     
        
    </main>
  );
};

export default page;
