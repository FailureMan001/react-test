import React,{ useEffect, useContext } from 'react'
import { Link } from "react-router-dom";

// * import : context
import { ImageContext } from "../ImageContext";

//* import : image zoom CSS
import "../layout/blog.css";
import SliderOfView from '../layout/SliderOfView';

const BlogTwo = () => {
  const data = useContext(ImageContext)
  const result = data.aroundData.map((e)=>{
    return e.image
  })
  const resultTwo = data.imageData.map((e)=>{
    return e.image
  })

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <div className="container mx-auto -mt-3">
    <div className="section bg-blue-100">
      <div className="section-title">ธรรมชาติ</div>
      <div className="flex items-center justify-center bg-blue-100">
        <SliderOfView/>
      </div>
    </div>
    <div className="section bg-blue-200 border-t-4 border-orange-500">
      <div className="section-title">ANATHOR</div>
      <div className="section-subtitle">
        Exlore our rich and diverse portfolio
      </div>
      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="rounded overflow-hidden shadow-lg">
              <Link to="/blog-01" className="card-zoom">
                <img
                  src={result[0]}
                  alt="Home"
                  className="card-zoom-image bg-beetle"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 hover:text-orange-400 cursor-pointer">
                  <Link to="/blog-01">วราโฮมวิลล์</Link>
                </div>
                <div className="text-gray-700 text-base">
                <span>โครงการวราโฮมวิลล์ นิคมพัฒนา - ระยอง</span>
                  <span>พร้อมจบครับปัญหาครอบครัว ใส่ใจทุกรายละเอียดในการก่อสร้าง</span>
                  <span>ทำเลทองเหมาะแก่การเดินทาง ตัวบ้านหรูหราไม่แพ้ใคร</span>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block hover:-mt-1 bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  <Link to="/blog-01">READ MORE</Link>
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded overflow-hidden shadow-lg">
              <Link to="/blog-03" className="card-zoom">
                <img
                  src={resultTwo[13]}
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

export default BlogTwo