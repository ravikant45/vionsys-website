import React from 'react';

import Image from 'next/image';

import ChooseUsIMG from '../../../../public/assets/Home/ChooseUs.svg';

function ChooseUs() {
  const card = [
    {
      id: 1,
      title: "Skills",
      description: "We have a talented team of professionals who specialize in various areas of IT, including web design, UI/UX design, branding, digital marketing, software development, graphic design, SEO and online advertising.",
      first: 'order-1 mt-10',
      second: 'order-2',
      color: "bg-[#fccb9f]"
    },
    {
      id: 2,
      title: "Quality Assurance",
      description: "We maintain high standards of quality in all supplies. The team follows a rigorous testing and quality control process to ensure products and services meet or exceed customer expectations.",
      first: 'order-2 mt-0',
      second: 'order-1',
      color: "bg-[#fccb9f]"
    },
    {
      id: 3,
      title: "Timely Deliveries",
      description: "We value time and ensure that all services are delivered within the agreed timeline. The team follows a meticulous process to ensure that projects are completed on time without compromising on quality.",
      first: 'order-1 mt-10',
      second: 'order-2',
      color: "bg-[#fccb9f]"
    },
    {
      id: 4,
      title: "Well-Designed Plan",
      description: "The company uses agile development methodologies to ensure the business process is simple and efficient. Focused on delivering solutions on time and budget, Vionsys IT Solutions helps businesses save time and effort.",
      first: 'order-2 mt-0',
      second: 'order-1',
      color: "bg-[#fccb9f]"
    }
  ]
  return (
    <section className='w-screen bg-slate-100 py-4'>
      <h2 className='capitalize text-MainHeading text-[#215cbc] font-bold text-center'>Why choose us</h2>
      {/* Data */}
      <div className='grid overflow-hidden lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-6 py-6 grid-cols-1 justify-items-center items-center gap-8 mx-2'>
        {
          card.map((card, index) => (
            <div key={index} className={`relative w-[270px] h-[390px] rounded-[45%_5%_40%_5%_/_30%_5%_31%_5%] shadow-md shadow-blue5 flex flex-col justify-center items-center ${card.color}`}>

              <div className={`w-[105%] bg-white bg-dot-slate-300 text-black px-4 py-2 rounded-md shadow-md shadow-blue5 ${card.first}`}>
                <span className="text-xl font-bold text-blue2 flex items-center justify-center">{card?.title}</span>
              </div>

              <div className={`p-4 text-black ${card.second}`}>
                <p>{card?.description}</p>
              </div>

            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ChooseUs;
