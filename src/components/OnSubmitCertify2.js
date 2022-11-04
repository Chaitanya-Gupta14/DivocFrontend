import React from "react";
import { useState } from "react";
//import { CertifyCall, transactionId } from "../service/generateTransactionId";

import axios from "axios";
import { SchemaName } from "../components/Home";
// import { toast } from "react-toastify";
// const API_URL = 'http://localhost:8013/certify/';
const API_URL = "http://52.172.132.121/vc-certification/v1/certify/"

const OnSubmitCertify2 = () => {
    // const [preEnrollmentCode, setPreEnrollmentCode] = useState("");
    // const [certificateId,setCertificateId] = useState("");
    // const [name,setName] = useState("");
    // const [dob,setDOB] = useState("");
    // const [gender,setGender] = useState("");
    // const [birthRegNumber,setBirthRegNumber] = useState("");
    // const [address,setAddress] = useState("");
    // const [vaccineType,setVaccineType] = useState("");
    // const [vaccineBrand,setVaccineBrand] = useState("");
    // const [vaccineBatchNo,setVaccineBatchNo] = useState("");
    // const [dose,setDose] = useState("");
    // const [dateOfVaccination,setDateOfVaccination] = useState("");
    // const [countryOfVaccination,setCountryOfVaccination] = useState("");
    // const [validUntil,setValidUntil] = useState("");
    // const [issuer,setIssuer] = useState("");
    // const [issuanceDate,setIssuanceDate] = useState("");
    // const [validFrom,setValidFrom] = useState("");

    const [name,setName] = useState("");
    const [dob,setDOB] = useState("");
    const [gender,setGender] = useState("");
    const [registrationId,setRegistrationId] = useState('');
    const [registrationCouncil,setRegistrationCouncil] = useState("");
    const [latestQualification,setLatestQualification] = useState("");
    const [university,setUniversity] = useState("");
    const [degreeYear,setDegreeYear] = useState("");
    const [systemOfMedicine,setSystemOfMedicine] = useState("");
    const [registrationDate,setRegistrationDate] = useState("");
    const [registrationExpiry,setRegistrationExpiry] = useState("");
    const [issuer,setIssuer] = useState("");
    const [issuanceDate,setIssuanceDate] = useState("");
    const [transactionID,setTransactionID] = useState('');
    
    const handleSubmit = (e) => {
      
        e.preventDefault();
        certify();
      }
    
    const certify = () => {
        
        // var data = JSON.stringify({
        // "preEnrollmentCode": preEnrollmentCode,
        // "certificateId": certificateId,
        //   "name": name,
        //   "dob": dob,
        //   "gender": gender,
        //   "birthRegNumber": birthRegNumber,
        //   "address": address,
        //   "vaccineType": vaccineType,
        //   "vaccineBrand": vaccineBrand,
        //   "vaccineBatchNo": vaccineBatchNo,
        //   "dose": dose,
        //   "dateOfVaccination": dateOfVaccination,
        //   "countryOfVaccination": countryOfVaccination,
        //   // "validUntil": validUntil,
        //   "issuer": issuer,
        //   "issuanceDate": issuanceDate,
        //   // "validFrom": validFrom
        // });
        // console.log(data)
        var data2 = JSON.stringify({
          "name": name,
          "dob": "1996-11-29",
          "registrationId": "123456",
          "gender": gender,
          "registrationCouncil": registrationCouncil,
          "latestQualification": latestQualification,
          "university": university,
          "degreeYear": "2019",
          "systemOfMedicine": systemOfMedicine,
          "registrationDate": "2021-09-09",
          "registrationExpiry": "2022-09-09",
          "issuer": "http://www.india.gov.in",
          "issuanceDate": "2021-09-09T21:01:01.121Z"
      })


      var config = {
        method: 'post',
        url: API_URL+SchemaName,
  
        data: data2,
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMmRGQXVDYWV3V0xpcUtYcHZ4dmxzczFvaWw0VkZJLWNfNlFmVXlKa1VJIn0.eyJleHAiOjE2OTkwMjgyNzgsImlhdCI6MTY2NzQ5MjI3OCwianRpIjoiMzI3MmQxNzAtOTAxYS00ZDQ4LTliMzItNmQyOTk4ZTRiNDMzIiwiaXNzIjoiaHR0cDovLzUyLjE3Mi4xMzIuMTIxL2F1dGgvcmVhbG1zL3N1bmJpcmQtcmMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiODZmOWRkYjUtMGE5MS00NzUxLTg5MGMtOGFkNTkwOTQ2MGZhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVnaXN0cnktZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiNTAwYzhiN2UtOTA0ZS00OTQzLTk2Y2UtZTQ4MjU3YTc0ZmU3IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCIsImh0dHBzOi8vbmRlYXIueGl2LmluIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL25kZWFyLnhpdi5pbiIsImh0dHBzOi8vc3VuYmlyZC1jZXJ0aWZpY2F0ZS1kZW1vLnhpdi5pbiIsImh0dHA6Ly8yMC4xOTguNjQuMTI4Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW5kZWFyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiNTAwYzhiN2UtOTA0ZS00OTQzLTk2Y2UtZTQ4MjU3YTc0ZmU3IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ2aXNod2ExIiwiZW50aXR5IjpbIlRlbmFudCJdLCJlbWFpbCI6InZpc2h3YTEifQ.chXmv3MY2-6IkMVOBOoJJdSOxmY5WQ0JYdoU0WrOEp81h6F3ehNnfYfmkY4ofTTBL-i0I7VTvMd3JaPR7zUofSxTsoFayYZrMMhtavqN09t915SaXao6-LYLsg7sohFbGbaRcw9E1bQPpAQeN9dcPWTi7-CCrCoYoXPE8Rw814TDoQzq6uxdeEO4K6ZVOqawPDi1oTjwIt5O5TTMqgYbPN-3CRYpeCSPoEaDQxdyabyLAR9bk6nVuCZYKjHAOh9fxQinW_j44gBJuoOPsE-dd_LiS9tvIpsia5RxnSSwp83bc6Yy6dRQ3ZkSsVDQ4MahYSz6F-ZVPO3J-tY4lkL5RQ',
          'Content-Type': 'application/json'
        },
      };
      
      axios(config)
          .then((response) => {
          if (response.data) {
            // transactionID = response.data.transactionId;
            let parsedResponse = JSON.parse(JSON.stringify(response.data));
            //console.log(parsedResponse);
            setTransactionID(parsedResponse.transactionId);
            console.log(transactionID)
            return response.data;
          }
        },
        error=>{
          // toast.error("Invalid Credentials!!");
          console.log(error);
        })

        // return CertifyCall(data2);
      }
      

