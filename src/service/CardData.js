import axios from "axios";

export var CardData = [];

var config = {
    method: 'get',
    url: 'http://52.172.132.121/vc-management/v1/schema',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMmRGQXVDYWV3V0xpcUtYcHZ4dmxzczFvaWw0VkZJLWNfNlFmVXlKa1VJIn0.eyJleHAiOjE2OTkwMjgyNzgsImlhdCI6MTY2NzQ5MjI3OCwianRpIjoiMzI3MmQxNzAtOTAxYS00ZDQ4LTliMzItNmQyOTk4ZTRiNDMzIiwiaXNzIjoiaHR0cDovLzUyLjE3Mi4xMzIuMTIxL2F1dGgvcmVhbG1zL3N1bmJpcmQtcmMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiODZmOWRkYjUtMGE5MS00NzUxLTg5MGMtOGFkNTkwOTQ2MGZhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVnaXN0cnktZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiNTAwYzhiN2UtOTA0ZS00OTQzLTk2Y2UtZTQ4MjU3YTc0ZmU3IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCIsImh0dHBzOi8vbmRlYXIueGl2LmluIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL25kZWFyLnhpdi5pbiIsImh0dHBzOi8vc3VuYmlyZC1jZXJ0aWZpY2F0ZS1kZW1vLnhpdi5pbiIsImh0dHA6Ly8yMC4xOTguNjQuMTI4Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW5kZWFyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiNTAwYzhiN2UtOTA0ZS00OTQzLTk2Y2UtZTQ4MjU3YTc0ZmU3IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ2aXNod2ExIiwiZW50aXR5IjpbIlRlbmFudCJdLCJlbWFpbCI6InZpc2h3YTEifQ.chXmv3MY2-6IkMVOBOoJJdSOxmY5WQ0JYdoU0WrOEp81h6F3ehNnfYfmkY4ofTTBL-i0I7VTvMd3JaPR7zUofSxTsoFayYZrMMhtavqN09t915SaXao6-LYLsg7sohFbGbaRcw9E1bQPpAQeN9dcPWTi7-CCrCoYoXPE8Rw814TDoQzq6uxdeEO4K6ZVOqawPDi1oTjwIt5O5TTMqgYbPN-3CRYpeCSPoEaDQxdyabyLAR9bk6nVuCZYKjHAOh9fxQinW_j44gBJuoOPsE-dd_LiS9tvIpsia5RxnSSwp83bc6Yy6dRQ3ZkSsVDQ4MahYSz6F-ZVPO3J-tY4lkL5RQ',
      'Content-Type': 'application/json'
    },
  };

  axios(config)
    .then(function (response) {

      let parsedResponse = JSON.parse(JSON.stringify(response.data));
      for(let index = 0; index<parsedResponse.schemas.length; index++)
      {
        CardData[index] = (parsedResponse.schemas[index].name);
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });
    

