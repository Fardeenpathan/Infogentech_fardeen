
import IndPortfolioHeader from "@/components/india/IndPortfolioHeader";
import IndProtfolioAll from "@/components/india/IndProtfolioAll";
import contentProjects from "./contentProjects";
import IndCustomLine from "@/components/india/IndCustomLine";
import PortfolioProjectCard from "@/components/PortfolioProjectCard";
import MovingTextBanner from "@/components/MovingTextBanner";
const Content = () => {
  return (
    <>
      <IndPortfolioHeader />
      <IndProtfolioAll activeService="content" />
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
          {contentProjects?.map((project, index) => (
            <PortfolioProjectCard key={project.id} project={project} index={index} route="content"/>
          ))}
        </div>
        <IndCustomLine />
        <MovingTextBanner />
    </>
  );
};

export default Content;
