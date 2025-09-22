import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import SubscribeContact from "@/components/SubscribeContact";
import Image from "next/image";
import Icons from "@/components/ui/Icon";
import CustomLine from "@/components/CustomLine";
import Link from "next/link";
import designProjects from "./designProjects";

const Design = () => {
  return (
    <>
      <PortfolioHeader />
      <PortfolioServices activeService="Design" />
      <div>
        <div className="container mx-auto mt-10 -z-20">
          <div className="mx-auto w-fit">
            <Icons name="CurveGradient" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto relative -top-48">
          {designProjects.map((project) => (
            <div key={project.id} className="p-2.5 rounded-xl px-10">
              <div className="w-full max-w-[774px]">
                <Image
                  src={project.subImage}
                  alt={project.title}
                  width={774}
                  height={380}
                  style={{ objectFit: "cover", width: 774, height: 480 }}
                  className="rounded-xl"
                />
                <div className="px-2.5 pb-2.5 flex justify-between flex-col">
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-jost text-[24px] font-normal leading-[28px] tracking-normal">
                      {project.title}
                    </p>
                    <Link href={`/portfolio/design/${project.slug}`}>
                      <Icons
                        name="Arrow"
                        height={26}
                        width={59}
                        color="#C4C4C4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CustomLine/>
        <SubscribeContact />
      </div>
    </>
  );
};

export default Design;
