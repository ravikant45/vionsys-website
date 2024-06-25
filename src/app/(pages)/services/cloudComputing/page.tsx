import ServicesTemplateTwo from "@/app/ui/services/ServicesTemplateTwo";
import { CloudComputingServicesData } from "@/app/ui/services/data/CloudComputingServicesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Computing Services",
};
const page = () => {
  return (
    <main className="pt-16 overflow-hidden">
      <ServicesTemplateTwo data={CloudComputingServicesData} />
    </main>
  );
};

export default page;
