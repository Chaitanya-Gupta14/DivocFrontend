import axios from "axios";
import { SchemaName } from "../components/Home";
// import { toast } from "react-toastify";
const API_URL = 'http://localhost:8013/certify/';

export const CertifyCall = (body) => {
  var config = {
          method: 'post',
          url: API_URL+SchemaName,
    
          data: body,
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFWVVzZXIiLCJleHAiOjE2Njc0OTU4ODksImlhdCI6MTY2NzQ3Nzg4OX0.x_gnWpttJhD3vpBG7cR0szmIAzv4TiHT32W1GYHv0-1B4GEfkOLjAmdaoyWyaAzHoEVy5Kzj81MxTXht8UuBoQ',
            'Content-Type': 'application/json'
          },
        };

  return axios(config)
      .then((response) => {
      if (response.data) {
        // toast("Signed In!!")
        return response.data;
      }
    },
    error=>{
      // toast.error("Invalid Credentials!!");
      console.log(error);
    })
    
}
 
// export default login();
    