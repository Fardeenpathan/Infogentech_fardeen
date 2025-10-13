
const HelpCenter = () => {
  return (
    <div className=" subContainer mx-auto p-3">
          <div className="flex flex-col mt-35">
            <p className="font-avalors font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-primary">
              Help Center

            </p>
            <p className="font-avalors font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-none text-primary mt-2">
              We’re Here to Help, Anytime.
            </p>
            <p className="font-jost font-medium text-base sm:text-lg md:text-xl leading-relaxed mt-6">
              Welcome to the Infogentech Help Center, your dedicated hub for IT support, product guidance, and customer service. We know technology is the core of your business and we aim to ensure you always have the resources you need to maintain the integrity of your business.
            </p>
          </div>
 <aside className="flex flex-col p-4">
          <article className="space-y-6">
            <p className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[100%] tracking-[0.03em] capitalize mb-4">
              FAQs & Knowledge Base -
            </p>
            <h2 className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Browse quick answers, troubleshooting steps and best practices to resolve common IT issues.
            </h2>

            <p className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[100%] tracking-[0.03em] capitalize mb-4">
              Billing Assistance – 
            </p>
            <h2 className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Easily manage your subscriptions, invoices and renewals.
            </h2>

            <p className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[100%] tracking-[0.03em] capitalize mb-4">
              Technical Support –
            </p>
            <h2 className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
               From Website Issues to Software Issues, our IT experts are here to resolve issues efficiently.
            </h2>

            <p className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[100%] tracking-[0.03em] capitalize mb-4">
              24/7 Assistance –
            </p>
            <h2 className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Critical problems can’t wait. Our team provides round-the-clock support to keep your systems running.
            </h2>

            <p className="font-avalors font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[100%] tracking-[0.03em] capitalize mb-4">
             Contact Options – 
            </p>
            <h2 className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
            Whether by phone or email, we are here to provide assistance whenever you need it.
            </h2>

            <p className="font-jost font-medium text-base sm:text-lg md:text-xl leading-relaxed mt-9">
              At Infogentech, we believe support should go beyond solving problems, it should empower you to get the most out of your technology. Our Help Center is designed to give you peace of mind, reliable resources, and expert assistance whenever you need it.
            </p>
            <footer className="text-end text-xs sm:text-sm md:text-base text-gray-500 mt-6">
              <p>
                © {new Date().getFullYear()} Infogentech. All rights reserved.
              </p>
            </footer>
          </article>
        </aside>
    </div>
  );
};

export default HelpCenter;
