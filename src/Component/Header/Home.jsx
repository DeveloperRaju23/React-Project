import React from 'react';
import {ShoppingCartIcon} from "@heroicons/react/24/solid";
import { Link, useNavigation } from 'react-router-dom';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/28893-book-loading.json";
import Education from './Education';
import Footer from './Footer';
import Loading from './Loading';

const Home = () => {
    const navigate = useNavigation()
    if(navigate.state === 'loading'){
        return <Loading></Loading>
    }
    return (
     <div>
           <div className='my-container'>
             <div className='grid  lg:grid-cols-2 md:grid-cols-2'>
                <div className='lg:py-40 md:py-30 sm:py-28 '>
                        <h2 className='text-5xl'>A reader lives a</h2>
                        <h2 className='text-5xl py-3'>Thousand lives  <span className='text-blue-400'>Before he Dies</span> </h2>
                        <p className='md:w-8/12 text-lg leading-7	'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>

                        <div className='flex items-center mt-6'>
                           <Link to="/book">
                           <div className='bg-blue-500	flex text-white text-lg tracking-wide rounded shadow-lg font-bold py-2 px-3 items-center'>
                                <button>Visit Store </button>
                                <ShoppingCartIcon className='h-8 w-8'></ShoppingCartIcon>
                            </div></Link>
                            <div className='ml-3'>
                               <Link to="/about"> <a >Learn More</a></Link>
                                </div>
                        </div>
                </div>
                <div className='w-4/5'>
                    <Lottie animationData={groovyWalkAnimation} loop={true}></Lottie>
                </div>
             </div>
             <Education></Education>
           
        </div>
      
     </div>
        
    );
};

export default Home;

