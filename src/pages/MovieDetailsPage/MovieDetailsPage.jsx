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
    <section className={css.container}>
      <div className={css.movie}>
        <div className={css.card}>
          <img
            className={css.photo}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`movie photo`}
          />
        </div>
        <div className={css.movieInfo}>
          <h2>{original_title}</h2>
          <p>{`Raiting: ${vote_average}`}</p>
          <div className={css.overview}>
            <h4>Overview</h4>
            <p>{overview}</p>
          </div>
          <div className={css.overview}>
            <h4>Genres</h4>
            <p>{genresName}</p>
          </div>
        </div>
      </div>
      <div className={css.edInfo}>
        <h4>Editional information</h4>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </section>
  );
};

export default MovieDetailsPage;
