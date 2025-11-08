import IndPortfolioHeader from "@/components/india/IndPortfolioHeader";
import IndProtfolioAll from "@/components/india/IndProtfolioAll";
import IndCustomLine from "@/components/india/IndCustomLine";
import designProjects from "./designProjects";
import PortfolioProjectCard from "@/components/PortfolioProjectCard";
import MovingTextBanner from "@/components/MovingTextBanner";
const Design = () => {
  return (
    <>
      <IndPortfolioHeader />
      <IndProtfolioAll activeService="design" />
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
        {designProjects?.map((project, index) => (
          <PortfolioProjectCard
            key={project.id}
            project={project}
            index={index}
            route="design"
          />
        ))}
      </div>
      <IndCustomLine />
      <MovingTextBanner />
    </>
  );
};

export default Design;
