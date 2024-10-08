import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWU5YjNkNzRiOGQyMzZmM2U2ODY1MDMyMDUyMDVmZSIsIm5iZiI6MTcyMDU0NTg3MC4xMTkyMTQsInN1YiI6IjY0ZmRiODVjZmZjOWRlMGVlMjA3ZjIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oS6hVX0P1ZZ1C7WW7S2eFylY_OOzu5LBnrniwFj3nC0",
  },
};

// запрос на trending films
export const getTrendMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US'",
    options
  );

  return response.data;
};

// запрос на trending films
export const searchMovies = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return response.data;
};

// запрос на trending films
export const getMovieById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );

  return response.data;
};

// запрос на актерский состав фильма
export const getMovieCast = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );

  return response.data;
};

// запрос на обзоры фильма
export const getMovieReviews = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
    options
  );

  return response.data;
};
