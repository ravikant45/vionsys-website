import Image from 'next/image'
import React from 'react'


export default function Herosection() {
  return (
    <div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        <div className="max-w-xl mb-6">
        
          <h2 data-aos="fade-down" className="max-w-lg mb-6 text-MainHeading font-bold tracking-tight">
          Modernizing the Construction Industry: Expert IT Solutions from 
        Vionsys
          </h2>
          <p data-aos="fade-down" className="text-base text-gray-700 md:text-lg">
          The construction industry is modernizing as new technologies are integrated to improve project management, efficiency, safety and compliance. Vionsys IT Solutions India Pvt Ltd provides expert IT solutions designed to meet the specific needs of the construction industry, helping businesses optimize productivity, increase efficiency and drive innovation.
          </p>
        </div>
       
      </div>
      <div data-aos="zoom-in" className="relative rounded-xl flex justify-center items-center bg-slate-950 bg-opacity-15 ">
        <Image 
         src="/assets/Industries/construction/main.png"
         width={400}
         height={400}
         alt=""
        />
       
      </div>
    </div>
  </div>

  <h1 className='text-center text-2xl sm:text-4xl text-orange'><div data-aos="flip-left">Our Services</div></h1>
  </div>
  )
}
