
import IndPortfolioHeader from "@/components/india/IndPortfolioHeader";
import IndProtfolioAll from "@/components/india/IndProtfolioAll";
import developmentProjects from "./developmentProjects";
import IndCustomLine from "@/components/india/IndCustomLine";
import PortfolioProjectCard from "@/components/PortfolioProjectCard";
import MovingTextBanner from "@/components/MovingTextBanner";

const DigitalMarketing = () => {
  return (
    <>
      <IndPortfolioHeader />
      <IndProtfolioAll activeService="development" />
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
          {developmentProjects?.map((project, index) => (
            <PortfolioProjectCard key={project.id} project={project} index={index} route="development"/>
          ))}
        </div>
        <IndCustomLine />
        <MovingTextBanner/>
    </>
  );
};

export default DigitalMarketing;
