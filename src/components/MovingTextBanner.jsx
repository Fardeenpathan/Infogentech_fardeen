
import Icons from "@/components/ui/Icon";

const MovingTextBanner = () => {
  return (
    <div className="relative my-30 bg-primary">
      <div className="moving-text-container overflow-hidden bg-[#3F237F] text-white relative z-10 custom-skew">
        <div className="moving-text-content font-montserrat font-normal text-xl -tracking-[0.05em]">
          <div className="flex gap-96">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i} className="md:py-4 py-2 flex gap-28">
                Design <Icons name="IndStar" /> Development <Icons name="IndStar" /> 
                Branding <Icons name="IndStar" /> Product
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingTextBanner;
