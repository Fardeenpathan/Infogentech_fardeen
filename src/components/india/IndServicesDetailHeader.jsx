

export default function IndServicesDetailHeader({servicedetailheader}) { 
    return(
<div className="w-full bg-[#E6DBFF] lg:h-158 h-100 justify-center items-center flex flex-col -z-10">
      <h1 className="font-avalors font-normal lg:text-[80px] md:text-[46px] text-2xl leading-[1.2] lg:leading-[1.6] tracking-[3px] align-middle text-primary text-center">
        {servicedetailheader.name}
      </h1>
      <p className="font-montserrat lg:text-lg text-sm max-w-4xl mx-auto text-center text-gray-600 font-medium px-2">
        {servicedetailheader.des}
      </p>
    </div>
    );
}