import axios from "axios";
import { SchemaName } from "./Home";
import { useState } from "react";
import { TableContent } from "./CertificatesTable";
var API_URL = 'http://localhost:8013/listCertificate/';



export const ListCertificates = (value) => {

    const [ID,setID] = useState('');
    const [name,setName] = useState('');
    const [transactionID,setTransactionId] = useState('');
    const [schemaName,setSchemaName] = useState('');
    const [status,setStatus] = useState('');

    var config = {
        method: 'get',
        url: API_URL + SchemaName,
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2NjY4NzYxNDcsImlhdCI6MTY2Njg1ODE0N30.VwPxrlYFdUqsWmqf6AS6yJPD_6uSnvPEPK1t-iMR-IODBkAvWpw9wrjEm3QjN3QfsdNAKXFYJwQT06jGdxr9GA',
          'Content-Type': 'application/json'
        },
      };

    TableContent(ID,name,transactionID,schemaName,status)

    return axios(config)
      .then((response) => {
        if (response.data) {

        let parsedResponse = JSON.parse(JSON.stringify(response.data));
        for(let index = 0; index<parsedResponse.schemas.length; index++)
        {
            setID(parsedResponse.id);
            setName(parsedResponse.name);
            setSchemaName(parsedResponse.schemaname);
            setStatus(parsedResponse.status)
            setTransactionId(parsedResponse.transactionId)
        }
          
        }
        else return false;
      },
      error=>{
        // toast.error("Invalid Credentials!!");
        console.log(error);
      })   
  }