import Link from "next/link";

const BlogsPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await res.json(); 

    return (
        <div>
            {blogs.map(({id, title, body})=>(
                <div className="block border-inherit" key={id} >
                    <h2>{id}. {title}</h2>
                    <p>{body}</p>
                    <button className="btn " > <Link href={`/blog/${id}`}> Read More... </Link> </button>
                </div>
            ))}           
        </div>
    );
};

export default BlogsPage;