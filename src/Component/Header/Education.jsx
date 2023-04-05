import React from 'react';
import Lottie from "lottie-react";
import reading from "../../assets/reading-boy.json";
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
const Education = () => {
    return (
        <div className='my-container mb-5'>
                <h2 className='text-center text-4xl md:mt-40 md:mb-20'>Education</h2>
                <div className='grid lg:grid-cols-2 '>
                    <div className='w-4/5'>
                    <Lottie animationData={reading} loop={true}></Lottie>
                    </div>
                    <div className=' text-lg leading-8'>
                    <span>The largest issue for the education system in Bangladesh is lack of quality. Overcrowding and under-qualified instructors have led to high dropout rates at the primary and secondary levels. In fact, while primary enrollment may be at 98%, it drops substantially to 22% at the higher secondary level. This is especially evident in rural communities where various social and economic factors can prevent safe access to education  things like natural disasters, child labor, family poverty, disability, gender abuse, child marriage, and poor sanitation.
                Currently, the government s main goals are to expand learning opportunities at earlier ages, offer more inclusive education, and provide increased access to education for adolescents</span>
                <div className='flex items-center mt-6'>
                           <Link to="/book">
                           <div className='bg-blue-500	flex text-white text-lg tracking-wide rounded shadow-lg font-bold py-2 px-3 items-center'>
                                <button>Visit Store </button>
                               <ShoppingCartIcon className='h-8 w-8'></ShoppingCartIcon>
                            </div></Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Education;