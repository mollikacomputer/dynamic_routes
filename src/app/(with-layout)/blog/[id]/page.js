import Link from "next/link";

const SingleBlog = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
    return (
        <div>
            <h2 className='text-2xl font-bold text-yellow-400 text-center'>{data.id}. {data.title} </h2>
            <p>{data.body}</p>
            {/* <p>{year || new Date().getFullYear()} For id {id}</p> */}

            <button className=" bg-blue-400 text-white px-2 py-1" > <Link href={"/blog"} >Go to blog page</Link>  </button>
        </div>
    );
};

export default SingleBlog;