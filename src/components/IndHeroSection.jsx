// IndHeroSection.tsx
import IndHeroSectionContent from "@/components/IndHeroSectionContent";

export default function IndHeroSection() {
  return (
    <div className="w-full h-auto">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 bg-transparent"
        src="https://res.cloudinary.com/dpmceu66e/video/upload/v1759832951/blog-app/categories/categories/1759832943023-0_business_office_1920x1080.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="container mx-auto relative z-10 pt-32 pb-20">
        <IndHeroSectionContent />
      </div>
    </div>
  );
}
