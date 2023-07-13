import { useRef, Suspense } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from 'Api/getData';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const MOVIE_DETAILS_URL = `3/movie/${movieId}`;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const func = async () => {
      await getData(MOVIE_DETAILS_URL)
        .then(response => {
          setDetails({ ...response.data });
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    func();
  }, [MOVIE_DETAILS_URL]);

  const {
    original_title,
    overview,
    vote_average,
    genres,
    release_date,
    poster_path,
  } = details;

  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `https://www.more-kino.info/drama/hide-2/hide-2.jpg`;
  const releaseYear = new Date(release_date).getFullYear();
  const genresList = genres ? genres.map(genre => genre.name).join(', ') : '';

  return (
    <>
      {backLinkRef && (
        <Link to={backLinkRef.current} className={css.link}>
          ← Go back
        </Link>
      )}
      <div className={css.wrapper}>
        <img src={moviePoster} alt={original_title} className={css.image} />
        <div className={css.description}>
          <h3>
            {original_title} ({releaseYear})
          </h3>
          <p>Users score: {vote_average}</p>
          <h4>Overview:</h4>
          <p>{overview}</p>
          <h4>Genres:</h4>
          <p>{genresList}</p>
        </div>
      </div>
      <div className={css.container}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" className={css.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
