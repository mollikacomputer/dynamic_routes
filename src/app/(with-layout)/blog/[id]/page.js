import loadSingleBlogData from "@/utils/loadSingleBlogData";
import Link from "next/link";
export const generateMetadata = async ({params}) =>{
    const {title} = await loadSingleBlogData(params.id);
    return{
        title:title,
    }
};
const SingleBlog = async ({params}) => {

    const {id, title, body} = await loadSingleBlogData(params.id);

    return (
        <div>
            <h2 className='text-2xl font-bold text-yellow-400 text-center'>{id}. {title} </h2>
            <p>{body}</p>
            {/* <p>{year || new Date().getFullYear()} For id {id}</p> */}

            <button className=" bg-blue-400 text-white px-2 py-1" > <Link href={"/blog"} >Go to blog page</Link>  </button>
        </div>
    );
};

export default SingleBlog;