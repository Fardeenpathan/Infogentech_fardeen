"use client";
import Icons from "@/components/ui/Icon";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/loader/Loader";
// import contentProjects from "../contentProjects.json";
import ProjectImageSection from "@/components/ProjectImageSection";
import contentProjects from "../contentProjects";
const SlugPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const foundProject = contentProjects.find(
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
          <PortfolioServices activeService="Content" />
          <div className="mx-auto w-fit mt-10">
            <Icons name="CurveGradient" />
          </div>
          <div className="relative -top-48 px-10 ">
           <ProjectImageSection
              project={project}
              expanded={expanded}
              setExpanded={setExpanded}
            />
            <div className="mx-5 mt-6 font-jost">
              <p className=" font-normal text-[32px] leading-7">
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
                    {project.tools.map((tool, index) => (
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
                    {project.modules.map((mod, index) => (
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
                    {project.expertise.map((item, index) => (
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
        {/* <div className="bg-[#0E0F27]  p-10 rounded-3xl mt-5 shadow-[0px_0px_54px_24px_#1C1C38] px-10">
          <div className="space-y-6">
            <h2 className="text-2xl text-gray-300">
              We crafted a vibrant website for a greenhouse gardening brand,
              blending nature’s beauty with a fresh, modern digital experience.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We designed the GreenLeaf Gardens website with a clear mission: to
              showcase the brand’s passion for sustainable greenhouse gardening
              and inspire visitors to explore their range of plants, gardening
              tools, and eco-friendly solutions. The site brings the essence of
              their work to life — from nurturing seedlings in vibrant
              greenhouses to creating flourishing home gardens that connect
              people with nature. We designed the GreenLeaf Gardens website with
              a clear mission: to showcase the brand’s passion for sustainable
              greenhouse gardening and inspire visitors to explore their range
              of plants, gardening tools, and eco-friendly solutions. The site
              brings the essence of their work to life — from nurturing
              seedlings in vibrant greenhouses to creating flourishing home
              gardens that connect people with nature.
            </p>
          </div>
          <div className="mt-12 justify-between flex gap-12 rounded-lg pb-10">
            <div>
              <h3 className="font-avalors text-[32px] font-normal leading-6 align-middle text-primary">
                DESIGN STYLE
              </h3>
              <p className="font-jost my-5 underline">Typography</p>
              <p className="font-jost  underline mt-5">font family</p>
              <div className="bg-white text-black font-nromal font-jost radius w-26 h-44 flex flex-col items-center justify-center mt-4 text-5xl">
                <p>Aa</p>
                <p className="mt-2 text-lg">Jost</p>
              </div>
            </div>
            <div className="mt-16 space-y-2">
              <p className="font-jost mt-7 underline">Headline</p>
              <p className="text-[72px] font-avalors font-bold">DISPLAY 1</p>
              <p className="font-jost mt-4">Bold, 72px</p>
              <p className="text-[56px] font-bold">HEADING 1</p>
              <p className="font-jost mt-4 ">Bold, 56px</p>
              <p className="text-[48px] font-bold">Heading 2</p>
              <p className="font-jost mt-4 ">Bold, 48px</p>
              <p className="text-[32px] font-bold">Heading 3</p>
              <p className="font-jost mt-4 ">Bold, 32px</p>
              <p className="text-[24px] font-bold">Heading 4</p>
              <p className="font-jost mt-4 ">Bold, 24px</p>
              <p className="font-jost mt-4 underline">Paragraph</p>
              <p className="text-lg font-jost mt-4">Paragraph 1</p>
              <p className="font-jost mt-2">Regular, 18px</p>
              <p className="text-[16px] font-jost mt-4">Paragraph 2</p>
              <p className="font-jost mt-2">Regular, 16px</p>
            </div>
            <div>
              <p className="font-jost my-5 underline mt-10">Colours</p>
              <p className="font-jost  underline mt-6">Primary</p>
              <div className="space-y-4 mt-8">
                <div className="flex  gap-3 flex-col">
                  <p className="w-32 h-15 rounded-tl-[33px] rounded-tr-[3px] rounded-br-[33px] rounded-bl-[3px] bg-[#52869A]"></p>
                  <p>#52869A</p>
                </div>
                <div className="flex  gap-3 flex-col">
                  <p className="w-32 h-15 rounded-tl-[33px] rounded-tr-[3px] rounded-br-[33px] rounded-bl-[3px] bg-[#76C893]"></p>
                  <p>#76C893</p>
                </div>
                <p className="font-jost  underline mt-6">Secondary</p>
                <div className="flex  gap-3 flex-col">
                  <p className="w-32 h-15 rounded-tl-[33px] rounded-tr-[3px] rounded-br-[33px] rounded-bl-[3px] bg-[#FFA92C]"></p>
                  <p>#FFA92C</p>
                </div>
                <div className="flex  gap-3 flex-col">
                  <p className="w-32 h-15 rounded-tl-[33px] rounded-tr-[3px] rounded-br-[33px] rounded-bl-[3px] bg-[#FFC570]"></p>
                  <p>#FFC570</p>
                </div>
                <p className="font-jost  underline mt-6">Nutral</p>
                <div className="flex  gap-3 flex-col">
                  <p className="w-32 h-15 rounded-tl-[33px] rounded-tr-[3px] rounded-br-[33px] rounded-bl-[3px] bg-[#0C0C20]"></p>
                  <p>#0C0C20</p>
                </div>
                <div className="flex  gap-3 flex-col">
                  <p className="w-32 h-15 rounded-tl-[33px] rounded-tr-[3px] rounded-br-[33px] rounded-bl-[3px] bg-[#F6FAF9]"></p>
                  <p>#F6FAF9</p>
                </div>
              </div>
            </div>
            <div className="mt-16 space-y-2 mr-30">
              <p className="font-jost mt-7 underline">Button / Link</p>
              <div className="flex gap-10">
                <div>
                  <p className="font-jost mt-4 font-bold">Button</p>
                  <p className="font-jost mt-1">Bold, 72px</p>
                </div>
                <div>
                  <p className="font-jost mt-4  text-primary font-semibold">
                    Hyperlink
                  </p>
                  <p className="font-jost mt-1">SemiBold, 20px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-between items-center font-jost font-medium text-[18px] leading-[150%]">
          <p className="max-w-[700px]">
            Every detail of the site was crafted to reflect GreenLeaf Gardens’
            commitment to sustainability, growth, and the simple joy of
            connecting with nature.
          </p>
          <div className="flex justify-between items-center gap-2">
            <p>Future Construction Landing Page</p>
            <div className="text-[#82828C] border-2 container mx-auto w-12"></div>
            <a
              href="contact"
              className="inline-block p-[2px] rounded-xl 
             [background:linear-gradient(270deg,rgba(0,0,0,0)_4.64%,rgba(0,0,0,0.63)_82.81%)]"
            >
              <span
                className="flex gap-2 items-center  text-nowrap 
                  text-lg font-jost px-10 py-3 
                  rounded-[10px] 
                  bg-[#7544E4] 
                  text-white 
                  shadow-[0px_0px_8px_0px_#FFFFFF_inset]"
              >
                Get Start &nbsp;
                <Icons name="Arrow" />
              </span>
            </a>
          </div>
        </div> */}
       <div className="mt-20">
                  <SubscribeContact />
               </div>
      </div>
    </>
  );
};

export default SlugPage;
