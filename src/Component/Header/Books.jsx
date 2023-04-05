import React from 'react';
import { useLoaderData , useNavigation } from 'react-router-dom';
import SingleBook from './SingleBook';
import Loading from './Loading';

const Books = () => {
    const navigate = useNavigation()
    if(navigate.state === 'loading'){
        return <Loading></Loading>
    }
    const {books} = useLoaderData();
  
    return (
        <div className='my-container '>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                    {
                        books.map(book => <SingleBook key={book.isbn13} book={book}></SingleBook> )
                    }
                </div>
        </div>
    );
};

export default Books;