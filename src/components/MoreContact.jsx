import Icons from "./ui/Icon";
export default function MoreContact() {
  return (
    <div className="flex gap-7 flex-row justify-center items-center ">
      <div className="flex justify-center items-center flex-col">
        <p className="font-avalors font-normal text-[32px] leading-6 align-middle text-[#8752FF] mt-5">
          Looking for More Information?
        </p>
        <p className="font-jost font-medium text-lg leading-6 align-middle mt-3">
          Check out our FAQs or About Us page for quick answers.
        </p>
        <div className="flex justify-center items-center gap-20 mt-14">
          <a href="/faq" className="p-[1px] rounded-lg bg-[linear-gradient(106.97deg,#492B8D_10.89%,#5F439D_100.67%)] inline-block">
            <div  className="rounded-lg bg-[#15152a] p-6 w-[313px] h-[173px]">
              <div className="bg-[#262626] px-5 py-2.5 flex gap-2 w-fit radius">
                <Icons name="Questionmark" />
                <span className="font-jost font-medium text-[20px] leading-6 align-middle">
                  FAQs
                </span>
              </div>
              <p className="text-[#9CA3AF] font-jost font-medium text-[20px] leading-6 align-middle mt-3">
                Visit our FAQ page.
              </p>
              <p className="mt-9">
                <Icons name="Link" />
              </p>
            </div>
          </a>
          <a href="/aboutUs" className="p-[1px] rounded-lg bg-[linear-gradient(106.97deg,#492B8D_10.89%,#5F439D_100.67%)] inline-block">
            <div className="rounded-lg bg-[#15152a] p-6 w-[313px] h-[173px]">
              <div className="bg-[#262626] px-5 py-2.5 flex gap-2 w-fit radius">
                <Icons name="People" />
                <span className="font-jost font-medium text-[20px] leading-6 align-middle">
                  About Us
                </span>
              </div>
              <p className="text-[#9CA3AF] font-jost font-medium text-[20px] leading-6 align-middle mt-3">
                Visit our About us page.
              </p>
              <p className="mt-9">
                <Icons name="Link" />
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
