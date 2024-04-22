import React from "react";
import Image from "next/image";
import { Button } from '@/components/ui/button';

const Visit = () => {
  return (
    <>
      <div className="h-screen w-screen bg-white flex flex-row gap-4" >
        <div className="h-screen w-[50%] bg-white px-2">
          <Image
            src="/map1.jpg"
            height="1000"
            width="1000"
            className="h-screen overflow-hidden w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </div>

        <div className="flex flex-col justify-center md:gap-12 gap-4">
          <h1 className="md:text-3xl text-sm font-bold">
            Visit Our Office in <span className="text-orange">Pune, India</span>
          </h1>
          <h1 className="md:text-xl text-xs text-orange  ">
            Vionsys It Solutions Pvt.Ltd{" "}
          </h1>
          <p className="text-zinc-500"> 
            IT PARK, 6th floor office no. <span className="block">504 Stellar Spaces, opposite</span> Zensar,
            Pune, Maharashtra 411014
          </p>
          <div className='flex justify-start items-center'>
            <Button>View On Map</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;
