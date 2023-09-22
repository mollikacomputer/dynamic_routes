import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";

export const metadata = {
    title:"blog||Ranjit",
    description:"Blog Layout meta data description",
};

const BlogsPage = async () => {
    const blogs = await loadBlogsData();
    return (
        <div className="container mx-auto">
            {blogs.map(({id, title, body})=>(
                <div className="block border-solid border-2 border-indego-600 mb-2 p-2 rounded" key={id} >
                    <h2>{id}. {title}</h2>
                    <p>{body}</p>
                    <button className="btn px-2 py-1 bg-blue-400 text-white" > <Link href={`/blog/${id}`}> Read More... </Link> </button>
                </div>
            ))}           
        </div>
    );
};

export default BlogsPage;