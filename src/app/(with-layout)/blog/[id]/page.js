import Link from "next/link";

const SingleBlog = ({params}) => {
    // const [year, id] = params.segments || [];
    return (
        <div>
            <h2 className='text-2xl font-bold text-yellow-400 text-center'> Single Blog {params.id} </h2>
            {/* <p>{year || new Date().getFullYear()} For id {id}</p> */}

            <button className="rounded-full border" > <Link href={"/blog"} >Go to blog page</Link>  </button>
        </div>
    );
};

export default SingleBlog;