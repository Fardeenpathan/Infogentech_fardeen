
import Icons from "@/components/ui/Icon";

export default function IndContactSub() {
  return (
    <section className="relative container flex lg:h-96 h-64 flex-col items-center justify-center text-center py-20 px-8 sm:px-16 md:px-24 lg:px-32 rounded-2xl overflow-hidden bg-[#f5efff] md:w-[85%] mx-auto">

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex justify-center">
        <Icons name="IndCurve" />
      </div>
    <div className="relative z-10">
          <h3 className="font-avalors text-primary lg:text-[32px] text-2xl font-semibold tracking-widest mb-3">
            LET’S GET STARTED
          </h3>
          <h2 className="font-avalors lg:text-[46px] text-3xl font-bold text-gray-400 uppercase">
            WORLD CLASS IT SOLUTIONS PARTNER OF CHOICE
          </h2>
        </div>
    </section>
  );
}