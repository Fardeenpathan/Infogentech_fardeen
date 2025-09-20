
const HelpCenter = () => {
  return (
    <div className="mt-35 subContainer mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          <div className="flex justify-center items-center mb-40 flex-col">
            <div className="relative w-12 h-12">
              <img
                src="/assist/video/pentagonVideo.gif"
                alt="valueImg"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-0.5 h-28 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 "></div>
          </div>
          <div className="flex flex-col ">
            <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
              Help Center

            </p>
            <p className="font-avalors font-normal text-[75px] leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
              We’re Here to Help, Anytime.
            </p>
            <p className="font-jost font-medium text-lg leading-6 align-middle mt-9">
             Welcome to the Infogentech Help Center, your dedicated hub for IT support, product guidance, and customer service. We know technology is at the core of your business, and our goal is to ensure you always have the resources you need to stay productive and secure.
            </p>
          </div>
        </div>
      </div>
      <section className="flex gap-10 ">
        <div className="flex  items-center mb-40 flex-col">
          <div className="relative w-12 h-12">
            <img
              src="/assist/video/pentagonVideo.gif"
              alt="valueImg"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="w-0.5 h-full rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
        </div>
        <aside className="flex flex-col">
            <article className="space-y-6">
            <p className="font-avalors font-normal text-[30px] leading-[100%] tracking-[0.03em] capitalize mb-6">
              FAQs & Knowledge Base
            </p>
            <h2 className="font-kumbh-sans text-xl font-medium">
              Browse quick answers, troubleshooting steps, and best practices to
              resolve common IT issues.
            </h2>

            <p className="font-avalors font-normal text-[30px] leading-[100%] tracking-[0.03em] capitalize mb-6">
              Product Documentation
            </p>
            <h2 className="font-kumbh-sans text-xl font-medium">
              Access detailed user guides, installation manuals, and setup
              instructions for all of our solutions.
            </h2>

            <p className="font-avalors font-normal text-[30px] leading-[100%] tracking-[0.03em] capitalize mb-6">
              Account & Billing Assistance
            </p>
            <h2 className="font-kumbh-sans text-xl font-medium">
              Get help managing your account, subscriptions, invoices, and
              renewals with ease.
            </h2>
            <p className="font-avalors font-normal text-[30px] leading-[100%] tracking-[0.03em] capitalize mb-6">
              Technical Support
            </p>
            <h2 className="font-kumbh-sans text-xl font-medium">
              From software errors to infrastructure challenges, our IT experts
              are here to resolve issues efficiently.
            </h2>
            <p className="font-avalors font-normal text-[30px] leading-[100%] tracking-[0.03em] capitalize mb-6">
              24/7 Assistance
            </p>
            <h2 className="font-kumbh-sans text-xl font-medium">
              Critical problems can’t wait. Our team provides round-the-clock
              support to keep your systems running.
            </h2>

            <p className="font-avalors font-normal text-[30px] leading-[100%] tracking-[0.03em] capitalize mb-6">
              Contact Options
            </p>
            <h2 className="font-kumbh-sans text-xl font-medium">
              Whether by phone, email, or live chat, we’re here to provide
              personalized assistance whenever you need it.
            </h2>

            <p className="font-jost font-medium text-lg leading-6 align-middle mt-9">
           At Infogentech, we believe support should go beyond solving problems, it should empower you to get the most out of your technology. Our Help Center is designed to give you peace of mind, reliable resources, and expert assistance whenever you need it.

            </p>

            <footer className="text-end text-xs text-gray-500 mt-6">
              <p>
                © {new Date().getFullYear()} Infogentech. All rights reserved.
              </p>
            </footer>
          </article>
        </aside>
      </section>
    </div>
  );
};

export default HelpCenter;
