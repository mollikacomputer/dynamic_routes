import React from 'react';

const SingleProduct = ({product}) => {
    const {id, title, price} = product;
    return (
        <div>
            <h2 className='text-2xl'>{title}</h2>
            <p>{price}</p>
        </div>
    );
};

export default SingleProduct;