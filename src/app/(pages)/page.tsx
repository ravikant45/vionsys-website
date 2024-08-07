"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

import { useEffect } from "react";

import AOS from "aos";
import InfiniteMovingCardsDemo from "../ui/home/Clients";
import WhyTrust from "../ui/home/WhyTrust";
import WhyChoose from "../ui/home/WhyChoose";

const AboutOurCompany = dynamic(() => import("./../ui/home/AboutOurCompany"), {
  loading: () => <p>Loading...</p>,
});
const ChooseUs = dynamic(() => import("./../ui/home/ChooseUs"), {
  loading: () => <p>Loading...</p>,
});
const Hero = dynamic(() => import("./../ui/home/Home"), {
  loading: () => <p>Loading...</p>,
});
const Industries = dynamic(() => import("./../ui/home/Industries"), {
  loading: () => <p>Loading...</p>,
});
const TrustUs = dynamic(() => import("./../ui/home/TrustUs"), {
  loading: () => <p>Loading...</p>,
});
const WeProvide = dynamic(() => import("./../ui/home/WeProvide"), {
  loading: () => <p>Loading...</p>,
});
const WorkWithUs = dynamic(() => import("./../ui/home/WorkWithUs"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-sine",
      offset: 100,
      delay: 10,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="pt-14 overflow-x-hidden">
      <Hero />
      <AboutOurCompany />
      <WeProvide />
      {/* <ChooseUs /> */}
      <WhyChoose />
      <Industries />
      {/* <TrustUs /> */}
      <WhyTrust />
      <InfiniteMovingCardsDemo/>
      <WorkWithUs />
    </div>
  );
}
