import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";

import { getTrendMovies } from "../../api.jsx";

import css from "./HomePage.module.css";

const Homepage = () => {
   const [movies, setMovies] = useState([]); // trending films

   useEffect(() => {
      const getMovies = async () => {
         const data = await getTrendMovies();
         setMovies(data.results);
      };
      getMovies();
   }, []);

   return (
      <section className={css.list}>
         <h2>Trending today</h2>
         <MovieList movies={movies} />;
      </section>
   );
};

export default Homepage;
