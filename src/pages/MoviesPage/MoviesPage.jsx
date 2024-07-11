import { searchMovies } from "../../api.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";

import { useEffect, useState } from "react";

import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movie, setMovie] = useState([]);
  const [topic, setTopic] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get(`a`));

  const handleSearch = (evt) => {
    evt.preventDefault();
    const form = evt.target; //доступ к форме
    const searchTerm = form.elements.search.value; //значение инпута
    setTopic(searchTerm);
    form.reset();
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }
    const getMovie = async () => {
      const data = await searchMovies(topic);
      console.log(data.results);
      setMovie(data.results);
    };
    getMovie();
  }, [topic]);

  return (
    <>
      <header className={css.bar}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </header>
      {movie.length > 0 && <MovieList movies={movie} />}
    </>
  );
};

export default MoviesPage;
