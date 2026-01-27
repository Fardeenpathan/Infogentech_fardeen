export default function IndServiceDetails({ servicedetailcontent }) {
    return (
        <>
                <div>
                    <img src={servicedetailcontent.img1} alt="" className="rounded-xl w-full h-108" />
                    <div className="pt-12 pb-8">
                        <h2 className="text-[24px] font-montserrat font-semibold pb-2 text-black">{servicedetailcontent.heading1}</h2>
                        <p className="font-montserrat text-[18px] text-gray-400 pr-2">
                            {servicedetailcontent.para1}    </p>
                    </div>
                    <div className="pb-8">
                        <h2 className="text-[24px] font-montserrat font-semibold pb-2 text-black">{servicedetailcontent.heading2}</h2>
                        <p className="font-montserrat text-[18px] text-gray-400 pr-2">
                            {servicedetailcontent.para2} </p>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-8">
                        <img src={servicedetailcontent.img2} alt="" className="" />
                        <img src={servicedetailcontent.img3} alt="" className="" />
                        <img src={servicedetailcontent.img4} alt="" className="" />
                    </div>
                    <p className="font-montserrat text-[18px] text-gray-400 pr-2">{servicedetailcontent.para3}</p>
                </div>
               

        </>
    );
}