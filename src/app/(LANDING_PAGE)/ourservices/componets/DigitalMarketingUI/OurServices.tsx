"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import seo from "../../images/DigitalMarketing/seo.jpg"
import ppc from "../../images/DigitalMarketing/ppc.jpg"
import social from "../../images/DigitalMarketing/social.jpg"
import conversion from "../../images/DigitalMarketing/conversion.jpg"
import orm from "../../images/DigitalMarketing/orm.jpg"
import affiliate from "../../images/DigitalMarketing/afffiliate.jpg"
import video from "../../images/DigitalMarketing/video.jpg"
import {motion} from "framer-motion"

const content = [
  {
    title: "1. Search Engine Optimization (SEO)",
    description:
      "Improve your website’s visibility on search engines like Google. Our SEO strategies are tailored to boost organic traffic and ensure higher rankings for relevant search queries.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={seo}
          width={500}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2. Pay-Per-Click Advertising (PPC)",
    description:
      "Get instant visibility on search engines and social platforms with PPC campaigns. We manage your ads to target the right audience, optimize your ad spend, and maximize conversions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={ppc}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "3. Social Media Marketing",
    description:
      "Engage with your audience across all major social platforms like Facebook, Instagram, LinkedIn, and Twitter. We create tailored social media strategies to build brand awareness, increase followers, and boost engagement.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={social}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "4. Conversion Rate Optimization (CRO)",
    description:
      "Improve the performance of your website by turning visitors into paying customers. We use data-driven insights to optimize your website’s usability, design, and content for better conversions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={conversion}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "5. Online Reputation Management (ORM)",
    description:
      "Manage your brand’s online presence and ensure that positive reviews and mentions outweigh the negative. Our ORM services help build trust, address feedback, and enhance brand image.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={orm}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "6. Affiliate Marketing",
    description:
      "Grow your business by partnering with affiliates who promote your products or services. We manage affiliate programs that reward partners for driving sales and leads to your business.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={affiliate}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "7. Video Marketing",
    description:
      "Engage your audience through powerful video content. From promotional videos to tutorials, we create dynamic video marketing strategies that increase brand engagement and drive conversions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={video}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function OurServices() {
  return (
    <div  className="p-10">
      <motion.h1 
      initial={{ opacity: 0, scale: 1.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.2,
        scale: { type: "spring", stiffness: 30 },
        opacity: { duration: 0.6 },
        ease: "easeInOut"
      }}
      className="text-MainHeading py-4 font-bold flex flex-col items-center">Our Services</motion.h1>
      <StickyScroll content={content} />
    </div>
  );
}
