import { searchMovies } from "../../api.jsx";

import { useEffect, useState } from "react";

const MoviesPage = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const data = await searchMovies(`batman`);
      console.log(data.results);
      setMovie(data.results);
    };
    getMovie();
  }, []);

  return <p>Это страничка MoviesPage</p>;
};

export default MoviesPage;
