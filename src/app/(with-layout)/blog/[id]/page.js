
const SingleBlog = ({params}) => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-yellow-400 text-center'> Single Blog </h2>
            <p>{params.id}</p>
        </div>
    );
};

export default SingleBlog;