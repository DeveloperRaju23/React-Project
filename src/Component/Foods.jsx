import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFood from './SingleFood';

const Foods = () => {
    const foods = useLoaderData()
        return (
          <div className='my-container grid lg:grid-cols-4 md:grid-cols-2 mt-12'>
        

            {
               foods.meals.map(food => <SingleFood key={food.idMeal} food={food}></SingleFood> )
            }
          </div>
        );
        };

export default Foods;