import React from "react";
import { useState } from "react";

import { CertifyCall } from "./generateTransactionId";

export var transactionId;
const OnSubmitCertify2 = () => {
    const [preEnrollmentCode, setPreEnrollmentCode] = useState("");
    const [certificateId,setCertificateId] = useState("");
    const [name,setName] = useState("");
    const [dob,setDOB] = useState("");
    const [gender,setGender] = useState("");
    const [birthRegNumber,setBirthRegNumber] = useState("");
    const [address,setAddress] = useState("");
    const [vaccineType,setVaccineType] = useState("");
    const [vaccineBrand,setVaccineBrand] = useState("");
    const [vaccineBatchNo,setVaccineBatchNo] = useState("");
    const [dose,setDose] = useState("");
    const [dateOfVaccination,setDateOfVaccination] = useState("");
    const [countryOfVaccination,setCountryOfVaccination] = useState("");
    const [validUntil,setValidUntil] = useState("");
    const [issuer,setIssuer] = useState("");
    const [issuanceDate,setIssuanceDate] = useState("");
    const [validFrom,setValidFrom] = useState("");
   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        certify()
        console.log();
      }
    
    const certify = () => {
        var data = JSON.stringify({
          "preEnrollmentCode": preEnrollmentCode,
          "certificateId": certificateId,
          "name": name,
          "dob": dob,
          "gender": gender,
          "birthRegNumber": birthRegNumber,
          "address": address,
          "vaccineType": vaccineType,
          "vaccineBrand": vaccineBrand,
          "vaccineBatchNo": vaccineBatchNo,
          "dose": dose,
          "dateOfVaccination": dateOfVaccination,
          "countryOfVaccination": countryOfVaccination,
          "validUntil": validUntil,
          "issuer": issuer,
          "issuanceDate": issuanceDate,
          "validFrom": validFrom
        });
    
        transactionId = CertifyCall(data);
      }

return (

  <div className="container-fluid px-1 py-3 mx-auto OnSubmitCertify1">
    <div className="container card-0 justify-content-center">
      <div className="row d-flex justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10 col-11 text-center mb-4 flex-column">
              <h2 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-3 mb-2 form-title">NHAUIP Certificate</h2>   
              <p className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-0 mb-3 form-title">Transaction id is: {transactionId}</p>         
              <div className="card box-form">
                  <form className="form-card" onSubmit={handleSubmit}>
                      <div className="row justify-content-between text-left">
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">PreEnrollment Code</label> 
                            <input type="text" className="form-control" value={preEnrollmentCode}
                              onChange={(e) => setPreEnrollmentCode(e.target.value)}/>
                          </div>
                          
                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Certificate ID</label> 
                            <input type="text" className="form-control" value={certificateId} onChange={(e) => setCertificateId(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Name</label> 
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">DOB</label> 
                            <input type="text" className="form-control" value={dob} onChange={(e) => setDOB(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Gender</label> 
                            <input type="text" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}/>
                          </div>


                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Birth Reg Number</label> 
                            <input type="text" className="form-control" value={birthRegNumber} onChange={(e) => setBirthRegNumber(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Address</label> 
                            <input type="text" className="form-control" value={address}          onChange={(e) => setAddress(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Vaccine Type</label> 
                            <input type="text" className="form-control" value={vaccineType} onChange={(e) => setVaccineType(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Vaccine Brand</label> 
                            <input type="text" className="form-control" value={vaccineBrand} onChange={(e) => setVaccineBrand(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Vaccine Batch No</label> 
                            <input type="text" className="form-control" value={vaccineBatchNo} onChange={(e) => setVaccineBatchNo(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Dose</label> 
                            <input type="text" className="form-control" value={dose} onChange={(e) => setDose(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Date of Vaccination</label> 
                            <input type="text" className="form-control" value={dateOfVaccination}onChange={(e) => setDateOfVaccination(e.target.value)}/>
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Country of Vaccination</label> 
                            <input type="text" className="form-control" value={countryOfVaccination}onChange={(e) => setCountryOfVaccination(e.target.value)} />
                          </div>


                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Issuer</label> 
                            <input type="text" className="form-control" value={issuer} onChange={(e) => setIssuer(e.target.value)} />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Issuance Date</label> 
                            <input type="text" className="form-control" value={issuanceDate} onChange={(e) => setIssuanceDate(e.target.value)} />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Valid From</label> 
                            <input type="text" className="form-control" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} />
                          </div>

                          <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                            <label className="form-control-label px-0">Valid Until</label> 
                            <input type="text" className="form-control" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} />
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


export default OnSubmitCertify2;