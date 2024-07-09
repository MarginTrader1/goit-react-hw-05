import { useParams } from "react-router-dom";
import { getMovieById } from "../../api.jsx";
import { useEffect, useState } from "react";

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
   const { movieId } = useParams();

   const [movie, setMovie] = useState("");

   useEffect(() => {
      const getMovie = async () => {
         const data = await getMovieById(movieId);
         setMovie(data);
      };

      getMovie();
   }, [movieId]);

   const { original_title, vote_average, overview, genres } = movie;

   const genresName = genres?.map((item) => item.name)?.join(", ");

   return (
      <>
         <div className={css.card}>
            <img className={css.photo} src={``} alt={``} />
         </div>
         <div>
            <h2>{original_title}</h2>
            <p>{vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{genresName}</p>
         </div>
      </>
   );
};

export default MovieDetailsPage;
