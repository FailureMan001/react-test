import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

import '../layout/header.css';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState('');

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
            <i className="fa-solid fa-compass-drafting fa-2x text-orange-500 ">
              <a href='/' className='' >VARA HOME</a>
            </i>
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
                <Link to='/' onClick={()=>window.reload()} className='li-link'>
                  <span className='ml-2'>HOME</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' onClick={()=>window.reload()} className='li-link'>
                  <span className='ml-2'>ABOUT US</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/blog' onClick={()=>window.reload()} className='li-link'>
                  <span className='ml-2'>BLOG</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' onClick={()=>window.reload()} className='li-link'>
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
