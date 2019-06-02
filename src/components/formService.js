import axios from "axios";

class FormService {
  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:3000`,
    });
  }

  addShoppingCart = carts => {
console.log('you are now on the add shopping cart function');

console.log(carts);

console.log('THIS IS THE CART ITEMS',carts.cart)

// const bodyFormData = new FormData();
// bodyFormData.append("clientFirstName" , 'el pussy');



let payload = {
  hotelName : carts.hotelName,
  cart : carts.cart,
  numberOfNights : carts.numberOfNights,
  checkIn : carts.stayData[0],
  checkOut : carts.stayData[1],
  numOfRooms : carts.stayData[2],
  pricePerNight : carts.pricePerNight,
  fanClubNumber : carts.fanClubNumber,
  gameType : carts.gameType,
  gameTicketQuantity : carts.gameTicketQuantity,
  city : carts.city,
  state : carts.state,
  zipcode : carts.zipcode,
  nameOnCard : carts.nameOnCard,
  creditCardNumber : carts.creditCardNumber,
  expirationDate : carts.expirationDate,
  securityCode : carts.securityCode

}
console.log('body form data', payload);

axios({
  method: 'post',
  url: 'http://localhost:3000/checkout',
  data: payload,
  config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then(function (response) {
      //handle success
      console.log(response);
  })
  .catch(function (response) {
      //handle error
      console.log(response);
  });

  //   const formData = new FormData();
    
  //   Object.keys(carts).forEach(key => formData.append(key, carts[key]));
  //   console.log(carts)
    
  //   return this.service.post('/checkout', formData,{
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     }
  //   }
    
       
    
  // ).then(response => response.data)
    }

   

  }


export default FormService;
