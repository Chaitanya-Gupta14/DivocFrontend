import React from "react";
import { useState } from "react";
import { transactionId, UpdateCall } from "../service/UpdateRequest";

const data = {
    "preEnrollmentCode": "1234364",
    "dob": "12-05-2002",
    "gender": "male",
    "birthRegNumber": "8827489191",
    "address": "xyz city",
    "vaccineType": "covi",
    "vaccineBrand": "vacci",
    "vaccineBatchNo": "2321",
    "dose": "2",
    "dateOfVaccination": "11-08-2019",
    "countryOfVaccination": "juliana",
    "issuer": "http://www.india.gov.in",
    "issuanceDate": "2021-09-09T21:01:01.121Z"
    };

export var data2;
// useRef
const UpdatetheForm = () => {

    const [transactionID,setTransactionID] = useState('');

    const [myObject,setObject] = useState({
    preEnrollmentCode: "1234364",
    gender: "male",
    birthRegNumber: "8827489191",
    address: "xyz city",
    vaccineType: "covi",
    vaccineBrand: "vacci",
    dose: "2",    
    countryOfVaccination: "juliana",
    });

    data2 = JSON.stringify({
    "preEnrollmentCode": myObject.preEnrollmentCode,
    "dob": "12-05-2002",
    "gender": myObject.gender,
    "birthRegNumber": myObject.birthRegNumber,
    "address": myObject.address,
    "vaccineType": myObject.vaccineType,
    "vaccineBrand": myObject.vaccineBrand,
    "vaccineBatchNo": "2321",
    "dose": myObject.dose,
    "dateOfVaccination": "11-08-2019",
    "countryOfVaccination": myObject.countryOfVaccination,
    "issuer": "http://www.india.gov.in",
    "issuanceDate": "2021-09-09T21:01:01.121Z"
    });

    const handleUpdate= (e) => {
        e.preventDefault();
        UpdateCall(data2);
        setTransactionID(transactionId);
    }

    return(
    <div className="container-fluid px-1 py-3 mx-auto OnSubmitCertify2">
        <div className="container card-0 justify-content-center">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-10 col-lg-10 col-md-10 col-11 text-center mb-4 flex-column">
                    <h2 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-3 mb-2 form-title">Update Form</h2>                              
                    <p className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-0 mb-3 form-title">Transaction id is: {transactionID}</p>
                    <div className="card box-form">
                        <form className="form-card">
                            <div className="row justify-content-between text-left">
                            {
                            Object.keys(data).map((val,index) => {
                                return(
                                <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex" key ={index}> 
                                    <label className="form-control-label px-0">{val}</label> 
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder={data[val]}
                                        // value={myObject.val}
                                        onChange = {(e) => setObject(e.target.value)}
                                    />
                                </div>
                                );
                                })
                            }
                            </div>
                            
                            <div className="form-group col-12"> 
                                <button type="submit" className="btn btnsubmit" onClick={handleUpdate}>Update</button> 
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default UpdatetheForm;