import Icons from "./ui/Icon";
import IndTopicHeader from "./IndTopicHeader";

const services = [
    {
        icon: "DevelopmentInd",
        title: "Development",
        description: "Crafting innovative and robust digital solutions.",
    },
    {
        icon: "MarketingInd",
        title: "Design",
        description: "Delivering cutting-edge strategies for business growth.",
    },
    {
        icon: "MarketingInd",
        title: "Marketing",
        description: "Creating stunning, engaging and user-friendly interfaces.",
    },
    {
        icon: "ContentInd",
        title: "Content",
        description: "Producing engaging and high-quality material for all platforms.",
    },
];

export default function IndServices() {
    return (
        <div className="mt-96 container mx-auto px-10">
            <IndTopicHeader title="Our Services" subtitle="Delivering Solutions That Drive Results" description="We provide a wide range of digital and creative services designed to help your business grow. From stunning websites and engaging social media designs to complete branding solutions, our team ensures every project is tailored to meet your unique goals." />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 mt-16">
                {services.map((service, index) => (
                    <div key={index} className="text-center max-w-3xs items-center">
                        <div className="flex justify-center mb-4 ">
                            <div className="bg-purple-50 rounded-full p-6">
                                <div className="bg-purple-100 rounded-full p-6">
                                    <div className="bg-purple-200 rounded-full p-4">
                                        <Icons name={service.icon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-[24px] font-semibold mb-2 mt-10 text-gray-400 leading-[1.5] tracking-[-0.02em]">{service.title}</h3>
                        <p className="font-montserrat font-medium text-lg tracking-tightest text-gray-200">{service.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
