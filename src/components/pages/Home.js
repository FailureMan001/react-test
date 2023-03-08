/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useContext } from "react";

//* import : Context (images)
import { ImageContext } from "../ImageContext";

//* import : swiper slider
import Slider from "../layout/Slider";

//* import : CSS
import "../layout/home.css";

const Home = () => {
  const data = useContext(ImageContext);
  const result = data.imageData.map((Element) => {
    return Element.image;
  });
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <div className="container mx-auto -mt-3">
      {/* Banner : ส่วนบน */}
      <div
        className="flex lg:pt-[200px] lg:pb-[200px] bg-blue-100 bg-fixed"
        style={{
          backgroundImage: `url(${result[7]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="relative mx-auto lg:top-9 lg:-left-[18rem]">
          <div className="flex items-center top-5 w-[350px] h-[350px] bg-blue-900 bg-opacity-75">
            <div className="w-full p-6">
              <div className=" w-48 mx-auto pt-6 border-b-2 border-orange-500  text-center text-2xl text-blue-200 ">
                <span className="font-link">
                  ราคาเริ่มต้น
                  <br />
                  2.xxลบ.
                </span>
              </div>
              <div className="p-2 text-center text-lg text-gray-200 font-link">
                จองเพียง
                <br />
                999 บ.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END Banner : ส่วนบน */}

      {/* OUR PROJECT */}
      <div className="section bg-blue-100">
        <div className="section-title">OUR PROJECT</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolio
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="card">
            <p className="font-link card-title">57 - 100 ตรว</p>
          </div>
          <div className="card">
            <p className="font-link card-title">3 ห้องนอน</p>
          </div>
          <div className="card">
            <p className="font-link card-title">2 ห้องน้ำ</p>
          </div>
          <div className="card">
            <p className="font-link card-title">2 ที่จอดรถ</p>
          </div>
        </div>
      </div>
      {/* END OUR PROJECT */}

      {/* OUR PROJECT : 01 */}
      <div className="section bg-blue-200">
        <div className="section-title">OUR PROJECT : 01</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolioExlore our rich and diverse
          portfolioExlore our rich and diverse portfolio
        </div>
      </div>
      {/* END OUR PROJECT : 01 */}

      {/* OUR PROJECT : 02 OF IMAGES*/}
      <div className="section bg-blue-200">
        <Slider />
      </div>
      {/* END OUR PROJECT : 02 OF IMAGES*/}

      {/* OUR PROJECT : 03 PAGES */}
      <div className="section bg-blue-100">
        <div className="flex flex-wrap text-center text-white">
          <div className="w-full md:w-1/3 p-5">
            <div
              className="w-full h-[350px] object-cover drop-shadow-2xl"
              style={{
                backgroundImage: `url(${result[8]})`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="w-full md:w-1/3 p-5  md:text-left">
            <p className="p-3 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              dolor.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Earum, dolor.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-5  md:text-left">
            <p className="p-3 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              dolor.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Earum, dolor.
            </p>
          </div>
        </div>
      </div>
      {/* END OUR PROJECT : 03 PAGES */}

      {/* FACILITIES */}
      <div className="section bg-blue-200">
        <div className="section-title">Facilities</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolio
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="card-Facilities">
            <img src={result[23]} className="card-image " alt="" />
            <p className="card-Facilitie">MM</p>
            <p className="card-Facilitie-sub">UI Design</p>
          </div>

          <div className="card-Facilities">
            <img src={result[22]} className="card-image " alt="" />
            <p className="card-Facilitie">MM</p>
            <p className="card-Facilitie-sub">UI Design</p>
          </div>
          <div className="card-Facilities">
            <img src={result[24]} className="card-image " alt="" />
            <p className="card-Facilitie">MM</p>
            <p className="card-Facilitie-sub">UI Design</p>
          </div>
          <div className="card-Facilities">
            <img src={result[21]} className="card-image " alt="" />
            <p className="card-Facilitie">MM</p>
            <p className="card-Facilitie-sub">UI Design</p>
          </div>
        </div>
      </div>
      {/* END FACILITIES */}
    </div>
  );
};

export default Home;
