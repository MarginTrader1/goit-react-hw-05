import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css}>
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
