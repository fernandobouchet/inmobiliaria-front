import axios from 'axios'

const baseUrl = ''

export const login = async credentials =>{
    
    // const {data} = await axios.post(baseUrl, credentials)
    return true
}

export const formRegister = async credentials =>{
    await axios.post(' https://m9y19x66c7.execute-api.us-east-1.amazonaws.com/dev/user/create', credentials)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
} 
// export const register = async credentials => {

// }