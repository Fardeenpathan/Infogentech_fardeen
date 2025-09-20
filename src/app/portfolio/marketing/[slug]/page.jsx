"use client";
import Icons from "@/components/ui/Icon";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import ProjectImageSection from "@/components/ProjectImageSection";
import { useState, useEffect } from "react";
import marketingProjects from "../marketingProjects.json";
import { useParams } from "next/navigation";
import Loader from "@/components/loader/Loader";

const SlugPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const foundProject = marketingProjects.find(
      (project) => project.slug === slug
    );
    setProject(foundProject);
  }, [slug]);

  if (!project) {
    return <Loader />;
  }

  return (
    <>
      <PortfolioHeader />
      <div className="container mx-auto px-10">
        <div className=" mt-10  -z-20 border-2 rounded-3xl pt-10">
          <PortfolioServices activeService="Digital Marketing" />
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
              <p className="font-normal text-[32px] leading-[28px] font-jost">
                {project.title}
              </p>
              <p className="mt-4 text-xl leading-[28px] opacity-80 font-kumbh-sans">
                {project.description}
              </p>

              <ul className="list-disc list-inside mt-4 space-y-2 text-lg leading-6 opacity-70 font-kumbh-sans">
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <SubscribeContact />
      </div>
    </>
  );
};

export default SlugPage;
