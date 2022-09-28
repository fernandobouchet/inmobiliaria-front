import axios from "axios";

const baseUrl = "https://357canqt9k.execute-api.us-east-1.amazonaws.com/dev";

const headers = {
    headers: {

      "Content-Type": "application/json",
    }
  };

export const formLogin = async (credentials) => {

return await axios 
.post(`${baseUrl}/auth`,credentials, headers )
.then(data => {

  return data.status
  
})
  .catch(error => {
   
   return error.response.data
      
  });
  };

// ----------------------------------

export const formRegister = async (credentials) => {
  console.log(credentials);
  await axios
    .post(
      "https://m9y19x66c7.execute-api.us-east-1.amazonaws.com/dev/auth/register",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
