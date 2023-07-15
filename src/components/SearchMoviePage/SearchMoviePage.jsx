import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import getData from 'Api/getData';
import css from './SearchMoviePage.module.css';

const SearchMoviesPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const MOVIES_URL = `3/search/movie?&include_adult=false&query=${query}&page=${page}`;

  const handleSubmit = event => {
    event.preventDefault();
    const searcQuery = event.currentTarget.elements.input.value;
    setMovies([]);

    if (!searcQuery) {
      return setSearchParams({});
    }

    setSearchParams({ query: searcQuery });
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    const func = async () => {
      if (query.trim() === '') {
        return;
      }

      await getData(MOVIES_URL)
        .then(response => {
          const { page, results, total_pages } = response.data;
          setMovies(prevState => [...prevState, ...results]);
          setPage(page);
          setTotalPages(total_pages);
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    func();
  }, [MOVIES_URL, query, page]);

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit"></button>

        <input
          className={css.input}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
      <ul>
        {movies.length > 0 &&
          movies.map(movie => {
            const { original_title, id } = movie;
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <span>{original_title}</span>
                </Link>
              </li>
            );
          })}
      </ul>
      {totalPages > 1 && page !== totalPages && (
        <button type="button" onClick={loadMore} className={css.loadMoreButton}>
          Load More
        </button>
      )}
    </>
  );
};

export default SearchMoviesPage;
