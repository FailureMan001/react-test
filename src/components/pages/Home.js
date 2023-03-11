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
  const homeImg = useContext(ImageContext)
  const result = data.imageData.map((Element) => {
    return Element.image;
  });

  const resultTwo = homeImg.homeData.map((Element)=>{
    return Element.image
  })
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <div className="container mx-auto -mt-3 ">
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
              <div className=" w-48 mx-auto pt-6 border-b-2 border-orange-500  text-center text-4xl text-white ">
                <span className="font-link">
                  <span className=" text-4xl">ราคาเริ่มต้น</span>
                  <br />
                  <br />
                  <span className="text-orange-500">2.xx </span>
                  <span>ลบ.</span>
                </span>
              </div>
              <div className="p-2 text-center text-4xl text-gray-200 font-link">
                จองเพียง
                <br />
                <br />
                <span className="text-orange-500 text-6xl">9 9 9</span>
                <span> บ.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END Banner : ส่วนบน */}

      {/* OUR PROJECT */}
      <div className="section bg-blue-100">
        <div className="section-title">โครงการของเรา</div>
        <div className="section-subtitle text-xl">
        พื้นที่ที่ท่านต้องการครบจบที่นี่
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="card">
            <i className="fa-solid fa-house-chimney-user text-5xl  text-orange-500"></i>
            <div className="font-link card-title">57 - 100 ตรว.</div>
          </div>
          <div className="card">
          <i className="fa-solid fa-bed text-5xl  text-orange-500"></i>
            <p className="font-link card-title">3 ห้องนอน</p>
          </div>
          <div className="card">
          <i className="fa-solid fa-bath text-5xl  text-orange-500"></i>
            <p className="font-link card-title">2 ห้องน้ำ</p>
          </div>
          <div className="card">
          <i className="fa-solid fa-square-parking text-5xl  text-orange-500"></i>
          <i className="fa-solid fa-garage-car"></i>
            <p className="font-link card-title">2 ที่จอดรถ</p>
          </div>
        </div>
      </div>
      {/* END OUR PROJECT */}

      {/* โครงการบ้านสวย */}
      <div className="section bg-blue-200">
        <div className="section-title">โครงการบ้านสวย</div>
        <div className="section-subtitle text-xl">
          ทำเลสงบ สิ่งแวดล้อมดี เดินทางสะดวก บ้านเดี่ยวชั้นเดียว เนื้อที่เริ่มต้น 60 ตรว. ตั้งติดถนนใหญ่ นิคมพัฒนา ซอย 7 สาย 13 - 15
        </div>
      </div>
      

      
      <div className="section bg-blue-200">
        <Slider />
      </div>
      {/* END โครงการบ้านสวย*/}

      {/* PROMOTION : IMAGE */}
      <div className="section bg-blue-100">
      <div className="section-title">PROMOTION</div>
        <div className="section-subtitle text-xl">
          โปรโมชั่นสำหรับลูกค้าสุดพิเศษที่นี่ที่เดียวเท่านั้น
        </div>
        <div className="flex flex-wrap text-center text-white">
        
          <div className="w-full md:w-1/3 p-5">
            <div
              className="w-full h-[450px] object-cover drop-shadow-2xl"
              style={{
                backgroundImage: `url(${resultTwo[1]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize:"300px 450px",
              }}
            ></div>
          </div>
          {/* PROMOTION : 01 */}
          <div className="w-full md:w-1/3 p-5  md:text-left">
            <div className="p-3 text-gray-500 text-xl leading-relaxed">

            <p className="">แลนด์มาร์คของโครงการพร็อพเพอร์ตี้ พร้อมของแถม มากมายสำหรับบ้านเดี่ยวเนื้อที่เริ่มต้นที่ 60 ตารางวา 3 ห้องนอน 2 ห้องน้ำ 1 ห้องโถงพร้อมที่จอดรถ</p>
            <br/>
            <p className="">โครงการที่ไม่สร้างฝันเพราะที่นี่เราทำให้เป็นจริงบ้านที่ทำเลดีเหมาะสมกับราคาสิ่งแวดล้อมดีเดินทางสะดวกอยู่ใกล้จุดบริการทุกอย่าง เช่น</p>
            <p></p>
            <ul>
              <li className="grid grid-flow-col auto-cols-max">
                <span><i className="fa-sharp fa-solid fa-school-circle-check text-orange-500"/></span>
                <span className="pl-3">โรงเรียน</span>
                <span className="pl-10"><i className="fa-solid fa-graduation-cap text-orange-500" /></span>
                <span className="pl-3">มหาวิทยาลัย</span>
              </li>
              <li className="grid grid-flow-col auto-cols-max">
                <span className=""><i className="fa-solid fa-house-medical-circle-check text-orange-500" /></span>
                <span className="pl-3">โรงพยาบาล</span>
                <span className="pl-3"><i className="fa-solid fa-building-shield text-orange-500" /></span>
                <span className="pl-3">สถานีตำรวจ</span>
              </li>
              <li className="flex items-center">
                <span><i className="fa-sharp fa-solid fa-store text-orange-500" /></span>
                <span className="pl-3">ตลาดสด บิ๊กซี โลตัสใหญ่</span>
              </li>
            </ul>
            <br/>
            <p>ไม่สร้างฝันเพราะมีจริงสามารถดูบ้านได้หากท่านต้องการชมบ้านสามารถติดต่อผู้จัดการฝ่ายขายได้ทุกท่าน</p>
            </div>
          </div>
          {/* PROMOTION : 02 */}
          <div className="w-full md:w-1/3 p-5  md:text-left">
            <div className="p-3 text-gray-500">
              <ul className="text-2xl">
                <li className="flex flex-row pb-3">
                  <span className="text-4xl"><i className="fas fa-coins text-orange-500"></i></span>
                  <span className="pl-4">
                    <span className="underline decoration-orange-500" >ฟรี</span>
                      <span>ค่าโอนตามราคาบ้าน</span>
                    </span>
                </li>
                <li className="flex flex-row pb-3">
                  <span className="text-4xl"><i className="fas fa-percentage text-orange-500"></i></span>
                  <span className="pl-5">
                    <span className="underline decoration-orange-500" >ฟรี</span>
                    <span>ค่าภาษีตามราคาบ้าน</span>
                    </span>
                </li>
                <li className="flex flex-row pb-3">
                  <span className="text-4xl"><i className="fas fa-file-invoice-dollar text-orange-500"></i></span>
                  <span className="pl-6">
                  <span className="underline decoration-orange-500" >ฟรี</span>
                    <span>ค่าจดจำนอง</span>
                  </span>
                </li>
                <li className="flex flex-row pb-3">
                  <span className="text-4xl"><i className="fa-solid fa-shower text-orange-500"></i></span>
                  <span className="pl-4">
                  <span className="underline decoration-orange-500" >ฟรี</span>
                    <span>เครื่องทำน้ำอุ่น 2 ตัว</span>
                  </span>
                </li>
                <li className="flex flex-row pb-3">
                  <span className="text-4xl"><i className="fa-solid fa-car-side text-orange-500"></i></span>
                  <span className="pl-1">
                  <span className="underline decoration-orange-500" >ฟรี</span>
                  <span>ปูกระเบื้องโรงจอดรถ</span>
                  </span>
                </li>
                <li className="flex flex-row pb-3"> 
                  <span className="text-4xl"><i className="fa-solid fa-kitchen-set text-orange-500"></i></span>
                  <span className="pl-3">
                  <span className="underline decoration-orange-500" >ฟรี</span>
                    <span>ก่อซิงค์ครัวพร้อมปูกระเบื้อง</span>
                  </span>
                </li>
                <li className="flex flex-row pb-3">
                  <span className="text-4xl"><i className="fa-solid fa-bolt text-orange-500"></i></span>
                  <span className="pl-7">
                  <span className="underline decoration-orange-500" >ฟรี</span>
                    <span>มิเตอร์ไฟฟ้า</span>
                  </span>
                </li>
                <li className="flex flex-row pb-3">
                  <span className="text-4xl"><i className="fa-solid fa-droplet text-orange-500"></i></span>
                  <span className="pl-7">
                  <span className="underline decoration-orange-500" >ฟรี</span>
                    <span>มิเตอร์น้ำ</span>
                  </span>
                </li>
                <li className="flex flex-row pb-3">
                  <span className="text-4xl"><i className="fa-solid fa-magnifying-glass text-orange-500"></i></span>
                  <span className="pl-5">
                  <span className="underline decoration-orange-500" >ฟรี</span>
                    <span>ค่าประเมิน</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END OUR PROJECT : 03 PAGES */}

      {/* FACILITIES */}
      <div className="section pb-12 bg-blue-200">
        <div className="section-title">FACILITES</div>
        <div className="section-subtitle text-xl">
          สิ่งอำนวยความสะดวกและการบริการข้อมูลที่ครบครัน 
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="card-Facilities">
            <img src={result[23]} className="card-image" alt="" />
            <p className="card-Facilitie">DESIGN</p>
          </div>

          <div className="card-Facilities">
            <img src={result[22]} className="card-image " alt="" />
            <p className="card-Facilitie">FAMILY</p>
          </div>
          <div className="card-Facilities">
            <img src={result[24]} className="card-image " alt="" />
            <p className="card-Facilitie">SERVICE</p>
          </div>
          <div className="card-Facilities">
            <img src={result[21]} className="card-image " alt="" />
            <p className="card-Facilitie">SECURITY</p>
          </div>
        </div>
      </div>
      {/* END FACILITIES */}
    </div>
  );
};

export default Home;
