import React, { useContext } from "react";

// * import : context
import {ImageContext} from "../ImageContext";

// * import : CSS
import "../layout/about.css";

// *import : Slider Of About
import SliderOfAbout from "../layout/SliderOfAbout";

const About = () => {
  const data = useContext(ImageContext);
  const result = data.imageData.map((Element) => {
    return Element.image;
  });

  return (
    <div className="container mx-auto -mt-3">
      <div className="section bg-blue-100">
        <div className="section-title">ABOUT US</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolio
        </div>
      </div>

      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          {/* About Column */}
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
            <img src={result[25]} alt="" />
          </div>
          {/* About Column */}
          <div className="w-full md:w-1/2 p-5 border-r border-blue-800 md:text-left">
            <h1 className="my-6 ml-3 text-[90px] font-semibold">โครงสร้างภายใน</h1>

            <p className="p-3 text-gray-900 text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Earum, dolor.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          {/* About Column */}
          <div className="w-full md:w-1/2 p-5 border-r border-blue-800 md:text-left">
            <h1 className="my-6 ml-3 text-[100px] font-semibold">01</h1>

            <p className="p-3 text-gray-900 text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Earum, dolor.
            </p>
          </div>
          {/* About Column */}
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
            <img src={result[11]} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          {/* About Column */}
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
            <img src={result[10]} alt="" />
          </div>
          {/* About Column */}
          <div className="w-full md:w-1/2 p-5 border-r border-blue-800 md:text-left">
            <h1 className="my-6 ml-3 text-[100px] font-semibold">02</h1>

            <p className="p-3 text-gray-900 text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Earum, dolor.
            </p>
          </div>
        </div>
      </div>

      {/* FACILITIES */}
      <div className="section bg-blue-200">
        
        <div className="section-title">Facilities</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolio
        </div>
        <SliderOfAbout/>
      </div>
      {/* END FACILITIES */}

    </div>
  );
};

export default About;
