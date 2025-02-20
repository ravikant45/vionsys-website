"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
interface Video {
  video: any;
  title: string;
  desc: string;
  link: string;
}

interface VideoComponentProps {
  video: any;
  title: string;
  desc: string;
  link: string;
  isVisible: boolean;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  video,
  title,
  desc,
  link,
  isVisible,
}) => (
  <div
    className={`relative ${
      isVisible ? "" : "hidden"
    } h-[30rem] md:h-full w-[100vw]`}
  >
    <video
      className="w-full h-full object-cover opacity-50"
      autoPlay
      loop
      muted
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute items-center left-1 h-full top-0 flex w-full p-2 md:p-5">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 20 },
          opacity: { duration: 0.4 },
          ease: "easeInOut",
        }}
        className="md:max-w-[50rem] w-full flex flex-col gap-2 space-y-3"
      >
        <h1 className="loop_video_title text-4xl md:text-5xl text-white max-w-[50rem] font-bold">
          {title}
        </h1>
        <p className="loop_video_desc max-w-[30rem] md:text-base font-medium text-white">
          {desc}
        </p>
        <div className="flex justify-start items-center">
          <div className=" text-white italic text-lg py-2 font-mono rounded-tl-md rounded-br-md">
            You Think, We Make It!
          </div>
        </div>
        <Link href={link}>
          <Button>Discover with us</Button>
        </Link>
      </motion.div>
    </div>
  </div>
);

const videos: Video[] = [
  {
    video: "/assets/Home/HomeV1.mp4",
    title: "Custom Software Development: Innovation for the Future",
    desc: "Your one-stop destination for top-notch software design & development services.",
    link: "/contact",
  },
  {
    video: "/assets/Home/HomeV2.mp4",
    title: "Custom Software Development: Innovation for the Future",
    desc: "Boost your business with AI & ML. Leverage data for smarter decisions and innovation.",
    link: "/contact",
  },
  {
    video: "/assets/Home/HomeV5.mp4",
    title: "Custom Software Development: Innovation for the Future",
    desc: "Streamline Customer Relationships with AI-Powered CRM. Improve Efficiency, Personalize Interactions and Foster Growth.",
    link: "/contact",
  },
  {
    video: "/assets/Home/HomeV4.mp4",
    title: "Custom Software Development: Innovation for the Future",
    desc: "Efficient Digital Marketing Solutions for Streamlined Results. Maximize Impact, Minimize Effort.",
    link: "/contact",
  },
];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentVideo = videos[index];

  return (
    <>
      <main>
        <section className="flex relative bg-black">
          {videos.map((vid, idx) => (
            <VideoComponent
              key={vid.link}
              video={vid.video}
              title={vid.title}
              desc={vid.desc}
              link={vid.link}
              isVisible={idx === index}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
