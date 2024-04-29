import ServicesTemplateTwo from "@/app/ui/services/ServicesTemplateTwo";
import { CloudComputingServicesData } from "@/app/ui/services/data/CloudComputingServicesData";

const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateTwo data={CloudComputingServicesData} />
    </main>
  );
};

export default page;
