
import Icons from "@/components/ui/Icon";
import Image from "next/image";
import SubscribeContact from "@/components/SubscribeContact";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioServices from "@/components/PortfolioServices";
import Link from "next/link";
import contentProjects from "./contentProjects";
import CustomLine from "@/components/CustomLine";

const Content = () => {
  return (
    <>
      <PortfolioHeader />
      <PortfolioServices activeService="Content" />
      <div>
        <div className="container mx-auto mt-10 -z-20">
          <div className="mx-auto w-fit">
            <Icons name="CurveGradient" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto relative -top-48">
          {contentProjects?.map((project) => (
            <div key={project.id} className="p-2.5 rounded-xl">
              <div className="w-full max-w-[774px]">
                <div className="w-full max-w-[774px] h-70 md:h-110 lg:h-120">
                  <Image
                    src={project.subImage}
                    alt={project.title}
                    width={774}
                    height={380}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
                <div className="px-2.5 pb-2.5 flex justify-between flex-col">
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-jost lg:text-[24px] md:text-xl text-sm font-normal leading-7 tracking-normal">
                      {project.title}
                    </p>
                    <Link
                      href={`/portfolio/content/${project.slug}`}
                      className="hidden lg:block"
                    >
                      <Icons
                        name="Arrow"
                        height={26}
                        width={59}
                        color="#C4C4C4"
                      />
                    </Link>
                    <Link
                      href={`/portfolio/content/${project.slug}`}
                      className="block lg:hidden"
                    >
                      <Icons
                        name="Arrow"
                        height={14}
                        width={26}
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

export default Content;
