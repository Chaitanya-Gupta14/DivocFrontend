import { useState } from "react";
import { toast } from "react-toastify";
//import axios from "axios";
import { login } from './backendCall.js';


const SignIn = () => {
  const [id, setID] = useState('');
  const [pass, setPassword] = useState('');
  

  const isSignedIn = (e,token) => {
    // e.preventDefault();
    if(token)
    {
      console.log("Signed In");
      return token;
    }
      else
    {
      toast.error("Invalid Credentials!!");
      return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(id.trim() === ''){
      toast.error("User Email is required!!")
      return;
    }
    if(pass.trim() === ''){
      toast.error("User password is required!!")
      return;
    }
    const token = login(id,pass);
    isSignedIn(token);
    // console.log(token);
  }
  

//   const getToken = () => {

//     var data = qs.stringify({
//       'client_id': 'registry-frontend',
//       'username': 'vishwa1',
//       'password': 'abcd@123',
//       'grant_type': 'password'
//     });
//     var config = {
//       method: 'post',
//       url: 'http://52.172.132.121/auth/realms/sunbird-rc/protocol/openid-connect/token',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       data: data
//     };

//     const token = axios(config)
//       .then(function (response) {
//         //console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//     return token;
//   }

  // const Certify = (token) => {
  //   var data = 'Welcome user!!';

  //   var config = {
  //     method: 'get',
  //     responseType: 'blob',
  //     data : data
  //   };
    
  //   axios(config)
  //   .then(response => {
  //         const fileURL = 'Home.js'
  //     //Open the URL on new Window
  //         window.open(fileURL);
  //     })
  //     .catch(error => {
  //         console.log(error);
  //     });
    
  // }



  return (
    <div className="create">
      <h2>SignIn Page</h2>
       
       <form onSubmit={handleSubmit}>
        <label>Enter User-Name:</label>
        <input
          type="text"
          required
          value={id}
          onChange={(e) => setID(e.target.value)}
        />

        <label>Enter Password:</label>
        <input
          type="password"
          required
          value={pass}
          title="Must contain at least one number and one uppercase and lowercase letter"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;