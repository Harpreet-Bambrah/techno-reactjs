
import './App.css';
import {Routes,Route} from 'react-router-dom'
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
      <Routes>
            <Route path='/techno-reactjs' element={<Layout/>}  >
                <Route index element={<Home/>}/>
                <Route path='/techno-reactjs/services' element={<Services/>}/>
                <Route path='/techno-reactjs/contact' element={<Contact/>}/>
                <Route path='/techno-reactjs/about' element={<About/>}/>
            </Route>        
      </Routes>
  );
}


export default App;
