import img from '../images/footer-logo.png';
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";
import {FaYoutube } from "react-icons/fa";
import {FaMapMarkerAlt } from "react-icons/fa";
import {FaEnvelope } from "react-icons/fa";
import {FaPhoneAlt } from "react-icons/fa";
const Footer = ()=>{

    return(
        <>
        <footer id="footer">
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-4 text-white my-2">
                        <div>
                            <img src={img} alt="footer-logo" />
                        </div>
                        <div>
                        <p className='mt-4'>Completely strategize client-cent Phosfluorescently iterate efficient<br/>internal or organic.</p>
                        </div>
                        <div>
                        
                            <h2 className='h4 mt-4'>Follow Us</h2>
                        </div>
                        <div>
                            <span ><FaFacebookF className='text-white bg-color3 h2 p-2 me-1 rounded-1'/></span>
                            <span ><FaInstagram className='text-white bg-color3 h2 p-2 mx-1 rounded-1'/></span>
                            <span ><FaTwitter className='text-white bg-color3 h2 p-2 mx-1 rounded-1'/></span>
                            <span ><FaYoutube className='text-white bg-color3 h2 p-2 mx-1 rounded-1'/></span>
                        </div>
                    </div>
                    <div className='col-md-4 text-white my-2'>
                        <div>
                            <h2 className='h4 mb-4'>Quick Links</h2>
                        </div>
                        <div>
                            <ul>
                                <li className='my-3'>Home</li>
                                <li>Services</li>
                                <li className='my-3'>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4 text-white my-2'>
                        <div>
                            <h2 className='h4 mb-4'>Contact Info</h2>
                        </div>
                        <div>
                            <div className='float-start text-center pt-2' style={{width:'15%'}}>
                            <span ><FaMapMarkerAlt className='text-white bg-color3 h2 p-2 mx-1 rounded-1'/></span>
                            </div>
                            <div className='float-start' style={{width:'85%'}} >
                              <h3 className='h5 m-0'>Location</h3>
                              <p className='opacity-50'>55 Main Street, New York</p>
                            </div>
                        </div>
                        <div>
                            <div className='float-start text-center pt-2' style={{width:'15%'}}>
                            <span ><FaEnvelope className='text-white bg-color3 h2 p-2 mx-1 rounded-1'/></span>
                            </div>
                            <div className='float-start' style={{width:'85%'}} >
                              <h3 className='h5 m-0'>Email Us</h3>
                              <p className='opacity-50'>example@mail.com</p>
                            </div>
                        </div>
                        <div>
                            <div className='float-start text-center pt-2' style={{width:'15%'}}>
                            <span ><FaPhoneAlt className='text-white bg-color3 h2 p-2 mx-1 rounded-1'/></span>
                            </div>
                            <div className='float-start' style={{width:'85%'}} >
                              <h3 className='h5 m-0'>Phone Us</h3>
                              <p className='opacity-50'>+012 345 678 99</p>
                            </div>
                        </div>
                    </div>
                    <hr className='border border-white'/>
                    <div>
                        <p className='text-white text-center'>	&#169; 2023 Techno.All Rights Reserved</p>
                    </div>
                </div>
            </div>

        </footer>
        </>
    )
}


export default Footer;