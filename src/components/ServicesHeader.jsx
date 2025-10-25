const ServicesHeader = () => {
  return (
      <div className="container mx-auto mt-24 mb-10">
      <div className="flex gap-7 flex-row justify-center items-center mt-43"></div>
      <div className="flex justify-center items-center flex-col">
        <p className="font-avalors font-normal md:text-[75px] text-5xl leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
          Our Services
        </p>
        <p className="font-avalors font-normal md:text-[75px] text-5xl text-center leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
          What We <span className="text-primary">Provide</span>
        </p>
        <p className="font-jost md:text-lg text-base font-medium leading-6 text-center mt-6">
          Shaping digital futures with customized digital solutions that deliver
          results.
        </p>
        <div className="w-0.5 md:h-28 h-20 rounded-full md:mb-10 mb-5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800 mt-10"></div>
        <div className="relative w-12 h-12">
          <img
            src="/assist/video/pentagonVideo.gif"
            alt="valueImg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
