import axios from "axios";
import { SchemaName } from "./Home";
// import { toast } from "react-toastify";
const API_URL = 'http://localhost:8013/certify/';

export const CertifyCall = (body) => {
  var config = {
          method: 'post',
          url: API_URL+SchemaName,
    
          data: body,
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2NjYzNjc5NjQsImlhdCI6MTY2NjM0OTk2NH0.aPYb-epOFQvqn2LfG-gDtnwnP_shzvw2AWJhBHox3DBzJqV8Y0q3URDTROE7-8XTle7Ycnjs3onE0Lro5rswMA',
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
    