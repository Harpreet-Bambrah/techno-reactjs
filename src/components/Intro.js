
import {Link} from 'react-router-dom';
import './Intro.css'
const Intro =(props)=>{


    return(
        <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <div className='py-5'>
                    <div>
                        <h4 className="text-color1 h5 opacity-75">{props.label}</h4>
                    </div>
                    <div className='my-3'>
                        <h1 className='fw-bolder h1'>{props.h1}<span className='text-color1'>{props.h2}</span> <span className='d-block'>{props.h3}</span></h1>
                    </div>
                    <div>
                        <p className='mb-4'>{props.p}</p>
                    </div>
                    <div>
                            <Link to='/techno-reactjs/services' className='intro-btn1' style={{color:'#ffffff'}}>View Details</Link>
                    </div>
                </div>
            </div>
            <div className='col-lg-5'>
                <div>
                    <img src={props.imgsrc} width='75%' className='mx-auto d-block' alt='intro-man'/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Intro;