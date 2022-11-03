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
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaXZvY3VzZXIiLCJleHAiOjE2Njc0MDM0NTIsImlhdCI6MTY2NzM4NTQ1Mn0.187TM0IQ-9IhrRmKBMzN6fvclkUQyRe4C5LKCjVNaYkni9-TljCruP2CLBbl9dgZ4hO78v4IWVMtFJwy6vf2Ig',
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
    