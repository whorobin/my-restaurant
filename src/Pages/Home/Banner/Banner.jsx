// import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import slider1 from '../../../assets/banner/01.jpg'
import slider2 from '../../../assets/banner/02.jpg'
import slider3 from '../../../assets/banner/03.png'
import slider4 from '../../../assets/banner/04.jpg'
import slider5 from '../../../assets/banner/05.png'
import slider6 from '../../../assets/banner/06.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={slider2} />
                </div>
                <div>
                    <img src={slider1} />
                </div>
                <div>
                    <img src={slider3} />
                </div>
                <div>
                    <img src={slider4} />
                </div>
                <div>
                    <img src={slider5} />
                </div>
                <div>
                    <img src={slider6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;