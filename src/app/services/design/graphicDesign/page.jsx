import IndServicesDetailHeader from "@/components/india/IndServicesDetailHeader";
import IndServiceDetails from "@/components/india/IndServicesDetail";

const GraphicDesign = ()=>{
    const graphicdetails = 
      {
        name: 'Graphic Design',
        }
    
    return(
        <>
        <IndServicesDetailHeader graphicdetails={graphicdetails} />
        <div className="container mx-auto lg:mt-24 xl:px-10 md:px-5 px-2">
        <IndServiceDetails/>
        </div>
        </>
    );
}


export default GraphicDesign