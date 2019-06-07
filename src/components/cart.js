import React, { Component } from "react";
import CartItem from "../components/cartItem";
import pack from "@fortawesome/fontawesome-free-solid";

export default class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.cart,
      numRoom: this.props.numRoom,
      stayData: this.props.stayData
    };
  }

  cartUpdatorHotelOne = e => {
    e.preventDefault();
    console.log("que tal ---", e.target.id);
    console.log("HOTEL ONE HAS BEEN CLICKED TO BE DELETED");
    console.log(this.props.cart);

    this.props.cart.splice(e.target.id, 1);

    this.props.cartUpdatorHotelOne(this.props.cart);
  };

  render() {
    console.log("las props", this.props.cart);
    console.log("las props stayData", this.state.stayData);

    let total = 0;

    //PACKAGE PRICING LOGIC
    // console.log( 'THIS IS THE PACKAGE PROP IN THE CARS COMPONENT ',this.state.packages)
    let packages = this.props.packages;

    console.log("los packets", packages);
    //GAMES
    let gameOneName = packages.gameOne;
    let gameOnePrice = packages.gameOneTotalPrice;
    let gameTwoName = packages.gameTwo;
    let gameTwoPrice = packages.gameTwoTotalPrice;
    console.log("game two price", gameTwoPrice);
    let gameThreeName = packages.gameThree;
    let gameThreePrice = packages.gameThreeTotalPrice;

    if (gameOnePrice != undefined) {
      total += gameOnePrice;
    }
    if (gameTwoPrice != undefined) {
      total += gameTwoPrice;
    }
    if (gameThreePrice != undefined) {
      total += gameThreePrice;
    }
    //ACTIVITIES

    let activityOne = packages.activityOne;
    let activityOneTotalPrice = packages.activityOneTotalPrice;
    let activityTwo = packages.activityTwo;
    let activityTwoTotalPrice = packages.activityTwoTotalPrice;
    let activityThree = packages.activityThree;
    let activityThreeTotalPrice = packages.activityThreeTotalPrice;

    let activityFour = packages.activityFour;
    let activityFourTotalPrice = packages.activityFourTotalPrice;

    if (activityOneTotalPrice != undefined) {
      total += activityOneTotalPrice;
    }
    if (activityTwoTotalPrice != undefined) {
      total += activityTwoTotalPrice;
    }
    if (activityThreeTotalPrice != undefined) {
      total += activityThreeTotalPrice;
    }
    if (activityFourTotalPrice != undefined) {
      total += activityFourTotalPrice;
    }

    console.log(gameOnePrice);

    //////////////////////////////////////
    let totalRooms = this.state.stayData[2];
    let checkoutDate = this.state.stayData[1];

    const totalTracker = this.props.cart.map(item => {
      console.log("TOTAL TRACKER ITEMS", item);

      let currentPrice = item.totalPrice;

      total += Number(currentPrice);
      return total;
    });
    let idMaker = 0;

    const cartItems = this.props.cart.map(item => {
      console.log(item);
      let hotelName = item.hotelName;
      let hotelPrice = item.price;
      let hotelTotalPrice = item.totalPrice;
      let roomNumber = item.amountOfRooms;
      let hotelId = item.hotelId;
      let id = idMaker++;
      let ticketName = item.ticketName;
      let ticketPrice = item.price;
      let ticketTotalPrice = item.totalPrice;
      let ticketTime = item.time;
      let activityName = item.activityName;
      let activityPrice = item.price;
      let activityDate = item.date;
      let activityTime = item.time;

      // total += Number(totalTracker);

      return (
        <CartItem
          total={total}
          hotelName={hotelName}
          hotelPrice={hotelPrice}
          hotelTotalPrice={hotelTotalPrice}
          ticketTotalPrice={ticketTotalPrice}
          roomNumber={roomNumber}
          hotelId={hotelId}
          id={id}
          ticketName={ticketName}
          ticketPrice={ticketPrice}
          ticketTime={ticketTime}
          activityName={activityName}
          activityPrice={activityPrice}
          activityDate={activityDate}
          activityTime={activityTime}
          cartUpdatorHotelOne={this.cartUpdatorHotelOne}
        />
      );
    });

    return (
      <div>
        <section id="left-sidebar">
          <div id="cart">
            <a id="cartHeader" className="nav-link text-center navMineCart">
              Cart
            </a>
            <ul id="cartList">{cartItems}</ul>
          </div>
          <p id="cartTotal" value={total}>
            Total ${total}{" "}
          </p>
        </section>
      </div>
    );
  }
}
