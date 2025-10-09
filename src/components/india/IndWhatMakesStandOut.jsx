import Image from "next/image";

const standoutFeatures = [
  {
    id: "01",
    title: "Proven Expertise & Experience",
    desc: "With years in the industry, our industry experts analyze the issues specific to the sectors and create strategies based on data and analytics. Our expertise helps businesses optimize their visibility online, improve their rankings, and become successful empirically.",
    imageIcon: "",
    width: 100,
    height: 100,
  },
  {
    id: "02",
    title: "Customized Digital Solutions",
    desc: "We believe that no two businesses are alike; thus, a one-fits-all approach does not hold for us. Our experts are dedicated to truly understanding your business aspirations, sector requirements, and customer needs to conceptualize customized IT and digital marketing solutions. Whether you need an SEO kick, a fresher website, or a marketing solution to die for, we customize every ingredient for maximum growth and interaction.",
    imageIcon: "",
    width: 100,
    height: 100,
  },
  {
    id: "03",
    title: "Cutting-Edge Technology",
    desc: "The latest forms of AI, data analytics, and automation equip us with all the technology to stay ahead. Marketing solutions driven by AI help with customer targeting, while predictive analytics guide strategy, making decisions. Keeping in sync with the current technological trends puts your company ahead in this dynamic digital world.",
    imageIcon: "",
    width: 100,
    height: 100,
  },
  {
    id: "04",
    title: "Global Accessibility & round-the-clock assistance",
    desc: "Wherever your business is based, our offering is made to be made available worldwide. Our services have been successfully provided to businesses across various sectors around the globe with solutions that surpass even geographical location constraints. The special assistance team will attend to your inquiries, help modify strategies, and ensure uninterrupted operations around the clock, putting your brand a step ahead of the competition.",
    imageIcon: "",
    width: 100,
    height: 100,
  },
];

export default function WhatMakesStandOut() {
  return (
    <div className="xl:mt-30 md:mt-20 mt-10 overflow-x-hidden">
      <div className="text-center mb-12">
        <p className="font-avalors font-normal text-base md:text-lg text-primary uppercase tracking-[3px] mb-4">
          WHAT MAKES
        </p>

        <h2 className="font-avalors font-normal text-[46px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[120%] tracking-[0px] text-center text-white mb-6 max-w-[1084px] mx-auto px-4 md:whitespace-nowrap">
          INFOGENTECH STAND OUT IN DIGITAL MARKETING
        </h2>

        <p className="font-jost font-medium text-base md:text-lg lg:text-xl leading-relaxed text-[#C9C9C9] max-w-4xl mx-auto px-4">
          We are a worldwide agency that manages higher-level digital marketing for clients around the globe. Our highly qualified and experienced team gives quality output. Customer satisfaction and long-term success are what we aim to achieve for each client that we have. We assure effective growth across the globe and would provide services without fear. Our vast client and sector experience shines through in performance.
        </p>

        <br />

        <p className="font-jost font-medium text-base md:text-lg lg:text-xl leading-relaxed text-[#C9C9C9] max-w-4xl mx-auto px-4">
          Through the years, we have groomed brands as an IT solutions firm. Do not let your competitors overshadow your web presence. Our experts will study trends and optimize your brand visibility. Customized SEO techniques give us the power to measure real success. Let our IT experts work on expanding your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-[1100px] mx-auto px-4">
        {standoutFeatures.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#F6F0FF] text-[#1E1E1E] rounded-xl p-8 shadow-[0_20px_40px_rgba(135,82,255,0.06)] transition-transform duration-300 hover:scale-105 border border-white/10"
          >
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                {feature.imageIcon ? (
                  <Image
                    src={feature.imageIcon}
                    alt={feature.title}
                    width={feature.width}
                    height={feature.height}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 bg-white/20 rounded"></div>
                )}
              </div>

              <h3 className="font-jost font-medium text-xl md:text-2xl leading-[120%] tracking-[0.03em] text-[#1B1B1B] mb-4">
                {feature.title}
              </h3>

              <p className="text-[#3C3C3C] text-base md:text-lg leading-[120%] font-jost">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}