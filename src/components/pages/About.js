import React, { useEffect, useContext } from "react";

// * import : context
import {ImageContext} from "../ImageContext";

// * import : CSS
import "../layout/about.css";

// *import : Slider Of About
// import SliderOfAbout from "../layout/SliderOfAbout";

const About = () => {
  const data = useContext(ImageContext);
  const result = data.imageData.map((Element) => {
    return Element.image;
  });
  const resultOne = data.homeData.map((Element) => {
    return Element.image;
  });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  

  return (
    <div className="container mx-auto -mt-3">
      <div className="section bg-blue-100">
        <div className="section-title">ABOUT US</div>
        <div className="section-subtitle text-xl">
          สิ่งแวดล้อมดี สังคมดี ชีวิตดี
        </div>
      </div>
        {/* BOX : 01 */}
      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          {/* About Column */}
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
            <img src={result[25]} alt="" />
          </div>
          {/* About Column */}
          <div className="w-full md:w-1/2 p-5 border-r border-blue-800 md:text-left">
            <h1 className="my-6 ml-3 text-[90px] font-semibold">SITE</h1>

            <div className="p-3 text-gray-900 text-2xl">
              <span>โครงสร้างภายในตัวบ้านที่มีการตกแต่งให้สะดวกสบายต่อการใช้งาน เช่น</span>
              <span>ลานจอดรถที่มีพิ้นที่ให้รถได้จอดถึง 2 คัน มีโถงใจกลางตัวบ้านให้ท่าน</span>
              <span>ได้เลือกตกแต่งตามต้องการ ด้านบนได้จัดเป็นห้องครัวริมบ้าน 2 ห้องนอน</span>
              <span>ใกล้ชิดติดกับห้องน้ำ 2 ห้อง และอีก 1 ห้องนอนแยก</span>
            </div>
          </div>
        </div>
      </div>
      {/* BOX : 02 */}
      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          {/* About Column */}
          <div className="w-full md:w-1/2 p-5 border-r border-blue-800 md:text-left">
            <h1 className="my-6 ml-3 text-[100px] font-semibold">TYPE A</h1>

            <div className="p-3 text-gray-900 text-2xl">
              <span>TYPE A ประเภทของบ้าน </span>
              <span>ออกแบบมมาให้มีพื้นที่หน้าบ้านสำหรับนั่งเล่นพักผ่อนหย่อนใจ </span>
              <span>ตกแต่งให้สามารถมองเห็นหน้าบ้านได้เต็มมุม ของตัวบ้าน </span>
              <span>จากภายในและภายนอก และสามารถเปิดกระจกเพื่อรับลมได้เต็มบาน</span>
              <br/>
              <span>INSIDE ภายในที่มีพื้นที่กว้างขวางให้ได้ตกแต่งได้ตามต้องการ</span>
              <span>เช่น Modern Style - โมเดิร์น สไตล์ คลุมโทนให้เข้ากับสีพื้นของตัวบ้าน</span>
            </div>
          </div>
          {/* About Column */}
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
            <img src={result[11]} alt="" />
          </div>
        </div>
      </div>
      {/* BOX : 03 */}
      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          {/* About Column */}
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
            <img src={result[10]} alt="" />
          </div>
          {/* About Column */}
          <div className="w-full md:w-1/2 p-5 border-r border-blue-800 md:text-left">
            <h1 className="my-6 ml-3 text-[100px] font-semibold">TYPE B</h1>

            <div className="p-3 text-gray-900 text-2xl">
              <span>TYPE B ประเภทของบ้านที่ตกแต่งภายในบ้านให้มีพื้นที่ใช้สอยที่กว้างขวาง </span>
              <span>ทำให้มีพื้นที่จัดวางและตกแต่งได้ตามความต้องการที่มากขึ้น </span>
              <span>ภายนอกตัวบ้านตกแต่งให้เรียบง่ายดูหรูหรามีสไตล์ ลูกเล่น</span>
              <span>ของบ้านนี้จึงตกไปอยู่ด้านในที่สามารถรังสรรค์ได้ตามต้องการ</span>
              <span> ภายในบ้านสามารถตกแต่งได้แบบ Monotone style</span>
              <span> - สไตร์โมโนโทน เพื่อรักษาอารมณ์ความต่อเนื่องและบรรยากาศ</span>
              <span>ของบ้านโดยสีที่ใช้ทำให้คลุมโทนเข้ากับตัวบ้านได้ดี</span>
            </div>
          </div>
        </div>
      </div>
      {/* BOX : 04 */}
      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-blue-800">
            <img src={resultOne[0]} alt="" />
          </div>
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
            <img src={resultOne[1]} alt="" />
          </div>
        </div>
      </div>
      {/* BOX : 05 */}
      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-blue-800">
            <img src={resultOne[2]} alt="" />
          </div>
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
            <img src={resultOne[3]} alt="" />
          </div>
        </div>
      </div>
      
      

      {/* IMAGE SWIPER */}
      {/* <div className="section bg-blue-200">
        
        <div className="section-title">Facilities</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolio
        </div>
        <SliderOfAbout/>
      </div> */}
      {/* END IMAGE SWIPER */}

    </div>
  );
};

export default About;
