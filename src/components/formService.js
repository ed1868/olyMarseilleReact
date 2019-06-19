import axios from "axios";

class FormService {
  constructor() {
    this.service = axios.create({
      baseURL:  `http://localhost:3000`,
      withCredentials: true

    });
  }

  addCheckOutForm = items => {




let payload = {
  clientFirstName : items.clientFirstName,
  clientLastName : items.clientLastName,
  checkIn: items.checkIn,
  checkOut: items.checkOut,
  currentStep: items.currentStep,
  email: items.email,
  transportation: items.transportation,
  fanClubNumber: items.fanClubNumber,
  fanPlay: items.fanPlay,
  hotelRooms : items.hotelRooms,
  hotels: items.hotels,
  phoneNumber: items.phoneNum,
  questions: items.questions,
  numOfPeople : items.numOfPeople,
  tickets: items.tickets,
  ticketOne : items.tickets[0],
  ticketTwo : items.tickets[1],
  ticketThree : items.tickets[2],
  address : items.address,
  city: items.city,
  country: items.country,
  nationality : items.nationality,
  state : items.state,
  zip : items.zip,
  transportation : items.transportation


}



console.log('body form data', payload);

axios({
  method: 'post',
  url: 'https://omustourexperience.com:3000/checkout', 
  data: payload,
  config: { headers: {'Content-Type': 'multipart/form-data' }}
  })


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
