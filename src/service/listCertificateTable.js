import axios from "axios";
import { SchemaName } from "../components/Home";
//import { useState } from "react";
var API_URL = 'http://localhost:8013/listCertificate/';


export let parsedResponse = []; 
export const ListCertificates = () => {

    // const [Id,setID] = useState('');
    // const [name,setName] = useState('');
    // const [transactionID,setTransactionId] = useState('');
    // const [schemaName,setSchemaName] = useState('');
    // const [status,setStatus] = useState('');
    // var arr = [];

    var config = {
        method: 'get',
        url: API_URL + SchemaName,
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFWVVzZXIiLCJleHAiOjE2Njc0OTU4ODksImlhdCI6MTY2NzQ3Nzg4OX0.x_gnWpttJhD3vpBG7cR0szmIAzv4TiHT32W1GYHv0-1B4GEfkOLjAmdaoyWyaAzHoEVy5Kzj81MxTXht8UuBoQ',
          'Content-Type': 'application/json'
        },
      };

    
    
    axios(config).then((response) => {
        if (response.data) 
        { 
          parsedResponse = (response.data);
          console.log(parsedResponse);
          return parsedResponse;           
        }
        // else console.log(response.data);
      
    })

    
  }