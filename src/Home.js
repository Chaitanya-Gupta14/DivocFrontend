// import { useState } from "react";
//import axios from "axios";
import { Redirect } from "react-router-dom";
//import { CardData } from "./components/CardData";
//import qs from 'qs';
import { authorized } from "./SignIn";
import { CardData } from "./components/CardData";

const Home = () => {
  
  // const token = JSON.parse(localStorage.getItem("user"));
  if(!authorized)
      <Redirect to = "/"/>
  
  return (
    <div className="create" >
      <h2>Choose Schema</h2>
      {CardData.map((value,index)=> ( 
        <div className= "card" key={index}>
          <div>
            <p className="card-title"> {value} </p>
            <p className= "description ">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            </p>
            <button>Download</button>
            <button>Certify</button>
          </div>
        </div>       
      ))};
    </div>
  );
}


export default Home;
