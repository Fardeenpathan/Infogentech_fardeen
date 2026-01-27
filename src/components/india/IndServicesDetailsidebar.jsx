"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
export default function IndServicesDetailsidebar() {
    const testimonial = [
        {
            des: '"You made it so simple. My new site is so much faster & easier to work"',
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
            name: 'Suraj Kumar',
            designation: 'Founder of Taskio'
        },

        {
            des: '"we spend description 2 You made it so simple. My new site."',
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
            name: 'Ashish verma',
            designation: 'CEO of company'
        },

        {
            des: '"third we spend description 2 You made it so simple. My new site."',
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
            name: 'Sandeep Das ',
            designation: 'M.D of company'
        },

    ]

    return (
        <div>
            <div>
                <div className="lg:px-6 px-0 py-8 bg-[#EAE6FF] rounded-2xl mb-12">
                    {/* testimonial */}
                    <Swiper
                        loop
                        speed={1000}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={[Autoplay, Pagination]}
                        className="lg:w-[350px] md:w-full"
                        slidesPerView={1}
                        spaceBetween={4}
                        breakpoints={{
                            768: {
                                slidesPerView: 2, // tablet
                            },
                            1024: {
                                slidesPerView: 1, // desktop
                            },
                        }}
                    >
                        {testimonial.map((item, i) => (
                            <SwiperSlide key={i} className="text-left space-y-4 pb-12">
                                <p className="text-[30px] leading-10 px-6 font-semibold text-black">
                                    {item.des}
                                </p>
                                <div className="flex flex-col-2 gap-4 px-6">
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
    )
}