"use client";
import Icons from "@/components/ui/Icon";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import ProjectImageSection from "@/components/ProjectImageSection";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/loader/Loader";
import marketingProjects from "../marketingProjects";

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

            <div className="mx-5 mt-10 font-jost">
              <div className="grid grid-cols-3 mt-15 space-y-8">
                <div className="flex flex-col gap-2 ">
                  <p className="font-jost font-medium text-lg leading-[20px] opacity-30">
                    Date
                  </p>
                  <p>{project.date}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-lg leading-[20px] opacity-30">
                    Duration
                  </p>
                  <p>{project.duration}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-medium text-lg leading-[20px] opacity-30">
                    Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.tools || []).map((tool, index) => (
                      <span
                        key={index}
                        className="font-jost bg-[#8752FF80] py-1.5 px-3 w-fit radius"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-lg leading-[20px] opacity-30">
                    Client
                  </p>
                  <p>{project.client}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-lg leading-[20px] opacity-30">
                    Location
                  </p>
                  <p>{project.location}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-15 space-y-8">
                <div className="flex flex-col gap-2">
                  <p className="font-jost font-medium text-lg leading-[20px] opacity-30">
                    Modules
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.modules || []).map((mod, index) => (
                      <span
                        key={index}
                        className="font-jost bg-[#8752FF80] py-1.5 px-3 w-fit radius"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="font-medium text-lg leading-[20px] opacity-30">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.expertise || []).map((item, index) => (
                      <span
                        key={index}
                        className="font-jost bg-[#8752FF80] py-1.5 px-3 w-fit radius"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 items-end">
                  <a
                    href="contactUs"
                    className="inline-block p-[2px] rounded-xl 
             [background:linear-gradient(270deg,rgba(0,0,0,0)_4.64%,rgba(0,0,0,0.63)_82.81%)]"
                  >
                    <span
                      className="flex gap-2 items-center 
                  text-lg font-jost px-10 py-3 
                  rounded-[10px] 
                  bg-[#7544E4] 
                  text-white 
                  shadow-[0px_0px_8px_0px_#FFFFFF_inset]"
                    >
                      View in Figma Design &nbsp;
                      <Icons name="Arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubscribeContact />
      </div>
    </>
  );
};

export default SlugPage;
