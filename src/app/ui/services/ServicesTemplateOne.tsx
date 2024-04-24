import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";

const ServicesTemplateOne = ({ data }: { data: any }) => {
  return (
    <main>
      {/* hero section */}
      {/* Radial gradient for the container to give a faded look */}
      <section>
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            {data?.headline}
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            {data?.paragraph}
          </p>
        </WavyBackground>
      </section>

      {/* //the services sections */}
      <section className="services_look ">
        <div className=" flex justify-center items-center font-bold py-6">
          <h1 className="text-xl text-center">Our Services</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {data?.Services?.map((ser: any) => {
            return (
              <div
                className="flex flex-col gap-2 justify-center items-center w-[15rem]"
                key={ser?.id}
              >
                <span className=" bg-purple-700 p-5 w-16 h-16 rounded-full hover:cursor-pointer hover:scale-105 transition-all">
                  <ser.logo color="white" size={25} />
                </span>
                <h1 className="text-xm font-bold">{ser?.title}</h1>
                <p className="text-sm  text-center text-slate-500">
                  {ser?.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* types of of that services */}
      <section className="">
        <div className=" flex flex-col justify-center items-center font-bold md:py-5">
          <h1 className="text-xl p-5">Why Choose Us</h1>
          <p className="max-w-[50rem] text-center">
            At Vionsys IT Solution Pvt. Ltd., we understand that choosing a
            development partner is a critical decision for your business. Here's
            why we believe we are the right choice for your development needs.
          </p>
        </div>
        <div className="flex flex-wrap md:gap-5 p-2">
          {data.workType.map((work: any) => {
            return (
              <div
                key={work.id}
                className=" w-[27rem] h-[20rem] m-5 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              >
                <div className="relativerounded-t-xl overflow-hidden">
                  <Image
                    className=" group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                    width={500}
                    height={500}
                    src={work?.img}
                    alt={work?.title}
                  ></Image>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {work?.title}
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-neutral-400">
                    {work?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* contact us small section */}
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-20">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Experience the Best
                  <br className="hidden lg:block" />
                  Development Environment
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
                  We believe in delivering the best development to our customers
                  and providing nothing short of excellence.
                </p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <Link href={"/contact"}>Contact Us</Link>
                    </button>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      <Link href={"/about"}>About Us</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section>
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900 text-center">
              Frequently asked questions
            </h2>
            <div className="mt-6 border-t-4 border-gray-100 pt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                {data?.faq.map((data: any) => {
                  return (
                    <dl key={data?.id}>
                      <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                        {data?.ques}
                      </dt>
                      <dd className="mt-4">
                        <p className="leading-6 text-base text-gray-500">
                          {data?.ans}
                        </p>
                      </dd>
                    </dl>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesTemplateOne;
