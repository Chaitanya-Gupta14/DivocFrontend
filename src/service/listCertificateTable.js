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
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFWVVzZXIiLCJleHAiOjE2Njc1MDQ2NTksImlhdCI6MTY2NzQ4NjY1OX0.9exzJjoM1vH-V49lsEDKOzK8sBNTBSJnq82nPLdfJqpC2a7M8ysGUK2831ZIr3ryQY5g25qpXjsuMZEzlFnYiw',
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