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

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

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
      packageId: " ",


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

  handleFormSubmit = e => {
    e.preventDefault();

    console.log("form trying to be submitted");
    const {
      cart,
      clientFirstName,
      clientLastName,
      stayData,
      email,
      fanClubNumber,
      address,
      city,
      state,
      zipcode,
      nameOnCard,
      creditCardNumber,
      expirationDate,
      securityCode
    } = this.state;

    alert(
      `Your Order has been received by one of our agents. You will received a confirmation email to ${clientFirstName} within 24 hours with an invoice attatched`
    );

    this.FormService.addShoppingCart({
      cart,
      clientFirstName,
      clientLastName,
      stayData,
      fanClubNumber,
      address,
      city,
      state,
      zipcode,
      nameOnCard,
      creditCardNumber,
      expirationDate,
      securityCode
    });
    this.setState({
      cart: [],
      clientFirstName: " ",
      stayData: [],
      clientLastName: " ",
      checkIn: " ",
      checkOut: " ",
      fanClubNumber: " ",
      address: " ",
      city: " ",
      state: " ",
      zipcode: " ",
      nameOnCard: " ",
      creditCardNumber: " ",
      expirationDate: " ",
      securityCode: " "
    });
  };

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
          <div id="jumbotron" className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex-1">
                  <div id="mainText">
                    <div>
                      <h1 id="headerText" className="mainTitle">
                        OM U.S TOUR EXPERIENCE 
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
                              initialTime={3300000000}
                              direction="backward"
                            >
                              {() => (
                                <React.Fragment>
                                  <Timer.Days />{" "}
                                  <span id="timerDays">days</span>
                                  <Timer.Hours id="timerHour" />
                                  <span id="timerHours">Hours</span>
                                  <Timer.Minutes id="timerMin" />
                                  <span id="timerMin">Min</span>
                                  <Timer.Seconds id="timerSec" />
                                  <span id="timerSec">Sec</span>
                                </React.Fragment>
                              )}
                            </Timer>
                          </div>
                        </div>
                      </div>
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
        <section id="theTour">
          <h2 id="tourLogo">The Tour</h2>
          <div className="row">
            <div className="col-md-5" />
          
            <div id="theTourInsideText" className="col-md-7">
       
              <p id="fillingIt"></p>
              <h1 id="tourHeader">WELCOME TO THE OFFICIAL WEBSITE OF OM TOUR IN THE U.S!</h1>
              <p className="tourP">
                In partnership with EA Sports, LFP will launch a preseason tour
                in the United States in July called « EA Ligue 1 Games
              </p>
              <p className="tourP">
                From July 18th to 24th, 2019, Olympique de Marseille, FC
                Girondins de Bordeaux, Montpellier Hérault SC and AS
                Saint-Etienne
              </p>
              <p className="tourP">
                Dear fans abroad, Don't miss this chance to see OM playing and
                experience the tour like no one else!
              </p>
             <br></br>
              <a
                id="experienceButton"
                href="#disclaimer"
                className="btn btn-primary"
              >
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
        <Package ref="packages" onPackageClick={this.onPackageClick} />
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
        <section id="checkoutForm">
  
          <h1 id="checkoutTitle" className="text-center hotelTitle">
            Checkout Form
          </h1>
          <div className="container">
            <form className="" onSubmit={this.handleFormSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <img
                    id="discountImg"
                    src="https://66.media.tumblr.com/b3900f6abb6350b67164b3a71f7aaa49/tumblr_pskz23rhlc1vp5j01o1_1280.png"
                  />
                </div>
                <div className="col-md-5">
                  <label id="labelFan" className="formText" htmlFor="checkOut">
                    OM Nation Membership :{" "}
                  </label>
     
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="fanClubNumber"
                    name="fanClubNumber"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                               <span id="note">*Note that this will only be valid for game tickets</span>
                </div>
                <div className="col-md-3">
                  {/* <FontAwesomeIcon
                  id="fanArrow"
                  onClick={this.fanValidation}
                  className=""
                  icon={faPlusSquare}
                /> */}
                  <div id="button" className="col-md-12">
                    <input
                      className="btn btn-primary"
                      id="fanArrow"
                      onClick={this.fanValidation}
                      value="Apply my promotion code"
                    />
                  </div>
                </div>
              </div>
              <h2 className="fuck">Person One</h2>
              <div className="row">
                <div className="col-md-6">
                  <label className="formText" htmlFor="firstName">
                    First Name :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="firstName"
                    name="clientFirstName"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <label className="formText" htmlFor="lastName">
                    Last Name :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="lastName"
                    name="clientLastName"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="formText" htmlFor="checkOut">
                    Email:{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    placeholder=".com"
                    id="email"
                    name="email"
                    onChange={e => this.handleChange(e)}
                    type="email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="formText" htmlFor="firstName">
                    Passport Number :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="passportNum"
                    name="passportNum"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <label className="formText" htmlFor="lastName">
                    Country Of Issue :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="countryIssue"
                    name="countryIssue"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="formText" htmlFor="firstName">
                    Date of Issue :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="passportNum"
                    name="passportNum"
                    onChange={e => this.handleChange(e)}
                    type="date"
                  />
                </div>
                <div className="col-md-6">
                  <label className="formText" htmlFor="lastName">
                    Nationality:{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="countryIssue"
                    name="countryIssue"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
              </div>
              <br />
              <div className="hidden">
                <h2 className="fuck">Person Two</h2>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label className="formText" htmlFor="firstName">
                      First Name :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="form-control"
                      id="firstName"
                      name="clientFirstName"
                      onChange={e => this.handleChange(e)}
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="formText" htmlFor="lastName">
                      Last Name :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="form-control"
                      id="lastName"
                      name="clientLastName"
                      onChange={e => this.handleChange(e)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="formText" htmlFor="checkOut">
                      Email:{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="form-control"
                      placeholder=".com"
                      id="email"
                      name="email"
                      onChange={e => this.handleChange(e)}
                      type="email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="formText" htmlFor="firstName">
                      Passport Number :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="form-control"
                      id="passportNum"
                      name="passportNum"
                      onChange={e => this.handleChange(e)}
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="formText" htmlFor="lastName">
                      Country Of Issue :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="form-control"
                      id="countryIssue"
                      name="countryIssue"
                      onChange={e => this.handleChange(e)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="formText" htmlFor="firstName">
                      Date of Issue :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="form-control"
                      id="passportNum"
                      name="passportNum"
                      onChange={e => this.handleChange(e)}
                      type="date"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="formText" htmlFor="lastName">
                      Nationality:{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="form-control"
                      id="countryIssue"
                      name="countryIssue"
                      onChange={e => this.handleChange(e)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-md-12">
                  <label className="formText" htmlFor="checkOut">
                    Fan Club ID :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="fanClubNumber"
                    name="fanClubNumber"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
              </div> */}
              <br />
              <br />

              <div className="row">
                <div className="col-md-12">
                  <label className="formText" htmlFor="checkOut">
                    Address:{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    placeholder="Address"
                    id="address"
                    name="address"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
              </div>

              <div className="row topPadding">
                <div className="col-md-4">
                  <input
                    autoComplete="off"
                    className="form-control"
                    placeholder="city"
                    id="city"
                    name="city"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    autoComplete="off"
                    className="form-control"
                    placeholder="State"
                    id="state"
                    name="state"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    autoComplete="off"
                    className="form-control"
                    placeholder="Zip Code"
                    id="zipcode"
                    name="zipcode"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
              </div>
              <br />
              <br />
              <div className="row topPadding">
                <div className="col-md-12">
                  <label className="formText" htmlFor="paymentDetails">
                    Name On Card :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    placeholder="Name on card"
                    id="nameOnCard"
                    name="nameOnCard"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
              </div>

              <div className="row topPadding">
                <div className="col-md-8">
                  <label className="formText" htmlFor="paymentDetails">
                    Credit Card Number :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    placeholder="cc number"
                    id="creditCardNumber"
                    name="creditCardNumber"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    id="creditCards"
                    className="img-responsive"
                    src="http://i76.imgup.net/accepted_c22e0.png"
                  />
                </div>
              </div>
              <div className="row topPadding">
                <div className="col-md-6">
                  <label className="formText" htmlFor="paymentDetails">
                    Expiration Date :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    placeholder="Exp Date"
                    id="expirationDate"
                    name="expirationDate"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <label className="formText" htmlFor="paymentDetails">
                    Security Number :{" "}
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    placeholder="000"
                    id="securityCode"
                    name="securityCode"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
              </div>
              <div className="row topPadding">
                <div className="col-md-12">
                  <label className="formText" htmlFor="ask">
                    Have A Question ?{" "}
                  </label>
                  <textarea
                    autoComplete="off"
                    className="form-control"
                    placeholder="Ask away"
                    id="question"
                    name="question"
                    onChange={e => this.handleChange(e)}
                    type="text"
                  />
                </div>
              </div>
              {/* <PaymentCard
      bank="itau"
      model="personnalite"
      type="black"
      brand="mastercard"
      number="4111111111111111"
      cvv="202"
      holderName="Owen Lars"
      expiration="12/20"
      flipped={false}
    /> */}
              <div className="row">
                <div id="button" className="col-md-12">
                  <input
                    className="btn btn-primary"
                    id="checkoutButton"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* <ScreenShot /> */}
        {/*Testimonial Component*/}
        {/* <Testimonial /> */}
        {/*Faq Component*/}
        <FAQ />
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
