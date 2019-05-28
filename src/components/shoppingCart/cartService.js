import axios from "axios";

class cartService {
  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:3000/checkout`,
      withCredentials: true
    })
  }

 

  shoppingCart = (items) => {
    const formData = new FormData();
    Object.keys(items).forEach(key => formData.append(key, items[key]));
    console.log(items)
    
    return this.service.post('/', formData)
    }
    
       
    
  ).then(response => response.data)
  
  }




export default AuthService;