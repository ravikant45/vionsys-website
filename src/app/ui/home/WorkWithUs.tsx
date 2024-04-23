import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { AuroraBackground } from '@/components/ui/aurora-background';
import { Button } from '@/components/ui/button';

function WorkWithUs() {
  return ( 
  <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4 md:py-24">
        {/* <div className='flex flex-col justify-items-center items-center'> */}
            <h4 className='underline font-bold md:text-xl text-xl text-orange'>Want to work with us?</h4>
            <h5 className='text-lg text-black font-semibold'>Elevate your business through digital transformation, driving sustainable growth.</h5>
            <div className='text-sm text-gray1 pb-4 md:px-44 leading-7 text-center'>Explore limitless possibilities with Vionsys IT Solutions INDIA Pvt. Ltd. Join our vibrant team where you'll engage in innovative projects, thrive in a collaborative atmosphere, access ongoing learning initiatives, and chart a path for professional advancement. Discover the ideal environment to unleash your full potential in the dynamic IT industry.</div>
            <div className='flex flex-wrap gap-7 text-center'>
            <Link href="/services/testingAndQa"><Button>Schedule a meeting</Button></Link>
            <Link href="/services/testingAndQa"><Button>Contact Us</Button></Link>
            </div>
        {/* </div> */}
    </motion.div>
    </AuroraBackground>
  )
}

export default WorkWithUs;