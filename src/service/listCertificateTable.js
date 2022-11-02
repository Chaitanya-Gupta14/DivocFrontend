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
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaXZvY3VzZXIiLCJleHAiOjE2Njc0MDM0NTIsImlhdCI6MTY2NzM4NTQ1Mn0.187TM0IQ-9IhrRmKBMzN6fvclkUQyRe4C5LKCjVNaYkni9-TljCruP2CLBbl9dgZ4hO78v4IWVMtFJwy6vf2Ig',
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