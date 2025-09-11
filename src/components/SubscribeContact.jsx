
import Button from "./ui/Button";
export default function SubscribeContact() {
  return (
    <div className="mt-35 subContainer mx-auto bg-[#141313] h-52 p-14 flex justify-between gap-80">
      <div>
        <p className="font-avalors font-normal text-[30px] leading-[32px]">
          Join 2,000+ subscribers
        </p>
        <p className="font-jost font-normal text-[20px] leading-[30px] mt-4">
          Stay in the loop with everything you need to know.
        </p>
      </div>
      <div className=" font-normal text-lg leading-[24px] font-jost">
        <div className="flex gap-1">
            <input
          type="text"
          id="email"
          className="w-[360px] h-[48px] 
         radius border bg-white text-black placeholder:text-[#667085] px-4 py-3 outline-none focus:border-[#8752FF]"
          placeholder="Enter your email"
        />
         <Button text="Subscribe" className="!py-3 !px-5"/> 
        </div>
       
        <p className="font-jost font-normal text-lg leading-[24px] text-[#C4C4C4] mt-2">
          We care about your data in our <a href="#" className="underline">privacy policy</a>
        </p>
      </div>
    </div>
  );
}
