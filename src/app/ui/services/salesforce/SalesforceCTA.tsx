import { Button } from '@/components/ui/button'

import Link from 'next/link'
import React from 'react'

function SalesforceCTA() {
  return (
  <section className="w-[100vw] flex justify-center bg-indigo-950 overflow-x-hidden">
        {/* Final section contact us and schedule a meeting */}
        <div className="flex flex-col md:flex-row justify-between max-w-6xl items-center p-4">
          <div className="flex flex-col justify-start gap-4 md:px-8 px-2 py-4 md:pb-10 md:w-[70%]">
            <p className='text-xs font-semibold tracking-widest text-gray-200'>
              GET IN TOUCH
            </p>
            <h4
              className="text-2xl text-white font-bold"
            >
              Request a Free Consultation or Get Expert Help for Your Business & Consulting Needs
            </h4>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Link
                href={"/contact"}
                className="font-sans py-2 flex justify-center gap-2 items-center shadow-xl text-sm  backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 overflow-hidden border-2 rounded-full group my-[6px] uppercase"
                
              >
                CONTACT US
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </Link>
            </div>
          
        </div>
      </section>
    
  )
}

export default SalesforceCTA
