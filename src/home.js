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
//Testing DATE PICKER FOR REACT
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
      // clientFirstName : " ",
      // clientLastName  : " ",
      stayData: [],
      packages: [],
      packageId: " "

      // checkOut: " ",
      // fanClubNumber: " ",
      // address: " ",
      // city: " ",
      // state: " ",
      // zipcode: " ",
      // nameOnCard: " ",
      // creditCardNumber: " ",
      // expirationDate: " ",
      // securityCode: " "
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

    // console.log("Final SECOND before nav", this.state.cart);
  };

  onClickThree = e => {
    console.log(e);
    console.log("THIRD HOTEL OPTION HAS ENTERED HOME");
    let hotelThree = e;
    let hotelData = hotelThree[0];

    let joined = this.state.cart.concat(hotelData);
    this.setState({ cart: joined });

    // console.log("Final THIRD before nav", this.state.cart);
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
    // const {
    //   clientFirstName,
    //   clientLastName,
    //   checkIn,
    //   checkOut,
    //   currentStep,
    //   email,
    //   fanClubNumber,
    //   fanPlay,
    //   hotelRooms,
    //   hotels,
    //   phoneNum,
    //   questions,
    //   tickets
    // } = this.state;


    // this.FormService.addShoppingCart({
    //   clientFirstName,
    //   clientLastName,
    //   checkIn,
    //   checkOut,
    //   currentStep,
    //   email,
    //   fanClubNumber,
    //   fanPlay,
    //   hotelRooms,
    //   hotels,
    //   phoneNum,
    //   questions,
    //   tickets
    // });
    // this.setState({
    //   // cart: [],
    //   // clientFirstName: " ",
    //   // stayData: [],
    //   // clientLastName: " ",
    //   // checkIn: " ",
    //   // checkOut: " ",
    //   // fanClubNumber: " ",
    //   // address: " ",
    //   // city: " ",
    //   // state: " ",
    //   // zipcode: " ",
    //   // nameOnCard: " ",
    //   // creditCardNumber: " ",
    //   // expirationDate: " ",
    //   // securityCode: " "
    // });
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

    // console.log('entro en get time');
    let num = Number(55000);

    return num ;
    // console.log('THIS IS THE TIMER START : ', start);
    // console.log('THIS IS THE TOURNAMENT DATE : ',finish);

    // let difference = start -= finish;
    // console.log('THE MATH BABY ----', difference );
   
  }

    let timeOfTournament = 2678400000;

let currentTime = getTime();

let counter =  getTime(time,timeOfTournament);

console.log(counter);

    // if(packageData.packageId == 0){
    //   packageName = "Package One";
    // }

    // if(packageData.packageId == 1){
    //   packageName = "Package Two";
    // }

    // if(packageData.packageId == 2 ){
    //   packageName = "Package Three";
    // }

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
          {/* <Cart
            cart={this.state.cart}
            cartUpdatorHotelOne={this.cartUpdatorHotelOne}
            stayData={this.state.stayData}
            numRoom={this.state.numRoom}
            packages={this.state.packages}
          /> */}
          {/* Default First Section Class className="slide-bg" */}

          {/* <section id="sectionOne" className="sectionOne">
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
                <a className="nav-link text-center navMine" href="#sectionOne">
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
          </section> */}
          {/* Navbar Section */}

          {/* Home One Section Start */}

          {/* <div className="animation-circle">
					<i></i>
					<i></i>
					<i></i>
        </div> */}
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
            {/*<Player autoPlay loop muted="false">*/}
            {/*  <source src="assets/video/Marseille Background.mp4" />*/}
            {/*</Player>*/}
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
                      {/* <h3 id="timer">Timer Will Go Here</h3> */}
                      <div className="row">
                        <div className="col-md-12">
                          <div id="timer">
                            <Timer
                              // initialTime={currentTime}
                              initialTime={2449200000}
                              direction="backward"
                            >
                              {() => (
                                <React.Fragment>
                                  <Timer.Days formatValue={value => {
                                 
                                    return value;
                                  }} />{" "}
                                  <span id="timerDays">Days</span>
                                  <Timer.Hours
                                    id="timerHour"
                                    formatValue={value => {


                                      
                                      return `${value < 10 ? `0${value}` : value}`
                                    }
                                      
                                    }
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
                {/* In partnership with EA Sports, LFP will launch a preseason tour
                in the United States in July called « EA Ligue 1 Games */}
              </p>
              <p className="tourP">
                This summer, you will be able to attend to the club's first tour
                across the Atlantic.
                {/* From July 18th to 24th, 2019, Olympique de Marseille, FC
                Girondins de Bordeaux, Montpellier Hérault SC and AS
                Saint-Etienne */}
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
          {/* <div id="tourPlacing">
            <h1 id="tourHeader">
              WELCOME TO THE OFFICIAL WEBSITE OF OM TOUR IN THE U.S !
            </h1>
            <p id="tourFirst" className="tourP">
              In partnership with EA Sports, LFP will launch a preseason tour in
              the United States in July called « EA Ligue 1 Games
            </p>
            <p id="tourFirst" className="tourP">
              From July 18th to 21st, 2019, Olympique de Marseille, FC Girondins
              de Bordeaux, Montpellier Hérault SC and AS Saint-Etienne
            </p>
            <p id="tourGoal" className="tourP">
              will compete in a friendly tournament at Audi Field
            </p>
            <p id="tourFirst" className="tourP">
              <br />
              <br />
              <span id="dearFans">Dear fans abroad</span>,
              <br /> Don't miss this chance to see OM playing and experience the
              tour like no one else! <br />
              <a
                id="experienceButton"
                href="#disclaimer"
                className="btn btn-primary"
              >
                DISCOVER THE EXPERIENCE
              </a>
            </p> */}

          {/* <div id="secondPdiv">
              <p id="tourSecond" className="tourP">
                From July 18th to 21st, 2019, Olympique de Marseille, FC
                Girondins de Bordeaux, Montpellier Hérault SC and AS
                Saint-Etienne will compete in a friendly tournament at Audi
                Field
              </p>

            </div> */}
          {/* </div> */}
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

          <div id="newButton">
            <div id="bad" onClick={this.handlePageChange} className="btn btn-two">
              <Link
                id="joinUs"
                className=""
                to={{
                  pathname: "/checkout",
                 
                }}
              >
                BOOK NOW!
              </Link>
            </div>
          </div>
        </section>
        {/* <ScreenShot /> */}
        {/*Testimonial Component*/}
        {/* <Testimonial /> */}
        {/*Faq Component*/}
        {/*<FAQ /> */}
        {/*Blog Component*/}
        {/* <Blog /> */}
        {/*download section*/}
        {/* <section className="download-bg">
          <div className="container"> */}
        {/* <div className="row">
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
            </div> */}
        {/* </div> */}
        {/* </section> */}
        {/*end download section*/}
        {/* Contact Component */}
        <Contact />
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
