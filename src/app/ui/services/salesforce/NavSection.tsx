'use client'
import { Link as ScrollView } from "react-scroll";
import React from "react";

function NavSection() {
  return (
    <div className="flex h-full items-center justify-center bg-gray-100">
      <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-5 font-medium text-gray-700">
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={500}
          to="Overview"
          spy={true}
        >
          Overview
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={500}
          to="OurOfferings"
          spy={true}
        >
          Our Offerings
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={500}
          to="WhyChooseUs"
          spy={true}
        >
          Why Choose Us
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={500}
          to="OurSalesforceConsults"
          spy={true}
        >
          Our Salesforce Consults
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={500}
          to="WhatToConsider"
          spy={true}
        >
          What To Consider
        </ScrollView>
        <ScrollView
          className="p-5 cursor-pointer hover:py-4 hover:border-b-2 border-orange"
          smooth={true}
          duration={500}
          to="FAQ"
          spy={true}
        >
          FAQ
        </ScrollView>
      </nav>
    </div>
  );
}

export default NavSection;
