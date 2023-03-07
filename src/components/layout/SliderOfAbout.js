import React, { useContext } from 'react'

// * import : context
import {ImageContext} from "../ImageContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

const SliderOfAbout = () => {
    const data = useContext(ImageContext);
    const result = data.imageData.map((Element) => {
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
          <img src={result[14]} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={result[15]} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={result[13]} alt=''/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SliderOfAbout