"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function IndServiceDetails() {
    const testimonial = [
        {
            des: '"You made it so simple. My new site is so much faster & easier to work"',
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
            name: 'Suraj Kumar',
            designation: 'Founder of Taskio'
        },

        {
            des: '"we spend description 2 You made it so simple. My new site is so much faster"',
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
            name: 'Ashish verma',
            designation: 'CEO of company'
        },

    ]
    return (
        <>
            <div className="grid grid-cols-[3fr_1fr] gap-12 items-start">
                <div>
                    <img src="https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png" alt="" className="rounded-xl w-full h-108" />
                    <div className="pt-12 pb-8">
                        <h2 className="text-[24px] font-montserrat font-semibold pb-2 text-black">1. Design functional website fast</h2>
                        <p className="font-montserrat text-[18px] text-gray-400 pr-2">
                            When you’re designing your site, it’s easy to get caught up in adding too many elements to your pages. You want your site to be visually appealing, you continually add elements to add another dimension of visual interest to your page. This can lead to your site getting cluttered and overwhelming. The other issue is that, if certain elements don’t have a purpose on your site, it can leave your audience confused. Every element on your site should have a purpose. Imagine putting a call to action (CTA) button that doesn’t lead to a new page.
                        </p>
                    </div>
                    <div className="pb-8">
                        <h2 className="text-[24px] font-montserrat font-semibold pb-2 text-black">2. Design for the user first</h2>
                        <p className="font-montserrat text-[18px] text-gray-400 pr-2">
                            People would constantly try to click on the button, and it would leave them confused as to why it doesn’t take them somewhere. Or, think what would happen if a website design prompted users to “Call now” on a top-of-the-funnel blog post. People probably wouldn’t click. Create elements that are functional and enhance the user experience on your site. </p>
                    </div>
                    <div className="grid grid-cols-3 gap-6 pb-8">
                        <img src="https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png" alt="" className="" />
                        <img src="https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png" alt="" className="" />
                        <img src="https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png" alt="" className="" />
                    </div>
                    <p className="font-montserrat text-[18px] text-gray-400 pr-2">When you’re design beautiful websites, you want to focus on designs for the user. Your audience will be engaging on your site and learning more about your business. It’s important that you build a site that works for them. As you construct your awesome website design.</p>
                </div>
                <div className="">
                    <div></div>

                    <div className="px-6 py-8 bg-[#EAE6FF] rounded-2xl mb-12">
                        {/* testimonial */}
                        <Swiper
                            loop
                            speed={1000}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            modules={[Autoplay]}
                            className="w-[350px]"
                        >
                            {testimonial.map((item, i) => (
                                <SwiperSlide key={i} className="text-center space-y-4">
                                    <p className="text-[30px] leading-10 px-6 font-semibold">
                                        {item.des}
                                    </p>
                                    <div className="flex flex-col-2 gap-4 text-center justify-center">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                        <div>
                                        <p className="text-[24px] text-primary">{item.name}</p>
                                        <p className="text-[18px] text-black">{item.designation}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* end of testiminal */}

                    </div>

                    <div className="relative bg-[url('https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png')] bg-cover bg-center px-6 py-16 text-center rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="relative z-10">
                            <h2 className="text-[26px] text-white font-montserrat font-semibold mb-6">
                                Do You Need Any Consulting Service?
                            </h2>
                            <Link
                                href="/contact"
                                className="border-[#d4d2f5] bg-primary text-white rounded-4xl py-2 px-6 font-semibold inline-block"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
            <div className="pt-12">
                <hr className="w-full border-t-4" />
            </div>

        </>
    );
}