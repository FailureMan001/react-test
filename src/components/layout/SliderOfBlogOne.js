import React, { useContext } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

// * import : context
import {ImageContext} from "../ImageContext";

const SliderOfBlogOne = () => {
    const data = useContext(ImageContext);
    const result = data.aroundData.map((Element) => {
      return Element.image;
    });
  return (
    <>
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper xl:w-[50%]"
    >
      <SwiperSlide>
        <img src={result[0]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[1]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[2]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[3]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[4]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[5]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[6]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[7]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[8]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[9]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[10]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[11]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[12]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[13]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[14]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[15]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[16]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[17]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[18]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[19]} alt=''/>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default SliderOfBlogOne