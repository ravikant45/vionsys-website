import ServicesTemplateTwo from "@/app/ui/services/ServicesTemplateTwo";
import { CloudComputingServicesData } from "@/app/ui/services/data/CloudComputingServicesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Computing Services",
  description: "Vionsys IT Solutions India Pvt Ltd provides comprehensive cloud computing services to help you transform your IT infrastructure. We provide end-to-end solutions, including cloud migration, deployment, maintenance, and optimization, that are suited to your specific business requirements. With our skilled cloud services, you can increase flexibility, scalability, and cost effectiveness while keeping your organization competitive and flexible. Vionsys ensures a smooth transfer to the cloud and greater performance. ",
  openGraph: {
    images: "/opangraph.png",
    description:"Vionsys IT Solutions India Pvt Ltd offers secure and scalable cloud computing services tailored to your business needs. Our cloud professionals specialize in providing tailored solutions that encompass cloud strategy, architecture, and continuous maintenance. Whether you require public, private, or hybrid cloud solutions, we guarantee maximum performance and security. Empower your organization with Vionsys' cloud computing knowledge and reach new levels of efficiency. "
  }
};
const page = () => {
  return (
    <main className="pt-16 overflow-hidden">
      <ServicesTemplateTwo data={CloudComputingServicesData} />
    </main>
  );
};

export default page;
