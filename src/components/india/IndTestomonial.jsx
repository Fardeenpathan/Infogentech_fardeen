import Image from "next/image";
import Icons from "@/components/ui/Icon";
import IndMidHeader from "./IndMidHeader";
const reviews = [
  {
    id: 1,
    text: "Their SEO work took us from barely showing up in searches to ranking on the first page for important keywords. They clearly know the healthcare space inside and out.",
    name: "Ethan Roberts",
    role: "Enterpreneur",
    img: "/assist/img/ethan.jpg",
    },
  {
    id: 2,
    text: "From a new logo to a refreshed social media strategy, they completely elevated our brand. Customer engagement is way up, and foot traffic to our store has been better than ever.",
    name: "Jessica Collins",
    role: "Manager",
    img: "/assist/img/jessica.jpg",
  },
  {
    id: 3,
    text: "They brought our vision to life with modern design and a smart strategy that really connects with our clients. We constantly get compliments on our new website and branding.",
    name: "Marcus Lee",
    role: "Founder StartTech",
    img: "/assist/img/Marcus.jpg",
  },
  {
    id: 4,
    text: "They helped us run ads that finally brought in the right customers. Within weeks, we saw more calls and new projects coming through.",
    name: "Sarah Mitchell",
    role: "Enterpreneur",
    img: "/assist/img/sarah.jpg",
  }
];
const IndTestomonial = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto pb-20 font-montserrat ">
      <IndMidHeader
        title="Client Testimonials"
        subtitle="What are they talking about?"
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12 justify-items-center">
        {reviews.map((review) => (
          <div
  key={review.id}
  className="bg-[#fffbfb] py-10 min-h-104 px-6 rounded-2xl border-px border-[#F5F5F5] relative"
>
  <Icons name="Quote" />
  <p className="text-lg font-medium mt-6">{review.text}</p>
  <div className="flex gap-4 absolute bottom-5 left-6">
    <Image
      src={review.img}
      alt="Review"
      width={55}
      height={55}
      className="rounded-full sm:w-14 sm:h-14 object-cover w-6 h-6"
    />

    <div>
      <h4 className="text-2xl text-gray-400 font-semibold">{review.name}</h4>
      <p className="text-lg text-gray-200 font-medium">{review.role}</p>
    </div>
  </div>
</div>

        ))}
      </div>
      
    </div>
  )
}
export default IndTestomonial;
