import React from "react";
import About from "./components/about";
import Feature from "./components/feature";
import Work from "./components/work";
import ScreenShot from "./components/screenshot";
import Team from "./components/team";
import Blog from "./components/blog";
import Price from "./components/price";
import Testimonial from "./components/testimonial";
import FAQ from "./components/faq";
import Contact from "./components/contact";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "./components/banner";

import { faArrowAltCircleDown } from "@fortawesome/fontawesome-free-regular";

//Testing DATE PICKER FOR REACT

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

library.add(faArrowAltCircleDown);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null
    };
  }
  render() {
    document.body.classList.remove("inner-page");
    return (
      <div>
        {/* Default First Section Class className="slide-bg" */}

        <section className="sectionOne">
          <section id="left-sidebar">
            <div class="logo">
              <a href="#about" className="navbar-brand">
                <img
                  id="marseilleLogo"
                  style={{ width: 110, height: 150 }}
                  src="assets/images/marseilleLogo.png"
                  alt="logo"
                />
              </a>
            </div>

            <div
              id="mobile-menu-icon"
              className="visible-xs"
              onclick="toggle_main_menu();"
            >
              <span class="glyphicon glyphicon-th" />
            </div>

            <ul id="main-menu">
              <li className="nav-item ">
                <a className="nav-link text-center navMine" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center navMine" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center navMine" href="#hotels">
                  Hotels
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center navMine" href="#tickets">
                  Tickets
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-center navMine" href="#games">
                  Games
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-center navMine" href="#team">
                  Team
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-center navMine"
                  id="cart"
                  href="#cart"
                >
                  Cart
                </a>
              </li>
            </ul>
          </section>
          {/* Navbar Section
  			<nav className="navbar navbar-expand-lg  theme-nav fixed-top">
				<div className="container">
					<a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img  style={{width: 80, height: 80}} src="assets/images/marseilleLogo.png" alt="logo" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"  aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"><i className="fa fa-align-justify" aria-hidden="true"></i></span>
					</button>
					<div className="collapse navbar-collapse" id="mainmenu">
						<ul className="navbar-nav ml-auto" id="mymenu">
							<li className="nav-item ">
								<a className="nav-link" href="#home" >Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about" >About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#hotels" >Hotels</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#tickets">Tickets</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#games" >Games</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#team">Team</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" id="cart" href="#cart">Cart</a>
							</li>
							<li className="nav-item dropdown">
								<a href="#news" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-list`} >blog list</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-details`} >blog details</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-leftside`} >leftsidebar</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-rightside`} >rightsidebar</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-left-sidebar`} >details leftsidebar</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-right-sidebar`} >details rightsidebar</Link></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">contact us</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other Page</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/sign-in`}>Sign In</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/sign-up`}>Sign Up</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/forget-password`}>Forget Password</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/thank-you`}>Thank You</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/review`}>Review</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/faq`}>FAQ</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/coming-soon`}>Coming Soon</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/download`}>Download</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/request`}>Request Demo</Link></li>
									<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/404`}>404</Link></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav> */}

          {/* Home One Section Start */}

          {/* <div className="animation-circle">
					<i></i>
					<i></i>
					<i></i>
				</div> */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex-1">
                  <div id="mainText">
                    <div>
                      <h1 id="headerText" className="mainTitle">
                        Olympic Marseille
                        <br />
                        <span className="mainTitle">
                          Coming To The United States!
                        </span>
                      </h1>
                      <h4 className="mainTitle">
                        Watch Olympic Marseille Take On Multiple teams in the
                        League One Tournament in Washington D.C
                      </h4>
                      <br />
                      <br />
                      <h3 id="timer">Time Will Go Here</h3>
                    </div>
                    <FontAwesomeIcon id="goOn" icon={faArrowAltCircleDown} />
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="home-right">
                  <div className="mobile-slid"> */}
              {/* <img
             
                      src="assets/images/marseilleFirst.png"
                      alt="top1"
                      className="img-fluid"
                    /> */}
              {/* </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* Home One Section End */}

        {/* About Component*/}
        <About />

        {/*Feature Component*/}
        {/* <Feature /> */}
        {/* Banner Component */}
        {/* <Banner /> */}

        {/*Work Component*/}
        <Work />

        {/*Price Component*/}
        <Price />

				
        {/*ScreenShot Component*/}
        <ScreenShot />

        {/*Team Component*/}
        <Team />

        {/*Testimonial Component*/}
        <Testimonial />

        {/*Faq Component*/}
        <FAQ />

        {/*Blog Component*/}
        <Blog />

        {/*download section*/}
        <section className="download-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 display-flex">
                <div className="footer-logo">
                  <img
                    src="assets/images/footer-logo.png"
                    alt="footer-logo"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-5 display-flex">
                <div className="download-text">
                  <h3>Download the Chatloop app and enjoy it </h3>
                </div>
              </div>
              <div className="col-xl-4 display-flex">
                <div className="download-img">
                  <ul>
                    <li>
                      <img
                        src="assets/images/app1.png"
                        alt="foot-app"
                        className="img-fluid"
                        data-tilt
                        data-tilt-perspective="50"
                        data-tilt-speed="350"
                        data-tilt-max="1.8"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/app2.png"
                        alt="foot-app1"
                        className="img-fluid"
                        data-tilt
                        data-tilt-perspective="50"
                        data-tilt-speed="350"
                        data-tilt-max="1.8"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*end download section*/}

        {/*Contact Component*/}
        <Contact />

        {/*Subscription Component*/}
        <Subscribe />

        {/*Footer Component*/}
        <Footer />

        {/*tap-top*/}
        <div className="tap-top">
          <div>
            <i className="fa fa-angle-up" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
