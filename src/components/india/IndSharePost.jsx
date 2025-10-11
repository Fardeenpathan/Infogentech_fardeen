"use client";
import Icons from "../ui/Icon";

export default function IndSharePost() {
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
        alert("Link copied!");
        break;
      case "x":
        window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <section className="relative container flex flex-col items-center justify-center text-center py-10 px-8 sm:px-16 md:px-24 lg:px-32 rounded-2xl overflow-hidden bg-[#fff] md:w-[85%] mx-auto my-10">
      <div className="flex w-full items-center justify-between">
        <p className="font-montserrat font-semibold text-[#535862]-700 text-[20px]-600">Share this post</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleShare("copy")}
            className="flex items-center justify-center gap-2 px-[14px] py-[10px] w-[150px] h-[40px] bg-[#693EC9] text-white text-sm font-medium rounded-lg border border-[#D5D7DA] shadow-[0px_1px_2px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_rgba(10,13,18,0.05)] hover:bg-[#5b31b4] transition-all duration-200"
          >
            <Icons name="Link" className="w-4 h-4" />
            <span className="font-montserrat text-[20px]-500">Copy link</span>
          </button>
          {shareItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => handleShare(item.action)}
              className="flex items-center justify-center w-[40px] h-[40px] bg-[#693EC9] text-white rounded-lg border border-[#D5D7DA] shadow-[0px_1px_2px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_rgba(10,13,18,0.05)] hover:bg-[#5b31b4] transition-all duration-200"
            >
              <Icons name={item.icon} className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
