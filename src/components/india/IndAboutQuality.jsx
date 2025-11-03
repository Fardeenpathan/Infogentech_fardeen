import Icons from "../ui/Icon";

const items = [
  { id: 1, name: "Best quality support", icon: "Trust" },
  { id: 2, name: "Serve the best", icon: "ServeBest" },
  { id: 3, name: "Money back guarantee", icon: "Money" },
  { id: 4, name: "Trusted Professionals", icon: "TrustInd" },
];

export default function IndAboutQuality() {
  return (
    <div className="grid md:grid-cols-2 lg:gap-6 grid-cols-1 gap-2">
      {items.map((item) => (
          <div className="flex gap-5 items-center" key={item.id}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-xl opacity-20 -z-10"></div>
              <div className="p-4">
                <Icons name={item.icon} />
              </div>
            </div>
            <p className="font-montserrat font-bold lg:text-2xl text-lg text-gray-600">
            {item.name}
          </p>
          </div>
      ))}
    </div>
  );
}
