import axios from 'axios';

const API_KEY = '510d6b02ed225a51e009d13f1b3c4d4c';
const BASE_URL = 'https://api.themoviedb.org';
///const options = { headers: { accept: 'application/json' } };

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { accept: 'application/json' },
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

async function getData(url) {
  try {
    return await instance.get(`/${url}`);
  } catch (error) {
    console.log(error);
  }
}

export default getData;
