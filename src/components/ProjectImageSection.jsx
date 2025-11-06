import Image from "next/image";
import ShinyButton from "@/components/ui/ShinyButton";
import Icons from "@/components/ui/Icon";

const ProjectImageSection = ({ project, expanded, setExpanded }) => {
  return (
    <div
      className={`mx-auto rounded-2xl overflow-hidden bg-black transition-[max-height] duration-500 relative  ${
        expanded ? "h-full" : "lg:h-[700px]"
      }`}
    >
      <Image
        src={ expanded ? project.image : project.subImage}
        alt={project.title}
        width={1400}
        height={460}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        sizes="(max-width: 768px) 100vw, 1400px"
        className="rounded-2xl mx-auto p-2 overflow-hidden"
      />
      <div className="font-jost text-center absolute w-full bottom-0 lg:py-14 py-9   glass-fallback bg-white/6"></div>
      <div className="font-jost text-center absolute w-full bottom-0 py-4">
        <ShinyButton className="lg:!py-4 !px-5 !text-lg !py-2"
          onClick={() => setExpanded((s) => !s)}
        >
          {expanded ? "Know less" : "Know more"}
          <span className="pl-3"><Icons name="Arrow" /></span>
        </ShinyButton>
      </div>
    </div>
  );
};

export default ProjectImageSection;
