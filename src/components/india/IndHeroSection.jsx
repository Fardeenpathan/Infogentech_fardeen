// IndHeroSection.tsx
import IndHeroSectionContent from "@/components/india/IndHeroSectionContent";

export default function IndHeroSection() {
  return (
  <div className="relative w-full h-screen flex items-center justify-center bg-[#312f2f59]">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
    src="https://res.cloudinary.com/dpmceu66e/video/upload/v1759832951/blog-app/categories/categories/1759832943023-0_business_office_1920x1080.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="container mx-auto relative z-10">
    <IndHeroSectionContent />
  </div>
</div>

  );
}
