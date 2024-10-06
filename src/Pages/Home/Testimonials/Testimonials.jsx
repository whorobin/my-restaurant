// import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section className='my-20'>
            <div className='md:w-4/12 mx-auto text-center my-8 pt-10'>
                <p className='text-yellow-600 mb-2'>--- What Our Clients Say ---</p>
                <h3 className='text-3xl uppercase border-y-4 py-4'>TESTIMONIALS</h3>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map((review =>
                        <SwiperSlide key={review._id}>
                            <div className='mx-24 my-16 flex flex-col items-center'>

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />

                                <p className='py-6'>{review.details}</p>
                                <h3 className='text-2xl text-orange-400'>{review.name}</h3>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;