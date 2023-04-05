import React from 'react';

const SingleFood = ({food}) => {
    const {strMeal, strMealThumb} = food
    return (
        <div className='my-container border shadow-md p-5 mb-3 cursor-pointer'>
            <img src={food.strMealThumb} alt="" />
                <h1 className='mt-3'> Name : {food.strMeal}</h1>
        </div>
    );
};

export default SingleFood;