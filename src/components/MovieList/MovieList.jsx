import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
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

export default MovieList;
