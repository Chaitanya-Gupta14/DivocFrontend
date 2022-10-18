import React from "react";
import { useState } from "react";
import axios from "axios";

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
    
        var config = {
          method: 'post',
          url: 'http://52.172.132.121/vc-certification/v1/certify/HPCertificate',
    
          data: data,
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQWmFYVUNkZUhKZTJ4c3plMTdHRFl6cXo0UDFjS1dmaWZLb1g0QUtwOGVnIn0.eyJleHAiOjE2NjM2NDUxMTksImlhdCI6MTY2MzU1ODcxOSwianRpIjoiYmU5ZDVhNTUtYmRkOS00OTUwLWFiNGEtM2FiY2U2YmFhNmU0IiwiaXNzIjoiaHR0cDovLzUyLjE3Mi4xMzIuMTIxL2F1dGgvcmVhbG1zL3N1bmJpcmQtcmMiLCJhdWQiOlsiYWNjb3VudCIsImNlcnRpZmljYXRpb24iXSwic3ViIjoiYmY0Y2QxMGMtODc2Yy00MGVmLThjMzUtMmMyMjUyYjc3ZDM5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVnaXN0cnktZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiNDQwMTM5NWYtMjdmZS00MzI2LWI5NzQtYTJhYjAzNWYxNmVmIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCIsImh0dHBzOi8vbmRlYXIueGl2LmluIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL25kZWFyLnhpdi5pbiIsImh0dHBzOi8vc3VuYmlyZC1jZXJ0aWZpY2F0ZS1kZW1vLnhpdi5pbiIsImh0dHA6Ly8yMC4xOTguNjQuMTI4Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW5kZWFyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19LCJjZXJ0aWZpY2F0aW9uIjp7InJvbGVzIjpbInZjLWNlcnRpZmljYXRpb24iXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI0NDAxMzk1Zi0yN2ZlLTQzMjYtYjk3NC1hMmFiMDM1ZjE2ZWYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InZpc2h3YTEiLCJlbnRpdHkiOlsiVGVuYW50Il0sImVtYWlsIjoidmlzaHdhMSJ9.GZCIBzYLrNQ_W52HgfjQnPs93VG0Sce4uT9Iz4SKVLXhqBlv1vUrZi6tA-rxWVj-7JuVeopQKg4KIwsqHeVFgO82EF3-yCDYblzvlTYsAFFS6dX0VgmR8KByvMx3OOekgakmb-CIx8NPi9aqMg3PyBUzOoQH0Pb8W5UFk9aT6sm0xQsTdrgQM-uOCBR-PqjgTJDS4aPxQ0bLePntp-GGER3NbGJFphl2Oj0WGpvhiwghnTAO6wZECTQxsXMc_9mZS039n9CIU6r7Vcv6LMx8VfKOFSOKxQuIm5mSkByHZ6wWO0TnqxwCrMd_7KpZn2hZFdnAfdImiVmQE2PpsUw5aA',
            'Content-Type': 'application/json'
          },
        };
    
        axios(config)
          .then(function (response) {
    
            let parsedResponse = JSON.parse(JSON.stringify(response.data));
            const certID = parsedResponse.certificateAddResponse.result.HPCertificate.osid.substring(2);
            console.log(certID);
            
          })
          .catch(function (error) {
            console.log(error);
          });
      }

return (
    <div className="create">
      <h2>NHAUIP Certificate</h2>
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