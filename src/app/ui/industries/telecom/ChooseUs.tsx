import telecomData from '@/utils/telecomData'
import Image from 'next/image'
import React from 'react'

const ChooseUs = () => {
  return (
    <>
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-SubHeading font-bold uppercase">
              Our Services
            </h2>
          </div>
          {telecomData.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 md:py-6 lg:items-center"
            >
              <div
                className={`aspect-w-16 aspect-h-9 lg:aspect-none order-1 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  className="w-full object-cover rounded-xl"
                  height={1000}
                  width={1000}
                  src={service.imageSrc}
                  alt="Image not Found"
                />
              </div>
              <div
                className={`order-2 ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-MainHeading font-semibold">
                    {service.subheading}
                  </h3>
                </div>
                {service.features.map((feature, idx) => (
                  <div className="flex gap-x-5 ms-1" key={idx}>
                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                      <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue3 font-semibold text-xs uppercase rounded-full">
                          {feature.number}
                        </span>
                      </div>
                    </div>
                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                      <p data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className="text-sm lg:text-base text-neutral-500">
                        <span className="text-neutral-700 font-semibold pr-2">
                          {feature.title}:
                        </span>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default ChooseUs
