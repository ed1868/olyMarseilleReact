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
          hotelId: Number(0)
        }
      ],
      hotelOneOptTwo: [
        {
          price: "210.45",
          hotelName: "Hotel Washington Hilton",
          option: Number(1),
          hotelId: Number(0)
        }
      ],
      hotelTwo: [
        {
          price: "235.64",
          hotelName: "The Ritz-Carlton",
          amountOfRooms: "3",
          option: Number(0),
          hotelId: Number(1)
        }
      ],
      hotelTwoOptTwo: [
        {
          price: "245.95",
          hotelName: "The Ritz-Carlton",
          amountOfRooms: "3",
          option: Number(1),
          hotelId: Number(1)
        }
      ],
      hotelThree: [
        {
          price: "150.99",
          hotelName: "Hyatt House",
          amountOfRooms: "1",
          option: Number(1),
          hotelId: Number(2)
        }
      ],
      hotelThreeOptTwo: [
        {
          price: "165.99",
          hotelName: "Hyatt House",
          amountOfRooms: "1",
          option: Number(1),
          hotelId: Number(2)
        }
      ],
      roomOption: Number(0),
      roomOptionTwo: Number(0),
      roomOptionThree: Number(0)
    };
  }

  onClick = e => {
    e.preventDefault();
    console.log("ive been clicked", this.state);
    let checkIn = this.state.checkIn;
    let checkOut = this.state.checkOut;
    let roomNumber = this.state.numberOfRooms;
    this.props.onStay(checkIn);
    this.props.onStay(checkOut);
    this.props.onStay(roomNumber);

    var element = document.getElementById("tickets");
    element.scrollIntoView();
    this.props.hotelPriceUpdator(roomNumber);

    if ((this.state.roomOption == 0 || this.state.roomOption == 1)) {
      // this.props.onClick(this.state.hotelOne);
      this.props.onClick(this.state.hotelOne);
    }
    if ((this.state.roomOption == 2)) {
      this.props.onClick(this.state.hotelOneOptTwo);
    }
  };
  onClickTwo = e => {
    e.preventDefault();
    console.log("ive been clicked Two");
    var element = document.getElementById("tickets");
    element.scrollIntoView();

    if(this.state.roomOptionTwo == 0 || this.state.roomOptionTwo == 1){
      this.props.onClickTwo(this.state.hotelTwo);
    }

    if(this.state.roomOptionTwo == 2){
      this.props.onClickTwo(this.state.hotelTwoOptTwo);
    }
  };
  onClickThree = e => {
    e.preventDefault();

    console.log("number 3");
    var element = document.getElementById("tickets");
    element.scrollIntoView();
    
    if(this.state.roomOptionThree == 0 || this.state.roomOptionThree == 1){
      this.props.onClickThree(this.state.hotelThree);
    }
    if(this.state.roomOptionThree == 2){
      this.props.onClickThree(this.state.hotelThreeOptTwo);
    }

  };

  roomOption = e => {
    e.preventDefault();
    console.log("entro en room option ");
    let roomOptionId = Number(e.target.value);
    this.setState({ roomOption: roomOptionId });
  };

  roomTwoOption = e => {
    e.preventDefault();
    let roomOptionId = Number(e.target.value);
    this.setState({roomOptionTwo: roomOptionId})
  }

  roomOptionThree = e => {
    e.preventDefault();
    let roomOptionId = Number(e.target.value);
    this.setState({roomOptionThree : roomOptionId});
  }

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
    let hotelOnePrice = "";
    if (this.state.roomOption == 0 || this.state.roomOption == 1) {
      hotelOnePrice = "149.44";
    }
    if (this.state.roomOption == 2) {
      hotelOnePrice = "210.45";
    }
    let hotelTwoPrice = "";
    if (this.state.roomOptionTwo == 0 || this.state.roomOption == 1) {
      hotelTwoPrice = "235.64";
    }
    if (this.state.roomOptionTwo == 2) {
      hotelTwoPrice = "245.95";
    }
    let hotelThreePrice = "";
    if (this.state.roomOptionThree == 0 || this.state.roomOption == 1) {
      hotelThreePrice = "150.99";
    }
    if (this.state.roomOptionThree == 2) {
      hotelThreePrice = "165.99";
    }

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
                onChange={e => this.handleChange(e)}
                type="date"
              />
            </div>
            <div className="col-md-4 ">
              <label id="" className="text-white" htmlFor="checkOut">
                Check Out:
              </label>
              <input
                autoComplete="off"
                className="form-control"
                id="checkOut"
                name="checkOut"
                onChange={e => this.handleChange(e)}
                type="date"
              />
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

                {/* <input
                    className="input is-info"
                    type="text"
                    value={this.state.term}
                    onChange={e => {
                      this.setState({ term: e.target.value });
                    }}
                    placeholder="search away.."
                  /> */}

                <button
                  type="submit"
                  id="hotelOne"
                  onClick={this.onClick}
                  className="btn btn-primary bookButton"
                >
                  Add
                </button>

                {/* <button type="button" className="btn btn-primary bookButton">
                  Add
                </button> */}
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
                <select className="form-control" onChange={this.roomTwoOption}>
                  <option value="1">One King Bed</option>
                  <option value="2">Two Queen Beds</option>
                </select>
                <br />
                <p>
                  <span className="hotelPrice">${hotelTwoPrice} per Night</span>
                </p>
                {/* <form onSubmit={this.onFormSubmit} > */}
                {/* <input
                    className="input is-info"
                    type="text"
                    value={this.state.term}
                    onChange={e => {
                      this.setState({ term: e.target.value });
                    }}
                    placeholder="search away.."
                  /> */}

                <button
                  type="submit"
                  onClick={this.onClickTwo}
                  className="btn btn-primary bookButton"
                >
                  {" "}
                  Add
                </button>
                {/* </form> */}
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="box">
                <img
                  className="hotelsImg"
                  src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/uploadimages/28/19/28194712.jpeg"
                  alt=""
                />
                <h3>Hyatt House</h3>

                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />

                <p>Services: Pool-side Bar , Gym ,Business Center</p>
                <p className="pickleRick" />
                <hr />
                <p>1919 Connecticut Ave NW</p>
                <p className="hotelAddress">5 Miles from Stadium</p>
                <hr />
                <label for="roomOption">Room :</label>
                <select className="form-control" onChange={this.roomOptionThree}>
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
