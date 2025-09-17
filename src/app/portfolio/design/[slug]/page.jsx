"use client";
import Icons from "@/components/ui/Icon";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import { useState, useEffect } from "react";
import ProjectImageSection from "@/components/ProjectImageSection";
import designProjects from "../designProjects.json";
import { useParams} from 'next/navigation';
import Loader from "@/components/loader/Loader";

const SlugPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const foundProject = designProjects.find((project) => project.slug === slug);
    setProject(foundProject);
  }, [slug]);

  if (!project) {
    return <Loader/>;
  }

  return (
    <>
      <PortfolioHeader />
      <div className="container mx-auto px-10">
        <div className=" mt-10  -z-20 border-2 rounded-3xl pt-10">
          <PortfolioServices activeService="Design" />
          <div className="mx-auto w-fit mt-10">
            <Icons name="CurveGradient" />
          </div>
          <div className="relative -top-48 px-10">
            <ProjectImageSection
              project={project}
              expanded={expanded}
              setExpanded={setExpanded}
            />
            <div className="mx-5 mt-6 font-jost">
              <p className=" font-normal text-[32px] leading-[28px]">
                {project.title}
              </p>
            </div>
          </div>
        <SubscribeContact />
      </div>
    </div>
    </>
  );
};

export default SlugPage;
