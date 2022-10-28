import React from "react";
import { useState } from "react";

import { CertifyCall } from "./generateTransactionId";

export var transactionId;
const OnSubmitCertify1 = () => {
    const [registrationId, setRegistrationId] = useState("");
    const [certificateId,setCertificateId] = useState("");
    const [name,setName] = useState("");
    const [dob,setDOB] = useState("");
    const [gender,setGender] = useState("");
    const [registrationCouncil,setRegistrationCouncil] = useState("");
    const [registrationDate,setRegistrationDate] = useState("");
    const [registrationExpiry,setRegistrationExpiry] = useState("");
    const [systemOfMedicine,setSystemOfMedicine] = useState("");
    const [latestQualification,setLatestQualification] = useState("");
    const [university,setUniversity] = useState("");
    const [degreeYear,setDegreeYear] = useState("");
    const [issuer,setIssuer] = useState("");
    const [issuanceDate,setIssuanceDate] = useState("");
    const [validFrom,setValidFrom] = useState("");
    const [validUntil,setValidUntil] = useState("");
  

    const handleSubmit = (e) => {
      e.preventDefault();
      certify();
      
      console.log();
    }

    const certify = () => {
      var data = JSON.stringify({
        "registrationId": registrationId,
        "certificateId": certificateId,
        "name": name,
        "dob": dob,
        "gender": gender,
        "registrationCouncil": registrationCouncil,
        "registrationDate": registrationDate,
        "registrationExpiry": registrationExpiry,
        "systemOfMedicine": systemOfMedicine,
        "latestQualification": latestQualification,
        "university": university,
        "degreeYear": degreeYear,
        "issuer": issuer,
        "issuanceDate": issuanceDate,
        "validFrom": validFrom,
        "validUntil": validUntil
      });
      console.log((data))
      transactionId = CertifyCall(data);
    }

return (

  <div className="container-fluid px-1 py-3 mx-auto OnSubmitCertify1">
    <div className="container card-0 justify-content-center">
      <div className="row d-flex justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10 col-11 text-center mb-4 flex-column">
              <h2 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-3 mb-2 form-title">Health Professional</h2>   
              <p className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-0 mb-3 form-title">Transaction id is: {transactionId}</p>         
              <div className="card box-form">
                  <form className="form-card" onSubmit={handleSubmit}>
                      <div className="row justify-content-between text-left">
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                          <label className="form-control-label px-0">Registration ID</label> 
                          <input type="text" className="form-control" value={registrationId} onChange={(e) => setRegistrationId(e.target.value)}/>
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Certificate ID</label> 
                            <input type="text" className="form-control" value={certificateId} onChange={(e) => setCertificateId(e.target.value)}/> 
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Name</label> 
                            <input type="text" className="form-control" required value={name} onChange={(e) => setName(e.target.value)} /> 
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">DOB</label> 
                            <input type="text" className="form-control" required value={dob} onChange={(e) => setDOB(e.target.value)} /> 
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Gender</label> 
                            <input type="text" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}
                            />
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Registration Council</label> 
                            <input type="text" className="form-control" required value={registrationCouncil} onChange={(e) => setRegistrationCouncil(e.target.value)} />
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Registration Date</label> 
                            <input type="text" className="form-control" required value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)}
                            />
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Registration Expiry</label> 
                            <input  type="text" className="form-control" value={registrationExpiry}
                              onChange={(e) => setRegistrationExpiry(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">System of Medicine</label> 
                            <input type="text" className="form-control" required value={systemOfMedicine} onChange={(e) => setSystemOfMedicine(e.target.value)}
                            />
                          </div>
                          
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">University</label> 
                            <input
                              type="text"
                              className="form-control" 
                              required
                              value={latestQualification}
                              onChange={(e) => setLatestQualification(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Latest Qualification</label> 
                            <input
                              type="text"
                              className="form-control" 
                              value={university}
                              onChange={(e) => setUniversity(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Degree Year</label> 
                            <input
                              type="text"
                              className="form-control" 
                              required
                              value={degreeYear}
                              onChange={(e) => setDegreeYear(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Issuer</label> 
                            <input
                              type="text"
                              className="form-control" 
                              required
                              value={issuer}
                              onChange={(e) => setIssuer(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Issuance Date</label> 
                            <input
                              type="text"
                              className="form-control" 
                              required
                              value={issuanceDate}
                              onChange={(e) => setIssuanceDate(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Valid From</label> 
                            <input
                              type="text"
                              className="form-control" 
                              required
                              value={validFrom}
                              onChange={(e) => setValidFrom(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Valid Until</label> 
                            <input
                                type="text" className="form-control" 
                                required
                                value={validUntil}
                                onChange={(e) => setValidUntil(e.target.value)}
                              />
                          </div>


                        </div>
                      
                        <div className="row justify-content-end">
                          <div className="form-group col-12"> 
                            <button type="submit" className="btn btnsubmit">Generate Transaction ID</button> 
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


export default OnSubmitCertify1;




