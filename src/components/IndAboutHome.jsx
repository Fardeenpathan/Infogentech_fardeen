import Image from "next/image";
import IndTopicHeader from "./IndTopicHeader";
import IndButton from "./ui/IndButton";
export default function IndAboutHome() {
  return (
    <div className="mt-20 container mx-auto px-10 flex justify-between py-10">
      <div className="flex justify-between gap-20 relative">
        <Image
          src="/assist/IndImg/homePage/service1.jpg"
          alt="service"
          width={227}
          height={400}
          className="object-cover rounded-2xl h-96"
        />
        <Image
          src="/assist/IndImg/homePage/service2.jpg"
          alt="service"
          width={312}
          height={267}
          className="object-cover rounded-2xl h-64"
        />
        <video
          className="absolute top-60 left-50 w-84 h-82 object-cover rounded-2xl"
          src="https://res.cloudinary.com/dpmceu66e/video/upload/v1759913086/blog-app/categories/categories/1759913081122-compressed-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div>
        <IndTopicHeader
          className="!flex-col gap-10"
          title="About us"
          subtitle="Global IT Services for a Digitally Driven World"
          description="InfoGenTech is dedicated to delivering efficient IT solutions that drive business growth. Your audience is always looking for you on the web; are you found? Today's leaders blend innovative thinking with analysis to forge powerful online strategies. If your business is not optimized online, you will never be seen by prospective customers. With our worldwide online marketing solutions, you can rule the arena. Put your brand at the front with our time-tested strategies and best collaborations towards success."
        />
         <a href="#contact" ><IndButton
             variant="outline" className="mt-16"
                  >
                    Know more
             </IndButton></a>
      </div>
    </div>
  );
}
