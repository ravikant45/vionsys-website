'use client'
import { Link as ScrollView } from "react-scroll";
import React from "react";

function NavSection() {
  return (
    <div className="flex h-full items-center justify-center backdrop-blur-xl bg-gray-100 bg-opacity-80">
      <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-5 font-medium text-gray-700">
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={1000}
          to="Overview"
          spy={true}
          activeClass="activeNav"
        >
          Overview
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={1000}
          to="WhatWeOffer"
          spy={true}
          activeClass="activeNav"
        >
          What We Offer
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={1000}
          to="WhyChooseUs"
          spy={true}
          activeClass="activeNav"
        >
          Why Choose Us
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={1000}
          to="WhatToConsider"
          spy={true}
          activeClass="activeNav"
        >
          What To Consider
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={1000}
          to="OurSalesforceConsults"
          spy={true}
          activeClass="activeNav"
        >
          Our Salesforce Consults
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={1000}
          to="FAQ"
          spy={true}
          activeClass="activeNav"
        >
          FAQ
        </ScrollView>
      </nav>
    </div>
  );
}

export default NavSection;
