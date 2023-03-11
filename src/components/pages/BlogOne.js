import React,{ useEffect, useContext } from 'react'
import { Link } from "react-router-dom";

// * import : context
import { ImageContext } from "../ImageContext";

//* import : image zoom CSS
import "../layout/blog.css";

//* import : swiper slider
import SliderOfOutsite from '../layout/SliderOfOutsite';
import SliderOfInside from '../layout/SliderOfInside';
import SliderOfToilet from '../layout/SliderOfToilet';

const BlogOne = () => {
  const data = useContext(ImageContext)
  const result = data.imageData.map((e)=>{
    return e.image
  })
  const resultTwo = data.viewData.map((e)=>{
    return e.image
  })

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="container mx-auto -mt-3">
      {/* Slider MAIN */}
      <div className="section bg-blue-100">
        {/* slider 01 */}
        <div className="section-title">วราโฮมวิลล์</div>
        <div className="section-subtitle text-2xl">
          OUTSITE
        </div>
        <div className="flex items-center justify-center pb-5 bg-blue-100">
          <SliderOfOutsite/>
        </div>
        <div className="flex items-center justify-center pb-5 bg-blue-100">
        </div>
        {/* slider 02 */}
        <div className="section-title">วราโฮมวิลล์</div>
        <div className="section-subtitle text-2xl">
          INSITE
        </div>
        <div className="flex items-center justify-center pb-5 bg-blue-100">
          <SliderOfInside/>
        </div>
        <div className="flex items-center justify-center pb-5 bg-blue-100">
        </div>
        {/* slider 03 */}
        <div className="section-title">วราโฮมวิลล์</div>
        <div className="section-subtitle text-2xl">
          TOILET
        </div>
        <div className="flex items-center justify-center pb-5 bg-blue-100">
          <SliderOfToilet/>
        </div>
        <div className="flex items-center justify-center pb-5 bg-blue-100">
        </div>


      </div>

      <div className="section bg-blue-200 border-t-4 border-orange-500">
        <div className="section-title">ANOTHER</div>
        <div className="section-subtitle">
          <span>สามารถดูรายละเอียดเพิ่มเติ่มด้านล่างนี้</span>
        </div>
        <div className="w-full bg-blue-200">
          <div className="flex flex-wrap text-center text-white">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="rounded overflow-hidden shadow-lg">
                <Link to="/blog-02" className="card-zoom">
                  <img
                    src={resultTwo[0]}
                    alt="Home"
                    className="card-zoom-image bg-beetle"
                  />
                </Link>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 hover:text-orange-400 cursor-pointer">
                    <Link to="/blog-02">ธรรมชาติ</Link>
                  </div>
                  <div className="text-gray-700 text-base">
                  <span>ชมวิวตัวบ้านจากภาพมุมสูง บรรยากาศดี ไม่สร้างฝัน</span>
                  <span>พักผ่อนสบายพร้อมออกเดินทางใกล้สถานที่ทุกจุดบริการ</span>
                  <span>และที่ทำงาน</span>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block hover:-mt-1 bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    <Link to="/blog-02">READ MORE</Link>
                  </span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="rounded overflow-hidden shadow-lg">
                <Link to="/blog-03" className="card-zoom">
                  <img
                    src={result[13]}
                    alt="Home"
                    className="card-zoom-image bg-beetle"
                  />
                </Link>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 hover:text-orange-400 cursor-pointer">
                    <Link to="/blog-03">การก่อสร้าง</Link>
                  </div>
                  <div className="text-gray-700 text-base">
                  <span>รายละเอียดที่อยากให้ท่านชมว่า วราโฮมวิลล์ของเรา</span>
                  <span>ใส่ใจและลงรายละเอียดของการสร้างมากพอที่</span>
                  <span> จะอยู่ได้โดยไม่มีปัญหามากวนใจ</span>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block hover:-mt-1 bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    <Link to="/blog-03">READ MORE</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogOne