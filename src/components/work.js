import React from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import OwlCarousel from "react-owl-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRunning,
  faDrumstickBite,
  faShoppingBasket,
  faSwimmingPool,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faFutbol } from "@fortawesome/fontawesome-free-regular";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelOne: [
        {
          price: 156.90,
          hotelName: "Courtyard Marriott Capitol Hill/Navy Yard",
          option: Number(0),
          hotelId: Number(0),
          typeOfRoom: " ",
          totalPrice: 156.90
        }
      ],
      // hotelOneOptTwo: [
      //   {
      //     price: "210.45",
      //     hotelName: "Hotel Washington Hilton",
      //     option: Number(1),
      //     hotelId: Number(0)
      //   }
      // ],
      hotelTwo: [
        {
          price: 201.56,
          hotelName: "Residence Inn by Marriott Capitol Hill/Navy Yard",
          option: Number(0),
          hotelId: Number(1),
          typeOfRoom: " ",
          totalPrice: 201.56
        }
      ],
      // hotelTwoOptTwo: [
      //   {
      //     price: "245.95",
      //     hotelName: "The Ritz-Carlton",
      //     amountOfRooms: "3",
      //     option: Number(1),
      //     hotelId: Number(1)
      //   }
      // ],
      hotelThree: [
        {
          price: 437.95,
          hotelName: "W Washington DC",
          option: Number(1),
          hotelId: Number(2),
          typeOfRoom: " ",
          totalPrice: 437.95
        }
      ],
      // hotelThreeOptTwo: [
      //   {
      //     price: "165.99",
      //     hotelName: "Hyatt House",
      //     amountOfRooms: "1",
      //     option: Number(1),
      //     hotelId: Number(2)
      //   }
      // ],
      roomOption: Number(0),
      numberOfNights: 4,
      numberOfRooms: 1,
      rateOne: "false",
      rateTwo: "false",
      rateThree: "false"
      // roomOptionTwo: Number(0),
      // roomOptionThree: Number(0)
    };
  }

  onClick = e => {
    e.preventDefault();
    console.log("ive been clicked", this.state);
    let checkIn = this.state.checkIn;
    let checkOut = this.state.checkOut;
    let roomNumber = this.state.numberOfRooms;
    this.props.onStay(checkIn);
    this.props.onStay(roomNumber);

    let checkInDay = this.state.checkInDay;
    let checkOutDay = this.state.checkOutDay;

    let totalNights = checkOutDay - checkInDay;

    var element = document.getElementById("activities");
    element.scrollIntoView();

    let staringPrice = this.state.hotelOne[0].price * this.state.numberOfRooms;
    let numberOfNights = totalNights;
    let price = staringPrice * numberOfNights;

    // this.props.hotelPriceUpdator(roomNumber);

    // console.log('the current hotelOne Price is ---', this.state.hotelOne[0].price);
    // console.log('the current number of nights is ----', this.state.numberOfNights);

    // let basePrice = this.state.hotelOne[0].price * this.state.numberOfNights;
    // this.state.hotelOne[0].price = basePrice;

    // console.log('esto es el base price' , basePrice)

    if (this.state.roomOption == 0 || this.state.roomOption == 1) {
      // this.props.onClick(this.state.hotelOne);

      this.state.hotelOne[0].typeOfRoom = "One King Bed";
      this.state.hotelOne[0].totalPrice = price;
      this.props.onClick(this.state.hotelOne);
    }
    if (this.state.roomOption == 2) {
      this.state.hotelOne[0].typeOfRoom = "Two Queen Beds";
      this.state.hotelOne[0].totalPrice = price;

      this.props.onClick(this.state.hotelOne);
    }
  };

  onClickTwo = e => {
    e.preventDefault();
    console.log("ive been clicked Two");
    var element = document.getElementById("activities");
    element.scrollIntoView();

    let staringPrice = this.state.hotelTwo[0].price * this.state.numberOfRooms;
    // let numberOfNights = this.state.numberOfNights;
    let price = staringPrice;

    if (this.state.roomOption == 0 || this.state.roomOption == 1) {
      this.state.hotelTwo[0].typeOfRoom = "One Kind Bed";
      this.state.hotelTwo[0].totalPrice = price;

      this.props.onClickTwo(this.state.hotelTwo);
    }

    if (this.state.roomOption == 2) {
      this.state.hotelTwo[0].typeOfRoom = "Two Queen Beds";
      this.state.hotelTwo[0].totalPrice = price;
      this.props.onClickTwo(this.state.hotelTwo);
    }
  };
  onClickThree = e => {
    e.preventDefault();

    console.log("number 3");
    var element = document.getElementById("activities");
    element.scrollIntoView();
    let staringPrice =
      this.state.hotelThree[0].price * this.state.numberOfRooms;

    console.log("STARTING PRICE ON HOTEL THREE------", staringPrice);
    // this.state.checkOutDay += 1;
    let numberOfNights = this.state.checkOutDay - this.state.checkInDay;
    let price = staringPrice * numberOfNights;

    if (this.state.roomOption == 0 || this.state.roomOption == 1) {
      this.state.hotelThree[0].typeOfRoom = "One King Bed";
      this.state.hotelThree[0].totalPrice = price;

      this.props.onClickThree(this.state.hotelThree);
    }
    if (this.state.roomOption == 2) {
      this.state.hotelThree[0].typeOfRoom = "Two Queen Bed";
      this.state.hotelThree[0].totalPrice = price;
      this.props.onClickThree(this.state.hotelThree);
    }
  };

  roomOption = e => {
    e.preventDefault();
    console.log("entro en room option ");
    let roomOptionId = Number(e.target.value);
    this.setState({ roomOption: roomOptionId });
  };

  numberOfNights = e => {
    e.preventDefault();
    console.log("entro pal party ");
    let numberOfNights = Number(e.target.value);
    this.setState({ numberOfNights: numberOfNights });
  };
  // roomTwoOption = e => {
  //   e.preventDefault();
  //   let roomOptionId = Number(e.target.value);
  //   this.setState({roomOptionTwo: roomOptionId})
  // }

  // roomOptionThree = e => {
  //   e.preventDefault();
  //   let roomOptionId = Number(e.target.value);
  //   this.setState({roomOptionThree : roomOptionId});
  // }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  handleCheckInChange = e => {
    const { name, value } = e.target;

    let cutStr = value.substring(8, 10);
    console.log("cut STR", cutStr);
    if (cutStr == 17 || cutStr == 18) {
      console.log("entro en el primer rate de el tercer hotel ");
    }
    if (cutStr == 19 || cutStr == 20 || cutStr == 21) {
      console.log("entro en el rate two de el 3rd hotel");
      this.state.hotelThree[0].price = "250.60";
    }
    if (cutStr == 22 || cutStr == 23 || cutStr == 24) {
      console.log("entro en el tercer rate de el tercer hotel");
      this.state.hotelThree[0].price = "371.28";
    }

    console.log("estoy adentro de el handle change", name);
    console.log("estoy adentro de el handle change", value);

    this.setState({ ...this.state, [name]: [value] });
    this.setState({ ...this.state, checkInDay: Number(cutStr) });
  };

  handleCheckoutChange = e => {
    console.log("entro en checkout");

    const { name, value } = e.target;

    let cutStr = value.substring(8, 10);

    console.log(cutStr);
    this.setState({ ...this.state, [name]: [value] });
    this.setState({ ...this.state, checkOutDay: Number(cutStr) });
  };

  handleRoomPrince = e => {
    e.preventDefault();
    console.log("entro en handle room price");
    const { name, value } = e.target;
    this.setState({ ...this.state, numberOfRooms: Number(value) });
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
      // 992: {
      //   items: 3,
      //   nav: false,
      //   dots: true
      // }
      // 1000:{
      //     items:4
      // }
    };

    // Dynamic Price Data Easy to Update
    let data = [
      {
        hotelTitle: "Courtyard Marriott Capitol Hill/Navy Yard",
        hotelMainUrl:"https://cache.marriott.com/marriottassets/marriott/WASYV/wasyv-exterior-7552-hor-wide.jpg?downsize=2880px:*",
        id: 0,
        lable: "07/18/2019",
        hotelAddress: "140 L St SE, Washington, DC 20003",
        milesAway: " 0.9 miles from Audi Field",
        pictureOne: "https://66.media.tumblr.com/4283456dd8ced5ba08578e429629a854/tumblr_psuti88Rxw1vp5j01o1_1280.jpg",
        pictureTwo:"https://66.media.tumblr.com/6a62bcec5dcab9d9fa4314ae331ea6cd/tumblr_psuti88Rxw1vp5j01o2_1280.jpg",
        pictureThree:"https://66.media.tumblr.com/92e6c7627c432f4ab385a29119a80cef/tumblr_psuti88Rxw1vp5j01o3_1280.jpg",
        price: "SOLD OUT!",
        features:
          "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
        link: "#"
      },
      {
        hotelTitle: "Residence Inn Capitol Hill/Navy Yard",
        hotelMainUrl:"https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-exterior-0001-hor-wide.jpg?downsize=2880px:*",
        id: 1,
        lable: "07/21/2019",
        hotelAddress:"1233 1St SE, Washington, DC 20003",
        milesAway:"0.7 Miles from Audi Field",
        pictureOne: "https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-exterior-0001-hor-wide.jpg?downsize=2880px:*",
        pictureTwo:"https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-lobby-0038-hor-wide.jpg?downsize=2880px:*",
        pictureThree:"https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-suite-0006-hor-wide.jpg?downsize=2880px:*",
        price:"SOLD OUT!",
        features:
          "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
        link: "#"
      },
      
      // {title: 'D.C United Vs Marseille', lable:'07/29/2019', price:'190', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
      // {title: 'D.C United Vs Marseilled', lable:'07/29/2019', price:'359', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
    ];

    // Dynamic Price Data Loop
    let DataList = data.map((val, i) => {
      if(val.id == 0){
        return (
          <div className="item" id="tickets" key={i}>
           <div className="section-title">
           <div id="boxOneRadius" className="box">
                 <img
                    className="hotelsImg"
                    src={val.hotelMainUrl}
                    alt=""
                  />
                  <h3>{val.hotelTitle}</h3>
                  <FontAwesomeIcon className="starIcon" icon={faStar} />
                  <FontAwesomeIcon className="starIcon" icon={faStar} />
                  <FontAwesomeIcon className="starIcon" icon={faStar} />
                  <br />
               <br />
                   <p>
                     <FontAwesomeIcon
                      className="servicesIcon"
                      icon={faSwimmingPool}
                    />{" "}
                    Swimming Pool{" "}
                  </p>
  
                  <p>
                    <FontAwesomeIcon className="servicesIcon" icon={faRunning} />
                    Fitness Gym
                  </p>
                  <p>
                    <FontAwesomeIcon className="servicesIcon" icon={faUtensils} />
                    20% off Hotel Bistro
                  </p>
                  <br />
                  <br />
                  <p>2 nights minimum</p>
                      <button
                    type="button"
                    className="btn btn-info btn-lg hotelPicButton"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Hotel Pictures
                  </button>
                  {/* <p className="roomStock"> 10 ROOMS LEFT!</p> */}

                  <p className="pickleRick" />
                   <hr />
                   <p>{val.hotelAddress} </p>
                   <p className="hotelAddress">{val.milesAway}</p>
                   <hr />
                   <label for="roomOption">Room :</label>
                   <p>1 king bed or 2 doubles</p>
                   <br/>
                <p> Maximum of 2 adults per room </p>
                   {/* <select className="form-control" onChange={this.roomOption}>
  //                   <option value="1">One King Bed</option>
  //                   <option value="2">Queen/Queen Beds</option>
  //                 </select> */}
                  <br />
                   <p>
                     <span className="soldOut">
                      <strong> {val.price} </strong>
                     </span>
                   </p>
  
           </div>
          </div>
          </div>
        );
      }

      if(val.id == 1){
        return(
        <div className="item" id="tickets" key={i}>
        <div className="section-title">
        <div id="boxOneRadius" className="box">
              <img
                 className="hotelsImg"
                 src={val.hotelMainUrl}
                 alt=""
               />
               <h3>{val.hotelTitle}</h3>
               <FontAwesomeIcon className="starIcon" icon={faStar} />
               <FontAwesomeIcon className="starIcon" icon={faStar} />
               <FontAwesomeIcon className="starIcon" icon={faStar} />
               <FontAwesomeIcon className="starIcon" icon={faStar} />
               <br />
            <br />
            <p>
                   <FontAwesomeIcon
                     className="servicesIcon"
                    icon={faSwimmingPool}
                   />{" "}
                   Swimming Pool{" "}
                 </p>

                 <p>
                   <FontAwesomeIcon className="servicesIcon" icon={faRunning} />
                   Fitness Gym
                 </p>
             <p>
             <FontAwesomeIcon className="servicesIcon" icon={faUtensils} />
                  Breakfast Included
                 </p>
               <br />
               <br />
               <p>2 nights minimum</p>
                   <button
                 type="button"
                 className="btn btn-info btn-lg hotelPicButton"
                 data-toggle="modal"
                 data-target="#myModalTwo"
               >
                 Hotel Pictures
               </button>
               {/* <p className="roomStock"> 10 ROOMS LEFT!</p> */}

               <p className="pickleRick" />
                <hr />
                <p>{val.hotelAddress} </p>
                <p className="hotelAddress">{val.milesAway}</p>
                <hr />
                <label for="roomOption">Room :</label>
                <p>1 king bed or 2 doubles</p>
                <br/>
                <p> Maximum of 2 guest per room </p>
                {/* <select className="form-control" onChange={this.roomOption}>
//                   <option value="1">One King Bed</option>
//                   <option value="2">Queen/Queen Beds</option>
//                 </select> */}
               <br />
                <p>
                <span className="soldOut">
                      <strong> {val.price} </strong>
                     </span>
                </p>

        </div>
       </div>
       </div>
        )
      }

    });

    return (
      <section className="backgroundColor" id="hotels">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 id="ticketHeader" className="headers">
                  HOTELS
                </h2>
                {/* <img
                  src="assets/images/blueTitleLine.png"
                  alt="title-line"
                  className="img-fluid"
                /> */}
              </div>
            </div>
            <div className="col-md-12 text-center">
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


      
              <div id="myModal" class="modal fade" role="dialog">
                    <div className="modal-dialog">
                      <div id="modalBody" className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close "
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                          <h4 className="hotelModelTitle">
                          Courtyard Marriott Capitol Hill/Navy Yard
                          </h4>
                        </div>
                        <div className="modal-body">
                          {/* <p>Some text in the modal.</p> */}
  
                          <img
                            className="modalPics"
                            src="https://66.media.tumblr.com/4283456dd8ced5ba08578e429629a854/tumblr_psuti88Rxw1vp5j01o1_1280.jpg"
                          />
                          <br />
                          <img
                            className="modalPics"
                            src="https://66.media.tumblr.com/6a62bcec5dcab9d9fa4314ae331ea6cd/tumblr_psuti88Rxw1vp5j01o2_1280.jpg"
                          />
                          <br />
                          <img
                            className="modalPics"
                            src="https://66.media.tumblr.com/92e6c7627c432f4ab385a29119a80cef/tumblr_psuti88Rxw1vp5j01o3_1280.jpg"
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            className="btn btn-default "
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
              
    
                      </div>
                      
                    </div>
                    
                  </div>


                  <div id="myModalTwo" class="modal fade" role="dialog">
                 <div className="modal-dialog">
                   <div id="modalBody" className="modal-content">
                     <div className="modal-header">
                       <button
                         type="button"
                         className="close "
                         data-dismiss="modal"
                       >
                         &times;
                       </button>
                       <h4 className="hotelModelTitle">
                       Residence Inn Capitol Hill/Navy Yard
                       </h4>
                     </div>
                     <div className="modal-body">
                       {/* <p>Some text in the modal.</p> */}

                       <img
                            className="modalPics"
                            src="https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-exterior-0001-hor-wide.jpg?downsize=2880px:*"
                          />
                          <br />
                          <img
                            className="modalPics"
                            src="https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-lobby-0038-hor-wide.jpg?downsize=2880px:*"
                          />
                          <br />
                          <img
                            className="modalPics"
                            src="https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-suite-0006-hor-wide.jpg?downsize=2880px:*"
                          />
                     </div>
                     <div class="modal-footer">
                       <button
                         type="button"
                         className="btn btn-default "
                         data-dismiss="modal"
                       >
                         Close
                       </button>
                     </div>
           
 
                   </div>
                   
                 </div>
                 
               </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
//   render() {
//     //PRICE RENDERING

//     let hotelOnePrice = "149.44";

//     let hotelTwoPrice = "191.97";

//     let hotelThreePrice = "437.95";
//     if (this.state.rateOne == true) {
//       hotelThreePrice = "437.95";
//     }

//     if (this.state.rateTwo == true) {
//       hotelThreePrice = "250.60";
//     }

//     if (this.state.rateThree == true) {
//       hotelThreePrice = "371.28";
//     }

//     return (
//       <section id="hotels">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 offset-md-2 text-center">
//               <div className="section-title">
//                 <h2 id="hotelHead">Hotels</h2>
//                 {/* <img
//                   src="assets/images/blueTitleLine.png"
//                   alt="white-line"
//                   className="img-fluid"
//                 /> */}
//               </div>
//             </div>
//           </div>
//           <div id="dateSection" className="row">
//             <div id="toDate" className="col-md-4 ">
//               {/* <label id="checkInLabel" className="text-white" htmlFor="checkIn">
//                 Check In :
//               </label> */}
//               {/* <input
//                 autoComplete="off"
//                 className="form-control"
//                 id="checkIn"
//                 name="checkIn"
//                 min="2019-07-17"
//                 max="2019-07-25"
//                 onChange={e => this.handleCheckInChange(e)}
//                 type="date"
//               /> */}
//             </div>
//             <div className="col-md-4 ">
//               {/* <label
//                 id="checkOutLabel"
//                 className="text-white"
//                 htmlFor="checkOut"
//               >
//                 Check Out:
//               </label> */}
//               {/* <select className="form-control" onChange={this.numberOfNights}>
//                   <option value="4">4 Nights - 07/18 to 07/22 </option>
//                   <option value="8">8 Nights - 07/17 to 07/25 </option>
//                 </select> */}
//               {/* <input
//                 autoComplete="off"
//                 className="form-control"
//                 id="checkOut"
//                 min="2019-07-17"
//                 max="2019-07-25"
//                 name="checkOut"
//                 onChange={e => this.handleCheckoutChange(e)}
//                 type="date"
//               /> */}
//             </div>
//             <div className="col-md-4 ">
//               {/* <label
//                 id="numOfRoomsLabel"
//                 className="text-white"
//                 htmlFor="numberOfRooms"
//               >
//                 # of Rooms :
//               </label> */}

//               {/* <input
//                 autoComplete="off"
//                 className="form-control "
//                 id="numberOfRooms"
//                 placeholder="Number of Rooms "
//                 name="numberOfRooms"
//                 onChange={e => this.handleRoomPrince(e)}
//                 type="number"
//               /> */}
//             </div>
//           </div>

//           {/* HOTEL LIST RENDERING */}

//           <div className="row">
//             <div className="col-lg-6 text-center">
//               <div id="boxOneRadius" className="box">
//                 <img
//                   className="hotelsImg"
//                   src="https://cache.marriott.com/marriottassets/marriott/WASYV/wasyv-exterior-7552-hor-wide.jpg?downsize=2880px:*"
//                   alt=""
//                 />
//                 <h3>Courtyard Marriott Capitol Hill/Navy Yard</h3>
//                 <FontAwesomeIcon className="starIcon" icon={faStar} />
//                 <FontAwesomeIcon className="starIcon" icon={faStar} />
//                 <FontAwesomeIcon className="starIcon" icon={faStar} />
//                 {/* <FontAwesomeIcon className="starIcon" icon={faStar} /> */}
//                 {/* <FontAwesomeIcon className="starIcon" icon={faStar} /> */}
//                 <br />
//                 <br />
//                 <p>
//                   <FontAwesomeIcon
//                     className="servicesIcon"
//                     icon={faSwimmingPool}
//                   />{" "}
//                   Swimming Pool{" "}
//                 </p>

//                 <p>
//                   <FontAwesomeIcon className="servicesIcon" icon={faRunning} />
//                   Fitness Gym
//                 </p>
//                 <p>
//                   <FontAwesomeIcon className="servicesIcon" icon={faUtensils} />
//                   20% off Hotel Bistro
//                 </p>
//                 <br />
//                 <br />
//                 <p>2 night minimum</p>
//                 <button
//                   type="button"
//                   className="btn btn-info btn-lg hotelPicButton"
//                   data-toggle="modal"
//                   data-target="#myModal"
//                 >
//                   Hotel Pictures
//                 </button>
//                 {/* <p className="roomStock"> 10 ROOMS LEFT!</p> */}
//                 <div id="myModal" class="modal fade" role="dialog">
//                   <div className="modal-dialog">
//                     <div id="modalBody" className="modal-content">
//                       <div className="modal-header">
//                         <button
//                           type="button"
//                           className="close "
//                           data-dismiss="modal"
//                         >
//                           &times;
//                         </button>
//                         <h4 className="hotelModelTitle">
//                           Courtyard Marriott Capitol Hill/Navy Yard
//                         </h4>
//                       </div>
//                       <div className="modal-body">
//                         {/* <p>Some text in the modal.</p> */}

//                         <img
//                           className="modalPics"
//                           src="https://66.media.tumblr.com/4283456dd8ced5ba08578e429629a854/tumblr_psuti88Rxw1vp5j01o1_1280.jpg"
//                         />
//                         <br />
//                         <img
//                           className="modalPics"
//                           src="https://66.media.tumblr.com/6a62bcec5dcab9d9fa4314ae331ea6cd/tumblr_psuti88Rxw1vp5j01o2_1280.jpg"
//                         />
//                         <br />
//                         <img
//                           className="modalPics"
//                           src="https://66.media.tumblr.com/92e6c7627c432f4ab385a29119a80cef/tumblr_psuti88Rxw1vp5j01o3_1280.jpg"
//                         />
//                       </div>
//                       <div class="modal-footer">
//                         <button
//                           type="button"
//                           className="btn btn-default "
//                           data-dismiss="modal"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <p className="pickleRick" />
//                 <hr />
//                 <p>140 L St SE, Washington, DC 20003 </p>
//                 <p className="hotelAddress">0.9 miles from Audi Field</p>
//                 <hr />
//                 <label for="roomOption">Room :</label>
//                 <p>1 king bed or 2 doubles</p>
//                 {/* <select className="form-control" onChange={this.roomOption}>
//                   <option value="1">One King Bed</option>
//                   <option value="2">Queen/Queen Beds</option>
//                 </select> */}
//                 <br />
//                 <p>
//                   <span className="hotelPrice">
//                     ${hotelOnePrice} per Night/taxes Included
//                   </span>
//                 </p>

//                 {/* <button
//                   type="submit"
//                   id="hotelOne"
//                   onClick={this.onClick}
//                   className="btn btn-primary bookButton "
//                 >
//                   Add
//                 </button> */}
//               </div>
//             </div>

//             <div className="col-lg-6 text-center">
//               <div id="boxTwoRadius" className="box">
//                 <img
//                   className="hotelsImg"
//                   src="https://d3hfxk7rwdcpol.cloudfront.net/CSN/ee3d0813-fc18-45c4-95e1-f159157807a3/images/33b1eb6e29c046498adef9a038fb2e44_LARGE.jpg"
//                 />
//                 <h3>Residence Inn Capitol Hill/Navy Yard </h3>
//                 <FontAwesomeIcon className="starIcon" icon={faStar} />
//                 <FontAwesomeIcon className="starIcon" icon={faStar} />
//                 <FontAwesomeIcon className="starIcon" icon={faStar} />
//                 <FontAwesomeIcon className="starIcon" icon={faStar} />
//                 {/* <FontAwesomeIcon className="starIcon" icon={faStar} /> */}
//                 <br />
//                 <br />
//                 <p>
//                   <FontAwesomeIcon
//                     className="servicesIcon"
//                     icon={faSwimmingPool}
//                   />{" "}
//                   Swimming Pool{" "}
//                 </p>

//                 <p>
//                   <FontAwesomeIcon className="servicesIcon" icon={faRunning} />
//                   Fitness Gym
//                 </p>
//                 <p>
//                 <FontAwesomeIcon
//                   className="servicesIcon"
//                   icon={faDrumstickBite}
//                 />
//                 Pavilion pantry market
//                 </p>

//                 {/* <FontAwesomeIcon className="servicesIcon" icon={faRunning} /> */}
//                 {/* <FontAwesomeIcon
//                   className="servicesIcon"
//                   icon={faShoppingBasket}
//                 /> */}
//                 <br />
//                 <br />

//                 <p>2 nights minimum</p>

//                 <button
//                   type="button"
//                   className="btn btn-info btn-lg hotelPicButton"
//                   data-toggle="modal"
//                   data-target="#hotelTwoModal"
//                 >
//                   Hotel Pictures
//                 </button>

//                 <div id="hotelTwoModal" class="modal fade" role="dialog">
//                   <div className="modal-dialog">
//                     <div id="modalBody" className="modal-content">
//                       <div className="modal-header">
//                         <button
//                           type="button"
//                           className="close "
//                           data-dismiss="modal"
//                         >
//                           &times;
//                         </button>
//                         <h4 className="hotelModelTitle">
//                           Residence Inn Capitol Hill/Navy Yard
//                         </h4>
//                       </div>
//                       <div className="modal-body">
//                         {/* <p>Some text in the modal.</p> */}

//                         <img
//                           className="modalPics"
//                           src="https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-exterior-0001-hor-wide.jpg?downsize=2880px:*"
//                         />
//                         <br />
//                         <img
//                           className="modalPics"
//                           src="https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-lobby-0038-hor-wide.jpg?downsize=2880px:*"
//                         />
//                         <br />
//                         <img
//                           className="modalPics"
//                           src="https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-suite-0006-hor-wide.jpg?downsize=2880px:*"
//                         />
//                       </div>
//                       <div class="modal-footer">
//                         <button
//                           type="button"
//                           className="btn btn-default "
//                           data-dismiss="modal"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="pickleRickTwo" />
//                 <hr />

//                 <p>1233 1St SE, Washington, DC 20003 </p>
//                 <p className="hotelAddress">0.7 Miles from Audi Field</p>
//                 <hr />
//                 <label for="roomOption">Room :</label>
//                 <p>1 king bed or 2 doubles</p>
//                 {/* <select className="form-control" onChange={this.roomOption}>
//                   <option value="1">One King Bed</option>
//                   <option value="2">Two Queen Beds</option>
//                 </select> */}
//                 <br />
//                 <p>
//                   <span className="hotelPrice">
//                     ${hotelTwoPrice} per Night/taxes Included
//                   </span>
//                 </p>

//                 {/* <button
//                   type="submit"
//                   onClick={this.onClickTwo}
//                   className="btn btn-primary bookButton"
//                 >
//                   {" "}
//                   Add
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

export default Work;
