
import Scard from './components/Scard';
const Services = () =>{

    return(
        <>
        <section className="py-5 bg-color2">
            <div className="container">
                <div className="row">
                    <div className="py-3 text-center">
                        <h4 className="text-color1">OUR SERVICES</h4>
                        <h1 className="fw-bold">We Provide Awesome <span className="text-color1">Service</span></h1>
                        <p className="w-75 m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim advis minim veniam, quis nostrud exercitat</p>
                    </div>
                </div>
                <div className='row py-3'>
                        <Scard title='Marketing Strategy'/>
                        <Scard title='Smartphone Repair'/>
                        <Scard title='Web Development'/>
                        <Scard title='Mobile Application'/>
                        <Scard title='Domain & Hosting'/>
                        <Scard title='Graphics Design'/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services;