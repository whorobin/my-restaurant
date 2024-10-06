// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slider1 from '../../../assets/categorys/slide1.jpg'
import slider2 from '../../../assets/categorys/slide2.jpg'
import slider3 from '../../../assets/categorys/slide3.jpg'
import slider4 from '../../../assets/categorys/slide4.jpg'
import slider5 from '../../../assets/categorys/slide5.jpg'
// import SectionTitle from '../../../Components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section>
            <div className='md:w-4/12 mx-auto text-center my-8'>
                <p className='text-yellow-600 mb-2'>--- From 11:00am to 10:00pm ---</p>
                <h3 className='text-3xl uppercase border-y-4 py-4'>ORDER ONLINE</h3>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-16 text-white font-semibold'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-16 text-white font-semibold'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-16 text-white font-semibold'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-16 text-white font-semibold'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className='text-4xl text-center text-center uppercase -mt-16 text-white font-semibold'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;