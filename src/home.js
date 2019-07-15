import React from "react";
import About from "./components/about";
import Feature from "./components/feature";
import Work from "./components/work";
import ScreenShot from "./components/screenshot";
import Team from "./components/team";
import Blog from "./components/blog";
import Price from "./components/price";
import Testimonial from "./components/testimonial";
import Activities from "./components/activities";
import FAQ from "./components/faq";
import Contact from "./components/contact";
import Package from "./components/package";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import { faArrowAltCircleDown } from "@fortawesome/fontawesome-free-regular";

import Timer from "react-compound-timer";

import { faPlusSquare } from "@fortawesome/fontawesome-free-regular";
import Cart from "./components/cart";

import FormService from "./components/formService";


import { Link } from "react-router-dom";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { get } from "https";
library.add(faArrowAltCircleDown);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      cart: [],
      numRoom: 0,

      stayData: [],
      packages: [],
      packageId: " "
    };

    this.FormService = new FormService();
  }

  //TICKET CART PROP SYSTEN
  onTicketClick = e => {
    console.log("TICKET HAS CONNECTED WITH HOME");
    let ticket = e;
    let ticketData = e[0];
    console.log(ticketData);

    let joined = this.state.cart.concat(ticketData);
    console.log("joining", joined);
    this.setState({ cart: joined });
  };
  //ACTIVITY CART PROP SYSTEM

  onActivityClick = e => {
    console.log("ACTIVITY HAS CONNECTED WITH HOME");
    let activity = e;
    let activityData = e[0];

    console.log(activityData);

    let joined = this.state.cart.concat(activityData);

    this.setState({ cart: joined });
  };

  //HOTEL CART PROP SYSTEM
  onClick = e => {
    console.log("FIRST HOTEL OPTION ENTERED HOME");
    let hotelOne = e;

    let hotelData = hotelOne[0];

    console.log(hotelData);
    let joined = this.state.cart.concat(hotelData);
    this.setState({ cart: joined });

    console.log("Final before nav", this.state.cart);
  };

  onStay = e => {
    console.log("entro on stay");
    console.log(e);

    this.state.stayData.push(e);
  };

  onClickTwo = e => {
    console.log(e);
    console.log("SECOND HOTEL OPTION HAS ENTERED HOME");
    let hotelTwo = e;
    let hotelData = hotelTwo[0];

    let joined = this.state.cart.concat(hotelData);
    this.setState({ cart: joined });
  };

  onClickThree = e => {
    console.log(e);
    console.log("THIRD HOTEL OPTION HAS ENTERED HOME");
    let hotelThree = e;
    let hotelData = hotelThree[0];

    let joined = this.state.cart.concat(hotelData);
    this.setState({ cart: joined });
  };

  cartUpdatorHotelOne = e => {
    console.log(e);
    console.log("DELETE CLICK HOTEL ONE HAS ENTERED HOME");
    this.setState({ cart: e });
  };

  fanValidation = e => {
    console.log("estoy entrando al flow");
    console.log(this.state);

    let cart = this.state.cart;

    //percentage function
    function minusPercent(n, p) {
      return n - n * (p / 100);
    }

    let calculation = 0;

    //loop and set the discounted total
    cart.map(items => {
      console.log("the cart items", items);

      let result = minusPercent(items.totalPrice, 10);
      return (calculation += result);
    });
    // set the state for the discounted total
    this.setState({ discountedTotal: Math.round(10 * calculation) / 10 });
  };
  handleChange = e => {
    const { name, value } = e.target;
    // console.log(this.state.client[0]);

    this.setState({ ...this.state, [name]: value });
  };

  hotelPriceUpdator = e => {
    console.log(
      "you have entered the hotel price updator at the home component",
      e
    );

    this.setState({ numRoom: e });
  };

  onformSubmit = e => {
    e.preventDefault();

    console.log("form trying to be submitted at home");
  };
  handlePageChange() {
    window.location.replace("http://omustourexperience.com/checkout");
  }
  onPackageClick = e => {
    console.log("entro en package homeee click baby");
    let packages = e;
    let packageChoice = packages[0];
    this.state.packageId = packageChoice.packageId;
    console.log("package being delivered to home", packageChoice);
    // let joined = this.state.packages.concat(packageChoice);
    let joined = this.state.cart.concat(packageChoice);
    this.setState({ cart: joined });
  };
  render() {
    document.body.classList.remove("inner-page");
    console.log(
      "THIS WILL BE THE CURRENT STATE OF THE HOME COMPONENT",
      this.state
    );

    let time = Date.now();

    let getTime = () => {
      let num = Number(55000);

      return num;
      let timeOfTournament = 2678400000;

      let currentTime = getTime();

      let counter = getTime(time, timeOfTournament);

      console.log(counter);
    };

    return (
      <div>
        <Navbar
          cart={this.state.cart}
          cartUpdatorHotelOne={this.cartUpdatorHotelOne}
          stayData={this.state.stayData}
          numRoom={this.state.numRoom}
          packages={this.state.packages}
          packageId={this.state.packageId}
        />
        <section id="sectionOne" className="sectionOne">
          <div className="video-bg">
            <video
              style={{
                objectFit: "cover",

                width: "100%",
                height: "100%"
              }}
              src="assets/video/Marseille Background.mp4"
              autoPlay
              muted={true}
              loop
            />
          </div>
          <div id="jumbotron" className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex-1">
                  <div id="mainText">
                    <div>
                      <h1 id="headerText" className="mainTitle">
                        OM US TOUR EXPERIENCE 
                        <br />
                        <span className="mainTitle" />
                      </h1>
                      <h4 className="mainTitle" />
                      <br />
                      <br />

                      <div className="row">
                        <div className="col-md-12">
                          <div id="timer">
                            <Timer
                              initialTime={100000000}
                              direction="backward"
                            >
                              {() => (
                                <React.Fragment>
                                  <Timer.Days
                                    formatValue={value => {
                                      return value;
                                    }}
                                  />{" "}
                                  <span id="timerDays">Days</span>
                                  <Timer.Hours
                                    id="timerHour"
                                    formatValue={value => {
                                      return `${
                                        value < 10 ? `0${value}` : value
                                      }`;
                                    }}
                                  />
                                  <span id="timerHours">Hours</span>
                                  <Timer.Minutes
                                    id="timerMin"
                                    formatValue={value =>
                                      `${value < 10 ? `0${value}` : value}`
                                    }
                                  />
                                  <span id="timerMin">Min</span>
                                  <Timer.Seconds
                                    id="timerSec"
                                    formatValue={value =>
                                      `${value < 10 ? `0${value}` : value}`
                                    }
                                  />
                                  <span id="timerSec">Sec</span>
                                </React.Fragment>
                              )}
                            </Timer>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a href="#theTour">
                      <FontAwesomeIcon id="goOn" icon={faArrowAltCircleDown} />
                    </a>
                  </div>
                </div>
              </div>
              =
            </div>
          </div>
        </section>
        {/* Home One Section End */}
        {/* About Component*/}
        <section id="theTour">
          <div className="row">
            <div className="col-md-12">
              <h2 id="tourTitle">The Tour</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5" />

            <div id="theTourInsideText" className="col-md-7">
              <p id="fillingIt" />
              <h1 id="tourHeader">
                WELCOME TO THE OFFICIAL WEBSITE OF OM TOUR IN THE US!
              </h1>
              <p className="tourP">
                From July 17th to July 24th, the club will travel to Washington
                DC to play two matches in the EA Ligue 1 tournament and a
                friendly match against the local team D.C United.
              </p>
              <p className="tourP">
                This summer, you will be able to attend to the club's first tour
                across the Atlantic.
              </p>
              <p className="tourP">
                Dear fans abroad, Don't miss this chance to see OM playing and
                experience the tour like no one else!
              </p>
              <br />
              <a id="jim" href="#about" className="btn btn-primary ">
                DISCOVER THE EXPERIENCE
              </a>
            </div>
          </div>
        </section>
        <About />
        {/*Price Component*/}
        {/*<Package ref="packages" onPackageClick={this.onPackageClick} />*/}
        <Price ref="price" onTicketClick={this.onTicketClick} />
        {/*Team Component*/}
        {/* <Team /> */}
        {/*Feature Component*/}
        {/* <Feature /> */}
        {/* Banner Component */}
        {/* <Banner /> */}
        {/*Work Component*/}
        <Work
          onClick={this.onClick}
          onClickTwo={this.onClickTwo}
          onClickThree={this.onClickThree}
          onStay={this.onStay}
          hotelPriceUpdator={this.hotelPriceUpdator}
        />

        {/*ActivitiesComponent*/}
        <Activities onActivityClick={this.onActivityClick} />
        {/*ScreenShot Component*/}

        {/* CHECK OUT FORM  */}
        <section className="checkoutForm backgroundColor" id="checkoutForm">
          {/* <h1 id="checkoutTitle" className="text-center hotelTitle">
            Checkout your purchase
          </h1> */}

          {/* <div className="button-container">
              <Link id="checkOutLinkButton" className="btn draw-border" to={{
                    pathname: '/checkout',
                    state: this.state,
                }}>Join US !</Link>
          </div> */}

          {/* <div id="newButton">
            <div
              id="bad"
              onClick={this.handlePageChange}
              className="btn btn-two"
            >
              <Link
                id="joinUs"
                className=""
                to={{
                  pathname: "/checkout"
                }}
              >
                BOOK NOW!
              </Link>
            </div>
          </div> */}
        </section>

        <FAQ />
        {/* <ScreenShot /> */}

        {/*Testimonial Component*/}
        {/* <Testimonial /> */}
        {/*Faq Component*/}
        {/*<FAQ />*/}
        {/*Blog Component*/}
        {/* <Blog /> */}
        {/*download section*/}
        {/* <section className="download-bg">


        {/* </section> */}
        {/*end download section*/}
        {/* Contact Component */}
        {/* <Contact /> */}
        {/*Subscription Component*/}
        {/* <Subscribe /> */}
        {/*Footer Component*/}
        {/* <Footer /> */}
        {/*tap-top*/}
        {/* <div className="tap-top">
          <div>
            <i className="fa fa-angle-up" aria-hidden="true" />
          </div>
        </div> */}
      </div>
    );
  }
}

export default Home;

