import { useEffect, useState } from "react";

import css from "./App.module.css";

import { Routes, Route, NavLink } from "react-router-dom";
import Homepage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/" className={css}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css}>
          Movie
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
