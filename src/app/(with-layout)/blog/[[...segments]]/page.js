
const SingleBlog = ({params}) => {
    const [year, id] = params.segments || [];
    return (
        <div>
            <h2 className='text-2xl font-bold text-yellow-400 text-center'> Single Blog </h2>
            <p>{year || new Date().getFullYear()} For id {id}</p>
        </div>
    );
};

export default SingleBlog;