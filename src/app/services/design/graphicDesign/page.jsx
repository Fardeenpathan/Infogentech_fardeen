import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";
// import IndServicesDetailsFaqs from "@components/india/IndServicesDetailFaqs"
import IndServicesDetailFaqs from "@/components/india/IndServicesDetailFaqs";
const GraphicDesign = () => {
    const graphicdetails =
    {
        name: 'Graphic Design',
    }

 const graphicdetailsfaqs = {
  faqs: [
    {
      id: 1,
      question: "What is Graphic Design?",
      answer: "Graphic design is the art of visual communication.",
      order: 1,
      isActive: true,
    },
    {
      id: 2,
      question: "Why is graphic design important?",
      answer: "It builds brand identity and trust.",
      order: 2,
      isActive: true,
    },

      {
      id: 3,
      question: "Why is graphic design important?",
      answer: "It builds brand identity and trust.",
      order: 3,
      isActive: true,
    },


      {
      id: 4,
      question: "Why is graphic design important?",
      answer: "It builds brand identity and trust.",
      order: 4,
      isActive: true,
    },
  ],
};

    return (
        <>
            <IndServicesDetailHeader graphicdetails={graphicdetails} />
            <div className="container mx-auto lg:mt-24 xl:px-10 md:px-5 px-2 mb-12">
                <IndServiceDetails />
                <IndServicesDetailFaqs graphicdetailsfaqs={graphicdetailsfaqs} />
            </div>
        </>
    );
}


export default GraphicDesign