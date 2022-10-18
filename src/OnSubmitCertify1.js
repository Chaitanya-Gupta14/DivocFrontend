import React from "react";
import { useState } from "react";


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
      console.log();
    }




    // const certify = (token) => {
    //     var data = JSON.stringify({
    //       "name": name,
    //       "dob": DOB,
    //       "registrationId": "123454",
    //       "gender": "male",
    //       "registrationCouncil": rcouncil,
    //       "latestQualification": lqualif,
    //       "university": university,
    //       "degreeYear": dyear,
    //       "systemOfMedicine": "BDS",
    //       "registrationDate": "2021-09-09",
    //       "registrationExpiry": "2060-09-09",
    //       "issuer": "http://www.india.gov.in",
    //       "issuedOn": "2022-08-08T12:00:00Z",
    //       "validFrom": "2022-08-08T12:00:00Z",
    //       "validTill": "2022-08-08T12:00:00Z",
    //       "Issuer": "did:web:sunbirdrc.dev/vc/skill",
    //       "issuanceDate": "2022-08-08T12:00:00Z"
    //     });
    
    //     var config = {
    //       method: 'post',
    //       url: 'http://52.172.132.121/vc-certification/v1/certify/HPCertificate',
    
    //       data: data,
    //       headers: {
    //         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQWmFYVUNkZUhKZTJ4c3plMTdHRFl6cXo0UDFjS1dmaWZLb1g0QUtwOGVnIn0.eyJleHAiOjE2NjM2NDUxMTksImlhdCI6MTY2MzU1ODcxOSwianRpIjoiYmU5ZDVhNTUtYmRkOS00OTUwLWFiNGEtM2FiY2U2YmFhNmU0IiwiaXNzIjoiaHR0cDovLzUyLjE3Mi4xMzIuMTIxL2F1dGgvcmVhbG1zL3N1bmJpcmQtcmMiLCJhdWQiOlsiYWNjb3VudCIsImNlcnRpZmljYXRpb24iXSwic3ViIjoiYmY0Y2QxMGMtODc2Yy00MGVmLThjMzUtMmMyMjUyYjc3ZDM5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVnaXN0cnktZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiNDQwMTM5NWYtMjdmZS00MzI2LWI5NzQtYTJhYjAzNWYxNmVmIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCIsImh0dHBzOi8vbmRlYXIueGl2LmluIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL25kZWFyLnhpdi5pbiIsImh0dHBzOi8vc3VuYmlyZC1jZXJ0aWZpY2F0ZS1kZW1vLnhpdi5pbiIsImh0dHA6Ly8yMC4xOTguNjQuMTI4Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW5kZWFyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19LCJjZXJ0aWZpY2F0aW9uIjp7InJvbGVzIjpbInZjLWNlcnRpZmljYXRpb24iXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI0NDAxMzk1Zi0yN2ZlLTQzMjYtYjk3NC1hMmFiMDM1ZjE2ZWYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InZpc2h3YTEiLCJlbnRpdHkiOlsiVGVuYW50Il0sImVtYWlsIjoidmlzaHdhMSJ9.GZCIBzYLrNQ_W52HgfjQnPs93VG0Sce4uT9Iz4SKVLXhqBlv1vUrZi6tA-rxWVj-7JuVeopQKg4KIwsqHeVFgO82EF3-yCDYblzvlTYsAFFS6dX0VgmR8KByvMx3OOekgakmb-CIx8NPi9aqMg3PyBUzOoQH0Pb8W5UFk9aT6sm0xQsTdrgQM-uOCBR-PqjgTJDS4aPxQ0bLePntp-GGER3NbGJFphl2Oj0WGpvhiwghnTAO6wZECTQxsXMc_9mZS039n9CIU6r7Vcv6LMx8VfKOFSOKxQuIm5mSkByHZ6wWO0TnqxwCrMd_7KpZn2hZFdnAfdImiVmQE2PpsUw5aA',
    //         'Content-Type': 'application/json'
    //       },
    //     };
    
    //     axios(config)
    //       .then(function (response) {
    
    //         let parsedResponse = JSON.parse(JSON.stringify(response.data));
    //         const certID = parsedResponse.certificateAddResponse.result.HPCertificate.osid.substring(2);
    //         console.log(certID);
    //         setCertID("Certificate ID - " + certID);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }

return (
    <div className="create">
      <h2>Health Professional</h2>
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