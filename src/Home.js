// import { useState } from "react";
//import axios from "axios";
import { useHistory } from "react-router-dom";

//import { CardData } from "./components/CardData";
//import qs from 'qs';
import { authorized } from "./SignIn";
import { CardData } from "./components/CardData";

export var SchemaName = "";
const Home = () => {

  let Redirect = useHistory()
  // const token = JSON.parse(localStorage.getItem("user"));
  if(!authorized){
    Redirect.push("/");
  }
      
  
  function handleCertify(index,value) {
    SchemaName = value;
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

  function handleDownload(){
    Redirect.push("/DownloadPage");
  }

  return (
    <div className="container-fluid section-padding hombg">
      <div className="row">
        <h2 className="section-title">Choose Schema</h2>
        <div className="d-flex justify-content-center align-item-stretch flex-wrap">
          {CardData.map((value, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-2">

              <div className="card text-center" key={index}>
                <h5 className="card-title"> {value} </h5>
                <div className="button-grp d-flex flex-wrap justify-content-center align-item-center mt-auto">
                  <button className="btn btn-orange" onClick={handleDownload}>Download</button>
                  <button className="btn btn-orange" onClick={() => handleCertify(index,value)}>Certify</button>
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
