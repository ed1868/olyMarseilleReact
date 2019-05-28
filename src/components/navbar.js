import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cartItem";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.cart
    };
  }

  cartUpdatorHotelOne = e => {
    e.preventDefault();
    console.log("HOTEL ONE HAS BEEN CLICKED TO BE DELETED");
    console.log(this.props.cart);

    let hotelDeleted = this.props.cart.map(item => {
      if (item.hotelName == "Hotel Washington Hilton") {
				let index = this.props.cart.indexOf(item);
				console.log('THE INDEX OF THIS ITEM IS ' , index);
				
        // console.log(index);
        // this.props.cart.splice(index,1);
        // console.log('AFTER SPLICE--',this.props.cart);

        return index;
      }
      if (item.hotelName == "The Ritz-Carlton") {
        let index = this.props.cart.indexOf(item);
				console.log('THE INDEX OF THIS ITEM IS ' , index);

				return index;
			} 
			if (item.hotelName == "Hyatt House"){
				let index = this.props.cart.indexOf(item);
				console.log('THE INDEX OF THIS ITEM IS ' , index);

				return index;
			}
    });
    this.props.cart.splice(hotelDeleted, 1);

    this.props.cartUpdatorHotelOne(this.props.cart);
  };

  render() {
    console.log("las props", this.props.cart);

    let total = 0;
    const totalTracker = this.props.cart.map(item => {
      let currentPrice = item.price;

      total += Number(currentPrice);
      return total;
    });

    const cartItems = this.props.cart.map(item => {
      console.log(item);
      let hotelName = item.hotelName;
      let hotelPrice = item.price;
			let roomNumber = item.amountOfRooms;
			let arrPosition = item.arrPosition;

      // total += Number(totalTracker);

      return (
        <CartItem
          hotelName={hotelName}
          hotelPrice={hotelPrice}
					roomNumber={roomNumber}
					arrPosition={arrPosition}
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
            <a className="nav-link text-center navMine" href="#sectionOne">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center navMine" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center navMine" href="#hotels">
              Hotels
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center navMine" href="#tickets">
              Tickets
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-center navMine" href="#games">
              Games
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-center navMine" href="#team">
              Team
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-center navMine" id="cart" href="#cart">
              Cart
            </a>
          </li>
        </ul>
        <div id="cart">
          <ul id="cartList">{cartItems}</ul>
        </div>
        <p id="cartTotal">Total = {total} </p>
      </section>
    );
  }
}

export default Navbar;
