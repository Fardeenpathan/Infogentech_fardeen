"use client";
import Icons from "@/components/ui/Icon";
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndProtfolioAll from "@/components/india/IndProtfolioAll";
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
       <IndServicesHeader />
      <IndProtfolioAll activeService="digital-marketing" />
      <div className="container mx-auto px-10">
        <div className=" mt-10  -z-20 border-2 rounded-3xl pt-10">
          <div className="md:px-10 px-2">
            <ProjectImageSection
              project={project}
              expanded={expanded}
              setExpanded={setExpanded}
            />
            <div className="mx-5 mt-6 font-montserrat">
              <p className="font-normal text-[32px] leading-7 font-jost">
                {project.title}
              </p>
              <p className="mt-4 text-xl leading-7 opacity-80 font-kumbh-sans">
                {project.description}
              </p>

              <ul className="list-disc list-inside mt-4 space-y-2 text-lg leading-6 opacity-70 font-kumbh-sans">
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="mx-5 mt-10 font-montserrat">
              <div className="grid grid-cols-3 mt-15 space-y-8">
                <div className="flex flex-col gap-2 ">
                  <p className="font-jost font-medium text-lg leading-[20px]">
                    Date
                  </p>
                  <p>{project.date}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-lg leading-[20px]">
                    Duration
                  </p>
                  <p>{project.duration}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-medium text-lg leading-[20px]">
                    Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.tools || []).map((tool, index) => (
                      <span
                        key={index}
                        className="font-jost bg-primary text-white py-1.5 px-3 w-fit radius"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-lg leading-[20px]">
                    Client
                  </p>
                  <p>{project.client}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className=" font-medium text-lg leading-[20px]">
                    Location
                  </p>
                  <p>{project.location}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-15 space-y-8">
                <div className="flex flex-col gap-2">
                  <p className="font-jost font-medium text-lg leading-[20px]">
                    Modules
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.modules || []).map((mod, index) => (
                      <span
                        key={index}
                        className="font-jost bg-primary text-white py-1.5 px-3 w-fit radius"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="font-medium text-lg leading-[20px]">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.expertise || []).map((item, index) => (
                      <span
                        key={index}
                        className="font-jost bg-primary text-white py-1.5 px-3 w-fit radius"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 items-end">
                  <a
                    href="contact"
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
        <div className="mt-20">
        </div>
      </div>
    </>
  );
};

export default SlugPage;
