import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import("../Navigation/Navigation"));
const Homepage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

import css from "./App.module.css";

const App = () => {
   return (
      <div className={css.container}>
         <Navigation />

         <Suspense>
            <Routes>
               <Route path="/" element={<Homepage />} />
               <Route path="/movies" element={<MoviesPage />} />
               <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                  <Route path="cast" element={<MovieCast />} />
                  <Route path="reviews" element={<MovieReviews />} />
               </Route>
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Suspense>
      </div>
   );
};

export default App;
