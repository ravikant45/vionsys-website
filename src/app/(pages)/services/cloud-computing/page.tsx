import { BaseUrl } from "@/app/sitemap";
import ServicesTemplateTwo from "@/app/ui/services/ServicesTemplateTwo";
import { CloudComputingServicesData } from "@/app/ui/services/data/CloudComputingServicesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vionsys IT Solutions - Best Cloud Computing Services in Pune",
  description:
    "Vionsys IT Solutions India Pvt Ltd helps you grow your cloud computing services. Cloud computing plays a very crucial role in modern software development.",
  alternates: {
    canonical: `${BaseUrl}/services/cloud-computing`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd offers secure and scalable cloud computing services tailored to your business needs. Our cloud professionals specialize in providing tailored solutions that encompass cloud strategy, architecture, and continuous maintenance. Whether you require public, private, or hybrid cloud solutions, we guarantee maximum performance and security. Empower your organization with Vionsys' cloud computing knowledge and reach new levels of efficiency. ",
  },
};
const page = () => {
  return (
    <main className="pt-16 overflow-hidden">
      <ServicesTemplateTwo data={CloudComputingServicesData} />
    </main>
  );
};

export default page;
