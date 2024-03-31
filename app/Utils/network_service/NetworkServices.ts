const axios = require('axios')?.default;
// const API_BASE_URL = 'https://emotell.zeitios.com';
const API_BASE_URL = 'https://emotell.zeitios.com' //staging



const headers = async (token: string) => {

  return (
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    })
}

type QueryKeyType = { queryKey: any }

export const login = async ({ email = '', password = '' }) => {

  const response = axios.post(`${API_BASE_URL}/v1/auth/login`, {
    email: email?.trim(),
    password: password?.trim(),
  });
  return response;
};

