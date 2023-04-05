import React from 'react';
import { useLoaderData , useNavigation } from 'react-router-dom';
import ProductItems from './ProductItems';
import Loading from './Component/Header/Loading';

const Products = () => {
    const navigate = useNavigation()
    if(navigate.state === 'loading'){
        return <Loading></Loading>
    }
    const {data} = useLoaderData()
console.log(data)
    return (
        <div className='my-container grid lg:grid-cols-4 md:grid-cols-2 mt-12'>
            {
              data.map(product => <ProductItems key={product.id} product={product}></ProductItems> )
            }
        </div>
    );
};

export default Products;