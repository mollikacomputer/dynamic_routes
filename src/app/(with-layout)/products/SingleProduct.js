import Link from 'next/link';
import React from 'react';

const SingleProduct = ({product}) => {
    const {id, title, price} = product;
    return (
        <div>
            <Link href={`/products/${id}`} >
                <h2 className='text-2xl'>{title}</h2>
            </Link>
            <p>{price}</p>
        </div>
    );
};

export default SingleProduct;