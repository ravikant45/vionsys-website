import React from "react";

const GetVirtualEmployee = () => {
  const employeeBenefits = [
    {
      svgLink: "https://www.svgrepo.com/show/530452/mobile-app.svg",
      heading: "Mobile App Development",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530456/host-record.svg",
      heading: "CMS/CRM/ERP Systems",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530449/cloud-backup.svg",
      heading: "Cloud Native",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530440/machine-vision.svg",
      heading: "Analytics and Reporting",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530442/port-detection.svg",
      heading: "Software Migration",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530438/ddos-protection.svg",
      heading: "Application Re-Engineering",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530445/data-analysis.svg",
      heading: "Product Devlopement",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530450/page-analysis.svg",
      heading: "Business Process Automation",
    },
  ];

  return (
    <div className="px-2 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-2xl text-blue1 font-bold md:text-MainHeading">
          Get On-Demand Remote IT Developers for All Your Software Needs
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-4">
          {employeeBenefits.map((benefits, index) => (
            <li key={index} className="rounded-xl bg-white shadow-lg px-6 py-8 ">
              <img
                src={benefits.svgLink}
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                {benefits.heading}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetVirtualEmployee;




