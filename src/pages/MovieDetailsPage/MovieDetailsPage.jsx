import { useParams, Outlet, Link } from "react-router-dom";
import { getMovieById } from "../../api.jsx";
import { useEffect, useState } from "react";

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };

    getMovie();
  }, [movieId]);

  const { original_title, vote_average, overview, genres, poster_path } = movie;

  const genresName = genres?.map((item) => item.name)?.join(", ");

  return (
    <>
      <div>
        <div className={css.card}>
          <img
            className={css.photo}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={``}
          />
        </div>
        <div>
          <h2>{original_title}</h2>
          <p>{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresName}</p>
        </div>
      </div>
      <div>
        <h4>Editional information</h4>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
