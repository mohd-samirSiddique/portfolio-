export default function Contact() {
    return (
        <>
            <section className="section contact">
                <div className="container-fluid">
                    <div className="row about_me my_services">
                        <div>
                            <h3>Contact Me</h3>
                        </div>
                    </div>
                    <h3 className="contact_question">Have You Any Question  ?</h3>
                    <h4 className="contact_service">I'M AT YOUR SERVICES</h4>

                    <div className="contact_icons">
                        <div className="row">
                            <div className="col-lg-3 contact_icon">
                                <div><i className="fa fa-phone"></i></div>
                                <h3>Call Us On</h3>
                                <h4>+91 6397992899</h4>
                            </div>
                            <div className="col-lg-3 contact_icon">
                                <div><i class="fa-solid fa-location-dot"></i></div>
                                <h3>Address</h3>
                                <h4>green velly jaisingpura (Mathura)</h4>
                            </div>
                            <div className="col-lg-3 contact_icon">
                                <div><i class="fa-solid fa-envelope"></i></div>
                                <h3>Gmail</h3>
                                <h4>samirsiddique98581@gmail.com</h4>
                            </div>
                            <div className="col-lg-3 contact_icon">
                                <div><i class="fa-solid fa-earth-africa"></i></div>
                                <h3>Website</h3>
                                <h4>www.samir.com</h4>
                            </div>
                        </div>
                    </div>
                    <h3 className="contact_question">SEND ME AN EMAIL</h3>
                    <h4 className="contact_service">I'M VERY RESPONSIVE TO MESSAGES</h4>
                    <div className="contact_form">
                        <div className="row">
                            <div className="form">
                                <div className="row">
                                    <div className="col-lg-6 input_name">
                                        <input type="name" placeholder="Enter Your Name" className="col-lg-6 form-control rounded-pill mt-5" />
                                    </div>
                                    <div className="col-lg-6 input_email">
                                        <input type="email" placeholder="Enter Your Email" className="col-lg-6 email form-control rounded-pill mt-5" />
                                    </div>

                                </div>
                                <div className="row">
                                    <div>
                                        <input type="text" placeholder="Subject" className="form-control rounded-pill mt-4" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <textarea name="message" placeholder="Message" rows={7} className="form-control rounded-5 mt-4 mb-5"></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button className="main_btn mb-5">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}