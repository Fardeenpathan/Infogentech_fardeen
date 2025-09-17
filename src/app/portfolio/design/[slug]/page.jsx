"use client";
import Icons from "@/components/ui/Icon";
import Image from "next/image";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import ShinyButton from "@/components/ui/ShinyButton";
import { useState,useEffect } from "react";
import designProjects from "../designProjects.json";
import { useParams} from 'next/navigation';
import Loader from "@/components/loader/Loader";

const SlugPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [activeService, setActiveService] = useState("Design");
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
          <PortfolioServices activeService={activeService} />
          <div className="mx-auto w-fit mt-10">
            <Icons name="CurveGradient" />
          </div>

          <div className="relative -top-48 px-10">
            <div
              className={`mx-auto rounded-2xl overflow-hidden bg-black transition-[max-height] duration-500 relative  ${
                expanded ? "h-full" : "h-[1200px]"
              }`}
            >
              <Image
                src={project.image}
                alt="Blog"
                width={1400}
                height={460}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                sizes="(max-width: 768px) 100vw, 1400px"
                className="rounded-2xl mx-auto p-2 overflow-hidden"
              />
              <div className="font-jost text-center absolute w-full bottom-0 py-14  glass-fallback bg-white/6"></div>
              <div className="font-jost text-center absolute w-full bottom-0 py-6">
                 <ShinyButton className="!py-4 !px-5 !text-lg"
                onClick={() => setExpanded((s) => !s)}
              >
                {expanded ? "Know less" : "Know more"}
               <span className="pl-3"><Icons name="Arrow" /></span> 
              </ShinyButton>
              </div>
            </div>
            <div className="mx-5 mt-6 font-jost">
              <p className=" font-normal text-[32px] leading-[28px]">
                {project.title}
              </p>
            </div>
          </div>
        </div>
        <SubscribeContact />
      </div>
    </>
  );
};

export default SlugPage;
