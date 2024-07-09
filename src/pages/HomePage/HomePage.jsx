import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

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

   return (
      <ul>
         {movies.map(({ id, original_title }) => (
            <li key={id}>
               <Link to={`movies/${id}`}>{original_title}</Link>
            </li>
         ))}
      </ul>
   );
};

export default Homepage;
