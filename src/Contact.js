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
                                <div class="mb-3">
                                    <label for="name" class="form-label">Enter Your Name</label>
                                    <input type="text" class="form-control" id="name" />

                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" />

                                </div>
                                <div class="mb-3">
                                    <label for="mob" class="form-label">Mobile Number</label>
                                    <input type="text" class="form-control" id="mob" />

                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <button type="submit" class="intro-btn1" style={{border:'none'}}>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>        
        </>
    )
}

export default Contact;