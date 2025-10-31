"use client";
import Icons from "@/components/ui/Icon";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import { useState, useEffect } from "react";
import ProjectImageSection from "@/components/ProjectImageSection";
import { useParams } from "next/navigation";
import Loader from "@/components/loader/Loader";
import designProjects from "../designProjects";

const SlugPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const foundProject = designProjects.find(
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
      <div className="container mx-auto md:px-10 px-4">
        <div className="mt-10 -z-20 border-2 rounded-3xl pt-10">
          <PortfolioServices activeService="Design" />
          <div className="mx-auto w-fit md:mt-10 -mt-10">
            <Icons name="CurveGradient" />
          </div>
          <div className="relative -top-48   md:px-10 px-2">
            <ProjectImageSection
              project={project}
              expanded={expanded}
              setExpanded={setExpanded}
            />
            <div className="md:mx-5 mx-0 mt-6 font-jost">
              <p className=" font-normal md:text-3xl text-2xl leading-7">
                {project.title}
              </p>
              <p className="mt-4 md:text-xl text-sm leading-7 opacity-80 font-kumbh-sans">
                {project.description}
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 md:text-xl text-sm leading-6 opacity-70 font-kumbh-sans">
                {(project.points || []).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="md:mx-5 mt-10 font-jost mx-0">
              <div className="grid md:grid-cols-3 grid-cols-2 mt-15 space-y-8">
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
              <div className="grid xl:grid-cols-3 grid-cols-2 mt-15 space-y-8 gap-3">
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

                {/* Make this span full width on small screens */}
                <div className="flex flex-col gap-3 items-center md:items-end col-span-2 lg:col-span-1 w-fit">
                  {project.url ? (
                    <a
                      href={project.url}
                      // target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block p-[2px] rounded-xl 
        [background:linear-gradient(270deg,rgba(0,0,0,0)_4.64%,rgba(0,0,0,0.63)_82.81%)] w-full md:w-auto"
                    >
                      <span
                        className="flex gap-2 justify-center items-center 
          text-lg font-jost px-10 py-3 
          rounded-[10px] 
          bg-[#7544E4] 
          text-white 
          custom-shadow"
                      >
                        {project.buttonText || "View Project"} &nbsp;
                        <Icons name="Arrow" />
                      </span>
                    </a>
                  ) : (
                    <a
                      href="/us/contact"
                      className="inline-block p-[2px] rounded-xl 
        [background:linear-gradient(270deg,rgba(0,0,0,0)_4.64%,rgba(0,0,0,0.63)_82.81%)] w-full md:w-auto"
                    >
                      <span
                        className="flex gap-2 justify-center items-center 
          text-lg font-jost px-10 py-3 
          rounded-[10px] 
          bg-[#7544E4] 
          text-white 
          custom-shadow"
                      >
                        Contact Us &nbsp;
                        <Icons name="Arrow" />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <SubscribeContact />
        </div>
      </div>
    </>
  );
};

export default SlugPage;
