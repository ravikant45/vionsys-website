import { Button } from '@/components/ui/button';
import { Solutions } from '@/utils/Solutions';
import Link from 'next/link';
import React from 'react'
import { SiSitepoint } from "react-icons/si";


export default function SecondSection() {
  return (
    <div>
   <div className="px-4 bg-dot-slate-300 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

   <h1 className='w-full  py-5 text-center font-bold text-orange text-4xl'>
        <div data-aos="flip-left">Our Services</div>
        </h1>

    {Solutions.map((data)=>(
    <div key={data.id} className='md:p-8 p-6 mb-10 border-y border-y-gray-300 md:border-x-4 border-x-2 border-orange rounded-3xl'>

      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="w-full">
          <h2 className="text-3xl font-bold tracking-tight text-MainHeading">
          {data.heading}
          </h2>
        </div>
        </div>

      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div data-aos="flip-down" className="max-w-md">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-50">
            {/* sdfgh */}
            <SiSitepoint className='text-[20px]'/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">{data.subheading1}</h6>
          <p className="mb-3 text-sm text-gray-900">
            {data.para1}
          </p>
        </div>

        <div data-aos="flip-down" className="max-w-md">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-50">
            {/* sdfghj */}
            <SiSitepoint className='text-[20px]'/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">{data.subheading2}</h6>
          <p className="mb-3 text-sm text-gray-900">
            {data.para2}
          </p>
         </div>

        <div data-aos="flip-down" className="max-w-md">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-50">
           {/* dfghj */}
           <SiSitepoint className='text-[20px]'/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">{data.subheading3}</h6>
          <p className="mb-3 text-sm text-gray-900">
           {data.para3}
          </p>
          </div>

        <div data-aos="flip-down" className="max-w-md">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-50">
            {/* asdfgh */}
            <SiSitepoint className='text-[20px]'/>
          </div>
          <h6 className="mb-2 font-semibold leading-5">{data.subheading4}</h6>
          <p className="mb-3 text-sm text-gray-900">
           {data.para4}
          </p>
          </div>

      </div>
      </div>
      ))}
    </div>

   
<div className="px-2 mb-10 bg-dot-slate-300 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
<div className='bg-white'>
<div className="p-8 bg-slate-500 bg-opacity-10 border-t rounded-xl shadow-xl ">
<div className="flex">
<div className="relative w-full">
  <h2 data-aos="fade-left" data-aos-duration="500" className="text-center mb-6 text-MainHeading font-bold tracking-tight sm:text-4xl">
  Work with Vionys IT Solutions
  </h2>
  <p data-aos="fade-right" data-aos-duration="500" className="mb-4 text-base text-center text-gray-700">
  Vionsys IT Solutions India Pvt. Transform your healthcare operations with Our flagship IT solutions empower healthcare providers to drive operational efficiencies, drive innovation, and deliver better patient care. Contact us today to learn how we can help your organization thrive in the dynamic healthcare landscape.
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

</div>
  )
}
