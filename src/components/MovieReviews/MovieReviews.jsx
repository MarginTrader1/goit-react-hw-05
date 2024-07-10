import { getMovieReviews } from "../../api";
import css from "./MovieReviews.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data.results);
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => {
          return (
            <div key={id} className={css.review}>
              <h4>{author}</h4>
              <p>{content}</p>
            </div>
          );
        })
      ) : (
        <p>No reviews to this movie</p>
      )}
    </>
  );
};

export default MovieReviews;
