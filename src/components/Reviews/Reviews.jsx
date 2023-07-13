import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from 'Api/getData';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const REVIEWS_URL = `3/movie/${movieId}/reviews`;

  useEffect(() => {
    const func = async () => {
      await getData(REVIEWS_URL)
        .then(response => {
          setReviews([...response.data.results]);
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    func();
  }, [REVIEWS_URL]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        reviews
          .filter((review, index) => index < 10)
          .map(review => {
            const { id, author_details, content } = review;
            const { username } = author_details;
            return (
              <li key={id}>
                <h3>{username}</h3>
                <p>{content}</p>
              </li>
            );
          })
      )}
    </ul>
  );
};

export default Reviews;
