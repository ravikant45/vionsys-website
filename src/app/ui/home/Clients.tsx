"use client";

import ClientImage1 from '../../../../public/assets/clients/client-1.png';
import ClientImage2 from '../../../../public/assets/clients/client-2.png';
import ClientImage3 from '../../../../public/assets/clients/client-3.png';
import ClientImage4 from '../../../../public/assets/clients/client-4.png';
import ClientImage5 from '../../../../public/assets/clients/client-5.png';
import ClientImage6 from '../../../../public/assets/clients/client-6.png';
import ClientImage7 from '../../../../public/assets/clients/client-7.png';
import ClientImage8 from '../../../../public/assets/clients/client-8.png';
import ClientImage9 from '../../../../public/assets/clients/client-9.png';
import ClientImage10 from '../../../../public/assets/clients/client-10.png';


import InfiniteMovingCards2 from '../../../components/ui/infinite-moving-cards2';
import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  img: string;
}

const testimonials: Testimonial[] = [
  { id: '1', img: ClientImage1.src },
  { id: '2', img: ClientImage2.src },
  { id: '3', img: ClientImage3.src },
  { id: '4', img: ClientImage4.src },
  { id: '5', img: ClientImage5.src },
  { id: '6', img: ClientImage6.src },
  { id: '7', img: ClientImage7.src },
  { id: '8', img: ClientImage8.src },
  { id: '9', img: ClientImage9.src },
  { id: '10', img: ClientImage10.src },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="bg-[#fd4343] bg-[linear-gradient(45deg,_#fd4343_0%,_#ffbde9_50%,_#8983fb_100%)] p-6">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut'
        }}
        className="md:text-MainHeading text-MainHeading-sm font-extrabold text-center"
      >
        Our Clients
      </motion.h1>
      <div className="h-auto md:py-4 py-2 rounded-md flex antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards2
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default InfiniteMovingCardsDemo;