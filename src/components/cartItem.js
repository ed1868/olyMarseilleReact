import React, { Component } from "react";

const CartItem = ({
  total,
  packageName,
  packageTotalPrice,
  hotelName,
  hotelPrice,
  hotelTotalPrice,
  roomNumber,
  packageId,
  gameOneName,
  id,
  cartUpdatorHotelOne,
  ticketName,
  ticketPrice,
  ticketTotalPrice,
  ticketTime,
  activityName,
  activityPrice,
  activityDate,
  activityTime
}) => {
 
 if(packageName != undefined){
  return (
    <div>
      <div className="dropdown-item">
        <button onClick={cartUpdatorHotelOne} id={id} className="removeItem">
          ✖
        </button>
        <li className="cartHotelName">
          <strong>{packageName}</strong>
        </li>
        <li className="cartHotelPrice">${packageTotalPrice}</li>
        {/* <li className="cartRoomNumber"># Rooms:{roomNumber}</li> */}
      </div>
    </div>
  );
 }


  if (hotelName != undefined && hotelTotalPrice != undefined) {
    return (
      <div>
        <div className="dropdown-item">
          <button onClick={cartUpdatorHotelOne} id={id} className="removeItem">
            ✖
          </button>
          <li className="cartHotelName">
            <strong>{hotelName}</strong>
          </li>
          <li className="cartHotelPrice">${hotelTotalPrice}</li>
          {/* <li className="cartRoomNumber"># Rooms:{roomNumber}</li> */}
        </div>
      </div>
    );
  }
  if (ticketName != undefined && ticketTotalPrice != undefined) {
    return (
      <div>
        <div className="dropdown-item">
          <button onClick={cartUpdatorHotelOne} id={id} className="removeItem">
            ✖
          </button>
          <li className="cartHotelName">
            <strong>{ticketName}</strong>
          </li>
          <li className="cartHotelPrice">${ticketTotalPrice}</li>
          <li className="cartRoomNumber">Time:{ticketTime}</li>
        </div>
      </div>
    );
  }
  if (activityName != undefined) {
    return (
      <div>
        <div id="cartList" className="dropdown-item">
          <button onClick={cartUpdatorHotelOne} id={id} className="removeItem">
            ✖
          </button>
          <li className="cartHotelName">
            <strong>{activityName}</strong>
          </li>
          <li className="cartHotelPrice">${activityPrice}</li>
          {/* <li className="cartRoomNumber">Time:{activityTime}</li> */}
          <li className="cartRoomNumber">{activityDate}</li>
        </div>
      </div>
    );
  }

};

export default CartItem;
