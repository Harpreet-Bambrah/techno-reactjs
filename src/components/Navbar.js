import { Link } from 'react-router-dom';
import logo from '../images/main-logo.png'
import './Navbar.css'

const Navbar = ()=>{


    return(
            <>
            <header>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to='/'>
                                    <img src={logo} alt="logo"/>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/techno-reactjs'>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/techno-reactjs/services'>Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/techno-reactjs/about'>About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/techno-reactjs/contact'>Contact</Link>
                                        </li>
                                       
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Navbar;