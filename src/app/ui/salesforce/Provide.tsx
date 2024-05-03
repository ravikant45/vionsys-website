import React from 'react';

import { TbArrowsRight } from 'react-icons/tb';

function Provide() {
  return (
    <div className="w-[100vw] py-4 flex flex-col md:flex-row md:px-8 px-10 gap-8 items-center justify-center border-b-8 border-blue-500 rounded-3xl">
      <h4 className="mt-2 text-2xl font-bold leading-8 text-orange sm:text-3xl sm:leading-9">
        We Provide
      </h4>
      <div className='md:block hidden' >
        <TbArrowsRight size={50} />
      </div>
      <ul className="space-y-3 font-medium">
        <li className="flex items-start lg:col-span-1">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="ml-3 leading-5 text-gray-600">Salesforce Consulting</p>
        </li>
        <li className="flex items-start lg:col-span-1">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="ml-3 leading-5 text-gray-600">Salesforce Implementation</p>
        </li>
        <li className="flex items-start lg:col-span-1">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="ml-3 leading-5 text-gray-600">Salesforce Integration</p>
        </li>
        <li className="flex items-start lg:col-span-1">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="ml-3 leading-5 text-gray-600">Salesforce Support</p>
        </li>
      </ul>
    </div>
  )
}

export default Provide;
