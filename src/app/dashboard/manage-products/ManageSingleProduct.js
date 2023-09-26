import React from 'react';

const ManageSingleProduct = ({product}) => {
    return (
        <tr className='w-full text-center'>
            <td className='border border-slate-400 p-2'>{product.title}</td>
            <td className='border border-slate-400 p-2'>{product.price}</td>
            <td className='border border-slate-400 p-2'>
            <button className='bg-blue-500 text-white px-3 py-2 rounded'> Edit </button>
            </td>
            <td className='border border-slate-400 p-2'>
            <button className='bg-blue-500 text-white px-3 py-2 rounded'> Delete </button>
            </td>
        </tr>
    );
};

export default ManageSingleProduct;