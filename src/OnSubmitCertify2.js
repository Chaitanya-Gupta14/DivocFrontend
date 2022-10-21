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
    <div className="create">
      <h2>NHAUIP Certificate</h2>
      <div className = "create" align = "center">
        <p>Transaction id is: {transactionId}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>PreEnrollment Code:</label>
        <input
          type="text"
          required
          value={preEnrollmentCode}
          onChange={(e) => setPreEnrollmentCode(e.target.value)}
        />
         <label>Certificate ID:</label>
        <input
          type="text"
          required
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
        />
         <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <label>DOB:</label>
        <input
          type="text"
          required
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        />
        <label>Gender:</label>
        <input
          type="text"
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Birth Reg Number:</label>
        <input
          type="text"
          required
          value={birthRegNumber}
          onChange={(e) => setBirthRegNumber(e.target.value)}
        />
        <label>Address:</label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Vaccine Type:</label>
        <input
          type="text"
          required
          value={vaccineType}
          onChange={(e) => setVaccineType(e.target.value)}
        />
        <label>Vaccine Brand:</label>
        <input
          type="text"
          required
          value={vaccineBrand}
          onChange={(e) => setVaccineBrand(e.target.value)}
        />
        <label>Vaccine Batch No:</label>
        <input
          type="text"
          required
          value={vaccineBatchNo}
          onChange={(e) => setVaccineBatchNo(e.target.value)}
        />
        <label>Dose:</label>
        <input
          type="text"
          required
          value={dose}
          onChange={(e) => setDose(e.target.value)}
        />
        <label>Date of Vaccination:</label>
        <input
          type="text"
          required
          value={dateOfVaccination}
          onChange={(e) => setDateOfVaccination(e.target.value)}
        />
        <label>Country of Vaccination:</label>
        <input
          type="text"
          required
          value={countryOfVaccination}
          onChange={(e) => setCountryOfVaccination(e.target.value)}
        />
        <label>Issuer:</label>
        <input
          type="text"
          required
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
        />
        <label>Issuance Date:</label>
        <input
          type="text"
          required
          value={issuanceDate}
          onChange={(e) => setIssuanceDate(e.target.value)}
        />
        <label>Valid From:</label>
        <input
          type="text"
          required
          value={validFrom}
          onChange={(e) => setValidFrom(e.target.value)}
        />
        <label>Valid Until:</label>
        <input
          type="text"
          required
          value={validUntil}
          onChange={(e) => setValidUntil(e.target.value)}
        />
        <button>Generate Transaction ID</button>
      </form>
    </div>
  );
}


export default OnSubmitCertify2;