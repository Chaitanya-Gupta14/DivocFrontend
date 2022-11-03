import { useState } from "react";
import { Login } from "../service/backendCall.js";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export var authorized = false;
const SignIn = () => {
  const history = useHistory();
  const [id, setID] = useState("");
  const [pass, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isSignedIn = Login(id, pass);
    
    if (isSignedIn) {
      history.push("/Home");
      authorized = true;
    } else {
      toast.error("Invalid Credentials!!");
    }
  };

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
    <div className="container-fluid signInPage">
      <div className="box-form login-page row h-100">
        <div className="col-12 col-md-6 col-lg-6 left">
          <div className="overlay">

            <div className="login-blue-bg">
              <div className="login-content">

                <div className="login-welcome-message pb-3">
                  <h1 className="flex-column d-flex"><span className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-3 mb-2 form-title">Welcome To</span> Verifiable Credentialing System</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 right">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-between text-left">
              <div className="form-group flex-column d-flex">
                <label className="form-control-label px-0">Enter User-Name</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  value={id}
                  onChange={(e) => setID(e.target.value)}
                />
              </div>
              <div className="form-group flex-column d-flex">
                <label className="form-control-label px-0">Enter Password</label>
                <input
                  className="form-control"
                  type="password"
                  required
                  value={pass}
                  title="Must contain at least one number and one uppercase and lowercase letter"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="form-group col-12"> 
                <button className="btn btnsubmit">Submit</button>
              </div>
            </div>    
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;