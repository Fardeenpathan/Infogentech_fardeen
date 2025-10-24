"use client";
import Icons from "../ui/Icon";
import { toast } from 'react-hot-toast';
export default function IndSharePost({className=""}) {
  const shareItems = [
    { id: 1, label: "Copy link", icon: "IndCopyLink", action: "copy" },
    { id: 2, icon: "Twitter", action: "x" },
    { id: 3, icon: "Facebook", action: "facebook" },
    { id: 4, icon: "LinkedIn", action: "linkedin" },
  ];

  const handleShare = (action) => {
    const url = window.location.href;

    switch (action) {
      case "copy":
        navigator.clipboard.writeText(url);
        toast.success("Link copied!");
        break;
      case "x":
        window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.ph?u=${url}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/company/infogentech/`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <section className="relative container flex flex-col items-center justify-between text-center md:py-10 py-1 rounded-2xl overflow-hidden mx-auto ">
      <div className="flex w-full items-center justify-between">
        <p className={`font-montserrat font-semibold text-[#535862]-700 lg:text-xl text-[12px]`}>Share this post</p>
        <div className="flex items-center lg:gap-3 gap-1">
          <button
            onClick={() => handleShare("copy")}
            className={`flex items-center justify-center gap-2 px-[14px] py-[10px] w-[150px] h-[40px] bg-[#693EC9] text-white text-sm font-medium rounded-lg border border-[#D5D7DA] shadow-[0px_1px_2px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_rgba(10,13,18,0.05)] hover:bg-[#5b31b4] transition-all duration-200`}
          >
            <Icons name="Link" className="w-4 h-4" />
            <span className="font-montserrat md:text-xl-500 cursor-pointer">Copy link</span>
          </button>
          {shareItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => handleShare(item.action)}
              className="flex items-center cursor-pointer justify-center w-[40px] h-[40px] bg-[#693EC9] text-white rounded-lg border border-[#D5D7DA] shadow-[0px_1px_2px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_rgba(10,13,18,0.05)] hover:bg-[#5b31b4] transition-all duration-200"
            >
              <Icons name={item.icon} className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
