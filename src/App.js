import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          {/* <Route path='/blog-1' element={}/>
          <Route path='/blog-2' element={}/>
          <Route path='/blog-3' element={<}/> */}
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
