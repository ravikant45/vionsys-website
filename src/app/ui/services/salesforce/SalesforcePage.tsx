"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import DynamicLoader from "@/components/ui/DynamicLoader";
import SalesforceOfferings from "@/app/ui/services/salesforce/SalesforceOfferings";
import OverviewSection from "@/app/ui/services/salesforce/OverviewSection";
import WhyChooseUs from "@/app/ui/services/salesforce/WhyChooseUs";
import SalesforceConsults from "@/app/ui/services/salesforce/SalesforceConsults ";
import SalesforceCTA from "@/app/ui/services/salesforce/SalesforceCTA";
import SalesforceConsultant from "@/app/ui/services/salesforce/SalesforceConsultant";
import SalesforceSymptoms from "@/app/ui/services/salesforce/SalesforceSymptoms";
import FAQSection from "@/app/ui/services/salesforce/FAQSection";
import NavSection from "@/app/ui/services/salesforce/NavSection";
import ThirdSection from "@/app/ui/contact/ThirdSection";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/services/salesforce/Hero"), {
  loading: () => <DynamicLoader />,
});


function SalesforcePage() {
    const [showFixedNav, setShowFixedNav] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setShowFixedNav(!entry.isIntersecting); // show fixed when original is out of view
        },
        { threshold: 0 }
      );
  
      if (navRef.current) {
        observer.observe(navRef.current);
      }
  
      return () => {
        if (navRef.current) observer.unobserve(navRef.current);
      };
    }, []);
  return (
    <div className="pt-10 relative overflow-x-hidden">
    <Hero />
    
    {/* Fixed NavSection shown only when original is out of view */}
    {showFixedNav && (
      <div className="fixed hidden md:block top-0 left-0 w-full z-30">
        <NavSection />
      </div>
    )}

    {/* Reference to original NavSection */}
    <div ref={navRef}>
      <NavSection />
    </div>

    <OverviewSection />
    <SalesforceCTA />
    <SalesforceOfferings />
    <WhyChooseUs />
    <SalesforceConsultant />
    <SalesforceCTA />
    <SalesforceSymptoms />
    <SalesforceConsults />
    <FAQSection />
    <ThirdSection />

  </div>
  )
}

export default SalesforcePage
