import Link from 'next/link';
import React from 'react';

const SingleCategory = ({category}) => {
const {id, name} = category;
    return (
       <Link href={`/products?categoryId=${id}`}>
        <h2 className='text-2xl'> {name} </h2>
       </Link>
    );
};

export default SingleCategory;