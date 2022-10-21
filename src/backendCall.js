import axios from "axios";
// import { toast } from "react-toastify";



const API_URL = 'http://localhost:8013';



export const Login = (username,password) => {
  return axios
    .post(API_URL+"/authenticate", { username, password })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
        // toast("Signed In!!")
        return true;
      }
      else return false;
    },
    error=>{
      // toast.error("Invalid Credentials!!");
      console.log(error);
    })
    // .catch();
    //     if(error.response.status === 401 || error.response.status === 404)
    //         toast.error(error.response.data.message);
    //     else
    //         toast.error("Somenthing went Wrong!!")
    // })
    
}
 
// export default login();