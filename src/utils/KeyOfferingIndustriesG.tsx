import React from 'react';

const KeyOfferingIndustriesG = ({keys}:any) => {
  return (
    <div className="flex justify-center items-center flex-col py-4 gap-4">
          <p className="md:text-2xl font-bold text-[#3469bc] md:px-10 px-4 ">Key offerings:</p>
          <div className="flex flex-wrap gap-4 px-6 justify-center text-lg font-serif">
            {keys.map((offer:any) => (
              <h1
                key={offer.id}
                className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
              >
                {offer.title}{" "}
              </h1>
            ))}
          </div>
    </div>
  )
}

export default KeyOfferingIndustriesG
