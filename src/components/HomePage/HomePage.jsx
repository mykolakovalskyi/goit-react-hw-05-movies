import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getData from 'Api/getData';

const HomePage = () => {
  const TRENDING_URL = `3/trending/movie/day`;
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getData(TRENDING_URL)
      .then(response => {
        setMovies([...response.data.results]);
      })
      .catch(error => {
        alert(error.message);
      });
  }, [TRENDING_URL]);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => {
          const { original_title, id } = movie;
          return (
            <li key={id} className={movie}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomePage;
