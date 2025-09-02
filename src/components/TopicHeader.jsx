import Image from 'next/image';

export default function TopicHeader({name = "Our Services" , subheading = "Explore Our Digital Solutions"}) {
  return (
    < div className="flex gap-7 flex-row">
     <div className="flex justify-center items-center flex-col">
      {/* <div className='shadow-[7px_-4px_108px_2px_#8955FF]'> */}
         <Image
              src="/assist/img/Polygon.png"
              alt="Best Design. Development. Marketing."
              width={46}
              height={46}
              objectFit="cover"
            />
      {/* </div> */}
           
            <div className="w-0.5 h-28 rounded-full mt-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-800"></div>
          </div>
          <div>
            <p className='font-avalors font-normal text-[32px] leading-[24px] align-middle text-primary'>{name}</p>
            <p className='font-[jost]font-medium text-[18px] leading-[24px] align-middle mt-3'>{subheading}</p>
          </div>
    </div>
  )
}
