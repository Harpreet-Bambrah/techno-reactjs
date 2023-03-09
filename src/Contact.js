import contactimg from './images/contactimg.jpg'
const  Contact = () =>{

    return(
        <>
            <section className="py-5 bg-color2">
                <div className="container">
                    <div className="row">
                        <div className="py-3 text-center">
                            <h4 className="text-color1">CONTACT US</h4>
                            <h1 className="fw-bold">We Are Here For You</h1>

                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-lg-5">
                            <img src={contactimg} width='75%' className='mx-auto d-block' alt='contactus' />
                        </div>
                        <div className="col-lg-7">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Enter Your Name</label>
                                    <input type="text" className="form-control" id="name" />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" id="mob" />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <button type="submit" className="intro-btn1" style={{border:'none'}}>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>        
        </>
    )
}

export default Contact;