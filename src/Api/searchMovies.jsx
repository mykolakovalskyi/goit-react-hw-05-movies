import axios from 'axios';

async function searchMovies(searchQuery) {
  const API_KEY = '510d6b02ed225a51e009d13f1b3c4d4c';
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  const options = { headers: { accept: 'application/json' } };
  return await axios.get(
    `https://api.themoviedb.org/${searchQuery}&${searchParams}`,
    options
  );
}

export default searchMovies;
