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
  
      transactionId = CertifyCall(data);
    }

return (
    <div className="create">
      <h2>Health Professional</h2>
      <div>
        <p>Transaction id is: {transactionId}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <label>Registration ID:</label>
        <input
          type="text"
          value={registrationId}
          onChange={(e) => setRegistrationId(e.target.value)}
        />
         <label>Certificate ID:</label>
        <input
          type="text"
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
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Registration Council:</label>
        <input
          type="text"
          required
          value={registrationCouncil}
          onChange={(e) => setRegistrationCouncil(e.target.value)}
        />
        <label>Registration Date:</label>
        <input
          type="text"
          required
          value={registrationDate}
          onChange={(e) => setRegistrationDate(e.target.value)}
        />
        <label>Registration Expiry:</label>
        <input
          type="text"
          value={registrationExpiry}
          onChange={(e) => setRegistrationExpiry(e.target.value)}
        />
        <label>System of Medicine:</label>
        <input
          type="text"
          required
          value={systemOfMedicine}
          onChange={(e) => setSystemOfMedicine(e.target.value)}
        />
        <label>Latest Qualification:</label>
        <input
          type="text"
          required
          value={latestQualification}
          onChange={(e) => setLatestQualification(e.target.value)}
        />
        <label>University:</label>
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
        <label>Degree Year:</label>
        <input
          type="text"
          required
          value={degreeYear}
          onChange={(e) => setDegreeYear(e.target.value)}
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


export default OnSubmitCertify1;