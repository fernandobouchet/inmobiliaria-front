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

  const config = {
    method: 'post',
    url: 'https://357canqt9k.execute-api.us-east-1.amazonaws.com/dev/auth',
    headers: {
      'Content-Type': 'application/json',
    },
    data: credJson,
  };

  try {
    const result = await axios(config);
    if (result.status === 200) {
      console.log(result.data);
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
};
// ----------------------------------
