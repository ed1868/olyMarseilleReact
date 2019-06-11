import React from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/fontawesome-free-solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faFutbol } from "@fortawesome/fontawesome-free-regular";


class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelOne: [
        {
          price: 149.44,
          hotelName: "Courtyard Marriott Capitol Hill/Navy Yard",
          option: Number(0),
          hotelId: Number(0),
          typeOfRoom: " ",
          totalPrice: 149.44,
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
          price: 191.97,
          hotelName: "Residence Inn by Marriott Capitol Hill/Navy Yard",
          option: Number(0),
          hotelId: Number(1),
          typeOfRoom: " ",
          totalPrice: 191.97,
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
          totalPrice: 437.95,
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
    let price = staringPrice ;

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



      console.log('STARTING PRICE ON HOTEL THREE------', staringPrice);
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
    //PRICE RENDERING

    let hotelOnePrice = "149.44";

    let hotelTwoPrice = "191.97";

    let hotelThreePrice = "437.95";
    if (this.state.rateOne == true) {
      hotelThreePrice = "437.95";
    }

    if (this.state.rateTwo == true) {
      hotelThreePrice = "250.60";
    }

    if (this.state.rateThree == true) {
      hotelThreePrice = "371.28";
    }

    return (
      <section  id="hotels">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <div className="section-title">
                <h2 className="headers">Hotels</h2>
                {/* <img
                  src="assets/images/blueTitleLine.png"
                  alt="white-line"
                  className="img-fluid"
                /> */}
                <p  id="hotelClickBait">
                  Choose from our selection of Hand-Picked luxury hotels at the
                  best rates you will encouter
                </p>
              </div>
            </div>
          </div>
          <div id="dateSection" className="row">
            <div id="toDate" className="col-md-4 ">
              <label id="checkInLabel" className="text-white" htmlFor="checkIn">
                Check In :
              </label>
              <input
                autoComplete="off"
                className="form-control"
                id="checkIn"
                name="checkIn"
                min="2019-07-17"
                max="2019-07-25"
                onChange={e => this.handleCheckInChange(e)}
                type="date"
              />
            </div>
            <div className="col-md-4 ">
              <label id="checkOutLabel" className="text-white" htmlFor="checkOut">
                Check Out:
              </label>
              {/* <select className="form-control" onChange={this.numberOfNights}>
                  <option value="4">4 Nights - 07/18 to 07/22 </option>
                  <option value="8">8 Nights - 07/17 to 07/25 </option>
                </select> */}
              <input
                autoComplete="off"
                className="form-control"
                id="checkOut"
                min="2019-07-17"
                max="2019-07-25"
                name="checkOut"
                onChange={e => this.handleCheckoutChange(e)}
                type="date"
              />
            </div>
            <div className="col-md-4 ">
              <label id="numOfRoomsLabel" className="text-white" htmlFor="numberOfRooms">
                # of Rooms :
              </label>

              <input
                autoComplete="off"
                className="form-control "
                id="numberOfRooms"
                placeholder="Number of Rooms "
                name="numberOfRooms"
                onChange={e => this.handleRoomPrince(e)}
                type="number"
              />
            </div>
          </div>

          {/* HOTEL LIST RENDERING */}

          <div className="row">
            <div className="col-lg-4 text-center">
              <div id="boxOneRadius" className="box">
                <img
                  className="hotelsImg"
                  src="https://cache.marriott.com/marriottassets/marriott/WASYV/wasyv-exterior-7552-hor-wide.jpg?downsize=2880px:*"
                  alt=""
                />
                <h3>Courtyard Marriott Capitol Hill/Navy Yard</h3>
                <br />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                {/* <FontAwesomeIcon className="starIcon" icon={faStar} /> */}
                {/* <FontAwesomeIcon className="starIcon" icon={faStar} /> */}
                <br />
                <br />
                <p className="hotelP">
                  Services: Pool-side Bar , Gym , 20% off Bistro Restaurant
                </p>
                <p>2 night minimum</p>
                <button
                  type="button"
                  className="btn btn-info btn-lg hotelPicButton"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Hotel Pictures
                </button>

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
                <p className="pickleRick" />
                <hr />
                <p>140 L St SE, Washington, DC 20003 </p>
                <p className="hotelAddress">.9 miles from Audi Field</p>
                <hr />
                <label for="roomOption">Room :</label>
                <select className="form-control" onChange={this.roomOption}>
                  <option value="1">One King Bed</option>
                  <option value="2">Queen/Queen Beds</option>
                </select>
                <br />
                <p>
                  <span className="hotelPrice">${hotelOnePrice} per Night</span>
                </p>

                <button
                  type="submit"
                  id="hotelOne"
                  onClick={this.onClick}
                  className="btn btn-primary bookButton "
                >
                  Add
                </button>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div id="boxTwoRadius" className="box">
                <img
                  className="hotelsImg"
                  src="https://d3hfxk7rwdcpol.cloudfront.net/CSN/ee3d0813-fc18-45c4-95e1-f159157807a3/images/33b1eb6e29c046498adef9a038fb2e44_LARGE.jpg"
                />
                <h3>Residence Inn Capitol Hill/Navy Yard </h3>
                <br />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                {/* <FontAwesomeIcon className="starIcon" icon={faStar} /> */}
                <br />
                <br />
        
                <p id="hotelTwoP" className="hotelP">
       
                  Services: Free breakfast , Gym , 24 hr Pavilion Pantry Market
                </p>

                <p>2 night minimum</p>

                <button
                  type="button"
                  className="btn btn-info btn-lg hotelPicButton"
                  data-toggle="modal"
                  data-target="#hotelTwoModal"
                >
                  Hotel Pictures
                </button>
                
                <div id="hotelTwoModal" class="modal fade" role="dialog">
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

                <p className="pickleRickTwo" />
                <hr />

                <p>1233 1St SE, Washington, DC 20003 </p>
                <p className="hotelAddress">0.7 Miles from Audi Field</p>
                <hr />
                <label for="roomOption">Room :</label>
                <select className="form-control" onChange={this.roomOption}>
                  <option value="1">One King Bed</option>
                  <option value="2">Two Queen Beds</option>
                </select>
                <br />
                <p>
                  <span className="hotelPrice">${hotelTwoPrice} per Night</span>
                </p>

                <button
                  type="submit"
                  onClick={this.onClickTwo}
                  className="btn btn-primary bookButton"
                >
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div id="boxThreeRadius" className="box">
                <img
                  className="hotelsImg"
                  src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/uploadimages/28/19/28194712.jpeg"
                  alt=""
                />
                <br />
                <h3>W Hotels Washington DC</h3>
                <br></br>
                <br></br>
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <br />
                <br />
                <p id="hotelTwoP" className="hotelP">
                  Services: Free breakfast , Gym , 24 hr Pavilion Pantry Market
                </p>

                <p>2 night minimum</p>

                <button
                  type="button"
                  className="btn btn-info btn-lg hotelPicButton"
                  data-toggle="modal"
                  data-target="#hotelThreeModal"
                >
                  Hotel Pictures
                </button>
                <br></br>
                <br></br>
                <div id="hotelThreeModal" class="modal fade" role="dialog">
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
                          W Hotel Washington D.C
                        </h4>
                      </div>
                      <div className="modal-body">
                        {/* <p>Some text in the modal.</p> */}

                        <img
                          className="modalPics"
                          src="https://cache.marriott.com/marriottassets/marriott/WASWH/waswh-queen-guestroom-3804-hor-wide.jpg?downsize=2880px:*"
                        />
                        <br />
                        <img
                          className="modalPics"
                          src="https://cache.marriott.com/marriottassets/marriott/WASWH/waswh-king-guestroom-3895-hor-wide.jpg?downsize=2880px:*"
                        />
                        <br />
                        <img
                          className="modalPics"
                          src="https://cache.marriott.com/marriottassets/marriott/WASWH/waswh-front-desk-8241-hor-wide.jpg?downsize=2880px:*"
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
                <p className="pickleRickThree" />
                <hr />
                <p>515 15th St NW, Washington, DC 20004</p>
                <p className="hotelAddress">2.9 miles from Audi Field</p>
                <hr />
                <label for="roomOption">Room :</label>
                <select className="form-control" onChange={this.roomOption}>
                  <option value="1">One King Bed</option>
                  <option value="2">Two Queen Beds</option>
                </select>
                <br />

                <p>
                  <span className="hotelPrice">
                    ${hotelThreePrice} per Night
                  </span>
                </p>

                <button
                  type="button"
                  onClick={this.onClickThree}
                  className="btn btn-primary bookButton"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
