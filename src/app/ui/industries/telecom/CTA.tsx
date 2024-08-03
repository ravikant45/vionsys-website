import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <>
      <section className="bg-gray-50 w-[100vw] flex justify-center md:py-4 items-center overflow-x-hidden">
        {/* Final section contact us and schedule a meeting */}
        <div className="flex flex-col justify-center items-center py-4 gap-4 md:px-8 px-2 md:w-[80%]">
          <h2 className="text-SubHeading font-bold">Partner with Vionsys IT Solutions</h2>
          <p
            data-aos="zoom-out"
            className="text-xl text-blue1 font-semibold text-center"
          >
            Vionsys IT Solutions India Pvt. Transform your telecom operations
            with Our flagship IT solutions empower telecom companies to drive
            operational efficiencies, drive innovation and deliver better
            customer experiences. Contact us today to learn how we can help your
            organization thrive in a dynamic telecommunications environment.
          </p>
          <div className="flex md:gap-4 gap-2 justify-center items-center flex-wrap">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
