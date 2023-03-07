import React,{useContext} from 'react'
import {Link} from 'react-router-dom';

//* import : Context (images)
import { ImageContext } from "../ImageContext";

//* import : swiper slider
import Slider from '../layout/Slider';

const Home = () => {
  const data = useContext(ImageContext)
  const result = data.imageData.map((Element)=>{
    return Element.image
  })
  return (
    <div className='container mx-auto -mt-3'>
       <div 
      className='flex lg:pt-[200px] lg:pb-[200px] bg-blue-100 bg-fixed' 
      style={{
          backgroundImage:`url(${result[7]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}>
          
        <div className='relative mx-auto lg:top-9 lg:-left-[18rem]' >
          <div className='flex items-center top-5 w-[350px] h-[350px] bg-blue-900 bg-opacity-75'>
            <div className='w-full p-6'>
            <div className=' w-48 mx-auto pt-6 border-b-2 border-orange-500  text-center text-2xl text-blue-200 '>
              <span className='font-link'>ราคาเริ่มต้น<br/>2.xxลบ.</span>
              
            </div>
            <div className='p-2 text-center text-lg text-gray-200 font-link'>จองเพียง<br/>999 บ.</div>
          </div>
            </div>
        </div>
      </div>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Home