// import { useState } from "react";
//import axios from "axios";
import { Redirect } from "react-router-dom";
//import { CardData } from "./components/CardData";
//import qs from 'qs';
import { authorized } from "./SignIn";
import { CardData } from "./components/CardData";

const Home = () => {
  // const token = JSON.parse(localStorage.getItem("user"));
  if (!authorized) <Redirect to="/" />;

  return (
    <div className="container-fluid section-padding">
      <div className="row h-100">
        <h2 className="section-title">Choose Schema</h2>
        <div className="d-flex justify-content-center align-item-center flex-wrap h-100">
        
          {CardData.map((value, index) => (
            <div className="col-lg-4 col-sm-12 p-2">
              <div className="card text-center" key={index}>
                  <p className="card-title"> {value} </p>
                  <p className="description ">
                    Lorem been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                  <div className="button-grp d-flex justify-content-center align-item-center h-100">
                    <button className="btn btn-orange">Download</button>
                    <button className="btn btn-orange">Certify</button>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
