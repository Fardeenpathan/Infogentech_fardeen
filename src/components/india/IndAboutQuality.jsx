import Icons from "../ui/Icon";

const items = [
  { id: 1, name: "Best quality support", icon: "DesignInd" },
  { id: 2, name: "Serve the best", icon: "DesignInd" },
  { id: 3, name: "Money back guarantee", icon: "DesignInd" },
  { id: 4, name: "Trusted Professionals", icon: "DesignInd" },
];

export default function IndAboutQuality() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {items.map((item) => (
        <>
          <div className="flex gap-5 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-xl opacity-20 -z-10"></div>
              <div className="p-4">
                <Icons name={item.icon} />
              </div>
            </div>
            <p className="font-montserrat font-bold text-2xl text-[#252525]">
            {item.name}
          </p>
          </div>
        </>
      ))}
    </div>
  );
}
