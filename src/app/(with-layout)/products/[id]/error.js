"use client"

import { useEffect } from "react";

const ProductError = ({error, reset}) => {
    useEffect(()=>{
        console.error(error);
    },[error])
    return (
        <div>
            <h2 className="text-2xl font-bold text-yellow-600"> { error.message || "Something Went wrong happened" } </h2>
        </div>
    );
};

export default ProductError;