"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamically import CaseStudies component
const AboutOurCompany = dynamic(() => import("./../ui/home/AboutOurCompany"), {
  loading: () => <DynamicLoader />,
});
const WhyChoose = dynamic(() => import("./../ui/home/WhyChoose"), {
  loading: () => <DynamicLoader />,
});
const Hero = dynamic(() => import("./../ui/home/Home"), {
  loading: () => <DynamicLoader />,
});
const InfiniteMovingCardsDemo = dynamic(() => import("./../ui/home/Clients"), {
  loading: () => <DynamicLoader />,
});
const Industries = dynamic(() => import("./../ui/home/Industries"), {
  loading: () => <DynamicLoader />,
});
const WhyTrust = dynamic(() => import("./../ui/home/WhyTrust"), {
  loading: () => <DynamicLoader />,
});
const WeProvide = dynamic(() => import("./../ui/home/WeProvide"), {
  loading: () => <DynamicLoader />,
});
const WorkWithUs = dynamic(() => import("./../ui/home/WorkWithUs"), {
  loading: () => <DynamicLoader />,
});
const Statistics = dynamic(() => import("./../ui/home/Statistics"),{
  loading: () => <DynamicLoader />,
});

export default function Home() {
  return (
    <div className="pt-14 overflow-x-hidden">
      <Hero />
      <AboutOurCompany />
      <WeProvide />
      <WhyChoose />
      <Industries />
      <WhyTrust />
      <InfiniteMovingCardsDemo />
      <Statistics />
      <WorkWithUs />
    </div>
  );
}
