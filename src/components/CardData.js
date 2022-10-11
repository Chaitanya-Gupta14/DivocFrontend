import axios from "axios";

export var CardData = [];

var config = {
    method: 'get',
    url: 'http://52.172.132.121/vc-management/v1/schema',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMmRGQXVDYWV3V0xpcUtYcHZ4dmxzczFvaWw0VkZJLWNfNlFmVXlKa1VJIn0.eyJleHAiOjE2OTY1OTY1NzQsImlhdCI6MTY2NTA2MDU3NCwianRpIjoiYWYwY2Y2ZjAtNTY4NS00MjczLTk1NjMtYWNiZTcyYzJiZmMwIiwiaXNzIjoiaHR0cDovLzUyLjE3Mi4xMzIuMTIxL2F1dGgvcmVhbG1zL3N1bmJpcmQtcmMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiODZmOWRkYjUtMGE5MS00NzUxLTg5MGMtOGFkNTkwOTQ2MGZhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVnaXN0cnktZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiZWMwODRhNGItMTM3Ni00YmFjLWEwYWUtOWMwNTU4YjEyZmY5IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCIsImh0dHBzOi8vbmRlYXIueGl2LmluIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL25kZWFyLnhpdi5pbiIsImh0dHBzOi8vc3VuYmlyZC1jZXJ0aWZpY2F0ZS1kZW1vLnhpdi5pbiIsImh0dHA6Ly8yMC4xOTguNjQuMTI4Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW5kZWFyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiZWMwODRhNGItMTM3Ni00YmFjLWEwYWUtOWMwNTU4YjEyZmY5IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ2aXNod2ExIiwiZW50aXR5IjpbIlRlbmFudCJdLCJlbWFpbCI6InZpc2h3YTEifQ.I52r4J1I7CfiD-oGQqIeDKDarBP7FjN7Xjv3uoH6zEuFIiRgAT1xKxN9YSKPkBA2DiH4ZHMqvBHuqMcWjWJoO0lVHdZIo37LTVmofiSYbkoloLaYGAU14EXEPLunO7bydIt1jtBFOmvfVVF53GKg0wkUbd8PU6muSHPM-NaEs5RoBstIzD-FqjDNIyp4S7yMa_d4V0OI3ViLAlAXCyZL8uBV62b201FW63D5RnQr0mcwcTRVf2o_WfUj4QkotR7Z6Z4xw0vGMqDNbicrkrZSLvVtrBgYLjqrce0Fh4D_oQazHhlLS1CQF1YzsTkE7n8VkSXgBlEw8NV0XaqfsLvfdg',
      'Content-Type': 'application/json'
    },
  };

  axios(config)
    .then(function (response) {

      let parsedResponse = JSON.parse(JSON.stringify(response.data));
      //console.log(parsedResponse);
      //console.log(parsedResponse.schemas.length);
      for(let index = 0; index<parsedResponse.schemas.length; index++)
      {
        CardData[index] = (parsedResponse.schemas[index].name);
        //console.log(">>>>>>>>>>>>>>>>>>>card data>>>>>>>>>>..",CardData[index])
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });
    

