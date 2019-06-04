import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cartItem";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.cart,
      numRoom : this.props.numRoom,
      stayData : this.props.stayData,
      
    };
  }

  cartUpdatorHotelOne = e => {
		e.preventDefault();
		console.log('que tal ---', e.target.id)
    console.log("HOTEL ONE HAS BEEN CLICKED TO BE DELETED");
    console.log(this.props.cart);
	

    this.props.cart.splice(e.target.id, 1);

    this.props.cartUpdatorHotelOne(this.props.cart);
  };




  render() {
    console.log("las props", this.props.cart);
    console.log('las props stayData', this.state.stayData);

    let total = 0;
    
    let totalRooms = this.state.stayData[2];
    let checkoutDate = this.state.stayData[1];
    

    
    const totalTracker = this.props.cart.map(item => {
      console.log('TOTAL TRACKER ITEMS',item);

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
					hotelId ={hotelId}
					id={id}
					ticketName = {ticketName}
					ticketPrice = {ticketPrice}
					ticketTime = {ticketTime}
					activityName ={activityName}
					activityPrice = {activityPrice}
					activityDate = {activityDate}
					activityTime = {activityTime}
          cartUpdatorHotelOne={this.cartUpdatorHotelOne}
        />
      );
    });

    return (
      <section id="left-sidebar">
        <div class="logo">
          <a href="#about" className="navbar-brand">
            <img
              id="marseilleLogo"
              style={{ width: 110, height: 150 }}
              src="assets/images/marseilleLogo.png"
              alt="logo"
            />
          </a>
        </div>

        <div
          id="mobile-menu-icon"
          className="visible-xs"
          onclick="toggle_main_menu();"
        >
          <span class="glyphicon glyphicon-th" />
        </div>

        <ul id="main-menu">
          <li className="nav-item ">
            <a id="homeNav" className="nav-link text-center navMine" href="#sectionOne">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a  id="aboutNav"className="nav-link text-center navMine" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a  id="hotelNav"className="nav-link text-center navMine" href="#hotels">
              Hotels
            </a>
          </li>
          <li className="nav-item">
            <a  id="idNav"className="nav-link text-center navMine" href="#tickets">
              Tickets
            </a>
          </li>
          <li className="nav-item">
            <a id="idActivities" className="nav-link text-center navMine" href="#activities">
              Activities
            </a>
          </li>
          
{/* 
          <li className="nav-item">
            <a className="nav-link text-center navMine" id="cart" href="#cart">
              Cart
            </a>
          </li> */}
        </ul>
        <div id="cart">
					<a id='cartHeader' className="nav-link text-center navMineCart">
						Cart</a>
          <ul id="cartList">{cartItems}</ul>
        </div>
        <p id="cartTotal" value={total}>Total ${total} </p>
      </section>
    );
  }
}

export default Navbar;
