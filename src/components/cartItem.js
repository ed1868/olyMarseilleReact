import React, { Component } from "react";

const CartItem = ({ hotelName, hotelPrice, roomNumber ,arrPosition, cartUpdatorHotelOne, }) => {
  //  const hotelName = item[0];

  // console.log(hotelName);
  // console.log(hotelPrice);
  // console.log(roomNumber);
  
  
  return (
    <div>
      <button onClick={cartUpdatorHotelOne} className="removeItem">✖</button>
      <li className="cartHotelName"><strong>{hotelName}</strong></li>
      <li className="cartHotelPrice">${hotelPrice} per/night</li>
      <li className="cartRoomNumber"># Rooms:{roomNumber}</li>
    </div>
  );
};

export default CartItem;
