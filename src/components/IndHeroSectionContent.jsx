



export default function IndHeroSectionContent() {
  return (
    <div className="max-w-6xl leading-[160%] tracking-[3px] mx-auto text-white">
      <div className="text-[80px] font-avalors"><span>CREATING</span><span className="bg-primary px-12 rounded-full ml-10 font-avalors">BRANDS</span></div>
      <div className="text-[80px] mt-20 flex justify-center items-center"><span className="font-avalors">AND DIGITAL</span><span className="text-lg ml-10">We build strong brand identities and deliver<br /> digital solutions that blend creativity and <br />technology to help businesses grow and engage.</span></div>
      <div className="mt-20 flex items-center text-[80px] font-avalors">
     <span className="bg-primary px-12 rounded-full ml-10 font-avalors">
    Solutions
  </span>

  <span className="relative w-40 h-40 flex items-center justify-center ml-8">
    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" />
      </svg>
    </div>
    <div className="absolute w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
            fill="none"
          />
        </defs>
        <text className="fill-white">
          <textPath
            href="#circlePath"
            startOffset="50%"
            textAnchor="middle"
            className="text-lg font-jost tracking-wider"
          >
            LEADING DIGITAL COMPANY SINCE 2022 * LEADING DIGITAL COMPANY SINCE 2022 *
          </textPath>
        </text>
      </svg>
    </div>
  </span>
</div>

    </div>
  );
}




