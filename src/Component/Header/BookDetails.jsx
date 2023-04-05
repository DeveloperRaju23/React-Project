import React, { useState } from 'react';
import { useLoaderData, useNavigation} from 'react-router-dom';
import Loading from './Loading';

const BookDetails = () => {
    const book = useLoaderData();
    const [fold , setFold] = useState(true)
    const {image, title,subtitle,price,url,language,year,rating,desc,authors,publisher} =book;
    
    const navigate = useNavigation()
    if(navigate.state === 'loading'){
        return <Loading></Loading>
    }
  
    return (
        <div className='my-container  md:mt-20  md:px-20'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 rounded shadow-sm'>
                    <div className='image-item ml-40'>
                            <img className='md:w-full object-cover' src={image} alt="" />
                    </div>
                    <div className='mt-12 mr-12'>
                        <h1 className='text-4xl my-3'>{title}</h1>
                        <p className='my-3 text-2xl'>Authors : {authors}</p>
                        <p className='my-3 text-2xl'>Publisher : {publisher}</p>
                        <p className='my-3 text-2xl'>Year : {year}</p>
                        <p className='my-3 text-2xl'>Rating : {rating}</p>
                        <p className='my-3 text-2xl'>Language : {language}</p>
                        {
                            fold ? (
                              <>
                                <p>{desc.substring(0,100)}</p>
                             <span className='cursor-pointer text-blue-600 text-2xl' onClick={() => setFold (!fold)}> ...Read More</span>
                              </>
                            )
                            :
                            (
                                <>
                                <p>{desc.substring(0,200)}</p>
                             <span className='cursor-pointer text-blue-600 text-2xl' onClick={() => setFold (!fold)}> ...Read Less</span>
                              </>
                            )
                         }
                        <div className='flex md:mt-12 items-center'>
                                <div className='md:mr-12 bg-blue-400 px-10 py-4 text-2xl hover:bg-blue-500 text-white rounded shadow-xl'>
                                <button>Buy Now </button>
                                </div>
                                <div className='font-bold text-2xl cursor-pointer'>
                                <h2>Price : {price}</h2>
                                </div> 
                            </div>
                    </div>
                    
            </div>
        </div>
    );
};

export default BookDetails;