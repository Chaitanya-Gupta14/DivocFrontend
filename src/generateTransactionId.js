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
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2NjY5NDcxNTAsImlhdCI6MTY2NjkyOTE1MH0.pcWJkDFwjYUFacCyuYHAXImmwcaQ1vsi4MiZhwZGy9-QbTge6RW1Rv7FpJVDl_gXF4IcaFuqkF8ChNjBvKMqlA',
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
    