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
      hotelOne: [{
       price: "239",
       hotelName: "Hotel Washington Hilton" ,
       amountOfRooms:"2",
       hotelId: Number(0)
      }
      ],
      hotelTwo: [{
        price:"540", 
        hotelName:"The Ritz-Carlton" ,
        amountOfRooms:"3",
        hotelId: Number(1)
      }],
      hotelThree:[{
        price:"600",
        hotelName:"Hyatt House",
        amountOfRooms:"1",
        hotelId: Number(2)
      }]
    };

  }

  onClick = e => {
    e.preventDefault();
    console.log('ive been clicked');
    this.props.onClick(this.state.hotelOne);

  }
  onClickTwo = e => {
  
    e.preventDefault();
    console.log('ive been clicked Two');
    this.props.onClickTwo(this.state.hotelTwo);

  }
  onClickThree = e => {
    e.preventDefault();

    console.log('number 3');

    this.props.onClickTwo(this.state.hotelThree);
  }


  onFormSubmit = e => {

    e.preventDefault();


    this.props.onSubmit(this.state.term);

    
  };



  render() {
    
    return (
      <section className="work" id="hotels">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <div className="section-title">
                <h2 className="subHeaders">Hotels</h2>
                <img
                  src="assets/images/title-line.png"
                  alt="white-line"
                  className="img-fluid"
                />
                <p id="hotelClickBait">
                  Choose from our selection of Hand-Picked luxury hotels at the
                  best rates you will encouter
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div id="fromDate" className="col-md-6 ">
              <p>Label For "From Date Input" </p>
            </div>
            <div id="toDate" className="col-md-6 ">
              <p>Label For "To Date Input" </p>
            </div>
          </div>

          {/* HOTEL LIST RENDERING */}

          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="box">
                <img
                  className="hotelsImg"
                  src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/66/80/66808458.jpeg"
                  alt=""
                />
                <h3>Hotel Washington Hilton</h3>

                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />

                <p>Near Dupont Circle and four blocks from the metro station</p>
                <p>
                  <span className="hotelPrice">$239 per Night</span>
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

                  <button type="submit"  onClick={this.onClick} className="btn btn-primary bookButton">Add</button>
           
                {/* <button type="button" className="btn btn-primary bookButton">
                  Add
                </button> */}
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="box">
                <img
                  className="hotelsImg"
                  src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/16/83/168399602.jpeg"
                />
                <h3>The Ritz-Carlton</h3>

                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />
                <FontAwesomeIcon className="starIcon" icon={faStar} />

                <p>
                  The Ritz-Carlton is a premium luxury five star hotel, situated
                  in the West End neighborhood
                </p>
                <p>
                  <span className="hotelPrice">$540 per Night</span>
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

                  <button type="submit"  onClick={this.onClickTwo} className="btn btn-primary bookButton"> Add</button>
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

                <p>The Wharf is the ideal location to explore all chicago</p>

                <p>
                  <span className="hotelPrice">$600 per Night</span>
                </p>

                <button type="button" onClick={this.onClickThree} className="btn btn-primary bookButton">
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
