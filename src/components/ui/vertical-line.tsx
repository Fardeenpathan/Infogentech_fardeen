
export function VerticalLine({height, color, className}: {height: number, color:string, className?: string}) {


     color = "border-"+ color
    return(
        <div className={` h-${height}  ${color} border-l ${className} hidden md:block`}  />
    )
}