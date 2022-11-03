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
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFWVVzZXIiLCJleHAiOjE2Njc1MDQ2NTksImlhdCI6MTY2NzQ4NjY1OX0.9exzJjoM1vH-V49lsEDKOzK8sBNTBSJnq82nPLdfJqpC2a7M8ysGUK2831ZIr3ryQY5g25qpXjsuMZEzlFnYiw',
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
    