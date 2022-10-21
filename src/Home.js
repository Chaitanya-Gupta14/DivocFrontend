// import { useState } from "react";
//import axios from "axios";
import { useHistory } from "react-router-dom";

//import { CardData } from "./components/CardData";
//import qs from 'qs';
import { authorized } from "./SignIn";
import { CardData } from "./components/CardData";

const Home = () => {
  
  let Redirect = useHistory()
  // const token = JSON.parse(localStorage.getItem("user"));
  if(!authorized){
    Redirect.push("/");
  }
      
  
  function handleClick(index) {

    if(index === 0){
      Redirect.push("/HealthProfessional7")
      console.log("this is 1");
    }
    else if(index === 1){
      Redirect.push("/NHAUIPCertificateSample")
      console.log("this is 2");
    }
   
    console.log('The link was clicked.');
  }

  return (
    <div className="container-fluid section-padding">
      <div className="row h-100">
        <h2 className="section-title">Choose Schema</h2>
        <div className="d-flex justify-content-center align-item-center flex-wrap h-100">

          {CardData.map((value, index) => (
            <div className="col-lg-4 col-sm-12 p-1">
              <div className="card text-center" key={index}>
                <p className="card-title"> {value} </p>
                <div className="button-grp d-flex justify-content-center align-item-center h-100">
                  <button className="btn btn-orange">Download</button>
                  <button className="btn btn-orange" onClick={() => handleClick(index)}>Certify</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Home;
