import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "../contact";
import FAQ from "../faq";


import {
  faPlusSquare,
  faMinusSquare,
  faSquare,
  faCheckSquare
} from "@fortawesome/fontawesome-free-regular";
import FormService from "../formService";
import Popup from "reactjs-popup";

import SweetAlert from "react-bootstrap-sweetalert";
//Testing DATE PICKER FOR REACT

const checkoutStyle = {
  marginTop: "8rem"
};

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    // this.props = props;
    this.state = {
      // ...this.props.location.state,
      currentStep: 1,
      hotels: [
        {
          price: 149.44,
          hotelName: "Courtyard Marriott Capitol Hill/Navy Yard",
          option: Number(0),
          hotelId: Number(0),
          typeOfRoom: " ",
          selected: false,
          img:
            "https://cache.marriott.com/marriottassets/marriott/WASYV/wasyv-exterior-7552-hor-wide.jpg?downsize=2880px",
          totalPrice: 149.44
        },
        {
          price: 191.97,
          hotelName: "Residence Inn by Marriott Capitol Hill/Navy Yard",
          option: Number(0),
          hotelId: Number(1),
          typeOfRoom: " ",
          selected: false,
          img:
            "https://cache.marriott.com/marriottassets/marriott/WASXR/wasxr-exterior-0001-hor-wide.jpg?downsize=2880px:*",
          totalPrice: 191.97
        }
      ],
      hotelRooms: 0,

      tickets: [
        {
          title: "Girondins de Bordeaux Vs O.Marseille",
          id: 0,
          lable: "07/18/2019",
          ticketUrl: "assets/images/topLogos.png",
          time: "9:00pm",
          price: 35.44,
          features:
            "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
          link: "#",
          qty: 0
        },
        {
          title: "3rd Place Game or Tournament Championship",
          id: 1,
          lable: "07/21/2019",
          ticketUrl: "assets/images/triLogoTwo.png",
          time: "6:00pm or 9:00pm",
          price: 45.99,
          features:
            "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
          link: "#",
          qty: 0
        },
        {
          title: "D.C. United Vs  Olympique de Marseille (friendly)",
          id: 2,
          lable: "07/24/2019",
          ticketUrl: "assets/images/dcunited.png",
          time: "8:00pm",
          price: 50.44,
          features:
            "<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>",
          link: "#",
          qty: 0
        }
      ],
      transports : [
        {
          transportName : "Transportation July 19 ",
          date:"07/19/2019",
          price:30.00,
          qty:0
        },
        {
          transportName : "Transportation July 23",
          date:"07/23/2019",
          price:30.00,
          qty:0
        }
      ],
      fanPlay: false,
	    transportation : false,
      freeGame: false,
      numOfPeople: 1,
      open:false,
      alert: null,
      clientFirstName: " ",
      clientLastName:" ",
      email: " "

      
  
    };
    this.FormService = new FormService();
  }
  
  openModal (){
    console.log('entroooo');
    this.setState({ open: true })
  }
  closeModal () {
    this.setState({ open: false })
  }

  popUp () {
    console.log('IM GETTTING CALLED')

      const getAlert = () => (
        <SweetAlert 
          success 
          title="Success!" 
          onConfirm={() => this.handleRedirect()}
        >
          Your request has been succesfully submitted! You will be receiving an email shortly of a copy of your request. Please give our agents 24 hours to email you a complete quote and payment instructions. Thank you!
        </SweetAlert>
      );
  
      this.setState({
        alert: getAlert()
      });
    


    // return (
    //   <div>
    //     <SweetAlert title="Your request has been succesfully submitted! You will be receiving an email shortly of a copy of your request. Please give our agents 24 hours to email you a complete quote and payment instructions. Thank you!" onConfirm={this.handleRedirect} />
    //   </div>
    // )
  }


