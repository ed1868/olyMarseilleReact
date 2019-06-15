import React from 'react';


class Contact extends React.Component {
  render() {

  	return (
        <section className="contact backgroundColor" id="contact">
           <div className="container">
              <div className="row">
                 <div className="col-md-6">
                    <div className="section-title">
                       <h2 id="touch" className="contactTitles">Get In Touch</h2>
                    </div>
                    <form className="auth-form">
                       <div className="form-group">
                          {/* <label htmlFor="fullName">Full Name</label> */}
                          <i id="nameIcon" className="fa fa-user"></i>
                          <input required="" name="fullName" type="text" className="form-control" id="exampleInputName1" placeholder="Full Name"/>
                       </div>
                       <div className="form-group">
                          {/* <label htmlFor="exampleInputEmail12">Email</label> */}
                          <i id="envelopeIcon"className="fa fa-envelope-o"></i>
                          <input required="" name="login[email]" type="email" className="form-control" id="exampleInputEmail12" placeholder="Email" />
                       </div>
                       <div className="form-group">
                          {/* <label>Your message</label> */}
                          <i id="commentIcon"className="fa fa-commenting-o"></i>
                          <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                       </div>
                       <div className="form-group mb-0">
                          <button id="sendMessage" className="btn draw-border" type="submit">Send Message</button>
                       </div>
                    </form>
                 </div>
                 <div className="col-md-6">
                    <div className="contactTitles">
                       {/* <h2 className="contactTitles">Contact Info</h2> */}
                    </div>
                    <p className="contactText">After booking your experience , you will receive an email from our team with the booking details</p>
                    {/* <ul className="contact-box"> */}
                       {/* <li>
                          <div id="circleOne" className="contact-circle">
                             <i className="fa fa-map-marker iconColor" aria-hidden="true"></i>
                          </div>
                          <div className="contact-text">
                             <h3 className="contactText">Location</h3>
                             <p className="contactText">123 Business Avenue, Hoston, USA</p>
                          </div>
                       </li> */}
                       {/* <li>
                          <div id="circleTwo" className="contact-circle iconColor">
                             <i className="fa fa-phone iconColor" aria-hidden="true"></i>
                          </div>
                          <div className="contact-text">
                             <h3 className="contactText">Call US</h3>
                             <p className="contactText">+91 123-456-7890</p>
                          </div>
                       </li> */}
                       {/* <li>
                          <div id="circleThree" className="contact-circle iconColor">
                             <i className="fa fa-envelope iconColor" aria-hidden="true"></i>
                          </div>
                          <div className="contact-text">
                             <h3 className="contactText">Email Us</h3>
                             <p className="contactText">support@gmail.com</p>
                          </div>
                       </li> */}
                    {/* </ul> */}
                 </div>
              </div>
           </div>
        </section>
  	);
  }
}


export default Contact;
