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
          price: "149.44",
          hotelName: "Hotel Washington Hilton",
          option: Number(0),
          hotelId: Number(0),
          typeOfRoom: " ",
          totalPrice: ""
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
          price: "235.64",
          hotelName: "The Ritz-Carlton",
          option: Number(0),
          hotelId: Number(1),
          typeOfRoom: " "
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
          price: "150.99",
          hotelName: "Hyatt House",
          option: Number(1),
          hotelId: Number(2),
          typeOfRoom: " "
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
      numberOfNights : 4,
      numberOfRooms : 1,
      // roomOptionTwo: Number(0),
      // roomOptionThree: Number(0)
    };
  }

  onClick = e => {
    e.preventDefault();
    console.log("ive been clicked", this.state);
    let checkIn = this.state.checkIn;
    let roomNumber = this.state.numberOfRooms;
    this.props.onStay(checkIn);
    this.props.onStay(roomNumber);

    var element = document.getElementById("tickets");
    element.scrollIntoView();

    let staringPrice = this.state.hotelOne[0].price * this.state.numberOfRooms;
    let numberOfNights = this.state.numberOfNights;
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
    var element = document.getElementById("tickets");
    element.scrollIntoView();
    
    let staringPrice = this.state.hotelTwo[0].price * this.state.numberOfRooms;
    let numberOfNights = this.state.numberOfNights;
    let price = staringPrice * numberOfNights;

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
    var element = document.getElementById("tickets");
    element.scrollIntoView();
    let staringPrice = this.state.hotelThree[0].price * this.state.numberOfRooms;
    let numberOfNights = this.state.numberOfNights;
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
    console.log('entro');
    let numberOfNights = Number(e.target.value);
    this.setState({numberOfNights : numberOfNights});

  }
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
  handleChange = e => {
    const { name, value } = e.target;

    console.log("estoy adentro de el handle change", name);
    console.log("estoy adentro de el handle change", value);

    this.setState({ ...this.state, [name]: [value] });
  };

  handleRoomPrince = e => {
    e.preventDefault();
    console.log("entro en handle room price");
    const { name, value } = e.target;
    this.setState({ ...this.state, numberOfRooms: Number(value) });
  };

  render() {
    //PRICE RENDERING

    let hotelOnePrice = "149.44"

  
    let hotelTwoPrice = "235.64"

    let hotelThreePrice = "150.99"
    return (
      <section className="backgroundColor" id="hotels">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <div className="section-title">
                <h2 className="hotelTitle">Hotels</h2>
                <img
                  src="assets/images/blueTitleLine.png"
                  alt="white-line"
                  className="img-fluid"
                />
                <p className="text-white" id="hotelClickBait">
                  Choose from our selection of Hand-Picked luxury hotels at the
                  best rates you will encouter
                </p>
              </div>
            </div>
          </div>
          <div id="dateSection" className="row">
            <div id="toDate" className="col-md-4 ">
              <label id="" className="text-white" htmlFor="checkIn">
                Check In :
              </label>
              <input
                autoComplete="off"
                className="form-control"
                id="checkIn"
                name="checkIn"
                min="2019-07-16" 
                max="2019-07-24"
                onChange={e => this.handleChange(e)}
                type="date"
              />
            </div>
            <div className="col-md-4 ">
              <label id="" className="text-white" htmlFor="checkOut">
                Number Of Nights:
              </label>
              <select className="form-control" onChange={this.numberOfNights}>
                  <option value="4">4 Nights - 07/18 to 07/22 </option>
                  <option value="8">8 Nights - 07/17 to 07/25 </option>
                </select>
              {/* <input
                autoComplete="off"
                className="form-control"
                id="checkOut"
                name="checkOut"
                onChange={e => this.handleChange(e)}
                type="date"
              /> */}
            </div>
            <div className="col-md-4 ">
              <label id="" className="text-white" htmlFor="numberOfRooms">
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
              <div className="box">
                <img
                  className="hotelsImg"
                  src="https://cache.marriott.com/marriottassets/marriott/WASYV/wasyv-exterior-7552-hor-wide.jpg?downsize=2880px:*"
                  alt=""
                />
                <h3>Courtyard Marriott</h3>

                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />

                <p>Services: Pool-side Bar , Gym , 20% off Bistro Restaurant</p>
                <p className="pickleRick" />
                <hr />
                <p>1919 Connecticut Ave NW</p>
                <p className="hotelAddress">1 mile from stadium</p>
                <hr />
                <label for="roomOption">Room :</label>
                <select className="form-control" onChange={this.roomOption}>
                  <option value="1">One King Bed</option>
                  <option value="2">Two Queen Beds</option>
                </select>
                <br />
                <p>
                  <span className="hotelPrice">${hotelOnePrice} per Night</span>
                </p>



                <button
                  type="submit"
                  id="hotelOne"
                  onClick={this.onClick}
                  className="btn btn-primary bookButton"
                >
                  Add
                </button>


              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="box">
                <img
                  className="hotelsImg"
                  src="https://d3hfxk7rwdcpol.cloudfront.net/CSN/ee3d0813-fc18-45c4-95e1-f159157807a3/images/33b1eb6e29c046498adef9a038fb2e44_LARGE.jpg"
                />
                <h3>Hampton Inn & Suites Washington </h3>

                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />

                <p>
                  Services: Pool-side Bar , Gym , 24 hr Pavilion Pantry Market
                </p>
                <br />
                <hr />
                <p>1265 First St SE</p>
                <p className="hotelAddress">5 Miles from Stadium</p>
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
              <div className="box">
                <img
                  className="hotelsImg"
                  src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/uploadimages/28/19/28194712.jpeg"
                  alt=""
                />
                <h3>Homewood Inn & Suites</h3>

                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />

                <p>Services: Pool-side Bar , Gym ,Business Center</p>
                <p className="pickleRick" />
                <hr />
                <p>1919 Connecticut Ave NW</p>
                <p className="hotelAddress">.8 miles from Audi Field</p>
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
