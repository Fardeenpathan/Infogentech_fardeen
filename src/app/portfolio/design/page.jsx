
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndProtfolioAll from "@/components/india/IndProtfolioAll";
import IndCustomLine from "@/components/india/IndCustomLine";
import designProjects from "./designProjects";
import PortfolioProjectCard from "@/components/PortfolioProjectCard";

const Design = () => {
  return (
    <>
      <IndServicesHeader />
      <IndProtfolioAll activeService="design" />
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
          {designProjects?.map((project, index) => (
            <PortfolioProjectCard key={project.id} project={project} index={index} route="design"/>
          ))}
        <IndCustomLine />
      </div>
    </>
  );
};

export default Design;
