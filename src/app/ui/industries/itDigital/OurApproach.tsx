import itData from '@/utils/ItData'
import Image from 'next/image'
import React from 'react'

const OurApproach = () => {
  return (
    <>
      {/* Description Section */}
      <section className="py-6 md:pt-8 space-y-3">
        <h1
          data-aos="fade-right"
          className="text-MainHeading text-center font-extrabold"
        >
          Strategic Approaches to IT Modernization
        </h1>
        <p
          data-aos="fade-left"
          className="max-w-[70rem] text-paragraph text-center mx-auto"
        >
          Staying ahead in today’s rapidly changing digital landscape requires
          more than just keeping up with technological advancements; It requires
          comprehensive changes including technology, processes, and people.
          Vionsys IT Solutions India Pvt Ltd offers comprehensive IT Digital
          Transformation services that enable businesses to adapt, grow, and
          thrive in the digital age.
        </p>
      </section>

      {/* the static section for Our Approach  */}
      <section>
        <div className="flex flex-col justify-center items-center font-bold md:py-2">
          <h1
            data-aos="fade-right"
            className="text-3xl text-orange font-extrabold"
          >
            Our Approach
          </h1>
        </div>

        <div className="z-0 bg-transparent md:p-10 px-1">
          {itData.map((section, index) => (
            <div
              key={section.id}
              className="w-full px-2 grid md:grid-cols-2 gap-4 grid-cols-1 md:py-6 py-2"
            >
              <div
                className={`flex justify-center items-center ${
                  index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"
                }`}
              >
                <Image
                  src={section.imageSrc}
                  className="rounded-2xl"
                  alt="support_image"
                  width={500}
                  height={500}
                />
              </div>
              <div
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                className={`flex flex-col justify-center gap-2 md:p-10 p-2 ${
                  index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"
                }`}
              >
                <h1 className="text-2xl text-black font-bold">
                  {section.id}. {section.title}
                </h1>
                <ul className="bg-white rounded-lg md:w-full w-full text-paragraph font-medium list-inside list-disc md:h-auto">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                      className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc"
                    >
                      <span className="font-bold">{item.text}</span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default OurApproach
