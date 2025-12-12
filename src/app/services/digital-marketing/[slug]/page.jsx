"use client";
import Image from "next/image";
import IndSharePost from "@/components/india/IndSharePost";
// import IndServiceCategory from "@/components/india/IndServiceCategory";
import IndFaqsBlog from "@/components/india/IndFaqsBlog";
import { serviceContent } from "../contentServices";
import { useParams } from "next/navigation";
const ServiceShow = () => {
  const params = useParams();
  const service = serviceContent.find((item) => item.slug === params.slug);

  return (
    <>
      <section className="pb-10">
        <div className="w-full bg-gradient-to-b from-[#E6DBFF] to-white lg:h-158 h-100 justify-center items-center flex flex-col">
          <h1 className="font-avalors  font-normal lg:text-[80px] md:text-[46px] text-2xl leading-[1.6] tracking-[3px] align-middle text-primary uppercase">
            services Details
          </h1>
          <p className="font-montserrat lg:text-lg text-sm max-w-4xl mx-auto text-center text-gray-600 font-medium px-2">
            Smart IT solutions that optimize operations, strengthen security,
            and drive business growth.
          </p>
        </div>
      </section>

      <div className="flex justify-between container mx-auto md:gap-10 gap-4 relative lg:-top-24 -top-36 px-4">
        <div>
          {service.image && (
            <Image
              src={service.image}
              alt={service.heading}
              width={1400}
              height={460}
              className="w-full lg:h-140 h-84 object-fill -z-10 rounded-3xl"
            />
          )}
          {service.heading && (
            <div className="md:mt-18 mt-4 px-2">
              <h1 className="font-montserrat font-bold lg:text-5xl md:text-4xl text-3xl text-gray-400 mb-6">
                {service.heading}
              </h1>
            </div>
          )}

          {service.paraTitle && (
            <div className="md:mt-8 mt-4 font-montserrat text-lg leading-[30px] w-full px-2 space-y-4">
              {service.paraTitle.map((para, index) => (
                <p key={index} className="text-gray-700">{para}</p>
              ))}
            </div>
          )}

          {service.heading2 && (
            <div className="md:mt-12 mt-6 px-2">
              <h2 className="font-montserrat font-bold lg:text-4xl md:text-3xl text-2xl text-gray-400 mb-4">
                {service.heading2}
              </h2>
            </div>
          )}

          {service.paraTitle2 && (
            <div className="md:mt-6 mt-4 font-montserrat text-lg leading-[30px] w-full px-2 space-y-4">
              {service.paraTitle2.map((para, index) => (
                <p key={index} className="text-gray-700">{para}</p>
              ))}
            </div>
          )}

          {service.heading3 && (
            <div className="md:mt-12 mt-6 px-2">
              <h2 className="font-montserrat font-bold lg:text-4xl md:text-3xl text-2xl text-gray-400 mb-4">
                {service.heading3}
              </h2>
            </div>
          )}

          {service.paraTitle3 && (
            <div className="md:mt-6 mt-4 font-montserrat text-lg leading-[30px] w-full px-2 space-y-4">
              {service.paraTitle3.map((para, index) => (
                <p key={index} className="text-gray-700">{para}</p>
              ))}
            </div>
          )}

          {service.services && (
            <div className="md:mt-8 mt-4 px-2 space-y-6">
              {service.services.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="font-montserrat font-bold text-2xl text-gray-400 mb-3">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="font-montserrat text-lg leading-[30px] text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {service.heading4 && (
            <div className="md:mt-12 mt-6 px-2">
              <h2 className="font-montserrat font-bold lg:text-4xl md:text-3xl text-2xl text-gray-400 mb-4">
                {service.heading4}
              </h2>
            </div>
          )}

          {service.paraTitle4 && (
            <div className="md:mt-6 mt-4 font-montserrat text-lg leading-[30px] w-full px-2 space-y-4">
              {service.paraTitle4.map((para, index) => (
                <p key={index} className="text-gray-700">{para}</p>
              ))}
            </div>
          )}

          {service.platforms && (
            <div className="md:mt-8 mt-4 px-2 space-y-6">
              {service.platforms.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-montserrat font-bold text-2xl text-gray-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-montserrat text-lg leading-[30px] text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {service.whyChoose && (
            <div className="md:mt-8 mt-4 px-2 space-y-6">
              {service.whyChoose.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg">
                  <h3 className="font-montserrat font-bold text-2xl text-gray-400 mb-3">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="font-montserrat text-lg leading-[30px] text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
          {service.heading5 && (
            <div className="md:mt-12 mt-6 px-2">
              <h2 className="font-montserrat font-bold lg:text-4xl md:text-3xl text-2xl text-gray-400 mb-4">
                {service.heading5}
              </h2>
            </div>
          )}

          {service.paraTitle5 && (
            <div className="md:mt-6 mt-4 font-montserrat text-lg leading-[30px] w-full px-2 space-y-4">
              {service.paraTitle5.map((para, index) => (
                <p key={index} className="text-gray-700">{para}</p>
              ))}
            </div>
          )}

          {service.process && (
            <div className="md:mt-8 mt-4 px-2 space-y-6">
              {service.process.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md ">
                  <h3 className="font-montserrat font-bold text-2xl text-gray-400 mb-3">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="font-montserrat text-lg leading-[30px] text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
          {service.heading6 && (
            <div className="md:mt-12 mt-6 px-2">
              <h2 className="font-montserrat font-bold lg:text-4xl md:text-3xl text-2xl text-gray-400 mb-4">
                {service.heading6}
              </h2>
            </div>
          )}

          {service.paraTitle6 && (
            <div className="md:mt-6 mt-4 font-montserrat text-lg leading-[30px] w-full px-2 space-y-4">
              {service.paraTitle6.map((para, index) => (
                <p key={index} className="text-gray-700">{para}</p>
              ))}
            </div>
          )}

          {service.heading7 && (
            <div className="md:mt-12 mt-6 px-2">
              <h2 className="font-montserrat font-bold lg:text-4xl md:text-3xl text-2xl text-gray-400 mb-4">
                {service.heading7}
              </h2>
            </div>
          )}

          {service.paraTitle7 && (
            <div className="md:mt-6 mt-4 font-montserrat text-lg leading-[30px] w-full px-2 space-y-4">
              {service.paraTitle7.map((para, index) => (
                <p key={index} className="text-gray-700">{para}</p>
              ))}
            </div>
          )}

          <IndSharePost />
          <IndFaqsBlog blog={service} />
        </div>
        <div className="min-w-112 flex flex-col gap-y-20 lg:block hidden">
          <IndServiceCategory data={service.categories} />
        </div>
      </div>
    </>
  );
};
export default ServiceShow;