import css from "./MovieCast.module.css";

import { getMovieCast } from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=no+photo";

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
    <>
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(({ name, profile_path, cast_id }) => {
            return (
              <li key={cast_id}>
                <div className={css.card}>
                  <img
                    className={css.photo}
                    src={
                      profile_path && profile_path.trim() !== ""
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : defaultImg
                    }
                    alt={`actor photo`}
                  />
                </div>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No cast to this movie</p>
      )}
    </>
  );
};

export default MovieCast;
