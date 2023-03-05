import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Header/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Footer/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
