
import IndPortfolioHeader from "@/components/india/IndPortfolioHeader";
import IndProtfolioAll from "@/components/india/IndProtfolioAll";
import IndCustomLine from "@/components/india/IndCustomLine";
import marketingProjects from "./marketingProjects";
import PortfolioProjectCard from "@/components/PortfolioProjectCard";
import MovingTextBanner from "@/components/MovingTextBanner";

const DigitalMarketing = () => {
  return (
    <>
      <IndPortfolioHeader />
      <IndProtfolioAll activeService="digital-marketing" />
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
            {marketingProjects?.map((project, index) => (
            <PortfolioProjectCard key={project.id} project={project} index={index} route="digital-marketing"/>
          ))}
        </div>
        <IndCustomLine />
        <MovingTextBanner/>
    </>
  );
};

export default DigitalMarketing;
