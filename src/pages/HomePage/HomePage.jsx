import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";

import { getTrendMovies } from "../../api.jsx";

const Homepage = () => {
  const [movies, setMovies] = useState([]); // trending films

  useEffect(() => {
    const getMovies = async () => {
      const data = await getTrendMovies();
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return <MovieList movies={movies} />;
};

export default Homepage;
