


import React from "react";
import OwlCarousel from "react-owl-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/fontawesome-free-regular";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketOne: [
        {
          price: 35.44,
          ticketName: "Girondins de Bordeaux Vs O.Marseille'",
          ticketUrl:"assets/images/topLogos.png",
          time: "9:00",
          ticketId: Number(0),
          totalPrice: 35.44,
        }
      ],
      ticketTwo: [
        {
          price: 45.00,
          ticketName: "Montpellier HSC Vs As Saint Etienne'",
          ticketUrl:"assets/images/triLogoTwo.png",
          time: "9:00",
          totalPrice: 45.00,
          ticketId: Number(1),
        }
      ],
      ticketThree: [
        {
          price: 50.44,
          ticketName: "D.C. United Vs  Olympic Marseille'",
          ticketUrl:"assets/images/dcunited.png",
          time: "8:00",
          totalPrice: 50.44,
          ticketId: Number(2),
          
        }
      ],
      option: Number(0),
      transfer: false
    };
  }



  roomOption = e => {
    console.log(e.target.value);
    this.setState({ option: e.target.value });
  };
  onClickTicket = e => {
    e.preventDefault();
    var element = document.getElementById("hotels");
    element.scrollIntoView();
    let transfer = 55.00;
    let ticketOne = this.state.ticketOne[0];

    let ticketTwo = this.state.ticketTwo[0];
    let ticketThree = this.state.ticketThree[0];

    if (e.target.id == ticketOne.ticketId && this.state.option == 0) {
      console.log("TICKET ONE IS TRYING TO BE ADDED TO HOME COMPONENT");
      if(this.state.transfer == true){
        this.state.ticketOne[0].totalPrice += transfer;
        this.props.onTicketClick(this.state.ticketOne);
      }
      this.props.onTicketClick(this.state.ticketOne);
    }
    if (e.target.id == ticketOne.ticketId && this.state.option == 2) {
      console.log(
        "TICKET ONE OPTION TWO IS TRYING TO BE ADDED TO HOME COMPONENT"
      );
      if(this.state.transfer == true){
        this.state.ticketOne[0].totalPrice += transfer;
      }
      this.state.ticketOne[0].totalPrice += 10;
      console.log("option two", this.state.ticketOne);
      this.props.onTicketClick(this.state.ticketOne);
    }
    if (e.target.id == ticketOne.ticketId && this.state.option == 3) {
      console.log(
        "TICKET ONE OPTION TWO IS TRYING TO BE ADDED TO HOME COMPONENT"
      );

      if(this.state.transfer == true){
        this.state.ticketOne[0].totalPrice += transfer;
      }
      this.state.ticketOne[0].totalPrice += 20;
      console.log("option Three", this.state.ticketOne);
      this.props.onTicketClick(this.state.ticketOne);
    }

    if (e.target.id == ticketTwo.ticketId && this.state.option == 0) {
      console.log("TICKET TWO IS TRYING TO BE ADDED TO HOME COMPONENT");
      if(this.state.transfer == true){
        this.state.ticketTwo[0].totalPrice += transfer;
      }
      this.props.onTicketClick(this.state.ticketTwo);
    }

    if (e.target.id == ticketTwo.ticketId && this.state.option == 2) {
      console.log(
        "TICKET TWO OPTION TWO IS TRYING TO BE ADDED TO HOME COMPONENT"
      );
      if(this.state.transfer == true){
        this.state.ticketTwo[0].totalPrice += transfer;
      }
      this.state.ticketTwo[0].totalPrice += 10;
      console.log("option two", this.state.ticketTwo);

      this.props.onTicketClick(this.state.ticketTwo);
    }
    if (e.target.id == ticketTwo.ticketId && this.state.option == 3) {
      console.log(
        "TICKET TWO OPTION TWO IS TRYING TO BE ADDED TO HOME COMPONENT"
      );
      if(this.state.transfer == true){
        this.state.ticketTwo[0].totalPrice += transfer;
      }
      this.state.ticketTwo[0].totalPrice += 15;
      // Math.round(10 * this.state.ticketTwo[0].price) / 10;
      console.log("option two", this.state.ticketTwo);

      this.props.onTicketClick(this.state.ticketTwo);
    }

    if (e.target.id == ticketThree.ticketId && this.state.option == 0) {
      console.log("TICKET THREE IS TRYING TO BE ADDED TO HOME COMPONENT");
      if(this.state.transfer == true){
        this.state.ticketThree[0].totalPrice += transfer;
      }
      this.props.onTicketClick(this.state.ticketThree);
    }
    if (e.target.id == ticketThree.ticketId && this.state.option == 2) {
      console.log(
        "TICKET THREE OPTION TWO IS TRYING TO BE ADDED TO HOME COMPONENT"
      );
      if(this.state.transfer == true){
        this.state.ticketThree[0].totalPrice += transfer;
      }
      this.state.ticketThree[0].totalPrice += 10;
      // Math.round(10 * this.state.ticketThree[0].price) / 10;
      console.log("option two", this.state.ticketThree);

      this.props.onTicketClick(this.state.ticketThree);
    }
    if (e.target.id == ticketThree.ticketId && this.state.option == 3) {
      console.log(
        "TICKET THREE OPTION THREE IS TRYING TO BE ADDED TO HOME COMPONENT"
      );
      if(this.state.transfer == true){
        this.state.ticketThree[0].totalPrice += transfer;
      }
      this.state.ticketThree[0].totalPrice += 30;
      // Math.round(10 * this.state.ticketThree[0].price) / 10;
      console.log("option three", this.state.ticketThree);

      this.props.onTicketClick(this.state.ticketThree);
    }
  };
  render() {
    // OwlCarousel Option for Prices
    console.log(this.state);
    const options = {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      600: {
        items: 2,
        nav: false,
        dots: true
      },
      767: {
        items: 2,
        nav: false,
        dots: true
      },
      992: {
        items: 3,
        nav: false,
        dots: true
      }
      // 1000:{
      //     items:4
      // }
    };

    // Dynamic Price Data Easy to Update
    let data = [
      {
        title: "HOTELS",
        id: 0,
        lable: "07/18/2019",
        ticketUrl:"assets/images/topLogos.png",
        time:"9:00pm",
        price: "35.44",
        features:
          "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
        link: "#"
      },
      {
        title: "GAMES",
        id: 1,
        lable: "07/21/2019",
        ticketUrl:"assets/images/triLogoTwo.png",
        time:"9:00pm",
        price: "45.00",
        features:
          "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
        link: "#"
      },
      {
        title: "ACTIVITIES",
        id: 2,
        lable: "07/24/2019",
        ticketUrl:"assets/images/dcunited.png",
        time:"8:00pm",
        price: "50.44",
        features:
          "<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>",
        link: "#"
      }
      // {title: 'D.C United Vs Marseille', lable:'07/29/2019', price:'190', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
      // {title: 'D.C United Vs Marseilled', lable:'07/29/2019', price:'359', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
    ];

    // Dynamic Price Data Loop
    let DataList = data.map((val, i) => {
    
      if(val.title == "HOTELS"){
      return (
        <div id="item"  key={i}>
          <div   id="johnMayer" className="package-box">
            <h3 className="aboutEx">{val.title}</h3>
            {/* <img className="ticketLogos" src={val.ticketUrl} /> */}
            {/* <div className="price-box"> */}
              {/* <span id="moneyTag">$</span>
              <h2 className="prices">{val.price}</h2>
              <h5 className="plan-clr">
                <span className="d-block" />
              </h5> */}
            {/* </div> */}
            {/* <br /> */}
            <img id="hotelEx" src="assets/images/hotelTrick.png" />
            {/* <select
              id="ticketCat"
              className="form-control"
              onChange={this.roomOption}
            >
              <option value="0">Gold Ticket $10 more!</option>
              <option value="2">Silver Ticket $20 more!</option>
              <option value="3">Bronze Ticket $20 more!</option>
            </select> */}

            <div id="" className="price-plan text-center">
            <p id="hendrix">  From July 17TH to July 24th</p>
              {/* <ul> */}
            
                {/* <li className="priceDetails">{val.lable}</li> */}
                {/* <li className="priceDetails">{val.time}</li> */}
                {/* <li className="priceDetails">Exclusive OM Fan Section</li> */}

{/* 
                <li>Section 100, Row 02</li>
                <li>Per Ticket</li> */}
              {/* </ul> */}
              {/* <button
                onClick={this.onClickTicket}
                id={val.id}
                className="btn btn-primary bookButton"
              >
                Add
              </button> */}
            </div>
          </div>
        </div>
      );
            }

            if(val.title == "GAMES"){
              return (
                <div id="specialItem"  key={i}>
                  <div   id="johnMayer" className="package-box">
                    <h3 className="aboutEx">{val.title}</h3>
                    {/* <img className="ticketLogos" src={val.ticketUrl} /> */}
                    {/* <div className="price-box"> */}
                      {/* <span id="moneyTag">$</span>
                      <h2 className="prices">{val.price}</h2>
                      <h5 className="plan-clr">
                        <span className="d-block" />
                      </h5> */}
                    {/* </div> */}
                    {/* <br /> */}
                    <img id="teamEx" src="assets/images/marseilleEx.png" />
                    <div id="tired" className="row">
                      <div className="col-md-4 col-sm-12">
                        <img src="assets/images/BORDEAUXTwo.png" className="teamPicEx"></img>
                        <p className="dateEx">JULY <br></br><br /> 18TH</p>
                      </div>
                      <div className="col-md-4 col-sm-12">
                      <img src="assets/images/twoTeams.png" className="teamPicEx"></img>
                      <p className="dateEx">JULY <br></br><br /> 21ST</p>
                      </div>
                      <div className="col-md-4 col-sm-12">
                      <img src="assets/images/dcunitedImg.png" className="teamPicEx"></img>
                      <p className="dateEx">JULY <br/><br /> 24TH</p>
                      </div>
      
                    </div>
                    {/* <select
                      id="ticketCat"
                      className="form-control"
                      onChange={this.roomOption}
                    >
                      <option value="0">Gold Ticket $10 more!</option>
                      <option value="2">Silver Ticket $20 more!</option>
                      <option value="3">Bronze Ticket $20 more!</option>
                    </select> */}
        
                    <div id="" className="price-plan text-center">
                    {/* <p id="hendrix">  From July 17TH to July 24th</p> */}
                      {/* <ul> */}
                    
                        {/* <li className="priceDetails">{val.lable}</li> */}
                        {/* <li className="priceDetails">{val.time}</li> */}
                        {/* <li className="priceDetails">Exclusive OM Fan Section</li> */}
        
        {/* 
                        <li>Section 100, Row 02</li>
                        <li>Per Ticket</li> */}
                      {/* </ul> */}
                      {/* <button
                        onClick={this.onClickTicket}
                        id={val.id}
                        className="btn btn-primary bookButton"
                      >
                        Add
                      </button> */}
                    </div>
                  </div>
                </div>
              );
            }

            if(val.title == "ACTIVITIES"){
              return (
        <div id="item"  key={i}>
          <div   id="johnMayer" className="package-box">
            <h3 className="aboutEx">{val.title}</h3>
            {/* <img className="ticketLogos" src={val.ticketUrl} /> */}
            {/* <div className="price-box"> */}
              {/* <span id="moneyTag">$</span>
              <h2 className="prices">{val.price}</h2>
              <h5 className="plan-clr">
                <span className="d-block" />
              </h5> */}
            {/* </div> */}
            {/* <br /> */}
            <div className="row">
              <div className="col-md-12">
                <img id="mayer" clasName="activityEx" src="assets/images/trainin.JPG"/>
                <p className="actOne">OPEN TRAINING SESSIONS</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img id="mayer" clasName="activityEx" src="assets/images/friendlyActivity.JPG"/>
                <p className="actOne">Exclusive OM Event</p>
              </div>
            </div>
            <div className="row">
              <div id="bunny" className="col-md-12">
                <img id="mayer" clasName="activityEx" src="/assets/images/trainingSesh.jpg"/>
                <p id="fansFriendly">OM VS D.C UNITED FANS FRIENDLY GAME</p>
              </div>
            </div>
            {/* <img id="hotelEx" src="assets/images/hotelTrick.png" /> */}
            {/* <select
              id="ticketCat"
              className="form-control"
              onChange={this.roomOption}
            >
              <option value="0">Gold Ticket $10 more!</option>
              <option value="2">Silver Ticket $20 more!</option>
              <option value="3">Bronze Ticket $20 more!</option>
            </select> */}

            {/* <div id="" className="price-plan text-center">
            <p id="hendrix">  From July 17TH to July 24th</p> */}
              {/* <ul> */}
            
                {/* <li className="priceDetails">{val.lable}</li> */}
                {/* <li className="priceDetails">{val.time}</li> */}
                {/* <li className="priceDetails">Exclusive OM Fan Section</li> */}

{/* 
                <li>Section 100, Row 02</li>
                <li>Per Ticket</li> */}
              {/* </ul> */}
              {/* <button
                onClick={this.onClickTicket}
                id={val.id}
                className="btn btn-primary bookButton"
              >
                Add
              </button> */}
            {/* </div> */}
          </div>
        </div>
      );
            }
    });

    return (
      <section className="" id="about">
        <div  className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 id="experienceHeader" >
                   EXPERIENCE
                </h2>
                {/* <img
                  src="assets/images/blueTitleLine.png"
                  alt="title-line"
                  className="img-fluid"
                /> */}
              </div>
            </div>
            <div id="tomBrady" className="col-md-12 text-center">
              <OwlCarousel
              
                className="plan-slider owl-carousel owl-theme"
                loop={false}
                items={3}
                margin={15}
                navClass={["owl-prev", "owl-next"]}
                navText={[
                  '<i class="fa fa-angle-left"></i>',
                  '<i class="fa fa-angle-right"></i>'
                ]}
                nav={true}
                dots={false}
                responsive={options}
              >
                {DataList}
              </OwlCarousel>
              <p id="disclaimerP"><i>
                    {" "}
                  <span id="disclaimer">NOT</span> included - flights, airport transfers, VISA formalities, hotel incidentals
                  </i>
                  </p>
                  <a href="#tickets"><FontAwesomeIcon id="goOnTwo" icon={faArrowAltCircleDown} /></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;































// OLD CODE 

// import React from "react";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBed } from "@fortawesome/fontawesome-free-solid";
// import { faTicketAlt } from "@fortawesome/fontawesome-free-solid";
// import { faArrowAltCircleDown } from "@fortawesome/fontawesome-free-regular";

// import {
//   faCalendar,
//   faFutbol,
//   faStar
// } from "@fortawesome/fontawesome-free-regular";

// class About extends React.Component {
//   render() {
//     return (
//       <section id="about" className="sectionTwo">
//         <div className="about-chat">
//           <div className="container ">
//             <div className="row">
//               <div className="col-md-12 text-center">
//                 <div className="section-title">
//                   <h2 id="experienceHeader">THE EXPERIENCE</h2>
//                   <br></br>
//                   <br></br>
//                   {/* <img
//                     src="assets/images/blueTitleLine.png"
//                     alt="title-line"
//                     className="img-fluid"
//                   /> */}
//                 </div>
//               </div>
//               {/* <div className="row">
//                 <div className="col-md-12">
//                   <ul class="nav nav-tabs">
//                     <li class="active">
//                       <a data-toggle="tab" href="#home">
//                         Home
//                       </a>
//                     </li>
//                     <li>
//                       <a data-toggle="tab" href="#menu1">
//                         Menu 1
//                       </a>
//                     </li>
//                     <li>
//                       <a data-toggle="tab" href="#menu2">
//                         Menu 2
//                       </a>
//                     </li>
//                   </ul>

//                   <div class="tab-content">
//                     <div id="home" class="tab-pane fade in active">
//                       <h3>HOME</h3>
//                       <p>Some content.</p>
//                     </div>
//                     <div id="menu1" class="tab-pane fade">
//                       <h3>Menu 1</h3>
//                       <p>Some content in menu 1.</p>
//                     </div>
//                     <div id="menu2" class="tab-pane fade">
//                       <h3>Menu 2</h3>
//                       <p>Some content in menu 2.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
//               <div className="col-md-12 about-box">
//                 <div className="row">
//                   <div className="col-lg-4 col-6 about-border">
//                     <div className="chat-box ">
//                       <a
//                         data-toggle="tab"
//                         href="#juego"
//                         id="game"
//                         value="game"
//                         onClick={this.myFunction}
//                       >
//                         {" "}
//                         <FontAwesomeIcon
//                           className="aboutIcons"
//                           icon={faFutbol}
//                         />
//                       </a>
//                       <h3 className="subtitles">Games</h3>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-6 about-border">
//                     <div className="chat-box">
//                       {/* <img src="assets/images/get-notified.png" alt="get-notified" /> */}
//                       <a href="#hotels">
//                         <FontAwesomeIcon className="aboutIcons" icon={faBed} />{" "}
//                       </a>
//                       <h3 className="subtitles">Hotels</h3>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-6">
//                     <div className="chat-box">
//                       {/* <img src="assets/images/stay-updated.png" alt="stay-updated"/>
//                        */}
//                       <a href="#games">
//                         <FontAwesomeIcon
//                           className="aboutIcons"
//                           icon={faCalendar}
//                         />
//                       </a>
//                       <h3 className="subtitles">Activities</h3>
//                     </div>
//                   </div>

//                   {/* <div className="col-lg-3 col-6">
//                                 <div className="chat-box">
//                                 <a href="#team" > <FontAwesomeIcon className="aboutIcons" icon={faFutbol}/></a>
//                                       <h3 className="sub-title subtitles">Team</h3>
//                                 </div>
//                              </div> */}
//                 </div>
//               </div>
//               {/* <div class="tab-content">
//                     <div id="juego" className="tab-pane fade in active">
//                       <h3>HOME</h3>
//                       <p>Some content.</p>
//                     </div>
//                     <div id="menu1" className="tab-pane fade">
//                       <h3>Menu 1</h3>
//                       <p>Some content in menu 1.</p>
//                     </div>
//                     <div id="menu2" className="tab-pane fade">
//                       <h3>Menu 2</h3>
//                       <p>Some content in menu 2.</p>
//                     </div>
//                   </div> */}
//               {/* Offering you package deals which include game tickets, OM
//               exclusive activities and hotel accommodations" Choose from 3
//               properties at unbeatable rates ranging from comfort, premium to
//               luxury to ensure you have an unforgettable experience */}
//               <div id="experienceText" className="col-md-12">
//                 <div className="chat-slide">
//                   <h3>
//                     Offering you package deals which include games andOffering
//                     you package deals which include game tickets, activities!{" "}
//                     {/* <span style={{ color: " #009DDC;" }} id="marseille">
//                       Olympic Marseille
//                     </span> */}
//                   </h3>
      
//                   <h3>
//                   <span id="marseille">Olympic Marseille </span>exclusive activities and hotel accommodations
//                     <br />
//                     <br />
//                     Choose from 3 properties at unbeatable rates ranging from
//                     comfort, premium to luxury to ensure you have an
//                     unforgettable experience
//                   </h3>
//                   {/* <img id="teamPic" src="assets/images/marseilleTeam.png" alt="stay-connected"/> */}
//                   <p id="disclaimerP"><i>
//                     {" "}
//                     <span id="disclaimer">NOT</span> included - flights, airport transfers, VISA formalities, hotel incidentals
//                   </i>
//                   </p>
//                  <a href="#packages" > <FontAwesomeIcon id="aboutCircle" icon={faArrowAltCircleDown} /> </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="container-fluid text-center">
//                  <img src="assets/images/banner.png" alt="banner.png" className="img-fluid full-banner"/>
//               </div> */}
                  
//       </section>
//     );
//   }
// }

// export default About;
