import axios from "axios";
import { toast } from "react-toastify";



const API_URL = 'http://localhost:8085';



    export const login = (username,password) => {
      return axios
        .post(API_URL+"/authenticate", { username, password })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            toast("Signed In!!")
          }
          console.log(response.data.token);
          return response.data.token;
        })
        .catch(error=>{
            toast.error("Invalid Credentials!!");
            console.log(error);
          });
        //     if(error.response.status === 401 || error.response.status === 404)
        //         toast.error(error.response.data.message);
        //     else
        //         toast.error("Somenthing went Wrong!!")
        // })
        
    }
 
// export default login();