
import './App.css';
import {Routes,Route} from 'react-router-dom'
import React from 'react';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Footer from './components/Footer';
function App() {
  return (
    <React.StrictMode>
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </React.StrictMode>
  );
}


export default App;
