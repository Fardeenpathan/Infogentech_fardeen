import Icons from "./ui/Icon";

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
            <div className="flex justify-between gap-8">
                <div>
                    <p className="font-avalors font-normal text-[32px] leading-6 align-middle text-primary">
                        Our Services
                    </p>
                    <p className="font-avalors font-normal text-[46px] leading-12 align-middle capitalize mt-4.5 max-w-2xl">
                        Delivering Solutions That Drive Results
                    </p></div>
                <p className="font-montserrat font-medium text-lg leading-[150%] tracking-[-0.02em] max-w-2xl py-4">
                    We provide a wide range of digital and creative services designed to help your business grow. From stunning websites and engaging social media designs to complete branding solutions, our team ensures every project is tailored to meet your unique goals.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 mt-16">
                {services.map((service, index) => (
                    <div key={index} className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-purple-100 rounded-full p-4">
                                <Icons name={service.icon} />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="font-montserrat font-medium text-lg tracking-tightest">{service.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
