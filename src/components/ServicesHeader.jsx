const ServicesHeader = () => {
  return (
      <div className="container mx-auto md:mb-10 px-4">
      <div className="flex gap-7 flex-row justify-center items-center mt-34"></div>
      <div className="flex justify-center items-center flex-col">
        <p className="font-avalors font-normal lg:text-[75px] md:5xl text-2xl  leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
          Our Services
        </p>
        <p className="font-avalors font-normal lg:text-[75px] md:5xl text-2xl text-center leading-none bg-[linear-gradient(91.32deg,_#6A27FF_-32.61%,_#FFFFFF_19.98%,_#6A27FF_112.29%)] bg-clip-text text-transparent">
          What We <span className="text-primary">Provide</span>
        </p>
        <p className="font-jost md:text-lg text-base font-medium leading-6 text-center md:mt-6 mt-2.5 ">
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
