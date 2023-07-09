import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from 'Api/getData';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const CAST_URL = `3/movie/${movieId}/credits`;

  useEffect(() => {
    getData(CAST_URL)
      .then(response => {
        setCast([...response.data.cast]);
      })
      .catch(error => {
        alert(error.message);
      });
  }, [CAST_URL]);

  return (
    <ul>
      {cast.map(actor => {
        const { id, profile_path, name, character } = actor;
        const castMember = `http://image.tmdb.org/t/p/w200/${profile_path}`;

        return (
          <li key={id}>
            <img src={castMember} alt={name} />
            <div>
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
