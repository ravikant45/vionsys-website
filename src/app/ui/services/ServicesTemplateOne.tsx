import React from "react";
import Image from "next/image";
import softwarebg from "/public/assets/services/softwarebg.jpg";
import SoftwareServicesData from "./data/SoftwareServicesData";

const ServicesTemplateOne = () => {
  return (
    <main>
      <section className="hero_section w-full h-full md:gap-5 flex flex-col md:flex-row p-3">
        <div className="images">
          <Image
            className="rounded-xl"
            width={1000}
            height={500}
            src={softwarebg}
            alt="Softwarebg"
          ></Image>
        </div>
        <div className="flex w-full h-full justify-center items-center p-5 mt-4 md:mt-10 gap-3">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-black font-semibold">
              SOFTWARE DEVELOPMENT
            </h1>
            <p>
              At Vionsys IT Solutions INDIA Pvt. Ltd., we're not just about
              software development; we're architects of digital transformation.
              Our team crafts bespoke, scalable solutions that empower
              businesses to conquer their challenges and seize opportunities in
              the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="services_look p-5 pt-10">
        <div className="flex flex-wrap justify-center gap-5">
          {SoftwareServicesData?.Services?.map((ser) => {
            return (
              <div
                className="flex flex-col gap-2 justify-center items-center w-[15rem]"
                key={ser?.id}
              >
                <span className=" bg-purple-700 p-5 w-16 h-16 rounded-full">
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
    </main>
  );
};

export default ServicesTemplateOne;
