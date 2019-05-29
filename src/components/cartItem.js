import React, { Component } from "react";

const CartItem = ({ hotelName, hotelPrice, roomNumber ,id, cartUpdatorHotelOne, ticketName,ticketPrice,ticketTime}) => {

  return (
    <div>
      <div>
      <button onClick={cartUpdatorHotelOne} id={id} className="removeItem">✖</button>
      <li className="cartHotelName"><strong>{hotelName}</strong></li>
      <li className="cartHotelPrice">${hotelPrice} per/night</li>
      <li className="cartRoomNumber"># Rooms:{roomNumber}</li>
      </div>
      <div>
      <li className="ticketName"><strong>{ticketName}</strong></li>
      <li className="ticketPrice">${ticketPrice}</li>
      <li className="ticketTime">Time:{ticketTime}</li>
      </div>
    </div>
  );
};

export default CartItem;
