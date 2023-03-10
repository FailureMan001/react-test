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

const SliderOfInside = () => {
    const data = useContext(ImageContext)
    const result = data.insideData.map((e) => {
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
                <SwiperSlide>
                    <img src={result[20]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[21]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[22]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[23]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[24]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[25]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[26]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[27]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[28]} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={result[29]} alt='' />
                </SwiperSlide>
            </Swiper>
        </>
  )
}

export default SliderOfInside