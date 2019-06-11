import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cartItem";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.cart,
      numRoom: this.props.numRoom,
      stayData: this.props.stayData,
      packageName: this.props.packageName,
      packageId: this.props.packageId
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
    // let packages = this.props.cart;

    // console.log("los packets", packages);
    //GAMES
    // let gameOneName = packages.gameOne;
    // let gameOnePrice = packages.gameOneTotalPrice;
    // let gameTwoName = packages.gameTwo;
    // let gameTwoPrice = packages.gameTwoTotalPrice;

    // let gameThreeName = packages.gameThree;
    // let gameThreePrice = packages.gameThreeTotalPrice;

    // if (gameOnePrice != undefined) {
    //   total += gameOnePrice;
    // }
    // if (gameTwoPrice != undefined) {
    //   total += gameTwoPrice;
    // }
    // if (gameThreePrice != undefined) {
    //   total += gameThreePrice;
    // }
    //ACTIVITIES

    // let activityOne = packages.activityOne;
    // let activityOneTotalPrice = packages.activityOneTotalPrice;
    // let activityTwo = packages.activityTwo;
    // let activityTwoTotalPrice = packages.activityTwoTotalPrice;
    // let activityThree = packages.activityThree;
    // let activityThreeTotalPrice = packages.activityThreeTotalPrice;

    // let activityFour = packages.activityFour;
    // let activityFourTotalPrice = packages.activityFourTotalPrice;

    // if (activityOneTotalPrice != undefined) {
    //   total += activityOneTotalPrice;
    // }
    // if (activityTwoTotalPrice != undefined) {
    //   total += activityTwoTotalPrice;
    // }
    // if (activityThreeTotalPrice != undefined) {
    //   total += activityThreeTotalPrice;
    // }
    // if (activityFourTotalPrice != undefined) {
    //   total += activityFourTotalPrice;
    // }

    // console.log(gameOnePrice);

    //////////////////////////////////////
    let totalRooms = this.state.stayData[2];
    let checkoutDate = this.state.stayData[1];

    const totalTracker = this.props.cart.map(item => {
      console.log("TOTAL TRACKER ITEMS");

      let packageTotalPrice = item.packageTotalPrice;

      if (packageTotalPrice != undefined) {
        console.log("locaaaaaa-");
        total += packageTotalPrice;
      }

      console.log(total);

      let currentPrice = item.totalPrice;

      if (currentPrice != undefined) {
        total += Number(currentPrice);
        console.log("la segunda loca", total);
      }

      return total;
    });

    let idMaker = 0;

    const cartItems = this.props.cart.map(item => {
      let packageName = item.packageTitle;
      let packageTotalPrice = item.packageTotalPrice;
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
      let packageId = this.state.packageId;

      // total += Number(totalTracker);

      return (
        <CartItem
          total={total}
          packageName={packageName}
          packageTotalPrice = {packageTotalPrice}
          hotelName={hotelName}
          hotelPrice={hotelPrice}
          hotelTotalPrice={hotelTotalPrice}
          ticketTotalPrice={ticketTotalPrice}
          packageId={this.state.packageId}
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
      <nav className="navbar transparent fixed-top navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img
            style={{ width: 70, height: 90 }}
            id="marseilleLogo"
            src="assets/images/OM.png"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul id="navItems" className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                id="homeNav"
                className="nav-link text-center navMine"
                href="#sectionOne"
              >
                HOME<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                id="aboutNav"
                className="nav-link text-center navMine"
                href="#theTour"
              >
                TOUR
              </a>
            </li>
            <li className="nav-item">
              <a
                id="idNav"
                className="nav-link text-center navMine"
                href="#tickets"
              >
                TICKETS
              </a>
            </li>
            <li className="nav-item">
              <a
                id="hotelNav"
                className="nav-link text-center navMine"
                href="#hotels"
              >
                HOTELS
              </a>
            </li>
            <li className="nav-item">
              <a
                id="idActivities"
                className="nav-link text-center navMine"
                href="#activities"
              >
                ACTIVITIES
              </a>
            </li>
            <li className="nav-item dropdown">
              <div>
                <a
                  id="navbarDropdown"
                  onClick={this.showCart}
                  className="nav-link dropdown-toggle text-center navMine"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                >
                  <img id="cartImg" src="assets/images/MYCART.png" />
                  <span id="masterOfCoin">My Cart {total} </span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    {" "}
                    {cartItems}
                  </a>

                  <div class="dropdown-divider" />
                </div>
                {/* <ul>
      {cartItems}
        </ul> */}
              </div>
            </li>

            {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
            {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navMine" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item navMine" href="#">Action</a>
            <a className="dropdown-item navMine" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item navMine" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#hotels" >Disabled</a>
        </li> */}
          </ul>
        </div>
      </nav>

      // <nav className="navbar navbar-expand">
      //       <div className="container-fluid">
      //         <div className="navbar-header">
      //           <a className="navbar-brand">
      //             <img style={{ width: 110, height: 150 }}id="marseilleLogo" src="assets/images/marseilleLogo.png" alt="" />
      //           </a>
      //         </div>
      //         <ul className="nav navbar-nav navbar-right">
      //           <li>
      //             <a to="/cases">Cases</a>
      //           </li>
      //           <li>
      //             <a to="/community">Community</a>
      //           </li>
      //           <li>
      //             <a to="/:id/user-profile">Profile</a>
      //           </li>
      //           <li>
      //             <a to="/auth/logout">
      //               <a onClick={this.logOutHandler}>Logout</a>
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav>
      // <nav className="navbar navbar-expand-lg  theme-nav fixed-top">
      //   <a class="navbar-brand" href="#">
      //     <img
      //       id="marseilleLogo"
      //       style={{ width: 110, height: 150 }}
      //       src="assets/images/marseilleLogo.png"
      //       alt=""
      //     />
      //   </a>
      //   <button
      //     class="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarSupportedContent"
      //     aria-controls="navbarSupportedContent"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span class="navbar-toggler-icon" />
      //   </button>

      //   <div className="collapse navbar-collapse " id="navbarSupportedContent">
      //     <ul className="navbar-nav mr-auto navbar-right">
      //       <li className="nav-item active">
      //         <a className="nav-link" href="#">
      //           Home <span className="sr-only">(current)</span>
      //         </a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="#">
      //           Link
      //         </a>
      //       </li>
      //       <li className="nav-item dropdown">
      //         <a
      //           className="nav-link dropdown-toggle"
      //           href="#"
      //           id="navbarDropdown"
      //           role="button"
      //           data-toggle="dropdown"
      //           aria-haspopup="true"
      //           aria-expanded="false"
      //         >
      //           Dropdown
      //         </a>
      //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      //           <a className="dropdown-item" href="#">
      //             Action
      //           </a>
      //           <a className="dropdown-item" href="#">
      //             Another action
      //           </a>
      //           <div className="dropdown-divider" />
      //           <a className="dropdown-item" href="#">
      //             Something else here
      //           </a>
      //         </div>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link disabled" href="#">
      //           Disabled
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

      // <nav className="navbar navbar-expand-lg  theme-nav fixed-top">
      // 	<div className="container">
      // 		<a className="navbar-brand" href="#"><img  style={{width: 80, height: 80}} src="assets/images/marseilleLogo.png" alt="logo" /></a>
      // 		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"  aria-expanded="false" aria-label="Toggle navigation">
      // 			<span className="navbar-toggler-icon"><i className="fa fa-align-justify" aria-hidden="true"></i></span>
      // 		</button>
      // 		<div className="collapse navbar-collapse" id="mainmenu">
      // 			<ul className="navbar-nav ml-auto" id="mymenu">
      // 				<li className="nav-item ">
      // 					<a className="nav-link" href="#home" >Home</a>
      // 				</li>
      // 				<li className="nav-item">
      // 					<a className="nav-link" href="#about" >About</a>
      // 				</li>
      // 				<li className="nav-item">
      // 					<a className="nav-link" href="#hotels" >Hotels</a>
      // 				</li>
      // 				<li className="nav-item">
      // 					<a className="nav-link" href="#tickets">Tickets</a>
      // 				</li>

      // 				<li className="nav-item">
      // 					<a className="nav-link" href="#activities" >Activities</a>
      // 				</li>

      // 				{/* <li className="nav-item">
      // 					<a className="nav-link" href="#team">Team</a>
      // 				</li> */}

      // 				<li className="nav-item">
      // 					<a className="nav-link" id="cart" href="#cart">Cart</a>
      // 				</li>

      // 				<li className="nav-item">
      // 					<a className="nav-link" href="#contact">Contact us</a>
      // 				</li>

      // 			</ul>
      // 		</div>
      // 	</div>
      // </nav>
      // <section id="left-sidebar">
      //   <div class="logo">
      //     <a href="#about" className="navbar-brand">
      //       <img
      //         id="marseilleLogo"
      //         style={{ width: 110, height: 150 }}
      //         src="assets/images/OM.png"
      //         // src="assets/images/marseilleLogo.png"
      //         alt="logo"
      //       />
      //     </a>
      //   </div>

      //   <div
      //     id="mobile-menu-icon"
      //     className="visible-xs"
      //     onclick="toggle_main_menu();"
      //   >
      //     <span class="glyphicon glyphicon-th" />
      //   </div>

      //   <ul id="main-menu">
      //     <li className="nav-item ">
      //       <a id="homeNav" className="nav-link text-center navMine" href="#sectionOne">
      //         Home
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <a  id="aboutNav"className="nav-link text-center navMine" href="#about">
      //         About
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <a  id="hotelNav"className="nav-link text-center navMine" href="#hotels">
      //         Hotels
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <a  id="idNav"className="nav-link text-center navMine" href="#tickets">
      //         Tickets
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <a id="idActivities" className="nav-link text-center navMine" href="#activities">
      //         Activities
      //       </a>
      //     </li>

      /*
                <li className="nav-item">
                  <a className="nav-link text-center navMine" id="cart" href="#cart">
                    Cart
                  </a>
                </li> */
      //   </ul>
      //   <div id="cart">
      // 		<a id='cartHeader' className="nav-link text-center navMineCart">
      // 			Cart</a>
      //     <ul id="cartList">{cartItems}</ul>
      //   </div>
      //   <p id="cartTotal" value={total}>Total ${total} </p>
      // </section>
    );
  }
}

export default Navbar;
