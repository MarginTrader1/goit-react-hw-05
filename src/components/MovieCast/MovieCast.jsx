import css from "./MovieCast.module.css";

import { getMovieCast } from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const data = await getMovieCast(movieId);

      setCast(data.cast);
    };
    getCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ character, name, profile_path, cast_id }) => {
        return (
          <li key={cast_id}>
            <div className={css.card}>
              <img
                className={css.photo}
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={``}
              />
            </div>
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
