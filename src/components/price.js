import React from "react";
import OwlCarousel from "react-owl-carousel";

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketOne: [
        {
          price: 35.44,
          ticketName: "Girondins de Bordeaux Vs O.Marseille'",
          time: "7:00",
          ticketId: Number(0),
          totalPrice: 35.44,
        }
      ],
      ticketTwo: [
        {
          price: 45.00,
          ticketName: "Montpellier HSC Vs As Saint Etienne'",
          time: "7:00",
          totalPrice: 45.00,
          ticketId: Number(1),
        }
      ],
      ticketThree: [
        {
          price: 50.44,
          ticketName: "D.C. United Vs  Olympic Marseille'",
          time: "7:00",
          totalPrice: 50.44,
          ticketId: Number(2),
          
        }
      ],
      option: Number(0),
      transfer: false
    };
  }

  transferCheck = e => {
    if (this.state.transfer == false) {
      this.setState({ transfer: true });
    } else {
      this.setState({ transfer: false });
    }

  };

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
        title: "Girondins de Bordeaux Vs O.Marseille",
        id: 0,
        lable: "07/24/2019",
        price: "35.44",
        features:
          "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
        link: "#"
      },
      {
        title: "3rd Place Game or Tournament Championship",
        id: 1,
        lable: "07/27/2019",
        price: "45.00",
        features:
          "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
        link: "#"
      },
      {
        title: "D.C. United Vs  Olympic Marseille (friendly)",
        id: 2,
        lable: "07/29/2019",
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
      return (
        <div className="item" id="tickets" key={i}>
          <div className="package-box">
            <h3 className="subtitles">{val.title}</h3>
            <div className="price-box">
              <span id="moneyTag">$</span>
              <h2 className="prices">{val.price}</h2>
              <h5 className="plan-clr">
                <span className="d-block" />
              </h5>
            </div>
            <br />
            <select
              id="ticketCat"
              className="form-control"
              onChange={this.roomOption}
            >
              <option value="0">Gold Ticket $10 more!</option>
              <option value="2">Silver Ticket $20 more!</option>
              <option value="3">Bronze Ticket $20 more!</option>
            </select>

            <div className="price-plan text-center">
              <ul>
                <li>{val.lable}</li>
                <li>7:00pm</li>
                {/* <li>
                  <input
                    onChange={this.transferCheck}
                    type="checkbox"
                    name="transfer"
                    id="transfer"
                    value="true"
                  />
                  <span id="transferText">
                    {" "}
                    Add Transfer To and From for $55/person{" "}
                  </span>
                </li> */}

                <li>Section 100, Row 02</li>
                <li>Per Ticket</li>
              </ul>
              <button
                onClick={this.onClickTicket}
                id={val.id}
                className="btn btn-primary bookButton"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section className="backgroundColor" id="tickets">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 id="ticketHeader" className="headers">
                  Tickets
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Price;
