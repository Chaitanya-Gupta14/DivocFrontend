import axios from "axios";
// import { SchemaName } from "../components/Home";
const API_URL = 'http://52.172.132.121/vc-certification/v1/certificate/NHAUIPCertificateSample/697400718786';

export const DownloadCertificate = () => {
  var config = {
          method: 'get',
          url: API_URL,
          
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMmRGQXVDYWV3V0xpcUtYcHZ4dmxzczFvaWw0VkZJLWNfNlFmVXlKa1VJIn0.eyJleHAiOjE2OTc5NjI2MzMsImlhdCI6MTY2NjQyNjYzMywianRpIjoiYmRmMjBiNmUtZTNiNi00ZWNjLTkyYWUtMTM2OGQ4NjQ4YWQ2IiwiaXNzIjoiaHR0cDovLzUyLjE3Mi4xMzIuMTIxL2F1dGgvcmVhbG1zL3N1bmJpcmQtcmMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiODZmOWRkYjUtMGE5MS00NzUxLTg5MGMtOGFkNTkwOTQ2MGZhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVnaXN0cnktZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiYTg0NTRiYTktYjQ0MC00ODE2LTk4OWMtYTYzNzM4ZThmZjc5IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCIsImh0dHBzOi8vbmRlYXIueGl2LmluIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL25kZWFyLnhpdi5pbiIsImh0dHBzOi8vc3VuYmlyZC1jZXJ0aWZpY2F0ZS1kZW1vLnhpdi5pbiIsImh0dHA6Ly8yMC4xOTguNjQuMTI4Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW5kZWFyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiYTg0NTRiYTktYjQ0MC00ODE2LTk4OWMtYTYzNzM4ZThmZjc5IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ2aXNod2ExIiwiZW50aXR5IjpbIlRlbmFudCJdLCJlbWFpbCI6InZpc2h3YTEifQ.WJH-0VuunwkMuTDMEBl622s_y1a_56gbOnS6tKZl0lr6SiTWj8cxP4K1dSZNUbgp9h3_4lA1x4NSfvvGu1DCyfsKKtBowhULuPkee40dtDcj78X2_1novKfBw2TIBzl9IW-i0Xd_x1uqiZbwZtxF5ZPZnoD-OxWkq7giiZWjtz-45fCwTsSuihsDvNdRrEF9ORqsxS9zTvmAYl6sOAH_jS5Wkm5WewU6v7A5IdPv8k_gbNSUW4vJmBLt8Q5S_7HBWKw95J80bqIb3CsAbCi_j76ulWgvBd6WW56W8Lgmf_qeQ_ouhQGaOhdWJoZpGYiEqJriD_KQJuIEPtqEfhzjbA',
            'Accept': 'application/pdf',
            'template-key': 'html'
          },
        };

  return axios(config)
  .then(response => {
    //Create a Blob from the PDF Stream
        let file = new Blob(
          [response.data], 
          {type: 'application/pdf'});
    //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
    //Open the URL on new Window
        window.open(fileURL);
    })
    .catch(error => {
        console.log(error);
    });
    
}
 
    