import React from 'react';

const ProductItems = ({product}) => {
    const {slug,image,phone_name,brand} = product
    return (
        <div className='my-container mb-4'>
               <div className='border px-4 py-4 h-full	  rounded shadow-md cursor-pointer'>
               <img className='text-center object-cover mx-auto py-4' src={image} alt="" />
               <div className='text-lg'>
               <h2>Model: {slug}</h2>
                <h3>Name : {phone_name}</h3>
                <h4>Brand : {brand}</h4>
               </div>
               </div>
        </div>
    );
};

export default ProductItems;