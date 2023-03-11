import React, { useContext } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../layout/slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// * import : context
import {ImageContext} from "../ImageContext";

const SliderOfOutsite = () => {
    const data = useContext(ImageContext);
    const result = data.aroundData.map((Element) => {
      return Element.image;
    });
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
                    <img src={result[0]} alt='' />
                </SwiperSlide>
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
                <SwiperSlide>
                    <img src={result[7]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[8]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[9]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[10]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[11]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[12]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[13]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[14]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[15]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[16]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[17]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[18]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[19]} alt='' />
                </SwiperSlide>
            </Swiper>
        </>
  )
}

export default SliderOfOutsite