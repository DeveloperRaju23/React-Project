import React from 'react';
import { Link } from 'react-router-dom';

const SingleBook = ({book}) => {
    
    const {image , title,subtitle,price} = book;
    return (
     <Link to={`../book/${book.isbn13}`}>
        <div className='my-container mt-5 mb-5 overflow-hidden relative  shadow-lg hover:shadow-2xl translate duration-200  transform hover:-translate-y-2'>
                <div className='card border cursor-pointer rounded '>
                    <img className='object-cover w-full h-full' src={image} alt="" />
                </div>
                <div className='bg-black opacity-0 hover:opacity-100 text-gray-300  bg-opacity-75 rounded absolute inset-0 text-lg p-5 cursor-pointer transition-opacity duration-200'>
                        <p>{title}</p>
                        <br />
                        <p>{subtitle.substring(0, 45)}...</p>
                        <br />
                        <p className='absolute bottom-10 '>Price : {price}</p>
                    </div>
        </div>
     </Link>
    );
};

export default SingleBook;