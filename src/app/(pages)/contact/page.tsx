import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Conts = dynamic(() => import("../../ui/contact/FirstSection"), {
  loading: () => <p>Loading...</p>,
});
const ThirdSection = dynamic(() => import("../../ui/contact/ThirdSection"), {
  loading: () => <p>Loading...</p>,
});
const Countries = dynamic(() => import("../../ui/about/Countries"), {
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  title: "Contact Us",
  description:"Vionsys IT Solutions Pvt Ltd offers creative technology solutions. Our team is available to help with IT services, support, and inquiries. Contact us today to talk about your company needs and how we can help you achieve.",
  openGraph:{
    images:"/opangraph.png",
    description:"Vionsys IT Solutions Pvt Ltd offers experienced IT assistance and solutions. Whether you have questions or need a consultation, our team is available to help you. Contact us right away to find out how we can help your business with technology."
  }
};
const page = () => {
  return (
    <div>
      <Conts />
      <ThirdSection />
      <Countries />
    </div>
  );
};

export default page;