formValidation = e => {
 

console.log('entro en click event ');

console.log(this.state);
let first = document.getElementById("firstName");
let second = document.getElementById("lastName");
let third = document.getElementById("email");
let checkIn = document.getElementById("checkIn");

let checkOut = document.getElementById("checkOut");


let  firstDay = this.state.checkIn;
let secondDay = this.state.checkOut;


if(firstDay != undefined){
  let checkInDay = firstDay.substring(8);


  if(checkInDay <= 16 && firstDay != undefined){
    let checkIn = document.getElementById("checkIn");
    checkIn.style.border = "2px solid red";
  }else{
    checkIn.style.border=" 2px solid #ced4da";
  }

}

if(secondDay != undefined || secondDay){
  let checkOutDay = secondDay.substring(8);

  if(checkOutDay >= 26 && secondDay != undefined){
    let checkOut = document.getElementById("checkOut");
    checkOut.style.border = "2px solid red";
  }else{
    checkOut.style.border=" 2px solid #ced4da";
  }
}







if(this.state.clientFirstName == " " || this.state.clientFirstName == undefined){
  let first = document.getElementById("firstName");
   first.style.border = "2px solid red"; 
}else{
  first.style.border=" 2px solid #ced4da";

}

if(this.state.clientLastName == " " || this.state.clientLastName == undefined){
  let second = document.getElementById("lastName");
   second.style.border = "2px solid red"; 
}else{
  second.style.border=" 2px solid #ced4da";
}
if(this.state.email == " " || this.state.email == undefined){
  let third = document.getElementById("email");
   third.style.border = "2px solid red"; 
}else{
  third.style.border=" 2px solid #ced4da";
}




  
  
  // // console.log(first);

  //  first.style.border = "2px solid red"; 
  //  last.style.border = "2px solid red"; 
  //  email.style.border = "2px solid red"; 






}
handleDateLogic = e => {
  e.preventDefault();

  console.log(this.state);

  let checkInValue = this.state.arrival;
  let checkOutValue = this.state.departure;

  console.log('this is the check in value', checkInValue);
  console.log('this is the check out value', checkOutValue);

  document.getElementById("checkIn").value =  checkInValue;
  document.getElementById("checkOut").value = checkOutValue;

  this.setState({ ...this.state, checkIn: checkInValue });



}

  handleFormSubmit = e => {
    e.preventDefault();


    console.log("form trying to be submitted at checkout");

    

// this.openModal();

// this.popUp();

    const {
      clientFirstName,
      clientLastName,
      checkIn,
      checkOut,
      currentStep,
      email,
      fanClubNumber,
      arrival,
      departure,
      fanPlay,
      address,
      city,
      country,
      nationality,
      state,
      zip,
      transports,
      hotelRooms,
      hotels,
      numOfPeople,
      phoneNum,
      questions,
      tickets 
    } = this.state;


let transportOneData = this.state.transports[0];
let transportTwoData = this.state.transports[1];




    
    this.FormService.addCheckOutForm({
      clientFirstName,
      clientLastName,
      checkIn,
      checkOut,
      transports,
      arrival,
      departure,
      currentStep,
      email,
     address,
      city,
      country,
      nationality,
      state,
      zip,
      transportOneData,
      transportTwoData,
      numOfPeople,
      fanClubNumber,
      fanPlay,
      hotelRooms,
      hotels,
      phoneNum,
      questions,
      tickets
    })

    this.popUp();


  };
  minusTicket = index => {
    let tkts = this.state.tickets.map((ticket, i) => {
      if (index == i && ticket.qty > 0) {
        return {
          ...ticket,
          qty: ticket.qty - 1
        };
      }
      return ticket;
    });
    this.updateTickets(tkts);
  };
  minusTransport = index => {
    let transports = this.state.transports.map((transport, i) => {
      if (index == i && transport.qty > 0) {
        return {
          ...transport,
          qty: transport.qty - 1
        };
      }
      return transport;
    });
    this.updateTransports(transports);
  };

  updateTransports = transports => {
    this.setState({ transports: transports });
  };

  minusPerson = index => {
    let num = 1;

    let result = (this.state.numOfPeople -= num);

    this.setState({ numOfPeople: result });
  };

  plusPerson = index => {
    let num = 1;

    let result = (this.state.numOfPeople += num);

    this.setState({ numOfPeople: result });
  };

  plusTicket = index => {
    let tkts = this.state.tickets.map((ticket, i) => {
      if (index == i && ticket.qty < 10) {
        return {
          ...ticket,
          qty: ticket.qty + 1
        };
      }
      return ticket;
    });
    this.updateTickets(tkts);
  };

  
  plusTransport = index => {
  
    let transports = this.state.transports.map((transport, i) => {


 
      if (index == i && transport.qty < 10) {
        return {
          ...transport,
          qty: transport.qty + 1
        };
      }
      return transport;
    });

    this.updateTransports(transports);
  };
  updateTickets = tickets => {
    this.setState({ tickets: tickets });
  };
  changeStep = step => {
    this.setState({ currentStep: step });
  };
  selectHotel = index => {
    let newHotels = this.state.hotels.map((hotel, i) => {
      if (i == index) {
        return {
          ...hotel,
          selected: !hotel.selected
        };
      }
      return {
        ...hotel,
        selected: false
      };
    });
    this.setState({ hotels: newHotels });
  };
  handleChange = e => {
    const { name, value } = e.target;
    console.log(this.state);
    // console.log(this.state.client[0]);

    this.setState({ ...this.state, [name]: value });
    console.log(this.state);
  };

  handleCountry = e => {
    // console.log(e.target);

    const { name, value } = e.target;

    this.setState({ ...this.state, [name]: value });
  };
  handleRedirect = e => {
    window.location.replace("http://omustourexperience.com/");
  };
  willPlay = e => {
    if (this.state.fanPlay == false) {
      this.setState({ fanPlay: true });
    }
    if (this.state.fanPlay == true) {
      this.setState({ fanPlay: false });
    }
  };
  tTrainingEvent = e => {
    if (this.state.transportation == false) {
      this.setState({ transportation: true });
    }
    if (this.state.transportation == true) {
      this.setState({ transportation: false });
    }
  };

  freeGame = e => {
    if (this.state.freeGame == false) {
      this.setState({ freeGame: true });
    }
    if (this.state.freeGame == true) {
      this.setState({ freeGame: false });
    }
  };
  stepOneTickets = () => {
    let ticketsList = this.state.tickets.map((ticket, i) => {
      return (
        <div className="row ticket-row">
          <div className="col-sm-12 col-md-4">
            <img className="ticketLogos" src={ticket.ticketUrl} />
          </div>
          <div className="col-sm-12 col-md-3 ticket-column">
            {/* <span className="game_item">{ticket.lable}</span>
            <span className="game_item">{ticket.time}</span> */}
          </div>
          <div className="col-sm-12 col-md-3 ticket-column ">
            {/* $ {ticket.price} */}
            <span className="game_item">{ticket.lable}</span>
            <span className="game_item">{ticket.time}</span>
          </div>
          <div className="col-sm-12 col-md-2 ticket-column">
            <div>
              <span>
                <FontAwesomeIcon
                  onClick={() => this.minusTicket(i)}
                  className="qty-item-control"
                  icon={faMinusSquare}
                />
              </span>
              <span className="qty-item">{ticket.qty}</span>
              <span>
                <FontAwesomeIcon
                  className="qty-item-control"
                  onClick={() => this.plusTicket(i)}
                  icon={faPlusSquare}
                />
              </span>
            </div>
          </div>
        </div>
      );
    });
    ticketsList.unshift(





      <div className="col-md-12">
              <div className="row">
        <div className="col-md-6 add-padding-left">

        <label id="" className="text-white hotel-label" htmlFor="checkIn">
  I will arrive on :
</label>
<input
  autoComplete="off"
  className="form-control"
  id="arrival"
  name="arrival"
  min="2019-07-01"
  onChange={e => this.handleChange(e)}
  type="date"
/>

          </div>


          <div className="col-md-6">

          <label id="" className="text-white hotel-label" htmlFor="checkOut2">
  I will leave on :
</label>
<input
  autoComplete="off"
  className="form-control"
  id="departure"
  name="departure"
  min="2019-07-01"
  onChange={e => this.handleChange(e)}
  type="date"
/>

          </div>
        </div>
        <h3 className="item-title">Games choice</h3>
      </div>
    );
    return ticketsList;
  };
  // stepOneTransport = () => {
  //   let transportList = this.state.transports.map((transport, i) => {
  //     return (
  //       <div id="transportRow"className="row ticket-row">
  //         <div className="col-sm-12 col-md-4">
  //           <span className="transportTitle">{transport.transportName}</span>
  //         </div>
  //         <div className="col-sm-12 col-md-3 ticket-column">
  //           <span className="game_item">{transport.date}</span>
  //           {/* <span className="game_item">{ticket.time}</span> */}
  //         </div>
  //         <div className="col-sm-12 col-md-3 ticket-column ">
  //          <span> $ {transport.price} </span>
  //           {/* <span className="game_item">{ticket.lable}</span> */}
  //           {/* <span className="game_item">{ticket.time}</span> */}
  //         </div>
  //         <div className="col-sm-12 col-md-2 ticket-column">
  //           <div>
  //             <span>
  //               <FontAwesomeIcon
  //                 onClick={() => this.minusTransport(i)}
  //                 className="qty-item-control"
  //                 icon={faMinusSquare}
  //               />
  //             </span>
  //             <span className="qty-item">{transport.qty}</span>
  //             <span>
  //               <FontAwesomeIcon
  //                 className="qty-item-control"
  //                 onClick={() => this.plusTransport(i)}
  //                 icon={faPlusSquare}
  //               />
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  //   transportList.unshift(
  //     <div className="col-md-12">
  //       <h3 className="item-title">Transportation to Training session</h3>
  //     </div>
  //   );
  //   return transportList;
  // };
  minusRooms = () => {
    if (this.state.hotelRooms > 0) {
      this.setState({ hotelRooms: this.state.hotelRooms - 1 });
    }
  };
  plusRooms = () => {
    if (this.state.hotelRooms < 4) {
      this.setState({ hotelRooms: this.state.hotelRooms + 1 });
    }
  };
  stepTwoHotels = () => {
    let hotelList = this.state.hotels.map((hotel, index) => {
      return (
        <div
          className="col-md-6 hotel-container"
          // onClick={() => this.selectHotel(index)}
        >
          <div
            className={"hotel-selector" + (hotel.selected ? " selected" : "")}
          >
            <img className="hotelsImg" src={hotel.img} />
            <h3 className="hotel-title">{hotel.hotelName}</h3>
            <p>2 nights minimum</p>
            <br/>
                <p> Maximum of 2 adults per room </p>
                <p className="soldOut">SOLD OUT!</p>
            {/* <span>
              <FontAwesomeIcon
                className={
                  "hotel-checkbox" + (hotel.selected ? " selected" : "")
                }
                icon={hotel.selected ? faCheckSquare : faSquare}
              />
            </span> */}
          </div>
        </div>
      );
    });
    return (
      <div className="row hotel-row">
        <div className="col-md-12">
          <h3 className="item-title">Choose your hotel</h3>
          <br></br>
          <br></br>
          <br></br>
          <label  className="text-white hotel-label" htmlFor="checkIn">
            Number of rooms<span id="fade">i</span> :
          </label>
          <span id="finalSpace">
              <FontAwesomeIcon
                // onClick={() => this.minusRooms()}
                className="qty-item-control"
                icon={faMinusSquare}
              />
            </span>
            <span className="qty-item">{this.state.hotelRooms}</span>
            <span>
              <FontAwesomeIcon
                className="qty-item-control"
                // onClick={() => this.plusRooms()}
                icon={faPlusSquare}
              />
            </span>
         
          <div className="col-sm-12 col-md-2 ">

          
          <div>

          </div>
        </div>
        </div>
        <div className="col-md-12">
 
          <label  className="text-white hotel-label" htmlFor="checkIn">
            Number of people :
          </label>
          <span id="finalSpace">
              <FontAwesomeIcon
                onClick={() => this.minusPerson()}
                className="qty-item-control"
                icon={faMinusSquare}
              />
            </span>
            <span className="qty-item">{this.state.numOfPeople}</span>
            <span>
              <FontAwesomeIcon
                className="qty-item-control"
                onClick={() => this.plusPerson()}
                icon={faPlusSquare}
              />
            </span>

            <br></br>
            <br></br>
            <br></br>
          <div className="col-sm-12 col-md-2 ">

          
          <div>

          </div>
        </div>
        </div>

        <div className="col-md-4 add-padding-left">
        <label id="buttonFiller" className="text-white hotel-label" htmlFor="checkIn">
            Arrival button:
          </label>
          <input
            value="same as arrival and departure"
            className="dateFormatButton form-control"
            id="sameDate"
            name="sameDate"
            onClick={e => this.handleDateLogic(e)}
            type="button"
          />
        </div>
        <div className="col-md-4 add-padding-left">
          <label id="" className="text-white hotel-label" htmlFor="checkIn">
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
            disabled
          />
     
        </div>
        
        <div className="col-md-4">
          <label id="" className="text-white hotel-label" htmlFor="checkOut2">
            Check Out :
          </label>
          <input
            autoComplete="off"
            className="form-control"
            id="checkOut"
            name="checkOut"
            min="2019-07-17"
            max="2019-07-25"
            onChange={e => this.handleChange(e)}
            type="date"
            disabled
          />
        </div>


<div className="col-md-12">
  <p id="warningHotel">     The OM US Tour Experience hotel special rates are available between July 17 and July 25.</p>
</div>
        <div className="col-md-12">
          <div className="row">{hotelList}</div>
        </div>
      </div>
    );
  };
  // stepThreeData = () => {
  //     return <div>Persoanl INFO</div>
  // }
  checkoutScreen = () => {
    let step;
    if (this.state.currentStep == 1) {
      step = this.stepOneTickets();
    } else if (this.state.currentStep == 2) {
      step = this.stepTwoHotels();
    } else if (this.state.currentStep == 3) {
      step = this.stepThreeData();
    }
    return (
      <div className="container checkout" style={checkoutStyle}>
        <div className="row" />
        {this.stepOneTickets()}
        {/* {this.stepOneTransport()} */}
        {this.stepTwoHotels()}
        {this.stepThreeData()}
        <div className="col-md-12 checkout-controls">
          <button type="submit"  onClick={this.formValidation} className="btn btn-primary" >
            Send my request
          </button>
          <div>{this.state.alert}</div>
          {/* <div>Your request has been succesfully submitted! You will be receiving an email shortly of a copy of your request. Please give our agents 24 hours to email you a complete quote and payment instructions. Thank you! </div> */}
          
          {/* <Popup
          open={this.state.open}
          closeOnDocumentClick
          // onClose={this.closeModal}
          modal
        >
<span> Your request has been succesfully submitted! You will be receiving an email shortly of a copy of your request. Please give our agents 24 hours to email you a complete quote and payment instructions. Thank you! </span>
        </Popup> */}
        </div>
        <div className="col-md-12 checkout-controls">
          <span className="btn btn-primary" onClick={this.handleRedirect}>
            Home
          </span>
        </div>

      </div>
    );
  };
  stepThreeData = () => {
    return (
      <div>
        <div className="row pax-row">
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
              required
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
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="formText" htmlFor="checkOut">
              E-mail Address:{" "}
            </label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder=".com"
              id="email"
              name="email"
              required
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
        <br />

        <br />
        <br />

        {/* ADDRESS SECTION OF FORM  */}
        <div className="row">
          <div className="col-md-6">
            <label className="formText" htmlFor="address">
              Address:{" "}
            </label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder="address"
              id="address"
              name="address"
              onChange={e => this.handleChange(e)}
              type="text"
            />
          </div>
          <div className="col-md-6">
            <label className="formText" htmlFor="firstName">
              City :{" "}
            </label>
            <input
              autoComplete="off"
              className="form-control"
              id="city"
              name="city"
              onChange={e => this.handleChange(e)}
              type="text"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <label className="formText" htmlFor="state">
              State:{" "}
            </label>
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
            <label className="formText" htmlFor="state">
              Zip:{" "}
            </label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder="Zip"
              id="zip"
              name="zip"
              onChange={e => this.handleChange(e)}
              type="text"
            />
          </div>
          <div className="col-md-4">
            <label className="formText" htmlFor="country">
              Country:{" "}
            </label>
            <select
              id="country"
              name="country"
              className="form-control nput-xlarge"
              onChange={e => this.handleCountry(e)}
            >
              <option value="" selected="selected">
                (please select a country)
              </option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegowina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, the Democratic Republic of the</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Cote d'Ivoire</option>
              <option value="HR">Croatia (Hrvatska)</option>
              <option value="CU">Cuba</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="TP">East Timor</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="FX">France, Metropolitan</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard and Mc Donald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran (Islamic Republic of)</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People's Republic of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libyan Arab Jamahiriya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macau</option>
              <option value="MK">
                Macedonia, The Former Yugoslav Republic of
              </option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States of</option>
              <option value="MD">Moldova, Republic of</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint LUCIA</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia (Slovak Republic)</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SH">St. Helena</option>
              <option value="PM">St. Pierre and Miquelon</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen Islands</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan, Province of China</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands (British)</option>
              <option value="VI">Virgin Islands (U.S.)</option>
              <option value="WF">Wallis and Futuna Islands</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="YU">Yugoslavia</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <label className="formText" htmlFor="nationality">
              Nationality:{" "}
            </label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder="nationality"
              id="nationality"
              name="nationality"
              onChange={e => this.handleChange(e)}
              type="text"
            />
          </div>
        </div>
        <br />
        <br />
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
          <div className="col-md-8">
            <label id="fansG" className="formText" htmlFor="transferText">
              I want to play in the OM team for the fans game on July 24th!
            </label>

            <input
              type="checkbox"
              onChange={e => this.willPlay(e)}
              id="transferText"
              className="form-control"
            />
          </div>
          {/* <div className="col-md-6">
            <label className="formText" htmlFor="transferTraining">
              I need transportation for the training sessions
            </label>

            <input
              type="checkbox"
              onChange={e => this.tTrainingEvent(e)}
              id="transferTraining"
              className="form-control"
            />
          </div> */}
          {/* <div className="col-md-6">
            <label className="formText" htmlFor="transferText">
              Would you like to win a free game?
            </label>

            <input
              type="checkbox"
              onChange={e => this.freeGame(e)}
              id="transferText"
              className="form-control"
            />
          </div> */}
        </div>
		<div className="row">
          {/* <div className="col-md-6">
            <label className="formText" htmlFor="transferTraining">
              I need transportation for the training sessions
            </label>

            <input
              type="checkbox"
              onChange={e => this.tTrainingEvent(e)}
              id="transferTraining"
              className="form-control"
            />
          </div> */}
        </div>
        <br />
        <br />
        {/* <label className="formText" htmlFor="peopleNum">
          # of People :
        </label> */}
        {/* <div>
          <span>
            <FontAwesomeIcon
              onClick={e => this.minusPerson(e)}
              className="qty-item-control"
              icon={faMinusSquare}
            />
          </span>
          <span className="qty-item">{this.state.numOfPeople}</span>
          <span>
            <FontAwesomeIcon
              className="qty-item-control"
              onClick={e => this.plusPerson(e)}
              icon={faPlusSquare}
            />
          </span>
        </div> */}

        <br />
        {/* <div className="row">
          <div className="col-md-6">
              <label className="formText" htmlFor="transferText">
                Would you like to win a free game?
              </label>
              
              <input type="checkbox" onChange={e => this.freeGame(e)} id="transferText" className="form-control"></input>
          </div>

      </div> */}
        <div className="row">
          <div className="col-md-4">
            <img id="discountImg" src="assets/images/OMNationDiscount.png" />
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
            {/* <span id="note">*Note that this will only be valid for game tickets</span> */}
          </div>
          <div className="col-md-3">
            {/* <FontAwesomeIcon
                 id="fanArrow"
                 onClick={this.fanValidation}
                 className=""
                 icon={faPlusSquare}
               /> */}
            {/* <div id="button" className="col-md-12">
                   <input
                     className="btn btn-primary"
                     id="fanArrow"
                     onClick={this.fanValidation}
                     value="Apply my promotion code"
                   />
                 </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label className="formText" htmlFor="questionsText">
              Questions?
            </label>
            <textarea
              name="questions"
              id="questionsText"
              onChange={e => this.handleChange(e)}
              className="form-control questionsText"
            />
          </div>
        </div>
      </div>
    );
  };
  cartUpdatorState = e => {
    console.log(e);
    console.log("DELETE CLICK HOTEL ONE HAS ENTERED HOME");
    this.setState({ cart: e });
  };
  cartUpdator = e => {
    let index = e.target.id;
    let cart = this.state.cart.filter((item, i) => {
      return i != index;
    });
    console.log("CART", cart);
    this.cartUpdatorState(cart);
  };

  render() {
    document.body.classList.remove("inner-page");
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
        <div id="checkOutSection" className="container" />
        {this.checkoutScreen()}
        </form>
        {/* <Contact /> */}
        <FAQ />
      </div>
    );
  }
}

export default Checkout;
