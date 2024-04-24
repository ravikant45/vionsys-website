import React from "react";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { FaLocationArrow } from "react-icons/fa6";

const Visit = () => {
  return (
    <>
      <div className="lg:h-screen h-auto w-screen bg-white flex lg:flex-row gap-10" >
        <div className="lg:h-screen h-auto w-[50%] bg-white px-2">
          <Image
            src="/map2.jpg"
            height="1000"
            width="1000"
            className="h-screen overflow-hidden w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </div>

        <div className="lg:h-screen h-auto flex flex-col justify-center md:gap-12 gap-4">
          <h1 className="md:text-3xl text-xs font-bold">
            Visit Our Office in <span className="text-orange">Pune, India</span>
          </h1>
          <h1 className="md:text-xl text-xs text-orange  ">
            Vionsys It Solutions Pvt.Ltd{" "}
          </h1>
          <p className="text-gray1"> 
            IT PARK, 6th floor office no. <span className="block">504 Stellar Spaces, opposite</span> Zensar,
            Pune, Maharashtra 411014
          </p>
          <div className='flex justify-start items-center'>
            <Button>View On Map <FaLocationArrow className="ml-2"/></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;
