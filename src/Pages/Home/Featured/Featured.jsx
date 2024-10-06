// import React from 'react';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured-item my-10 bg-fixed bg-center bg-no-repeat bg-cover'>
            <div className='md:w-4/12 mx-auto text-center my-8 pt-10'>
                <p className='text-yellow-600 mb-2'>--- Check it out ---</p>
                <h3 className='text-3xl uppercase border-y-4 py-4'>Featured Items</h3>
            </div>
            <div className='md:flex justify-center items-center pb-20 pt-12 md:px-36 text-white featured-style'>
                <div>
                    <img src={featured} className='rounded-xl mb-5' alt="" />
                </div>
                <div className='md:ml-10 space-y-3 '>
                    <p className='text-xl'>October 6, 2000</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;