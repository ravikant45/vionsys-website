import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="py-28 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-4 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-orange font-medium">
              Modernizing Pharma with Digital Solutions
            </h1>
            <h2 data-aos="fade-right" className="text-4xl text-gray-700 font-extrabold md:text-5xl">
              <span className="pr-2 text-blue2">Pharma</span>
              Industry
            </h2>
            <p data-aos="fade-left" className="text-paragraph">
              The pharmaceutical sector is continually evolving, fueled by
              technological breakthroughs, severe regulatory standards, and the
              need for efficient medication development and delivery systems.
              Vionsys IT Solutions India Pvt Ltd provides specialist IT services
              for the pharmaceutical industry, assisting organizations in
              streamlining operations, ensuring compliance, and accelerating
              innovation.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link href="/contact">
                <Button>Let's get started</Button>
              </Link>
              <Link href="/about">
                <Button>
                  <span className="pr-2">About Us</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <Image
              src={"/assets/industries/Pharma/pharmaHero.jpg"}
              className=" md:rounded-tl-[108px]"
              alt="Image not found"
              height={400}
              width={700}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
