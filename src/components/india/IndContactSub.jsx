
import Icons from "@/components/ui/Icon";

export default function IndContactSub() {
  return (
    <section className="relative container flex h-96 flex-col items-center justify-center text-center py-20 px-8 sm:px-16 md:px-24 lg:px-32 rounded-2xl overflow-hidden bg-[#f5efff] md:w-[85%] mx-auto">

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex justify-center">
        <Icons name="IndCurve" />
      </div>
    <div className="relative z-10">
          <p className="font-avalors text-primary text-[32px] font-semibold tracking-widest mb-3">
            LET’S GET STARTED
          </p>
          <h1 className="font-avalors text-[46px] font-bold text-gray-400 uppercase">
            WORLD CLASS IT SOLUTIONS PARTNER OF CHOICE
          </h1>
        </div>
    </section>
  );
}