import Button from "./ui/Button";
export default function SubscribeContact() {
  return (
    <div className="subContainer mx-auto px-4 xl:px-10">
      <div className="mt-35  bg-[#141313] xl:p-14 lg:p-10 md:py-10 p-5 flex md:justify-between md:flex-row flex-col  items-center ">
        <div className="flex items-center flex-col text-center md:items-start pr-5">
          <p className="font-avalors font-normal xl:text-[30px] leading-8 md:text-[24px] text-xl">
            Join 2,000+ subscribers
          </p>
          <p className="font-jost font-normal xl:text-xl leading-8 md:leading-6 xl:mt-4 mt-2 md:text-lg">
            Stay in the loop with everything you need to know.
          </p>
        </div>
        <div className=" font-normal text-xl leading-6 font-jost">
          <div className="flex md:gap-1 items-center flex-col gap-4 md:items-start md:flex-row">
            <input
              type="text"
              id="email"
              className="xl:w-88 md:min-w-60 xl:h-12 md:h-10 w-full
            radius border bg-white text-black placeholder:text-[#667085] xl:px-4 xl:py-3 px-2 py-3  outline-none focus:border-[#8752FF] md:text-left text-center justify-center"
              placeholder="Enter your email "
            />
            <Button
              text="Subscribe"
              className="xl:!py-3.5 xl:!px-5 md:!px-4 md:!py-2 w-full md:w-fit !py-3"
            />
          </div>
          <p className="font-jost font-normal xl:text-lg md:text-sm leading-6 text-[#C4C4C4] mt-2 xl:text-start text-center">
            We care about your data in our &nbsp;
            <a href="/privacyPolicy" className="underline">
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
