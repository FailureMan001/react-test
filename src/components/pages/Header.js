import React, { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom'

import {ImageContext} from '../ImageContext';

import '../layout/header.css';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState('');
  const data = useContext(ImageContext)
  const result = data.logoData.map((e)=>{
    return e.image
  })

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (
   
      <nav className={`navbar ${stickyClass}`}>
        <div className='navbar-two'>
          <div className='navbar-svg'>
            {/* <i className="fa-solid fa-compass-drafting fa-2x text-orange-500 ">
            </i> */}
            <div className="flex items-center justify-center">
              <span>
                <img src={result[0]} className='pb-1 w-12 h-12 rounded-full' alt=""/>
              </span>
              <span>
                <Link to='/' className='pl-3 text-yellow-400 text-2xl' >VARA HOME</Link>
              </span>
            </div>
            <button
              className="button-bar"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          <div className={
            "lg:flex flex-grow items-center bg-blue-900" +
            (navbarOpen ? " flex" : " hidden")
          }
            id="example-navbar-danger"
          >
            <ul className='ul-main'>
              <li className='nav-item'>
                <Link to='/' onClick={()=>setNavbarOpen(!navbarOpen)} className='li-link'>
                  <span className='ml-2'>HOME</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' onClick={()=>setNavbarOpen(!navbarOpen)} className='li-link'>
                  <span className='ml-2'>ABOUT US</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/blog' onClick={()=>setNavbarOpen(!navbarOpen)} className='li-link'>
                  <span className='ml-2'>BLOG</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' onClick={()=>setNavbarOpen(!navbarOpen)} className='li-link'>
                  <span className='ml-2'>CONTACT US</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav> 
     
    
  );
};

export default Header;
