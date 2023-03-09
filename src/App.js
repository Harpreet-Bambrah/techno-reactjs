
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
function App() {
  return (
  
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
   
      </BrowserRouter>
  );
}


export default App;
