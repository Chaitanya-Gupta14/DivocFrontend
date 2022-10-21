import axios from "axios";
// import { toast } from "react-toastify";
const API_URL = 'http://localhost:8013';

export const CertifyCall = (body) => {
  var config = {
          method: 'post',
          url: API_URL+"/certify",
    
          data: {body},
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2NjYyODgxNjAsImlhdCI6MTY2NjI3MDE2MH0.AdrZ-RXPcqpeZjpuKPyqc0WI_JfW6Oi23x-TZwxnDe6sa-0sEmLvH0mGrBz8w2zXGi4KUkMrezd3GsZ7YDkBaw',
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
    