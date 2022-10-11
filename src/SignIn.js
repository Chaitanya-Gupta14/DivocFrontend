import { useState } from "react";

//import axios from "axios";
import { login } from './backendCall.js';
import { useHistory } from "react-router-dom";

export var authorized = false;
const SignIn = () => {
  const history = useHistory();
  const [id, setID] = useState('');
  const [pass, setPassword] = useState('');
  
  // export const [authorized,setAuthorized] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();

    let isSignedIn = login(id,pass);
    // let localToken = JSON.parse(localStorage.getItem("user"));
    
    //Checking values
    //console.log(token.resolve);
    // console.log(localToken);
    
    if(isSignedIn)
    {
      history.push("/Home");
      authorized = true;
    }
    
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