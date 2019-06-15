import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "../contact";
import { faPlusSquare, faMinusSquare, faSquare, faCheckSquare } from "@fortawesome/fontawesome-free-regular";
//Testing DATE PICKER FOR REACT

const checkoutStyle = {
  marginTop: '8rem',
}

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
        ...this.props.location.state,
        currentStep : 1,
        hotels: [
            {
              price: 149.44,
              hotelName: "Courtyard Marriott Capitol Hill/Navy Yard",
              option: Number(0),
              hotelId: Number(0),
              typeOfRoom: " ",
              selected: false,
              img : 'https://cache.marriott.com/marriottassets/marriott/WASYV/wasyv-exterior-7552-hor-wide.jpg?downsize=2880px',
              totalPrice: 149.44
            },
            {
              price: 191.97,
              hotelName: "Residence Inn by Marriott Capitol Hill/Navy Yard",
              option: Number(0),
              hotelId: Number(1),
              typeOfRoom: " ",
              selected: false,
              img: 'https://d3hfxk7rwdcpol.cloudfront.net/CSN/ee3d0813-fc18-45c4-95e1-f159157807a3/images/33b1eb6e29c046498adef9a038fb2e44_LARGE.jpg',
              totalPrice: 191.97
            }
        ],
        hotelRooms: 0,
        tickets: [
            {
              title: "Girondins de Bordeaux Vs O.Marseille",
              id: 0,
              lable: "07/18/2019",
              ticketUrl:"assets/images/topLogos.png",
              time:"9:00pm",
              price: 35.44,
              features:
                "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
              link: "#",
              qty: 0,
            },
            {
              title: "3rd Place Game or Tournament Championship",
              id: 1,
              lable: "07/21/2019",
              ticketUrl:"assets/images/triLogoTwo.png",
              time:"9:00pm",
              price: 45.99,
              features:
                "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
              link: "#",
              qty: 0,
            },
            {
              title: "D.C. United Vs  Olympic Marseille (friendly)",
              id: 2,
              lable: "07/24/2019",
              ticketUrl:"assets/images/dcunited.png",
              time:"8:00pm",
              price: 50.44,
              features:
                "<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>",
              link: "#",
              qty: 0,
            }
        ]
    };

  }
  minusTicket = (index) => {
      let tkts = this.state.tickets.map((ticket, i) => {
          if(index == i && ticket.qty > 1){
              return {
                  ...ticket,
                  qty: ticket.qty - 1
              }
          }
          return ticket;
      });
      this.updateTickets(tkts);
  }
  plusTicket = (index) => {
      let tkts = this.state.tickets.map((ticket, i) => {
          if(index == i && ticket.qty < 10){
              return {
                  ...ticket,
                  qty: ticket.qty + 1
              }
          }
          return ticket;
      });
      this.updateTickets(tkts);
  }
  updateTickets = (tickets) => {
      this.setState({tickets : tickets});
  }
  changeStep = (step) => {
      this.setState({currentStep : step});
  }
  selectHotel = (index) => {
      let newHotels = this.state.hotels.map((hotel, i) => {
          if(i == index){
              return {
                  ...hotel,
                  selected: !hotel.selected
              }
          }
          return {
              ...hotel,
              selected: false,
          };
      });
      this.setState({hotels : newHotels});
  }
  handleChange = e => {
    const { name, value } = e.target;
    console.log(this.state);
    // console.log(this.state.client[0]);

    this.setState({ ...this.state, [name]: value });
    console.log(this.state);
  };
  transferCheck = e => {
    console.log('entroooo');

    console.log(e)
    // if (this.state.transfer == false) {
    //   this.setState({ transfer: true });
    // } else {
    //   this.setState({ transfer: false });
    // }

  };
  stepOneTickets = () => {
      let ticketsList = this.state.tickets.map((ticket, i) => {
          return (
              <div className="row ticket-row">
                  <div className="col-sm-12 col-md-4">
                      <img className="ticketLogos" src={ticket.ticketUrl} />
                  </div>
                  <div className="col-sm-12 col-md-3 ticket-column">
                      <span className="game_item">{ticket.lable}</span>
                      <span className="game_item">{ticket.time}</span>
                  </div>
                  <div className="col-sm-12 col-md-3 ticket-column price-ticket">
                      $ {ticket.price}
                  </div>
                  <div className="col-sm-12 col-md-2 ticket-column">
                      <div>
                          <span>
                              <FontAwesomeIcon
                                onClick={() => this.minusTicket(i)}
                                className="qty-item-control"
                                icon={faMinusSquare}/>
                          </span>
                          <span className="qty-item">{ticket.qty}</span>
                          <span>
                              <FontAwesomeIcon
                                className="qty-item-control"
                                onClick={() => this.plusTicket(i)}
                                icon={faPlusSquare}/>
                          </span>
                      </div>
                  </div>
              </div>
          );
      });
      ticketsList.unshift(<div className="col-md-12">
        <h3 className="item-title">Choose your tickets.</h3>
      </div>);
      return ticketsList;
  }
  minusRooms = () => {
      if(this.state.hotelRooms > 1){
          this.setState({hotelRooms: this.state.hotelRooms - 1});
      }
  }
  plusRooms = () => {
      if(this.state.hotelRooms < 4){
          this.setState({hotelRooms: this.state.hotelRooms + 1});
      }
  }
  stepTwoHotels = () => {
      let hotelList = this.state.hotels.map((hotel, index) => {
          return <div className="col-md-6 hotel-container" onClick={() => this.selectHotel(index)}>
              <div className={'hotel-selector' + (hotel.selected ? ' selected' : '')}>
                  <img
                    className="hotelsImg"
                    src={hotel.img}
                  />
              <h3 className="hotel-title">{hotel.hotelName}</h3>

              <span>
                  <FontAwesomeIcon
                    className={'hotel-checkbox' + (hotel.selected ? ' selected' : '')}
                    icon={(hotel.selected ? faCheckSquare : faSquare)}/>
              </span>
              </div>
          </div>
      });
      return <div className="row hotel-row">
          <div className="col-md-12">
              <h3 className="item-title">Choose your hotel</h3>
          </div>
          <div className="col-md-5 add-padding-left"><label id="" className="text-white hotel-label" htmlFor="checkIn">
            Check In :
          </label>
          <input
            autoComplete="off"
            className="form-control"
            id="checkIn"
            name="checkIn"
            min="2019-07-17"
            max="2019-07-25"
            onChange={e => this.handleChange(e)}
            type="date"
          /></div>
      <div className="col-md-5"><label id="" className="text-white hotel-label" htmlFor="checkOut2">
            Check Out :
          </label>
          <input
            autoComplete="off"
            className="form-control"
            id="checkOut2"
            name="checkOut"
            min="2019-07-17"
            max="2019-07-25"
            onChange={e => this.handleChange(e)}
            type="date"
          /></div>
      <div className="col-sm-12 col-md-2 ticket-column">
          <label id="" className="text-white hotel-label" htmlFor="checkOut2">
                Rooms No. :
              </label>
          <div>
              <span>
                  <FontAwesomeIcon
                    onClick={() => this.minusRooms()}
                    className="qty-item-control"
                    icon={faMinusSquare}/>
              </span>
              <span className="qty-item">{this.state.hotelRooms}</span>
              <span>
                  <FontAwesomeIcon
                    className="qty-item-control"
                    onClick={() => this.plusRooms()}
                    icon={faPlusSquare}/>
              </span>
          </div>
        </div>

        <div className="col-md-12">
            <div className="row">
                {hotelList}
            </div>
        </div>

      </div>
  }
  // stepThreeData = () => {
  //     return <div>Persoanl INFO</div>
  // }
  checkoutScreen = () => {
      let step;
      if(this.state.currentStep == 1){
          step = this.stepOneTickets();
      }else if(this.state.currentStep == 2){
          step = this.stepTwoHotels();
      }else if(this.state.currentStep == 3){
          step = this.stepThreeData();
      }
      return <div className="container checkout" style={checkoutStyle}>
        <div className="row">

        </div>
        {this.stepOneTickets()}
        {this.stepTwoHotels()}
        {this.stepThreeData()}
        <div className="col-md-12 checkout-controls">
            <span className="btn btn-primary" onClick={() => this.mkCheckout()}>Send my request</span>
        </div>
      </div>;
  }
  stepThreeData = () => {
      return <div><div className="row pax-row">
          <div className="col-md-12">
            <h3 className="item-title">Personal information</h3>
          </div>
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
        <div className="col-md-6">
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
        <div className="col-md-6">
          <label className="formText" htmlFor="firstName">
            Phone Number :{" "}
          </label>
          <input
            autoComplete="off"
            className="form-control"
            id="phoneNum"
            name="phoneNum"
            onChange={e => this.handleChange(e)}
            type="text"
          />
        </div>
      </div>
      <br></br>
      {/* <div className="row">
          <div className="col-md-6">
              <label className="formText" htmlFor="transferText">
                Add Transfer to OM training ? 
              </label>
              
          </div>
          <div className="col-md-6">
          <input type="checkbox" onChange={e => this.transferCheck(e)} id="transferText" className="form-control"></input>
          </div>
      </div> */}
      <div className="row">
          <div className="col-md-6">
              <label className="formText" htmlFor="transferText">
                I want to play in the OM team for the fans game !
              </label>
              
              <input type="checkbox" onChange={e => this.transferCheck(e)} id="transferText" className="form-control"></input>
          </div>

      </div>
      <div className="row">
          <div className="col-md-12">
              <label className="formText" htmlFor="questionsText">
                Questions?
              </label>
              <textarea id="questionsText" className="form-control questionsText"></textarea>
          </div>
      </div>
  </div>;
  }
  cartUpdatorState = e => {
    console.log(e);
    console.log("DELETE CLICK HOTEL ONE HAS ENTERED HOME");
    this.setState({ cart: e });
  }
  cartUpdator = e => {
      let index = e.target.id;
      let cart = this.state.cart.filter((item, i) => {
          return i != index;
      });
      console.log('CART',cart);
      this.cartUpdatorState(cart);
  }
  render() {
    document.body.classList.remove("inner-page");
    return (
      <div>

          <div id="checkOutSection" className="container">

          </div>
          {this.checkoutScreen()}
          <Contact />
      </div>
    );
  }
}

export default Checkout;
