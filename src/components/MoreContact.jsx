import Icons from "./ui/Icon";
export default function MoreContact() {
  return (
    <div className="flex gap-7 flex-row justify-center items-center ">
      <div className="flex justify-center items-center flex-col">
        <p className="font-avalors font-normal text-[32px] leading-[24px] align-middle text-[#8752FF] mt-5">
          Looking for More Information?
        </p>
        <p className="font-[jost] font-medium text-[18px] leading-[24px] align-middle mt-3">
          Check out our FAQs or About Us page for quick answers.
        </p>
        <div className="flex justify-center items-center gap-20 mt-14">
          <div class="p-[1px] rounded-lg bg-[linear-gradient(106.97deg,#492B8D_10.89%,#5F439D_100.67%)] inline-block">
            <div class="rounded-lg bg-[#15152a] p-6 w-[313px] h-[173px]">
              <div className="bg-[#262626] px-5 py-2.5 flex gap-2 w-fit radius">
                <Icons name="Questionmark" />
                <span className="font-jost font-medium text-[20px] leading-[24px] align-middle">
                  FAQs
                </span>
              </div>
              <p className="text-[#9CA3AF] font-jost font-medium text-[20px] leading-[24px] align-middle mt-3">
                Visit our FAQ page.
              </p>
              <p className="mt-9">
                <Icons name="Link" />
              </p>
            </div>
          </div>
          <div class="p-[1px] rounded-lg bg-[linear-gradient(106.97deg,#492B8D_10.89%,#5F439D_100.67%)] inline-block">
            <div class="rounded-lg bg-[#15152a] p-6 w-[313px] h-[173px]">
              <div className="bg-[#262626] px-5 py-2.5 flex gap-2 w-fit radius">
                <Icons name="People" />
                <span className="font-jost font-medium text-[20px] leading-[24px] align-middle">
                  About Us
                </span>
              </div>
              <p className="text-[#9CA3AF] font-jost font-medium text-[20px] leading-[24px] align-middle mt-3">
                Visit our Aboutus page.
              </p>
              <p className="mt-9">
                <Icons name="Link" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
