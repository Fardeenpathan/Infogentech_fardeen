
import dayjs from "dayjs";
const IndBlogDetails = ({ data }) => {
    return (
        <div className=" bg-[#EEEEEE] rounded-3xl px-12 py-16">
            <p className="text-[#252525] font-montserrat font-semibold text-2xl border-b-3 py-8 ">Date Post : <span className="text-xl font-normal">{dayjs(data.createdAt).format("DD MMMM YYYY")}</span> </p>
            <p className="text-[#252525] font-montserrat font-semibold text-2xl border-b-3 py-8">Last Edited: <span className="text-xl font-normal">{dayjs(data.updatedAt).format("DD MMMM YYYY")}</span> </p>
            <p className="text-[#252525] font-montserrat font-semibold text-2xl border-b-3 py-8">Category : <span className="text-xl font-normal">{data.category.name}</span></p>
        </div>
    )
}
export default IndBlogDetails;