return (

  <div className="container-fluid px-1 py-3 mx-auto OnSubmitCertify2">
    <div className="container card-0 justify-content-center">
      <div className="row d-flex justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10 col-11 text-center mb-4 flex-column">
              <h2 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-3 mb-2 form-title">NHAUIP Certificate</h2>   
              <p className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-0 mb-3 form-title">Transaction id is: {transactionID}</p>         
              <div className="card box-form">
                  <form className="form-card" onSubmit={handleSubmit}>
                      <div className="row justify-content-between text-left">

                          {/* <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">PreEnrollment Code</label> 
                            <input type="text" className="form-control" value={preEnrollmentCode}
                              onChange={(e) => setPreEnrollmentCode(e.target.value)}/>
                          </div> */}

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Name</label> 
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">DOB</label> 
                            <input type="text" className="form-control" value={dob} onChange={(e) => setDOB(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Gender</label> 
                            <input type="text" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}/>
                          </div>


                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Registration Id</label> 
                            <input type="text" className="form-control" value={registrationId} onChange={(e) => setRegistrationId(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Registration Council</label> 
                            <input type="text" className="form-control" value={registrationCouncil}          onChange={(e) => setRegistrationCouncil(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Latest Qualification</label> 
                            <input type="text" className="form-control" value={latestQualification} onChange={(e) => setLatestQualification(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">university</label> 
                            <input type="text" className="form-control" value={university} onChange={(e) => setUniversity(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Degree Year</label> 
                            <input type="text" className="form-control" value={degreeYear} onChange={(e) => setDegreeYear(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">System Of Medicine</label> 
                            <input type="text" className="form-control" value={systemOfMedicine} onChange={(e) => setSystemOfMedicine(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Registration Date</label> 
                            <input type="text" className="form-control" value={registrationDate}onChange={(e) => setRegistrationDate(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Registration Expiry</label> 
                            <input type="text" className="form-control" value={registrationExpiry}onChange={(e) => setRegistrationExpiry(e.target.value)} />
                          </div>


                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Issuer</label> 
                            <input type="text" className="form-control" value={issuer} onChange={(e) => setIssuer(e.target.value)} />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Issuance Date</label> 
                            <input type="text" className="form-control" value={issuanceDate} onChange={(e) => setIssuanceDate(e.target.value)} />
                          </div>

                          {/* <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Valid From</label> 
                            <input type="text" className="form-control" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
                            <label className="form-control-label px-0">Valid Until</label> 
                            <input type="text" className="form-control" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} />
                          </div> */}

                        </div>
                      
                        <div className="row justify-content-end">
                          <div className="form-group col-12"> 
                            <button type="submit" className="btn btnsubmit">Certify</button> 
                          </div>
                        </div>
                  </form>
              </div>
          </div>
      </div>
    </div>
  </div>
  );
}


export default OnSubmitCertify2;