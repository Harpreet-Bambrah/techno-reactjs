
import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import React from 'react';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Layout from './Layout'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
function App() {
  return (
  
     <BrowserRouter>
        <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
        
      </Routes>
        <Footer/>
   
      </BrowserRouter>
  );
}


export default App;
