import React, { useContext } from 'react'

//* import package : swiper slider
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../layout/slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

//* import : Context (images)
import { ImageContext } from '../ImageContext';

const Slider = () => {
    const data = useContext(ImageContext)
    const result = data.imageData.map((e) => {
        return e.image
    })

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={result[1]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[2]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[3]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[4]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[5]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[6]} alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider