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

const SliderOfToilet = () => {
    const data = useContext(ImageContext);
    const result = data.toiletData.map((Element) => {
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
        <img src={result[1]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[2]} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={result[3]} alt=''/>
      </SwiperSlide>
      
    </Swiper>
  </>
  )
}

export default SliderOfToilet