import React from 'react';

const KeyOfferingIndustriesL = ({List}:any) => {
   
    const firstHalfKeys = List.slice(0, Math.ceil(List.length / 2));
    const secondHalfKeys = List.slice(Math.ceil(List.length / 2));

  return (
    <div data-aos='fade-down' className="grid md:grid-cols-2 grid-cols-1 justify-center rounded-lg border-gray-200 py-4">
      <ul className="bg-white rounded-lg text-gray-900">
        {firstHalfKeys.map((offer:any) => (
            <li key={offer.id} className="px-6 py-4 border-b border-gray-200 w-full hover:bg-[#7ca4d6]"> {offer.title}{" "}</li>
        ))}
      </ul>
      <ul className="bg-white rounded-lg text-gray-900 border-l">
        {secondHalfKeys.map((offer:any) => (
            <li key={offer.id} className="px-6 py-4 border-b border-gray-200 w-full hover:bg-[#7ca4d6]"> {offer.title}{" "}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyOfferingIndustriesL;
