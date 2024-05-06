import React from 'react';

const KeyOfferingIndustriesG = ({keys}:any) => {
  return (
    <div className="flex justify-center items-center flex-col py-4 gap-4">
          <p data-aos='fade-up' className="font-bold text-ThirdHeading md:px-10 px-4">Key offerings:</p>
          <div data-aos='zoom-out' className="flex flex-wrap gap-4 px-6 justify-center">
            {keys.map((offer:any) => (
              <h1
                key={offer.id}
                className="bg-white flex-grow text-black border-l-8 border-[#7ca4df] text-paragraph font-medium rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
              >
                {offer.title}{" "}
              </h1>
            ))}
          </div>
    </div>
  )
}

export default KeyOfferingIndustriesG
