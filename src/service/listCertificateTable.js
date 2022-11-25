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
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFWVVzZXIiLCJleHAiOjE2Njg1MzI3MzAsImlhdCI6MTY2ODUxNDczMH0.nASST02idVhy9OjPiDxsFsHpMnKIbCyuDBZ9zcWRdXZC6F2TxP5Uyo0Pbk3Xmx6Tvrlewj6YhpMefPCe0p6-Gg',
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