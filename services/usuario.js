import axios from 'axios';

const baseUrl = '';
// const headers = {
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest',
//     'Access-Control-Allow-Origin': '*',
//   },
// };
export const formLogin = async (credentials) => {
  let credJson = JSON.stringify(credentials);
  try {
    const result = await axios.post(
      'https://m9y19x66c7.execute-api.us-east-1.amazonaws.com/dev/auth/login',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*',
        },
        data: credJson,
      }
    );
    if (result.status === 200) {
      return result.data;
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
};
// ----------------------------------

export const formRegister = async (credentials) => {
  console.log(credentials);
  await axios
    .post(
      'https://m9y19x66c7.execute-api.us-east-1.amazonaws.com/dev/auth/register',
      credentials,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*',
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
