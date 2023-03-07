import React from 'react';
import { Routes, Route} from 'react-router-dom';
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
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
