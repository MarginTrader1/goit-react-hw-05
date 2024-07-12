import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation(); // хук для определения url текущей странички

  //вытягиваем параметры поиска чтобы их сохранить и передаем в стейт для кнопки возврата назад
  const { pathname } = location;
 
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          {/* проверка на путь: HomePage или MoviesPage */}
          <Link
            to={pathname === "/" ? `movies/${id}` : `${id}`}
            state={location} //ссылка для следующей страницы
          >
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
