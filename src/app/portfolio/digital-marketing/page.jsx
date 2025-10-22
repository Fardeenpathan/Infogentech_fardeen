
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndProtfolioAll from "@/components/india/IndProtfolioAll";
import IndCustomLine from "@/components/india/IndCustomLine";
import marketingProjects from "./marketingProjects";
import PortfolioProjectCard from "@/components/PortfolioProjectCard";

const DigitalMarketing = () => {
  return (
    <>
      <IndServicesHeader />
      <IndProtfolioAll activeService="digital-marketing" />
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
            {marketingProjects?.map((project, index) => (
            <PortfolioProjectCard key={project.id} project={project} index={index} route="digital-marketing"/>
          ))}
        </div>
        <IndCustomLine />
    </>
  );
};

export default DigitalMarketing;
