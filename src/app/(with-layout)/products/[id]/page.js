import getSingleProducts from '@/utils/getSingleProducts';
import React from 'react';

const SingleProduct = async({params}) => {
    const product = await getSingleProducts(params.id);
    return (
        <div className='container mx-auto border border-2 border-cyan-500 p-4 text-center'>
            <h2 className='text-2xl text-blue-500 font-semibold' >{product.title}</h2>
            <h3 className='font-bold italic'>Price: {product.price}$ </h3>
            <p> Features: {product.features} </p>
        </div>
    );
};

export default SingleProduct;