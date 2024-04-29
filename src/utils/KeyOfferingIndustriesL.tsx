import React from 'react';

const KeyOfferingIndustriesL = ({List}:any) => {
   
    const firstHalfKeys = List.slice(0, Math.ceil(List.length / 2));
    const secondHalfKeys = List.slice(Math.ceil(List.length / 2));

  return (
    <div className="grid grid-cols-2 justify-center border rounded-lg border-gray-200">
      <ul className="bg-white rounded-lg w-96 text-gray-900">
        {firstHalfKeys.map((offer:any) => (
            <li key={offer.id} className="px-6 py-2 border-b border-gray-200 w-full"> {offer.title}{" "}</li>
        ))}
      </ul>
      <ul className="bg-white rounded-lg w-96 text-gray-900 border-l">
        {secondHalfKeys.map((offer:any) => (
            <li key={offer.id} className="px-6 py-2 border-b border-gray-200 w-full"> {offer.title}{" "}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyOfferingIndustriesL;
